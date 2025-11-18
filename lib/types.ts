// Core Types for Bea's Portfolio Platform

export interface PortfolioItem {
  id: string;
  clientType: string;
  problem: string;
  solution: string;
  relief: string;
  timeTaken: string;
  toolsUsed?: string[];
  category: PortfolioCategory;
  slug: string;
}

export type PortfolioCategory =
  | 'quick-fix'
  | 'half-day'
  | 'automation'
  | 'data-clarity';

export interface IntakeFormData {
  // Section 0: Track Selection
  track?: 'quick-clarity' | 'co-creation' | 'not-sure';

  // Section 1: The Problem
  problemDescription: string;
  alreadyTried?: string;
  howBlocking: string;

  // Section 2: Context
  timeline: 'asap' | 'this-month' | 'exploring';
  budgetRange: '150-250' | '250-400' | 'discuss';

  // Section 3: About You
  name: string;
  email: string;
  website?: string;
  howDidYouFind?: string;

  // Section 4: Vibe Check
  priorities: string[];
}

export interface CoffeeChat {
  name: string;
  email: string;
  stuckOn: string;
  desiredOutcome: string;
  preferredDate: string;
  preferredTime: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'discovery' | 'solution' | 'reflection' | 'win';
  date: string;
  content: string;
  slug: string;
}

export interface TimeSlot {
  day: string;
  time: string;
  available: boolean;
}
