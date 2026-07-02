import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData } from '../../types';
import { submitContactForm } from '../../services/api';
import Button from '../common/Button';
import FormField from './FormField';
import { getInputClassName } from '../../utils/formStyles';
import FormSuccessMessage from './FormSuccessMessage';

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
      <FormSuccessMessage
        icon={
          <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        }
        title="Message Sent!"
        message="Thank you for reaching out. We'll get back to you within 24 hours."
        resetLabel="Send Another Message"
        onReset={() => setSubmitted(false)}
        colorClass="secondary"
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" htmlFor="name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
            className={getInputClassName(!!errors.name)}
            placeholder="John Doe"
          />
        </FormField>
        <FormField label="Email Address" htmlFor="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
            })}
            className={getInputClassName(!!errors.email)}
            placeholder="john@example.com"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Phone Number" htmlFor="phone" required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required', minLength: { value: 10, message: 'Invalid phone number' } })}
            className={getInputClassName(!!errors.phone)}
            placeholder="99XXXXXXXX"
          />
        </FormField>
        <FormField label="Goal / Concern" htmlFor="goal" required error={errors.goal?.message}>
          <select
            id="goal"
            {...register('goal', { required: 'Please select a goal' })}
            className={getInputClassName(!!errors.goal)}
          >
            <option value="">Select your goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="nutrition">Nutrition Guidance</option>
            <option value="stress">Stress Management</option>
            <option value="yoga">Yoga & Meditation</option>
            <option value="corporate">Corporate Wellness</option>
            <option value="other">Other</option>
          </select>
        </FormField>
      </div>

      <FormField label="Message" htmlFor="message" required error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
          className={getInputClassName(!!errors.message, 'resize-none')}
          placeholder="Tell us about your wellness goals..."
        />
      </FormField>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
