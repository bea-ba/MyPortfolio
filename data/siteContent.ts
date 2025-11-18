// Site-wide content and copy based on PRD

export const siteContent = {
  // Site metadata
  meta: {
    title: "Bea - Tech Problem Solver",
    description: "I make your tech problems disappear. Simply. Quick, focused solutions for small businesses and passionate people who just need things to work.",
    url: "https://bea.dev", // Update with actual domain
  },

  // Homepage Hero Section
  hero: {
    headline: "Let's unstuck what's blocking you — or build what you're imagining",
    subheadline: "I help passionate people and small businesses solve technical bottlenecks and co-create innovative solutions. Whether you need something fixed today or want to explore an idea together, let's start where you are.",
    ctaPrimary: "I need something fixed",
    ctaSecondary: "I want to explore an idea"
  },

  // Trust Signals
  trustSignals: {
    title: "I work with people who value...",
    values: [
      "Clarity over complexity",
      "Solutions that actually work",
      "Honest, human communication",
      "Sustainable, balanced growth"
    ]
  },

  // Two Ways to Work Together
  twoWaysToWork: {
    title: "Two Ways to Work Together",
    subtitle: "I'm at my best when co-creating with someone who has a vision. But I also know trust takes time. Start where you are, and we'll figure out where to go together.",
    tracks: [
      {
        name: "Quick Clarity",
        subtitle: "Unstuck a specific bottleneck",
        description: "You have something blocking you RIGHT NOW. Let's fix it so you can get back to what you love.",
        ideal: "You know exactly what's stuck and need it resolved quickly",
        examples: [
          "Workflow automation that saves hours",
          "Data system that actually makes sense",
          "Tool connection that should just work"
        ],
        process: "Share what's stuck → I propose a solution → Usually done within a week",
        pricing: "€250-500 depending on complexity",
        cta: "Get Unstuck",
        link: "/intake"
      },
      {
        name: "Let's Build Together",
        subtitle: "Co-create something innovative",
        description: "You have an idea, a vision, or something you want to simplify. Let's explore it together over coffee and build something that fits your world.",
        ideal: "You're excited about a possibility and want a thinking partner",
        examples: [
          "Custom tool built from scratch",
          "Workflow redesigned for your unique needs",
          "Technical idea explored and prototyped"
        ],
        process: "Coffee chat → Explore vision → Co-create solution → Ongoing partnership",
        pricing: "Depends on scope — typically €1500-4000 per project or €500-1000/month retainer",
        cta: "Let's Explore",
        link: "/schedule"
      }
    ]
  },

  // How It Works
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        number: 1,
        title: "Share Your Problem",
        description: "Tell me what's stuck in 2-3 sentences"
      },
      {
        number: 2,
        title: "Get a Clear Plan",
        description: "I'll propose a simple solution and fair price"
      },
      {
        number: 3,
        title: "Problem Solved",
        description: "Usually within a week, always within scope"
      }
    ]
  },

  // Connection Options
  connectionOptions: [
    {
      icon: "problem",
      title: "I have a specific problem",
      description: "Get help with what's blocking you",
      link: "/intake",
      buttonText: "Start here"
    },
    {
      icon: "portfolio",
      title: "I'm curious about what's possible",
      description: "See examples of past solutions",
      link: "/portfolio",
      buttonText: "View work"
    },
    {
      icon: "chat",
      title: "Let's chat first",
      description: "30-minute coffee chat to explore",
      link: "/schedule",
      buttonText: "Book a call"
    }
  ],

  // About Page Content
  about: {
    whoIAm: {
      title: "Who I Am",
      content: "I'm a technical problem-solver who bridges the gap between humans and technology. Based in Lisbon, I work with people globally to solve the small technical problems that create big headaches."
    },
    howIWork: {
      title: "How I Work",
      points: [
        "One problem at a time",
        "Clear scope, clear pricing",
        "Usually done within a week",
        "No jargon, no overwhelm"
      ]
    },
    whatImGreatAt: {
      title: "What I'm Great At",
      points: [
        "Connecting tools that should talk to each other",
        "Automating repetitive tasks",
        "Making data make sense",
        "Finding simple solutions to 'complex' problems"
      ]
    },
    whatIDontDo: {
      title: "What I Don't Do",
      points: [
        "Large team projects",
        "On-call support",
        "Teaching/training sessions",
        "Projects over 4 hours (without breaking them down)"
      ]
    },
    background: {
      title: "My Background",
      content: "From advanced mathematics to making tech human. I believe technology should work for you, not the other way around."
    }
  },

  // Form Messages
  forms: {
    intakeFormIntro: "Let's see if I can help. Tell me about your technical headache, and I'll get back to you within 48 hours with a simple plan or a helpful redirect.",
    intakeAutoResponse: "Thanks for reaching out! I review every inquiry personally and will respond within 48 hours if I can help. If I'm not the right fit, I'll try to point you in the right direction.",

    coffeeFormIntro: "Let's have a quick 30-minute chat about what you're stuck on. I keep these focused and helpful.",
    coffeeConfirmation: "Great! I'm looking forward to our chat. I'll send a video link 5 minutes before. Please keep it to one main problem - we can always schedule follow-ups if needed."
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Bea. Making tech simple.`,
    email: "hello@bea.dev", // Update with actual email
    privacyText: "Your privacy matters. I never share your information."
  }
};
