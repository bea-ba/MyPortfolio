import { mockTestimonials } from '@/data/mockTestimonials';

interface TestimonialQuoteProps {
  testimonialId?: string;
}

export default function TestimonialQuote({ testimonialId = '1' }: TestimonialQuoteProps) {
  const testimonial = mockTestimonials.find(t => t.id === testimonialId) || mockTestimonials[0];

  return (
    <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 max-w-2xl mx-auto">
      <svg
        className="w-8 h-8 text-primary-300 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-neutral-800 leading-relaxed mb-4 italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-neutral-900">{testimonial.name}</p>
          <p className="text-sm text-neutral-600">{testimonial.role}</p>
        </div>
        <p className="text-xs text-neutral-500">
          {testimonial.project}
        </p>
      </div>
      <p className="text-xs text-neutral-400 mt-3 text-center">
        ⚠️ MOCK TESTIMONIAL - Replace before launch
      </p>
    </div>
  );
}
