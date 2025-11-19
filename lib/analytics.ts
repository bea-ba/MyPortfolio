// Analytics utilities for tracking custom events

import { track } from '@vercel/analytics';

/**
 * Track form submission events
 */
export function trackFormSubmission(formType: 'intake' | 'schedule', success: boolean) {
  if (typeof window !== 'undefined') {
    track(`form_submission_${formType}`, {
      success: success.toString(),
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track page views (automatic with Vercel Analytics, but can be used for custom tracking)
 */
export function trackPageView(pageName: string) {
  if (typeof window !== 'undefined') {
    track('page_view', {
      page: pageName,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track portfolio filter usage
 */
export function trackPortfolioFilter(category: string) {
  if (typeof window !== 'undefined') {
    track('portfolio_filter', {
      category,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track CTA clicks
 */
export function trackCTAClick(ctaName: string, location: string) {
  if (typeof window !== 'undefined') {
    track('cta_click', {
      name: ctaName,
      location,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track errors
 */
export function trackError(errorType: string, errorMessage: string, context?: string) {
  if (typeof window !== 'undefined') {
    track('error', {
      type: errorType,
      message: errorMessage,
      context: context || 'unknown',
      timestamp: new Date().toISOString(),
    });
  }
}
