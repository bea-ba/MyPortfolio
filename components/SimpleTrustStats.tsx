import { mockStats } from '@/data/mockTestimonials';

export default function SimpleTrustStats() {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-primary-600">{mockStats.projectsCompleted}</div>
          <div className="text-xs text-neutral-600 mt-1">Projects</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary-600">{mockStats.averageResponseTime}</div>
          <div className="text-xs text-neutral-600 mt-1">Response Time</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary-600">{mockStats.averageCompletionTime}</div>
          <div className="text-xs text-neutral-600 mt-1">Avg. Completion</div>
        </div>
      </div>
      <p className="text-xs text-neutral-400 mt-4 text-center">
        ⚠️ MOCK STATS - Update with real numbers before launch
      </p>
    </div>
  );
}
