import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bea - Tech Problem Solver',
  description: 'Privacy policy outlining how we collect, use, and protect your personal information.',
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
        <p className="text-neutral-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Introduction</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              This Privacy Policy explains how Bea ("I", "me", or "my") collects, uses, and protects your personal information when you use this website.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              I am committed to protecting your privacy and being transparent about data practices. This site is designed with privacy in mind and collects minimal personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information I Collect</h2>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">Information You Provide</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              When you submit a contact form or schedule a consultation, I collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li><strong>Contact information:</strong> Name and email address</li>
              <li><strong>Project details:</strong> Information you voluntarily share about your technical needs</li>
              <li><strong>Optional information:</strong> Timeline preferences, budget range, and how you found me (only if you choose to provide this)</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">Information Automatically Collected</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              This website currently does NOT use:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Cookies for tracking</li>
              <li>Analytics tools (no Google Analytics, no third-party tracking)</li>
              <li>Social media pixels</li>
              <li>Advertising networks</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              Your web browser may send standard technical information (IP address, browser type) to the web hosting service, but I do not collect or analyze this data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">How I Use Your Information</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              I use the information you provide solely to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Respond to your inquiry or consultation request</li>
              <li>Communicate about potential projects</li>
              <li>Provide the services you've requested</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              <strong>I will NEVER:</strong> Sell your data, share it with third parties for marketing, or use it for purposes other than responding to your request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Storage and Security</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Currently, form submissions are handled client-side for demonstration purposes. When this site goes into production:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Your data will be transmitted securely via HTTPS</li>
              <li>Form data will be sent to a secure email service or contact management system</li>
              <li>I will retain your information only as long as needed to respond to your inquiry or provide services</li>
              <li>You may request deletion of your data at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Third-Party Services</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              This website uses:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li><strong>Google Fonts:</strong> Font files are loaded from Google's servers. Google's <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> applies.</li>
              <li><strong>Web Hosting:</strong> The site is hosted on a web hosting service. Your IP address and basic technical information may be logged by the hosting provider.</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              Before launch, I will integrate with a scheduling or email service for form submissions. I will update this policy to reflect any new third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Rights (GDPR & CCPA)</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data I hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Object:</strong> Object to processing of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              To exercise any of these rights, please contact me at <a href="mailto:hello@bea.dev" className="text-primary-600 hover:text-primary-700 underline">hello@bea.dev</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Children's Privacy</h2>
            <p className="text-neutral-700 leading-relaxed">
              This website is not intended for children under 16. I do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to This Policy</h2>
            <p className="text-neutral-700 leading-relaxed">
              I may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last updated" date. For significant changes, I will notify you via email if I have your contact information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how your data is handled, please contact me:
            </p>
            <p className="text-neutral-700 leading-relaxed">
              <strong>Email:</strong> <a href="mailto:hello@bea.dev" className="text-primary-600 hover:text-primary-700 underline">hello@bea.dev</a><br />
              <strong>Location:</strong> Lisbon, Portugal
            </p>
          </section>

          <div className="mt-12 p-6 bg-neutral-100 rounded-lg">
            <p className="text-sm text-neutral-700 text-center">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium underline">Return to homepage</Link>
              {' '}or{' '}
              <Link href="/terms" className="text-primary-600 hover:text-primary-700 font-medium underline">view Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
