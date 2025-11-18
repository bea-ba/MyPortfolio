import { siteContent } from '@/data/siteContent';

export default function TrustSignals() {
  const { trustSignals } = siteContent;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
          {trustSignals.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.values.map((value, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-6 rounded-lg bg-neutral-50"
            >
              <svg
                className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-neutral-700 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
