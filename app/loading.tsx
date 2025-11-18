export default function Loading() {
  return (
    <div className="section-container">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        <p className="mt-4 text-neutral-600">Loading...</p>
      </div>
    </div>
  );
}
