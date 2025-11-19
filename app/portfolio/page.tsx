'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { portfolioItems, categoryLabels } from '@/data/portfolioItems';
import PortfolioCard from '@/components/PortfolioCard';
import { PortfolioCategory } from '@/lib/types';
import { filterPortfolioByCategory } from '@/lib/utils';

const categories: Array<{ value: PortfolioCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All Projects' },
  { value: 'quick-fix', label: categoryLabels['quick-fix'] },
  { value: 'half-day', label: categoryLabels['half-day'] },
  { value: 'automation', label: categoryLabels['automation'] },
  { value: 'data-clarity', label: categoryLabels['data-clarity'] },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | 'all'>('all');

  const filteredItems = useMemo(
    () => filterPortfolioByCategory(portfolioItems, selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="section-container">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Real Tech Solutions for Small Businesses
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            See how I've helped small businesses and passionate people solve their tech headaches with automation, quick fixes, and custom tools.
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
            Let's have a quick coffee chat to see how I can help. Want to know more about{' '}
            <Link href="/about" className="text-primary-600 hover:text-primary-700 font-medium underline">
              how I work and my approach
            </Link>
            ?
          </p>
          <div className="flex flex-col items-center gap-3">
            <a href="/schedule" className="btn-primary text-lg px-12 py-4">
              Book Free Coffee Chat
            </a>
            <p className="text-sm text-neutral-600">
              Prefer to write? <a href="/intake" className="text-primary-600 hover:text-primary-700 font-medium underline">Fill out our form instead</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
