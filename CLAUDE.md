# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyPortfolio is Bea's personal portfolio and service platform - a human-first web platform positioning Bea as a technical problem-solver for small businesses and passionate individuals. Built as a functional MVP prototype focusing on UI, screens, navigation, and mock interactions.

**Core Value Proposition:** "I make your tech problems disappear. Simply."

## Development Setup

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation
```bash
npm install
# or
yarn install
```

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server runs on `http://localhost:3000`

## Architecture

### Tech Stack
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tools**: Next.js (built-in Webpack/Turbopack)
- **Deployment**: Vercel (recommended), Netlify, or AWS Amplify

### Project Structure
```
app/                    # Next.js App Router pages
  ├── page.tsx         # Homepage
  ├── intake/          # Intake form
  ├── portfolio/       # Portfolio with filters
  ├── schedule/        # Coffee chat scheduler
  ├── about/           # About/Approach
  └── logs/            # Learning logs (blog)

components/            # Reusable React components
  ├── Navigation.tsx
  ├── Footer.tsx
  ├── Hero.tsx
  └── [other components]

data/                  # Mock data and site content
  ├── portfolioItems.ts
  └── siteContent.ts

lib/                   # Utilities and types
  ├── types.ts
  └── utils.ts
```

## Key Conventions

### Code Style
- **TypeScript** for type safety
- **Functional components** with hooks
- **Tailwind classes** for styling (avoid inline styles)
- **"use client"** directive for client components only when needed
- Mock data clearly separated in `/data` folder

### Component Patterns
- Extract reusable UI into `/components`
- Keep pages in `/app` focused and simple
- Use TypeScript types from `/lib/types.ts`
- Validation and utilities in `/lib/utils.ts`

### Naming Conventions
- Components: PascalCase (e.g., `PortfolioCard.tsx`)
- Files: kebab-case for pages, PascalCase for components
- Types: PascalCase interfaces (e.g., `PortfolioItem`)
- Mock data: camelCase exports (e.g., `portfolioItems`)

## Notes for Claude Code

- This is a new portfolio project - establish the tech stack and initial structure based on user requirements
- Follow modern web development best practices
- Ensure responsive design for mobile, tablet, and desktop
- Optimize for performance and accessibility
- Keep dependencies minimal and up-to-date
