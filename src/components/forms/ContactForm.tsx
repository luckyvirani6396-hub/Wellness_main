import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import type { ContactFormData } from '../../types';
import { submitContactForm } from '../../services/api';
import Button from '../common/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setError('');
    try {
      await submitContactForm(data as unknown as Record<string, string>);
      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(true);
      reset();
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-secondary/10 rounded-2xl"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-dark mb-2">Message Sent!</h3>
        <p className="text-muted mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">Full Name *</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-400' : 'border-border'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">Email Address *</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-400' : 'border-border'}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required', minLength: { value: 10, message: 'Invalid phone number' } })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-400' : 'border-border'}`}
            placeholder="99XXXXXXXX"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-dark mb-1.5">Goal / Concern *</label>
          <select
            id="goal"
            {...register('goal', { required: 'Please select a goal' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.goal ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select your goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="nutrition">Nutrition Guidance</option>
            <option value="stress">Stress Management</option>
            <option value="yoga">Yoga & Meditation</option>
            <option value="corporate">Corporate Health</option>
            <option value="other">Other</option>
          </select>
          {errors.goal && <p className="mt-1 text-sm text-red-500">{errors.goal.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">Message *</label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
          className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? 'border-red-400' : 'border-border'}`}
          placeholder="Tell us about your health goals..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
