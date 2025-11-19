import type { Metadata } from 'next';
import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'About My Approach - How I Help Solve Tech Problems | Bea',
  description: 'Learn how I work: focused solutions, clear boundaries, sustainable results. I help small businesses solve tech problems without getting overwhelmed.',
  keywords: ['about', 'approach', 'work methodology', 'tech consultant approach', 'problem-solving methodology'],
  openGraph: {
    title: 'About My Approach | Bea',
    description: 'Focused solutions, clear boundaries, sustainable results for small businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About My Approach | Bea',
    description: 'How I help solve tech problems without getting overwhelmed.',
  },
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            My Problem-Solving Approach for Small Businesses
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Technology should work for you, not the other way around.
          </p>
        </div>

        {/* Who I Am */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              {about.whoIAm.title}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {about.whoIAm.content}
            </p>
          </div>
        </section>

        {/* How I Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            {about.howIWork.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.howIWork.points.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-neutral-200">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-neutral-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Great At */}
        <section className="mb-16">
          <div className="card bg-primary-50 border-primary-100">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              {about.whatImGreatAt.title}
            </h2>
            <ul className="space-y-4">
              {about.whatImGreatAt.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  aria-hidden="true"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-lg text-neutral-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What I Don't Do */}
        <section className="mb-16">
          <div className="card border-2 border-neutral-300">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              {about.whatIDontDo.title}
            </h2>
            <p className="text-neutral-600 mb-6">
              Being clear about boundaries helps us both. Here's what I don't take on:
            </p>
            <ul className="space-y-4">
              {about.whatIDontDo.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  aria-hidden="true"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-lg text-neutral-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* My Background */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              {about.background.title}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              {about.background.content}
            </p>
            <p className="text-lg text-neutral-700">
              Want to see examples of how I've helped others?{' '}
              <Link href="/portfolio" className="text-primary-600 hover:text-primary-700 font-medium underline">
                Check out my portfolio of real solutions
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Does This Sound Like What You Need?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's see if I can help solve your tech problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/intake"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              >
                Tell Me Your Problem
              </Link>
              <Link
                href="/schedule"
                className="px-8 py-4 bg-primary-800 text-white rounded-lg font-medium hover:bg-primary-900 transition-colors border-2 border-white"
              >
                Schedule a Chat
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
