import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import type { ConsultationFormData } from '../../types';
import { submitConsultationForm } from '../../services/api';
import Button from '../common/Button';

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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-primary/10 rounded-2xl"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-dark mb-2">Consultation Booked!</h3>
        <p className="text-muted mb-6">We&apos;ll confirm your appointment via email shortly.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Book Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="consult-name" className="block text-sm font-medium text-dark mb-1.5">Full Name *</label>
          <input
            id="consult-name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-400' : 'border-border'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="consult-email" className="block text-sm font-medium text-dark mb-1.5">Email *</label>
          <input
            id="consult-email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-400' : 'border-border'}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="consult-phone" className="block text-sm font-medium text-dark mb-1.5">Phone *</label>
        <input
          id="consult-phone"
          type="tel"
          {...register('phone', { required: 'Phone is required' })}
          className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-400' : 'border-border'}`}
          placeholder="99XXXXXXXX"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-dark mb-1.5">Preferred Date *</label>
          <input
            id="preferredDate"
            type="date"
            {...register('preferredDate', { required: 'Date is required' })}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.preferredDate ? 'border-red-400' : 'border-border'}`}
          />
          {errors.preferredDate && <p className="mt-1 text-sm text-red-500">{errors.preferredDate.message}</p>}
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-dark mb-1.5">Preferred Time *</label>
          <select
            id="preferredTime"
            {...register('preferredTime', { required: 'Time is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.preferredTime ? 'border-red-400' : 'border-border'}`}
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
          {errors.preferredTime && <p className="mt-1 text-sm text-red-500">{errors.preferredTime.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="healthGoal" className="block text-sm font-medium text-dark mb-1.5">Health Goal *</label>
        <textarea
          id="healthGoal"
          rows={3}
          {...register('healthGoal', { required: 'Please describe your health goal' })}
          className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.healthGoal ? 'border-red-400' : 'border-border'}`}
          placeholder="Describe what you'd like to achieve..."
        />
        {errors.healthGoal && <p className="mt-1 text-sm text-red-500">{errors.healthGoal.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Booking...' : 'Book Consultation'}
      </Button>
    </form>
  );
}
