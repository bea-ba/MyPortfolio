import { siteContent } from '@/data/siteContent';

export default function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section className="section-container bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-16">
          {howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
