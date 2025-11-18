import { PortfolioItem, BlogPost } from '@/lib/types';

// Mock Portfolio Items based on PRD examples
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    clientType: "Local Bakery",
    problem: "Order forms went to spam, losing 5 orders per week",
    solution: "Fixed email routing and added backup notifications",
    relief: "I can trust orders come through now!",
    timeTaken: "2-hour fix",
    toolsUsed: ["Email DNS", "Form validation", "Notification system"],
    category: 'quick-fix',
    slug: 'bakery-order-forms'
  },
  {
    id: '2',
    clientType: "Yoga Studio Owner",
    problem: "Manually copying class bookings from website to calendar every day",
    solution: "Connected booking system directly to Google Calendar",
    relief: "My mornings are mine again!",
    timeTaken: "3-hour solution",
    toolsUsed: ["Zapier", "Google Calendar API", "Booking platform"],
    category: 'automation',
    slug: 'yoga-booking-automation'
  },
  {
    id: '3',
    clientType: "Freelance Designer",
    problem: "Client invoices scattered across 3 different tools, impossible to track income",
    solution: "Set up simple dashboard pulling all data into one spreadsheet",
    relief: "I actually know what I'm earning now!",
    timeTaken: "4-hour project",
    toolsUsed: ["Google Sheets", "API integrations", "Data automation"],
    category: 'data-clarity',
    slug: 'freelancer-income-tracking'
  },
  {
    id: '4',
    clientType: "Coffee Shop",
    problem: "Website crashed on mobile, losing lunch rush orders",
    solution: "Fixed responsive layout and optimized mobile performance",
    relief: "Orders are pouring in even during rush hour!",
    timeTaken: "2-hour fix",
    toolsUsed: ["CSS fixes", "Mobile optimization", "Performance testing"],
    category: 'quick-fix',
    slug: 'coffee-shop-mobile-fix'
  },
  {
    id: '5',
    clientType: "Life Coach",
    problem: "Spending 5 hours/week manually sending session reminders",
    solution: "Automated reminder emails based on calendar bookings",
    relief: "That's 5 hours back in my week!",
    timeTaken: "3-hour solution",
    toolsUsed: ["Email automation", "Calendar integration", "Scheduling tools"],
    category: 'automation',
    slug: 'coach-reminder-automation'
  }
];

// Mock Blog Posts for Learning Logs
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "This week's fix: Spam filter → Allow list solution",
    category: 'solution',
    date: '2024-11-15',
    content: `Discovered that many small business contact forms fail because of strict spam filters.

Simple fix: Set up email authentication (SPF, DKIM) and use a dedicated sending domain. Takes 30 minutes, saves months of lost inquiries.`,
    slug: 'spam-filter-solution'
  },
  {
    id: '2',
    title: "Found this gem: Tally Forms for smart intake",
    category: 'discovery',
    date: '2024-11-10',
    content: `Just discovered Tally Forms - free, beautiful, and actually works without JavaScript.

Perfect for client intake forms. No more bloated survey tools.`,
    slug: 'tally-forms-discovery'
  },
  {
    id: '3',
    title: "Why I said no to a €800 project",
    category: 'reflection',
    date: '2024-11-05',
    content: `Got offered a bigger project than usual. Great money, but it needed 20+ hours and constant availability.

Saying no felt scary but right. My 10-hour boundary is non-negotiable.`,
    slug: 'saying-no-boundary'
  },
  {
    id: '4',
    title: "Made a 3-hour task take 3 minutes",
    category: 'win',
    date: '2024-11-01',
    content: `Client was manually copying data from emails to spreadsheet every week.

Built a simple email parser that does it automatically. Weekly 3-hour task now runs in seconds.

This is why I love this work.`,
    slug: 'email-parser-win'
  }
];

// Mock time slots for coffee chat scheduling
export const mockTimeSlots = [
  { day: 'Tuesday', time: '10:00 AM', available: true },
  { day: 'Tuesday', time: '2:00 PM', available: false },
  { day: 'Thursday', time: '10:00 AM', available: true },
  { day: 'Thursday', time: '3:00 PM', available: true },
];

// Category display names
export const categoryLabels: Record<string, string> = {
  'quick-fix': 'Quick Fixes (2 hours or less)',
  'half-day': 'Half-Day Solutions',
  'automation': 'Automation Magic',
  'data-clarity': 'Data Clarity'
};
