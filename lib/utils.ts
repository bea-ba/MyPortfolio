// Utility functions for the application

import { PortfolioItem, PortfolioCategory } from './types';

/**
 * Filter portfolio items by category
 */
export function filterPortfolioByCategory(
  items: PortfolioItem[],
  category: PortfolioCategory | 'all'
): PortfolioItem[] {
  if (category === 'all') return items;
  return items.filter(item => item.category === category);
}

/**
 * Simple email validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Mock form submission handler
 * In production, this would send to a backend API or email service
 */
export async function submitForm(data: any): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Log to console for development
  console.log('Form submitted:', data);

  // Mock success response
  return {
    success: true,
    message: 'Form submitted successfully!'
  };
}

/**
 * Get category color classes
 */
export function getCategoryColor(category: PortfolioCategory): string {
  const colors = {
    'quick-fix': 'bg-green-100 text-green-800',
    'half-day': 'bg-blue-100 text-blue-800',
    'automation': 'bg-purple-100 text-purple-800',
    'data-clarity': 'bg-orange-100 text-orange-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
