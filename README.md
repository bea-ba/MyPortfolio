# Bea's Portfolio & Service Platform - MVP Prototype

A human-first web platform that positions Bea as a technical problem-solver who makes technology accessible and manageable for small businesses and passionate individuals.

## 🎯 Overview

This is a **functional MVP prototype** built with Next.js, React, and Tailwind CSS. The prototype focuses on UI, screens, navigation, and basic interactions with mock data - ready for visual experience and usability testing before full backend implementation.

### Core Value Proposition
**"I make your tech problems disappear. Simply."**

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository** (if not already done):
```bash
git clone <repository-url>
cd MyPortfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

The site will automatically reload as you make changes to the code.

---

## 📁 Project Structure

```
MyPortfolio/
├── app/                        # Next.js 14 App Router
│   ├── page.tsx               # Homepage
│   ├── intake/                # Intake form page
│   ├── portfolio/             # Portfolio with filters
│   ├── schedule/              # Coffee chat scheduler
│   ├── about/                 # About/Approach page
│   ├── logs/                  # Learning logs (blog)
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── not-found.tsx          # 404 page
│   └── loading.tsx            # Loading state
│
├── components/                 # Reusable React components
│   ├── Navigation.tsx         # Main navigation
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Homepage hero section
│   ├── TrustSignals.tsx       # Trust values section
│   ├── HowItWorks.tsx         # Process steps
│   ├── PortfolioPreview.tsx   # Homepage portfolio preview
│   ├── PortfolioCard.tsx      # Portfolio item card
│   ├── ConnectionOptions.tsx  # CTA options
│   └── IntakeForm.tsx         # Client intake form
│
├── data/                       # Mock data and content
│   ├── portfolioItems.ts      # Portfolio case studies
│   └── siteContent.ts         # Site-wide copy
│
├── lib/                        # Utilities and types
│   ├── types.ts               # TypeScript type definitions
│   └── utils.ts               # Helper functions
│
├── public/                     # Static assets (add images here)
├── CLAUDE.md                  # Project instructions
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## 🎨 Key Features

### ✅ Implemented Pages

1. **Homepage** (`/`)
   - Hero section with clear value proposition
   - Trust signals (core values)
   - How it works (3-step process)
   - Portfolio preview (first 3 items)
   - Connection options (3 pathways)

2. **Intake Form** (`/intake`)
   - Multi-section form with validation
   - Problem description
   - Timeline and budget selection
   - Contact information
   - "Vibe check" priorities
   - Auto-response confirmation

3. **Portfolio** (`/portfolio`)
   - All case studies displayed
   - Category filtering (Quick Fixes, Automation, Data Clarity, etc.)
   - Expandable cards with full details
   - Tools used for each project

4. **Coffee Chat Scheduler** (`/schedule`)
   - Pre-meeting form
   - Time slot selection (mocked)
   - Contact information
   - Problem/outcome questions
   - Confirmation message

5. **About/Approach** (`/about`)
   - Who I am
   - How I work
   - What I'm great at
   - What I don't do (boundaries)
   - Background
   - CTA section

6. **Learning Logs** (`/logs`)
   - Blog-style posts
   - Category filtering (Solutions, Discoveries, Reflections, Wins)
   - Chronological display
   - Simple, readable format

### 🎯 Design Principles

- **Calm confidence**: Soft colors, generous spacing
- **Human-first**: Clear language, no jargon
- **Mobile-first**: Fully responsive across all devices
- **Accessible**: WCAG-friendly contrast and structure
- **Fast**: Optimized for performance

---

## 🔧 Customization Guide

### Updating Content

#### Portfolio Items
Edit `data/portfolioItems.ts` to add/modify case studies:

```typescript
{
  id: '6',
  clientType: "Your Client Type",
  problem: "The problem they faced",
  solution: "How you solved it",
  relief: "Client testimonial quote",
  timeTaken: "2-hour fix",
  toolsUsed: ["Tool 1", "Tool 2"],
  category: 'quick-fix', // or 'automation', 'data-clarity', 'half-day'
  slug: 'url-friendly-slug'
}
```

#### Site Copy
Edit `data/siteContent.ts` to modify headlines, descriptions, and copy throughout the site.

#### Contact Information
Update email in `data/siteContent.ts`:

```typescript
footer: {
  email: "your-email@example.com"
}
```

### Styling

- **Colors**: Edit `tailwind.config.ts` to change color palette
- **Fonts**: Modify `app/layout.tsx` to change font family
- **Global Styles**: Edit `app/globals.css` for custom CSS

### Adding Real Integrations

This prototype uses **mock data and placeholder functions**. Here's where to add real integrations:

#### Form Submissions
Replace `submitForm()` in `lib/utils.ts` with actual API calls:

```typescript
// Example: Integrate with email service or backend API
export async function submitForm(data: any) {
  const response = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

#### Scheduling Integration
Replace mock calendar in `app/schedule/page.tsx` with:
- **Calendly**: Embed widget
- **Cal.com**: API integration
- **Google Calendar**: Direct booking

#### Analytics
Add to `app/layout.tsx`:
- **Plausible Analytics**
- **Simple Analytics**
- **Google Analytics** (if needed)

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**:
```bash
git add .
git commit -m "Initial MVP prototype"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

Your site will be live in minutes at `your-project.vercel.app`

### Other Deployment Options

- **Netlify**: Connect GitHub repo, auto-deploy
- **AWS Amplify**: Full-stack deployment
- **GitHub Pages**: Static export (requires config changes)

---

## 🔮 Future Integration Points

The following are **placeholder modules** marked with `TODO` comments in the code:

### Backend & Database
- [ ] Supabase for form storage
- [ ] PostgreSQL for client data
- [ ] Authentication system

### Email & Notifications
- [ ] SendGrid or Resend for auto-responses
- [ ] Email templates for confirmations
- [ ] Admin notifications

### Scheduling
- [ ] Calendly or Cal.com integration
- [ ] Real-time availability checking
- [ ] Automated reminders

### Analytics
- [ ] Privacy-friendly analytics (Plausible)
- [ ] Conversion tracking
- [ ] User behavior insights

### SEO
- [ ] Meta tags optimization
- [ ] Sitemap generation
- [ ] Local SEO (Lisbon)
- [ ] Open Graph images

---

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint
```

---

## 🎨 Design System

### Colors
- **Primary Blue**: Professional, trustworthy (0ea5e9)
- **Neutral Grays**: Clean, readable backgrounds
- **Accent Warm**: Friendly touches (f59e0b)

### Typography
- **Font**: Inter (clean, modern, highly readable)
- **Scale**: 4xl for headlines, xl for body, sm for labels

### Spacing
- Generous padding (16px - 24px sections)
- Breathing room between elements
- Consistent gap sizes (4px, 8px, 16px, 24px)

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Styles not updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📄 License

This is a personal portfolio project. All rights reserved.

---

## 🙏 Acknowledgments

Built based on the comprehensive PRD for Bea's Personal Portfolio & Service Platform.

**Tech Stack:**
- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

## 📞 Support

For questions about this MVP prototype:
- Review the code comments (all placeholder integrations are marked)
- Check `CLAUDE.md` for project context
- Modify mock data in `/data` folder for testing

**Ready to launch?** Update contact information, add real integrations, and deploy!

---

**Built with ❤️ by Claude Code**
