import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Bea - Tech Problem Solver',
  description: 'Terms of service governing the use of this website and services.',
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
        <p className="text-neutral-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Agreement to Terms</h2>
            <p className="text-neutral-700 leading-relaxed">
              By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Description of Service</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              This website serves as a portfolio and inquiry platform for technical consulting services offered by Bea. Services include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Technical problem-solving and consulting</li>
              <li>Automation and workflow development</li>
              <li>Custom tool and solution development</li>
              <li>Quick technical fixes and implementations</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              This website is for informational and inquiry purposes only. Submission of a contact form does not constitute a contract for services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Use of Website</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              You agree to use this website only for lawful purposes. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Use automated systems to access the website in a way that sends more requests than a human could reasonably produce</li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use the website to spam, phish, or distribute malware</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Service Engagement</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you decide to engage my services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>A separate service agreement will be provided outlining scope, timeline, and pricing</li>
              <li>Payment terms will be agreed upon before work begins</li>
              <li>You retain ownership of your data and business information</li>
              <li>I retain ownership of general methodologies and code frameworks I've developed</li>
              <li>Custom code developed specifically for your project will be licensed to you as agreed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Portfolio and Testimonials</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              The portfolio examples on this website are:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Representative of the type of work I can provide</li>
              <li>Some examples may be mock projects created for demonstration purposes (clearly labeled as such)</li>
              <li>Client names and identifying details are anonymized unless explicit permission has been granted</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              Mock testimonials are clearly labeled. Real testimonials are used only with client permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              This website and the information contained herein are provided "as is" without warranties of any kind, either express or implied. I do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>The website will function uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The website or server are free of viruses or harmful components</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Limitation of Liability</h2>
            <p className="text-neutral-700 leading-relaxed">
              To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this website, even if I have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Intellectual Property</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              The content on this website, including but not limited to text, graphics, logos, and code, is the property of Bea and is protected by copyright laws. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Reproduce, distribute, or create derivative works from this content without permission</li>
              <li>Use the content for commercial purposes without authorization</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">External Links</h2>
            <p className="text-neutral-700 leading-relaxed">
              This website may contain links to external websites. I am not responsible for the content, privacy practices, or terms of service of external sites. Access to external sites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Indemnification</h2>
            <p className="text-neutral-700 leading-relaxed">
              You agree to indemnify and hold harmless Bea from any claims, damages, losses, or expenses (including legal fees) arising from your use of this website or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Governing Law</h2>
            <p className="text-neutral-700 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of Portugal. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Portugal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to Terms</h2>
            <p className="text-neutral-700 leading-relaxed">
              I reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page with an updated "Last updated" date. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact me:
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
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium underline">view Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
