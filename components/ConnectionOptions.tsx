import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function ConnectionOptions() {
  const { connectionOptions } = siteContent;

  // Icon components for each option
  const icons = {
    problem: (
      <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    portfolio: (
      <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    chat: (
      <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  };

  return (
    <section className="section-container bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
          Ready to Get Started?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {connectionOptions.map((option, index) => (
            <div
              key={index}
              className="card text-center hover:border-primary-600 transition-all"
            >
              <div className="flex justify-center mb-6 text-primary-600">
                {icons[option.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {option.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {option.description}
              </p>
              <Link
                href={option.link}
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
