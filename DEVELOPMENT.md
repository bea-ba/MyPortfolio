# Development Guide - Moving from MVP to Production

This guide helps you transition the MVP prototype to a production-ready application with real integrations.

## 🎯 Current State: MVP Prototype

**What's Working:**
- ✅ All pages and navigation
- ✅ UI/UX design and responsive layout
- ✅ Form validation (client-side)
- ✅ Mock data and content
- ✅ Category filtering and interactions

**What's Mocked:**
- ⚠️ Form submissions (console.log only)
- ⚠️ Scheduling system (placeholder slots)
- ⚠️ Email notifications
- ⚠️ Analytics tracking
- ⚠️ Database storage

---

## 📋 Integration Roadmap

### Phase 1: Essential Integrations (Week 1-2)

#### 1.1 Form Handling & Email
**Goal:** Receive and respond to client inquiries

**Options:**
- **Resend** (recommended): Modern, developer-friendly
- **SendGrid**: Established, reliable
- **Nodemailer**: Self-hosted option

**Implementation:**
```typescript
// Create app/api/submit-intake/route.ts
import { Resend } from 'resend';

export async function POST(request: Request) {
  const formData = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'onboarding@yourdomain.com',
    to: 'hello@bea.dev',
    subject: 'New Intake Form Submission',
    html: `<p>Problem: ${formData.problemDescription}</p>`
  });

  // Send auto-response to client
  await resend.emails.send({
    from: 'hello@bea.dev',
    to: formData.email,
    subject: 'Thanks for reaching out!',
    html: '<p>Your message has been received...</p>'
  });

  return Response.json({ success: true });
}
```

**Update in `lib/utils.ts`:**
```typescript
export async function submitForm(data: any) {
  const response = await fetch('/api/submit-intake', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

**Environment variables (.env.local):**
```
RESEND_API_KEY=re_xxxxx
```

#### 1.2 Scheduling Integration
**Goal:** Real calendar booking

**Recommended: Cal.com** (open-source, free tier)

**Option A: Embed Widget**
Replace `app/schedule/page.tsx` with Cal.com embed:
```tsx
<Cal
  calLink="your-username/30min"
  config={{
    name: formData.name,
    email: formData.email,
    notes: formData.stuckOn
  }}
/>
```

**Option B: Calendly**
```tsx
<InlineWidget url="https://calendly.com/your-link" />
```

**Alternative: Build Custom**
- Use Google Calendar API
- Store availability in database
- More control, more complexity

#### 1.3 Analytics
**Goal:** Privacy-friendly visitor tracking

**Recommended: Plausible Analytics**

Add to `app/layout.tsx`:
```tsx
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

**Alternative: Simple Analytics**
```tsx
<Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
```

---

### Phase 2: Data Persistence (Week 3-4)

#### 2.1 Database Setup
**Recommended: Supabase** (Postgres + Auth + Storage)

**Installation:**
```bash
npm install @supabase/supabase-js
```

**Create `lib/supabase.ts`:**
```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

**Database Schema:**
```sql
-- Intake submissions
CREATE TABLE intake_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  problem_description TEXT NOT NULL,
  already_tried TEXT,
  how_blocking TEXT NOT NULL,
  timeline TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  website TEXT,
  how_did_you_find TEXT,
  priorities TEXT[]
);

-- Coffee chat bookings
CREATE TABLE coffee_chats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  stuck_on TEXT NOT NULL,
  desired_outcome TEXT NOT NULL,
  preferred_date TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  status TEXT DEFAULT 'pending'
);
```

**Update form submission:**
```typescript
export async function submitForm(data: IntakeFormData) {
  // Save to database
  const { error } = await supabase
    .from('intake_submissions')
    .insert(data);

  if (error) throw error;

  // Send email
  await fetch('/api/submit-intake', {
    method: 'POST',
    body: JSON.stringify(data)
  });

  return { success: true };
}
```

#### 2.2 Portfolio Content Management
**Option A: Keep in Code** (current - simple, version controlled)
- Edit `data/portfolioItems.ts` directly
- Deploy to update

**Option B: CMS Integration**
- Sanity.io or Contentful
- Edit portfolio via UI
- More complexity, easier for non-devs

---

### Phase 3: Production Polish (Week 5-6)

#### 3.1 SEO Optimization

**Update page metadata:**
```typescript
// app/portfolio/page.tsx
export const metadata: Metadata = {
  title: 'Portfolio - Bea',
  description: 'See how I\'ve helped small businesses solve tech problems',
  openGraph: {
    title: 'Portfolio - Bea',
    description: '...',
    images: ['/og-image.jpg']
  }
};
```

**Add sitemap.xml:**
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/portfolio',
      lastModified: new Date(),
    },
    // ... other pages
  ];
}
```

**Add robots.txt:**
```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
```

#### 3.2 Performance Optimization

**Image Optimization:**
```tsx
import Image from 'next/image';

<Image
  src="/portfolio-image.jpg"
  alt="Project screenshot"
  width={600}
  height={400}
  loading="lazy"
/>
```

**Font Optimization:**
Already using `next/font/google` for Inter - ✅

**Bundle Analysis:**
```bash
npm install @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... config
});
```

Run: `ANALYZE=true npm run build`

#### 3.3 Error Handling & Monitoring

**Add Sentry (optional):**
```bash
npm install @sentry/nextjs
```

**Create error boundary:**
```typescript
// app/error.tsx
'use client';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="section-container text-center">
      <h2>Something went wrong!</h2>
      <button onClick={reset} className="btn-primary">
        Try again
      </button>
    </div>
  );
}
```

---

## 🔐 Security Checklist

### Environment Variables
- [ ] Never commit `.env.local` (already in `.gitignore`)
- [ ] Use Vercel environment variables for production
- [ ] Rotate API keys regularly

### Form Security
- [ ] Add CSRF protection
- [ ] Implement rate limiting (avoid spam)
- [ ] Sanitize user inputs
- [ ] Add honeypot fields for bots

**Rate Limiting Example:**
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 submissions per window
});
```

### Email Security
- [ ] Use SPF, DKIM, DMARC records
- [ ] Verify sender domains
- [ ] Don't expose API keys in client code

---

## 🚀 Deployment Checklist

### Pre-Launch
- [ ] Test all forms with real data
- [ ] Verify mobile responsiveness
- [ ] Check accessibility (screen readers)
- [ ] Set up custom domain
- [ ] Configure SSL/HTTPS
- [ ] Test email deliverability
- [ ] Set up error monitoring
- [ ] Add analytics tracking

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Environment Variables in Vercel:**
1. Go to Project Settings
2. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - etc.

### Custom Domain
1. Add domain in Vercel project settings
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🧪 Testing Strategy

### Manual Testing
- [ ] Test all form submissions
- [ ] Try scheduling on different devices
- [ ] Check email auto-responses
- [ ] Verify portfolio filters work
- [ ] Test navigation on mobile
- [ ] Check 404 page
- [ ] Test loading states

### Automated Testing (Future)
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

---

## 📊 Success Metrics to Track

Based on PRD success metrics:

### Quantitative
- Form submissions per week
- Coffee chat bookings
- Conversion rate (visit → inquiry)
- Page load times
- Mobile vs desktop traffic

### Qualitative
- Client feedback quality
- Time spent on portfolio page
- Bounce rate on intake form
- Drop-off points in forms

**Recommended Tools:**
- **Plausible**: Page views, sources
- **Hotjar**: Heatmaps, session recordings
- **Google Search Console**: SEO performance

---

## 🆘 Troubleshooting Production Issues

### Form Not Submitting
1. Check browser console for errors
2. Verify API endpoint exists
3. Check environment variables
4. Test with network inspector

### Email Not Sending
1. Verify API key is correct
2. Check spam folder
3. Review email service logs
4. Verify sender domain DNS

### Calendar Not Loading
1. Check integration credentials
2. Verify iframe permissions
3. Test on different browsers

### Slow Page Load
1. Run Lighthouse audit
2. Check bundle size
3. Optimize images
4. Enable caching

---

## 📚 Helpful Resources

**Next.js:**
- [Next.js Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

**Deployment:**
- [Vercel Deployment](https://vercel.com/docs)
- [Environment Variables](https://vercel.com/docs/environment-variables)

**Email Services:**
- [Resend Docs](https://resend.com/docs)
- [SendGrid Docs](https://docs.sendgrid.com)

**Database:**
- [Supabase Docs](https://supabase.com/docs)
- [Postgres Tutorial](https://www.postgresql.org/docs/)

**Analytics:**
- [Plausible Setup](https://plausible.io/docs)
- [Simple Analytics](https://docs.simpleanalytics.com)

---

## 🎯 Next Steps

**Immediate (This Week):**
1. Set up email integration (Resend)
2. Test form submissions end-to-end
3. Deploy to Vercel staging
4. Add basic analytics

**Short-term (Next 2 Weeks):**
1. Integrate scheduling (Cal.com/Calendly)
2. Set up database (Supabase)
3. Configure custom domain
4. Launch to friends & family

**Long-term (Month 2-3):**
1. Gather user feedback
2. Refine copy based on analytics
3. Add testimonials from first clients
4. Consider A/B testing headlines

---

**Remember:** The MVP is designed to validate the concept. Don't over-engineer! Start simple, learn from real users, then iterate.

**Questions?** Review the code comments - all integration points are marked with `// TODO:` or `// PLACEHOLDER:`.
