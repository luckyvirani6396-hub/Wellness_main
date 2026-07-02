import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ConsultationFormData } from '../../types';
import { submitConsultationForm } from '../../services/api';
import Button from '../common/Button';
import FormField from './FormField';
import { getInputClassName } from '../../utils/formStyles';
import FormSuccessMessage from './FormSuccessMessage';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>();

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      await submitConsultationForm(data as unknown as Record<string, string>);
    } catch {
      // Frontend-only fallback
    }
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <FormSuccessMessage
        icon={
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        title="Consultation Booked!"
        message="We'll confirm your appointment via email shortly."
        resetLabel="Book Another"
        onReset={() => setSubmitted(false)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" htmlFor="consult-name" required error={errors.name?.message}>
          <input
            id="consult-name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={getInputClassName(!!errors.name)}
            placeholder="John Doe"
          />
        </FormField>
        <FormField label="Email" htmlFor="consult-email" required error={errors.email?.message}>
          <input
            id="consult-email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
            className={getInputClassName(!!errors.email)}
            placeholder="john@example.com"
          />
        </FormField>
      </div>

      <FormField label="Phone" htmlFor="consult-phone" required error={errors.phone?.message}>
        <input
          id="consult-phone"
          type="tel"
          {...register('phone', { required: 'Phone is required' })}
          className={getInputClassName(!!errors.phone)}
          placeholder="99XXXXXXXX"
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Preferred Date" htmlFor="preferredDate" required error={errors.preferredDate?.message}>
          <input
            id="preferredDate"
            type="date"
            {...register('preferredDate', { required: 'Date is required' })}
            min={new Date().toISOString().split('T')[0]}
            className={getInputClassName(!!errors.preferredDate)}
          />
        </FormField>
        <FormField label="Preferred Time" htmlFor="preferredTime" required error={errors.preferredTime?.message}>
          <select
            id="preferredTime"
            {...register('preferredTime', { required: 'Time is required' })}
            className={getInputClassName(!!errors.preferredTime)}
          >
            <option value="">Select time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
          </select>
        </FormField>
      </div>

      <FormField label="Wellness Goal" htmlFor="wellnessGoal" required error={errors.wellnessGoal?.message}>
        <textarea
          id="wellnessGoal"
          rows={3}
          {...register('wellnessGoal', { required: 'Please describe your wellness goal' })}
          className={getInputClassName(!!errors.wellnessGoal, 'resize-none')}
          placeholder="Describe what you'd like to achieve..."
        />
      </FormField>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Booking...' : 'Book Consultation'}
      </Button>
    </form>
  );
}
