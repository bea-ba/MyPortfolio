'use client';

import { useState } from 'react';
import { blogPosts } from '@/data/portfolioItems';
import { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function LogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Posts', icon: '📚' },
    { value: 'solution', label: 'Solutions', icon: '💡' },
    { value: 'discovery', label: 'Discoveries', icon: '🔍' },
    { value: 'reflection', label: 'Reflections', icon: '💭' },
    { value: 'win', label: 'Wins', icon: '🎉' },
  ];

  const getCategoryBadge = (category: BlogPost['category']) => {
    const badges = {
      solution: 'bg-blue-100 text-blue-800',
      discovery: 'bg-green-100 text-green-800',
      reflection: 'bg-purple-100 text-purple-800',
      win: 'bg-orange-100 text-orange-800',
    };
    return badges[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Learning Logs
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Short notes on problems solved, tools discovered, boundaries set, and wins celebrated.
            Learning in public, one small post at a time.
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
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              id={post.slug}
              className="card hover:border-primary-600 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(
                        post.category
                      )}`}
                    >
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <time className="text-sm text-neutral-500">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                    {post.title}
                  </h2>
                </div>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="text-neutral-700 whitespace-pre-line leading-relaxed">
                  {post.content}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-600">
              No posts in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-16 bg-neutral-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-neutral-900 mb-3">
            Why Learning Logs?
          </h3>
          <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            These quick posts help me reflect on what I'm learning, celebrate wins, and maintain
            boundaries. If you find something useful here, that's a bonus. Mostly, they keep me
            honest about sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
}
