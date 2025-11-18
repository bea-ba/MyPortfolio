'use client';

import { useState } from 'react';
import { CoffeeChat } from '@/lib/types';
import { isValidEmail, submitForm } from '@/lib/utils';
import { siteContent } from '@/data/siteContent';
import { mockTimeSlots } from '@/data/portfolioItems';

export default function SchedulePage() {
  const [formData, setFormData] = useState<Partial<CoffeeChat>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      newErrors.stuckOn = 'Please tell me what you\'re stuck on';
    }
    if (!formData.desiredOutcome?.trim()) {
      newErrors.desiredOutcome = 'Please share your desired outcome';
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

  if (isSubmitted) {
    return (
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
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
              Coffee Chat Scheduled!
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              {siteContent.forms.coffeeConfirmation}
            </p>
          </div>
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
            <p className="text-sm text-neutral-600">Link sent 5 min before</p>
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
            <h3 className="font-bold text-neutral-900 mb-2">One Problem</h3>
            <p className="text-sm text-neutral-600">Keep it focused</p>
          </div>
        </div>

        {/* Scheduling Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Info */}
          <div className="card">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Your Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          {/* What You Need */}
          <div className="card">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">What You Need</h3>

            <div className="mb-6">
              <label htmlFor="stuckOn" className="label">
                What's the ONE thing you're stuck on? *
              </label>
              <textarea
                id="stuckOn"
                name="stuckOn"
                rows={3}
                className={`input-field ${errors.stuckOn ? 'border-red-500' : ''}`}
                value={formData.stuckOn || ''}
                onChange={handleChange}
                placeholder="e.g., My website contact form isn't working..."
              />
              {errors.stuckOn && (
                <p className="text-red-600 text-sm mt-1">{errors.stuckOn}</p>
              )}
            </div>

            <div>
              <label htmlFor="desiredOutcome" className="label">
                What outcome would make this chat worthwhile? *
              </label>
              <textarea
                id="desiredOutcome"
                name="desiredOutcome"
                rows={3}
                className={`input-field ${errors.desiredOutcome ? 'border-red-500' : ''}`}
                value={formData.desiredOutcome || ''}
                onChange={handleChange}
                placeholder="e.g., Understanding if this is a quick fix or needs a bigger solution..."
              />
              {errors.desiredOutcome && (
                <p className="text-red-600 text-sm mt-1">{errors.desiredOutcome}</p>
              )}
            </div>
          </div>

          {/* Time Selection */}
          <div className="card">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Pick a Time</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="label">
                  Preferred Day *
                </label>
                <select
                  id="preferredDate"
                  name="preferredDate"
                  className={`input-field ${errors.preferredDate ? 'border-red-500' : ''}`}
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
                  <p className="text-red-600 text-sm mt-1">{errors.preferredDate}</p>
                )}
              </div>

              <div>
                <label htmlFor="preferredTime" className="label">
                  Preferred Time *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  className={`input-field ${errors.preferredTime ? 'border-red-500' : ''}`}
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
                  <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>
                )}
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-neutral-700">
                <strong>Note:</strong> All times are in Lisbon timezone (WET/WEST). Maximum 2 slots per week available.
              </p>
            </div>
          </div>

          {/* Submit */}
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
              {isSubmitting ? 'Scheduling...' : 'Schedule Coffee Chat'}
            </button>
            <p className="text-sm text-neutral-500 mt-4">
              * Required fields
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
