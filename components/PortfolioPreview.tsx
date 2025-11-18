import Link from 'next/link';
import { portfolioItems } from '@/data/portfolioItems';
import PortfolioCard from './PortfolioCard';

export default function PortfolioPreview() {
  // Show first 3 portfolio items on homepage
  const previewItems = portfolioItems.slice(0, 3);

  return (
    <section className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Simple Solutions to Real Problems
          </h2>
          <p className="text-xl text-neutral-600">
            See how I've helped others like you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
