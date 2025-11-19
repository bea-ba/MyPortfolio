import IntakeForm from '@/components/IntakeForm';
import SimpleTrustStats from '@/components/SimpleTrustStats';
import { siteContent } from '@/data/siteContent';

export default function IntakePage() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Let's See If I Can Help
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {siteContent.forms.intakeFormIntro}
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12">
          <SimpleTrustStats />
        </div>

        {/* Form */}
        <IntakeForm />
      </div>
    </div>
  );
}
