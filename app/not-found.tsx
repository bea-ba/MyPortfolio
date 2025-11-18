import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Looks like this page got lost in the tech void. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            View Portfolio
          </Link>
        </div>

        <div className="mt-12 p-6 bg-neutral-100 rounded-lg">
          <p className="text-neutral-700 mb-4">
            Still stuck? Let me help:
          </p>
          <Link
            href="/intake"
            className="inline-block text-primary-600 hover:text-primary-700 font-medium"
          >
            Tell me what you're looking for →
          </Link>
        </div>
      </div>
    </div>
  );
}
