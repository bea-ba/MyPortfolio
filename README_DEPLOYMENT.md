# Deployment Guide

## Backend Setup Checklist

### 1. Email Service Setup (Resend - Recommended)

1. Sign up for Resend: https://resend.com
2. Create an API key
3. Add to environment variables:
   ```
   RESEND_API_KEY=re_xxxxx
   EMAIL_FROM=hello@bea.dev
   EMAIL_TO=hello@bea.dev
   ```

### 2. Domain Configuration

1. Purchase domain (e.g., bea.dev)
2. Configure DNS records for email (SPF, DKIM, DMARC)
3. Set environment variable:
   ```
   NEXT_PUBLIC_SITE_URL=https://bea.dev
   ```

### 3. Environment Variables

Create a `.env.production` file (or set in your hosting platform):

```env
# Required
NEXT_PUBLIC_SITE_URL=https://bea.dev
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=hello@bea.dev
EMAIL_TO=hello@bea.dev

# Optional
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=900000
```

### 4. Vercel Deployment (Recommended)

1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### 5. Alternative: Netlify Deployment

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy

### 6. Testing Forms in Development

Without a Resend API key:
- Forms will log to console
- No emails will be sent
- You can still test form validation and UI

With a Resend API key:
- Real emails will be sent
- Auto-responses work
- Full form flow testable

### 7. Post-Deployment Checklist

- [ ] Test intake form submission
- [ ] Test coffee chat scheduling
- [ ] Verify email delivery
- [ ] Verify auto-responses
- [ ] Check rate limiting
- [ ] Test error handling
- [ ] Verify Open Graph images on social media
- [ ] Check favicon appearance
- [ ] Test on mobile devices

## Security Notes

- `.env.local` is gitignored (contains secrets)
- Rate limiting is enabled (5 requests per 15 minutes)
- Email validation on both client and server
- CORS not needed (same-origin API routes)
- Server-side validation prevents spam

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Plausible, Vercel Analytics)
- Uptime monitoring (UptimeRobot)
- Email delivery monitoring

## Upgrading Next.js

Current version: 14.0.4 (has known vulnerabilities)
Recommended: Upgrade to 14.2.10+ when ready

```bash
npm install next@latest react@latest react-dom@latest
npm run build  # Test build
```
