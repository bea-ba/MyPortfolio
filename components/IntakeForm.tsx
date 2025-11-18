'use client';

import { useState } from 'react';
import { IntakeFormData } from '@/lib/types';
import { isValidEmail, submitForm } from '@/lib/utils';
import { siteContent } from '@/data/siteContent';

export default function IntakeForm() {
  const [formData, setFormData] = useState<Partial<IntakeFormData>>({
    priorities: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const priorities = prev.priorities || [];
      const newPriorities = priorities.includes(value)
        ? priorities.filter((p) => p !== value)
        : priorities.length < 2
        ? [...priorities, value]
        : priorities;
      return { ...prev, priorities: newPriorities };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.problemDescription?.trim()) {
      newErrors.problemDescription = 'Please describe your problem';
    }
    if (!formData.howBlocking?.trim()) {
      newErrors.howBlocking = 'Please tell us how this is blocking you';
    }
    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }
    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range';
    }
    if (!formData.name?.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Mock API call - replace with actual integration
      const result = await submitForm(formData);

      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <svg
            className="w-16 h-16 text-green-600 mx-auto mb-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Thanks for reaching out!
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            {siteContent.forms.intakeAutoResponse}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* Section 0: Track Selection */}
      <div className="card bg-primary-50 border-primary-200">
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Which describes you best?</h3>
        <p className="text-neutral-600 mb-6">
          This helps me understand how to best support you. There's no wrong answer!
        </p>

        <div className="space-y-4">
          {[
            {
              value: 'quick-clarity',
              title: 'I need something specific fixed',
              description: 'I have a bottleneck blocking me right now and need it resolved quickly'
            },
            {
              value: 'co-creation',
              title: 'I want to explore an idea together',
              description: 'I have a vision or idea and want someone who gets both tech and my vision'
            },
            {
              value: 'not-sure',
              title: "Not sure yet - let's chat",
              description: "I'm still figuring out what I need and would like to explore options together"
            }
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-start space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                formData.track === option.value
                  ? 'border-primary-600 bg-primary-100'
                  : 'border-neutral-300 bg-white hover:border-primary-400'
              }`}
            >
              <input
                type="radio"
                name="track"
                value={option.value}
                checked={formData.track === option.value}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-primary-600 focus:ring-primary-500"
              />
              <div className="flex-1">
                <p className="font-semibold text-neutral-900 mb-1">{option.title}</p>
                <p className="text-sm text-neutral-600">{option.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Section 1: The Problem */}
      <div className="card">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">The Problem</h3>

        <div className="mb-6">
          <label htmlFor="problemDescription" className="label">
            Describe your problem in 2-3 sentences *
          </label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            rows={4}
            className={`input-field ${errors.problemDescription ? 'border-red-500' : ''}`}
            value={formData.problemDescription || ''}
            onChange={handleChange}
            placeholder="e.g., My contact form submissions aren't reaching my inbox..."
          />
          {errors.problemDescription && (
            <p className="text-red-600 text-sm mt-1">{errors.problemDescription}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="alreadyTried" className="label">
            What have you already tried? (optional)
          </label>
          <textarea
            id="alreadyTried"
            name="alreadyTried"
            rows={3}
            className="input-field"
            value={formData.alreadyTried || ''}
            onChange={handleChange}
            placeholder="e.g., Checked spam folder, contacted my web host..."
          />
        </div>

        <div>
          <label htmlFor="howBlocking" className="label">
            How is this blocking you? *
          </label>
          <textarea
            id="howBlocking"
            name="howBlocking"
            rows={3}
            className={`input-field ${errors.howBlocking ? 'border-red-500' : ''}`}
            value={formData.howBlocking || ''}
            onChange={handleChange}
            placeholder="e.g., I'm losing potential clients every day..."
          />
          {errors.howBlocking && (
            <p className="text-red-600 text-sm mt-1">{errors.howBlocking}</p>
          )}
        </div>
      </div>

      {/* Section 2: Context */}
      <div className="card">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Context</h3>

        <div className="mb-6">
          <label htmlFor="timeline" className="label">
            What's your timeline? *
          </label>
          <select
            id="timeline"
            name="timeline"
            className={`input-field ${errors.timeline ? 'border-red-500' : ''}`}
            value={formData.timeline || ''}
            onChange={handleChange}
          >
            <option value="">Select timeline...</option>
            <option value="asap">Need help ASAP</option>
            <option value="this-month">Within this month</option>
            <option value="exploring">Just exploring options</option>
          </select>
          {errors.timeline && (
            <p className="text-red-600 text-sm mt-1">{errors.timeline}</p>
          )}
        </div>

        <div>
          <label className="label">Project budget range: *</label>
          <div className="space-y-3">
            {[
              { value: '150-250', label: '€150-250' },
              { value: '250-400', label: '€250-400' },
              { value: 'discuss', label: "Let's discuss" },
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="budgetRange"
                  value={option.value}
                  checked={formData.budgetRange === option.value}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-neutral-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.budgetRange && (
            <p className="text-red-600 text-sm mt-2">{errors.budgetRange}</p>
          )}
        </div>
      </div>

      {/* Section 3: About You */}
      <div className="card">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">About You</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`input-field ${errors.name ? 'border-red-500' : ''}`}
              value={formData.name || ''}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-field ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email || ''}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="website" className="label">
            Website/Business (optional)
          </label>
          <input
            type="text"
            id="website"
            name="website"
            className="input-field"
            value={formData.website || ''}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>

        <div>
          <label htmlFor="howDidYouFind" className="label">
            How did you find me? (optional)
          </label>
          <input
            type="text"
            id="howDidYouFind"
            name="howDidYouFind"
            className="input-field"
            value={formData.howDidYouFind || ''}
            onChange={handleChange}
            placeholder="e.g., Google search, friend referral..."
          />
        </div>
      </div>

      {/* Section 4: Vibe Check */}
      <div className="card">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Vibe Check</h3>

        <label className="label mb-3">
          What's most important to you? (select up to 2)
        </label>
        <div className="space-y-3">
          {[
            'Quick solution',
            'Understanding the fix',
            'Long-term relationship',
            'Budget-friendly',
            'Minimal involvement needed',
          ].map((priority) => (
            <label key={priority} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.priorities?.includes(priority) || false}
                onChange={() => handleCheckboxChange(priority)}
                disabled={
                  !formData.priorities?.includes(priority) &&
                  (formData.priorities?.length || 0) >= 2
                }
                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
              />
              <span className="text-neutral-700">{priority}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {errors.submit}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send My Request'}
        </button>
        <p className="text-sm text-neutral-500 mt-4">
          * Required fields
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <h4 className="text-lg font-semibold text-neutral-900 mb-4">Common Questions</h4>

        <div className="space-y-4 text-sm text-neutral-600">
          <div>
            <p className="font-medium text-neutral-800 mb-2">What does this typically cost?</p>
            <p className="leading-relaxed">
              I'm in my first year of independent practice, so my rates are lower than established consultants.
              Most quick fixes fall under €300. For custom builds, it depends on scope—let's talk about what you need.
            </p>
          </div>

          <div>
            <p className="font-medium text-neutral-800 mb-2">Will your rates stay at this level?</p>
            <p className="leading-relaxed">
              I review my rates quarterly as I build experience. These rates reflect my current capacity through March 2026.
            </p>
          </div>

          <div>
            <p className="font-medium text-neutral-800 mb-2">Why are you transparent about being new to this?</p>
            <p className="leading-relaxed">
              Because I'd rather work with people who value honesty and growth over polished sales pitches.
              You get lower rates and passionate problem-solving. I get real-world experience and the chance to build
              something meaningful with you.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
