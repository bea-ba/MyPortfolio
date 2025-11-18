'use client';

import { useState } from 'react';
import { portfolioItems, categoryLabels } from '@/data/portfolioItems';
import PortfolioCard from '@/components/PortfolioCard';
import { PortfolioCategory } from '@/lib/types';
import { filterPortfolioByCategory } from '@/lib/utils';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | 'all'>('all');

  const filteredItems = filterPortfolioByCategory(portfolioItems, selectedCategory);

  const categories: Array<{ value: PortfolioCategory | 'all'; label: string }> = [
    { value: 'all', label: 'All Projects' },
    { value: 'quick-fix', label: categoryLabels['quick-fix'] },
    { value: 'half-day', label: categoryLabels['half-day'] },
    { value: 'automation', label: categoryLabels['automation'] },
    { value: 'data-clarity', label: categoryLabels['data-clarity'] },
  ];

  return (
    <div className="section-container">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Simple Solutions to Real Problems
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            See how I've helped small businesses and passionate people solve their tech headaches.
            Every project kept simple, focused, and within scope.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div key={item.id} id={item.slug}>
              <PortfolioCard item={item} showFullDetails />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-600">
              No projects in this category yet.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 md:p-12 text-center border border-primary-100">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Ready to Solve Your Tech Problem?
          </h2>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
            Most projects are done within a week. Let's see if I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/intake" className="btn-primary">
              Tell Me Your Problem
            </a>
            <a href="/schedule" className="btn-secondary">
              Schedule a Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
