import Link from 'next/link';
import { PortfolioItem } from '@/lib/types';
import { getCategoryColor } from '@/lib/utils';

interface PortfolioCardProps {
  item: PortfolioItem;
  showFullDetails?: boolean;
}

export default function PortfolioCard({ item, showFullDetails = false }: PortfolioCardProps) {
  return (
    <div className="card">
      {/* Category Badge */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
          {item.timeTaken}
        </span>
      </div>

      {/* Client Type */}
      <h3 className="text-xl font-bold text-neutral-900 mb-3">
        {item.clientType}
      </h3>

      {/* Problem */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-neutral-500 uppercase mb-1">
          The Struggle
        </p>
        <p className="text-neutral-700">
          {item.problem}
        </p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-neutral-500 uppercase mb-1">
          The Solution
        </p>
        <p className="text-neutral-700">
          {item.solution}
        </p>
      </div>

      {/* Relief Quote */}
      <div className="mb-4 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-600">
        <p className="text-sm font-semibold text-neutral-500 uppercase mb-1">
          The Relief
        </p>
        <p className="text-neutral-900 italic">
          "{item.relief}"
        </p>
      </div>

      {/* Tools Used (if full details) */}
      {showFullDetails && item.toolsUsed && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-neutral-500 uppercase mb-2">
            Tools Used
          </p>
          <div className="flex flex-wrap gap-2">
            {item.toolsUsed.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Read More Link (if not showing full details) */}
      {!showFullDetails && (
        <Link
          href={`/portfolio#${item.slug}`}
          className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          Read full story →
        </Link>
      )}
    </div>
  );
}
