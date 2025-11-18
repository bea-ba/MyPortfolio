import Link from 'next/link';
import { siteContent } from '@/data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="section-container text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
          {hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed">
          {hero.subheadline}
        </p>
        <div className="flex flex-col items-center">
          <Link href="/schedule" className="btn-primary text-lg px-12 py-5 w-full sm:w-auto">
            {hero.ctaPrimary}
          </Link>
          <p className="text-sm text-neutral-500 mt-6">
            Not sure where to start? <Link href="/portfolio" className="text-primary-600 hover:text-primary-700 font-medium">See past work</Link> or <Link href="/intake" className="text-primary-600 hover:text-primary-700 font-medium">tell me what's stuck</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
