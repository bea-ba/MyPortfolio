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
  const [showOptionalFields, setShowOptionalFields] = useState(false);

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

    if (!formData.name?.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.problemDescription?.trim()) {
      newErrors.problemDescription = 'Please tell us what you need help with';
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

  const handleOptionalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit additional details
      await submitForm({ ...formData, additionalDetails: true });
      setShowOptionalFields(false);
      // Could show a mini success message here
    } catch (error) {
      console.error('Optional details error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <div className="bg-success-50 border border-success-100 rounded-lg p-8 text-center mb-8">
          <svg
            className="w-16 h-16 text-success-600 mx-auto mb-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor" aria-hidden="true"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Thanks for reaching out!
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            {siteContent.forms.intakeAutoResponse}
          </p>
        </div>

        {/* Optional Additional Details */}
        {!showOptionalFields ? (
          <div className="text-center">
            <button
              onClick={() => setShowOptionalFields(true)}
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              Want to help me prepare better? Share a few more details (optional)
            </button>
          </div>
        ) : (
          <form onSubmit={handleOptionalSubmit} className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Optional: Help Me Prepare
              </h3>
              <p className="text-neutral-600 mb-6">
                These details help me understand your situation better, but they're completely optional.
              </p>

              {/* Track Selection */}
              <div className="mb-6">
                <label className="label mb-3">Which describes you best?</label>
                <div className="space-y-3">
                  {[
                    {
                      value: 'quick-clarity',
                      title: 'I need something specific fixed',
                      description: 'I have a bottleneck blocking me right now'
                    },
                    {
                      value: 'co-creation',
                      title: 'I want to explore an idea together',
                      description: 'I have a vision and want someone who gets both tech and my vision'
                    },
                    {
                      value: 'not-sure',
                      title: "Not sure yet - let's chat",
                      description: "I'm still figuring out what I need"
                    }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.track === option.value
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-300 bg-white hover:border-primary-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="track"
                        value={option.value}
                        checked={formData.track === option.value}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-primary-600"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-neutral-900 mb-1">{option.title}</p>
                        <p className="text-sm text-neutral-600">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <label htmlFor="timeline" className="label">
                  What's your timeline?
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="input-field"
                  value={formData.timeline || ''}
                  onChange={handleChange}
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">Need help ASAP</option>
                  <option value="this-month">Within this month</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              {/* Budget */}
              <div className="mb-6">
                <label className="label">Project budget range:</label>
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
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How did you find me */}
              <div>
                <label htmlFor="howDidYouFind" className="label">
                  How did you find me?
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

            <div className="flex gap-4 justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Saving...' : 'Send Additional Details'}
              </button>
              <button
                type="button"
                onClick={() => setShowOptionalFields(false)}
                className="btn-ghost"
              >
                Skip This
              </button>
            </div>
          </form>
        )}

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
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Simplified Step 1 Form */}
      <div className="card">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">Quick Request Form</h3>
        <p className="text-neutral-600 mb-6">
          Just the basics to get started. I'll respond within 24 hours.
        </p>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="label">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`input-field ${errors.name ? 'border-error-500' : ''}`}
              value={formData.name || ''}
              onChange={handleChange}
              placeholder="e.g., Maria Silva"
            />
            {errors.name && (
              <p className="text-error-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-field ${errors.email ? 'border-error-500' : ''}`}
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="maria@example.com"
            />
            {errors.email && (
              <p className="text-error-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Problem Description */}
          <div>
            <label htmlFor="problemDescription" className="label">
              What would you like help with? *
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              rows={5}
              className={`input-field ${errors.problemDescription ? 'border-error-500' : ''}`}
              value={formData.problemDescription || ''}
              onChange={handleChange}
              placeholder="Describe your situation in 2-3 sentences. For example: 'I run a yoga studio and spend 2 hours every morning manually copying bookings into my calendar. I'd love to automate this.'"
            />
            {errors.problemDescription && (
              <p className="text-error-600 text-sm mt-1">{errors.problemDescription}</p>
            )}
            <p className="text-sm text-neutral-500 mt-2">
              Don't worry about getting it perfect—just give me enough to understand what you're facing.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      {errors.submit && (
        <div className="bg-error-50 border border-error-100 rounded-lg p-4 text-error-700">
          {errors.submit}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Getting this to Bea...' : 'Send Request'}
        </button>
        <p className="text-sm text-neutral-500 mt-4">
          * Required fields • I'll respond within 24 hours
        </p>
      </div>
    </form>
  );
}
