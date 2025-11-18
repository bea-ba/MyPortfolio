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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/intake" className="btn-primary w-full sm:w-auto">
            {hero.ctaPrimary}
          </Link>
          <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
            {hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
