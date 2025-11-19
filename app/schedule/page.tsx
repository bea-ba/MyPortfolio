'use client';

import { useState } from 'react';
import { CoffeeChat } from '@/lib/types';
import { isValidEmail, submitForm } from '@/lib/utils';
import { siteContent } from '@/data/siteContent';
import { mockTimeSlots } from '@/data/portfolioItems';
import TestimonialQuote from '@/components/TestimonialQuote';

export default function SchedulePage() {
  const [formData, setFormData] = useState<Partial<CoffeeChat>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOptionalPrep, setShowOptionalPrep] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
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
    if (!formData.stuckOn?.trim()) {
      newErrors.stuckOn = 'Please share what\'s on your mind';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a date';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a time';
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
      // TODO: Replace with actual scheduling integration (Calendly, Cal.com, etc.)
      const result = await submitForm(formData);

      if (result.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Scheduling error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOptionalPrepSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitForm({ ...formData, prepDetails: true });
      setShowOptionalPrep(false);
    } catch (error) {
      console.error('Prep details error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-success-50 border border-success-100 rounded-lg p-8 text-center mb-8">
            <svg
              className="w-16 h-16 text-success-600 mx-auto mb-4"
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
              Coffee Chat Scheduled!
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-2">
              {siteContent.forms.coffeeConfirmation}
            </p>
          </div>

          {/* Optional Prep Questions */}
          {!showOptionalPrep ? (
            <div className="text-center">
              <button
                onClick={() => setShowOptionalPrep(true)}
                className="text-primary-600 hover:text-primary-700 font-medium underline"
              >
                Want to help me prepare for our chat? Share more details (optional)
              </button>
            </div>
          ) : (
            <form onSubmit={handleOptionalPrepSubmit} className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Optional: Help Me Prepare
                </h3>
                <p className="text-neutral-600 mb-6">
                  These details help me come to our chat prepared, but they're completely optional.
                </p>

                <div className="space-y-6">
                  {/* More Detail on Problem */}
                  <div>
                    <label htmlFor="moreDetail" className="label">
                      Want to elaborate on what you need help with?
                    </label>
                    <textarea
                      id="moreDetail"
                      name="moreDetail"
                      rows={4}
                      className="input-field"
                      placeholder="Any additional context that might be helpful..."
                    />
                  </div>

                  {/* Desired Outcome */}
                  <div>
                    <label htmlFor="desiredOutcome" className="label">
                      What would make this chat worthwhile for you?
                    </label>
                    <textarea
                      id="desiredOutcome"
                      name="desiredOutcome"
                      rows={3}
                      className="input-field"
                      placeholder="e.g., Understanding if this is a quick fix or needs a bigger solution..."
                    />
                  </div>

                  {/* Anything else */}
                  <div>
                    <label htmlFor="additionalContext" className="label">
                      Anything else I should know?
                    </label>
                    <textarea
                      id="additionalContext"
                      name="additionalContext"
                      rows={2}
                      className="input-field"
                      placeholder="Optional..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Send Prep Details'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowOptionalPrep(false)}
                  className="btn-ghost"
                >
                  Skip This
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Let's Have a Coffee Chat
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {siteContent.forms.coffeeFormIntro}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <svg
              className="w-12 h-12 text-primary-600 mx-auto mb-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-neutral-900 mb-2">30 Minutes</h3>
            <p className="text-sm text-neutral-600">Quick and focused</p>
          </div>

          <div className="card text-center">
            <svg
              className="w-12 h-12 text-primary-600 mx-auto mb-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-neutral-900 mb-2">Video Call</h3>
            <p className="text-sm text-neutral-600">Link sent before chat</p>
          </div>

          <div className="card text-center">
            <svg
              className="w-12 h-12 text-primary-600 mx-auto mb-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-neutral-900 mb-2">No Commitment</h3>
            <p className="text-sm text-neutral-600">Just a conversation</p>
          </div>
        </div>

        {/* Testimonial Trust Signal */}
        <div className="mb-12">
          <TestimonialQuote testimonialId="1" />
        </div>

        {/* Scheduling Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="card">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Book Your Slot</h3>
            <p className="text-neutral-600 mb-6">
              Just the basics. We'll explore your situation during the chat.
            </p>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`input-field ${errors.name ? 'border-error-500' : ''}`}
                  value={formData.name || ''}
                  onChange={handleChange}
                  placeholder="Your name"
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
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-error-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* What's on your mind */}
              <div>
                <label htmlFor="stuckOn" className="label">
                  What would you like to discuss? *
                </label>
                <input
                  type="text"
                  id="stuckOn"
                  name="stuckOn"
                  className={`input-field ${errors.stuckOn ? 'border-error-500' : ''}`}
                  value={formData.stuckOn || ''}
                  onChange={handleChange}
                  placeholder="One sentence is fine—we'll dig deeper during our chat"
                />
                {errors.stuckOn && (
                  <p className="text-error-600 text-sm mt-1">{errors.stuckOn}</p>
                )}
                <p className="text-sm text-neutral-500 mt-2">
                  e.g., "Automating my booking process" or "Exploring a custom tool idea"
                </p>
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label htmlFor="preferredDate" className="label">
                    Preferred Day *
                  </label>
                  <select
                    id="preferredDate"
                    name="preferredDate"
                    className={`input-field ${errors.preferredDate ? 'border-error-500' : ''}`}
                    value={formData.preferredDate || ''}
                    onChange={handleChange}
                  >
                    <option value="">Select a day...</option>
                    {Array.from(new Set(mockTimeSlots.map((slot) => slot.day))).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  {errors.preferredDate && (
                    <p className="text-error-600 text-sm mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="label">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className={`input-field ${errors.preferredTime ? 'border-error-500' : ''}`}
                    value={formData.preferredTime || ''}
                    onChange={handleChange}
                    disabled={!formData.preferredDate}
                  >
                    <option value="">Select a time...</option>
                    {mockTimeSlots
                      .filter((slot) => slot.day === formData.preferredDate && slot.available)
                      .map((slot) => (
                        <option key={`${slot.day}-${slot.time}`} value={slot.time}>
                          {slot.time}
                        </option>
                      ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="text-error-600 text-sm mt-1">{errors.preferredTime}</p>
                  )}
                </div>
              </div>

              <div className="p-4 bg-info-50 rounded-lg">
                <p className="text-sm text-neutral-700">
                  <strong>Note:</strong> All times are in Lisbon timezone (WET/WEST). You'll receive a calendar invite with video link.
                </p>
              </div>
            </div>
          </div>

          {/* Submit */}
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
              {isSubmitting ? 'Finding the perfect slot...' : 'Book Coffee Chat'}
            </button>
            <p className="text-sm text-neutral-500 mt-4">
              * Required fields
            </p>
            <p className="text-sm text-neutral-600 mt-3">
              Prefer to write instead of talk? <a href="/intake" className="text-primary-600 hover:text-primary-700 font-medium underline">Fill out our form</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
