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
    headline: "I make your tech problems disappear. Simply.",
    subheadline: "Quick, focused solutions for small businesses and passionate people who just need things to work.",
    ctaPrimary: "Tell me your problem",
    ctaSecondary: "See how I've helped others"
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
