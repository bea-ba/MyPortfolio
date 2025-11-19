import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function TwoWaysToWork() {
  const { twoWaysToWork } = siteContent;

  return (
    <section className="section-container bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {twoWaysToWork.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {twoWaysToWork.subtitle}
          </p>
        </div>

        {/* Progressive Path Guidance */}
        <div className="mb-8 p-6 bg-info-50 border border-info-100 rounded-lg max-w-3xl mx-auto">
          <p className="text-neutral-700 text-center leading-relaxed">
            <span className="font-semibold">Not sure which fits?</span> Start with Quick Clarity.
            Many of my best partnerships began with a small fix, then grew into something bigger once we built trust together.
          </p>
        </div>

        {/* Two Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {twoWaysToWork.tracks.map((track, index) => (
            <div
              key={index}
              className="card bg-white hover:shadow-lg transition-shadow"
            >
              {/* Track Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {track.name}
                </h3>
                <p className="text-lg text-primary-600 font-medium mb-3">
                  {track.subtitle}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {track.description}
                </p>
              </div>

              {/* Ideal For */}
              <div className="mb-6 p-4 bg-info-50 rounded-lg">
                <p className="text-sm font-semibold text-neutral-700 mb-1">
                  Ideal if:
                </p>
                <p className="text-sm text-neutral-600">
                  {track.ideal}
                </p>
              </div>

              {/* Examples */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-neutral-700 mb-3">
                  Examples:
                </p>
                <ul className="space-y-2">
                  {track.examples.map((example, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-neutral-700 mb-2">
                  Process:
                </p>
                <p className="text-sm text-neutral-600">
                  {track.process}
                </p>
              </div>

              {/* Outcomes */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-neutral-700 mb-3">
                  What You Get:
                </p>
                <ul className="space-y-2">
                  {track.outcomes.map((outcome: string, i: number) => (
                    <li key={i} className="flex items-start space-x-2">
                      <svg
                        className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Note (if exists) */}
              {track.pricingNote && (
                <div className="mb-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    {track.pricingNote}
                  </p>
                </div>
              )}

              {/* CTA */}
              <Link
                href={track.link}
                className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                {track.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Many of my best partnerships started with a quick fix. Once we build trust,
            we often discover bigger opportunities to explore together.
          </p>
        </div>
      </div>
    </section>
  );
}
