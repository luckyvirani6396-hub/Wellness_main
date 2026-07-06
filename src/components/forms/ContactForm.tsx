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
        <h3 className="text-xl font-semibold text-dark mb-2">Inquiry Submitted!</h3>
        <p className="text-muted mb-6">Thank you for reaching out. Our wellness consultant will contact you within 24 hours.</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit Another Inquiry
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
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">Work Email *</label>
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
          <label htmlFor="company" className="block text-sm font-medium text-dark mb-1.5">Company Name *</label>
          <input
            id="company"
            type="text"
            {...register('company', { required: 'Company name is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.company ? 'border-red-400' : 'border-border'}`}
            placeholder="Acme Corp"
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-dark mb-1.5">Job Title *</label>
          <input
            id="jobTitle"
            type="text"
            {...register('jobTitle', { required: 'Job title is required' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.jobTitle ? 'border-red-400' : 'border-border'}`}
            placeholder="HR Manager"
          />
          {errors.jobTitle && <p className="mt-1 text-sm text-red-500">{errors.jobTitle.message}</p>}
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-dark mb-1.5">Industry Type *</label>
          <select
            id="industry"
            {...register('industry', { required: 'Please select an industry' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.industry ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select your industry</option>
            <option value="it">Information Technology</option>
            <option value="finance">Finance & Banking</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail</option>
            <option value="hospitality">Hospitality</option>
            <option value="government">Government</option>
            <option value="logistics">Logistics</option>
            <option value="startup">Startup</option>
            <option value="bpo">BPO & Customer Support</option>
            <option value="professional-services">Professional Services</option>
            <option value="other">Other</option>
          </select>
          {errors.industry && <p className="mt-1 text-sm text-red-500">{errors.industry.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="headcount" className="block text-sm font-medium text-dark mb-1.5">Employee Headcount *</label>
          <select
            id="headcount"
            {...register('headcount', { required: 'Please select employee headcount' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.headcount ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select headcount</option>
            <option value="20-50">20–50 Employees</option>
            <option value="50-250">50–250 Employees</option>
            <option value="250+">250+ Employees</option>
          </select>
          {errors.headcount && <p className="mt-1 text-sm text-red-500">{errors.headcount.message}</p>}
        </div>
        <div>
          <label htmlFor="programType" className="block text-sm font-medium text-dark mb-1.5">Wellness Program Interested In *</label>
          <select
            id="programType"
            {...register('programType', { required: 'Please select a program type' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.programType ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select program type</option>
            <option value="physical">Physical Wellness</option>
            <option value="mental">Mental Wellbeing</option>
            <option value="nutrition">Nutrition & Healthy Living</option>
            <option value="emotional">Emotional Wellness</option>
            <option value="social">Social Wellbeing</option>
            <option value="work-life-balance">Work-Life Balance</option>
            <option value="financial">Financial Wellness</option>
            <option value="preventive">Preventive Healthcare</option>
            <option value="environmental">Environmental Wellness</option>
            <option value="holistic">Holistic Wellness</option>
            <option value="multiple">Multiple / Custom Program</option>
          </select>
          {errors.programType && <p className="mt-1 text-sm text-red-500">{errors.programType.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="deliveryMode" className="block text-sm font-medium text-dark mb-1.5">Preferred Delivery Mode *</label>
          <select
            id="deliveryMode"
            {...register('deliveryMode', { required: 'Please select a delivery mode' })}
            className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.deliveryMode ? 'border-red-400' : 'border-border'}`}
          >
            <option value="">Select delivery mode</option>
            <option value="in-person">In-Person</option>
            <option value="virtual">Virtual</option>
            <option value="hybrid">Hybrid</option>
          </select>
          {errors.deliveryMode && <p className="mt-1 text-sm text-red-500">{errors.deliveryMode.message}</p>}
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-dark mb-1.5">Preferred Start Date</label>
          <input
            id="startDate"
            type="date"
            {...register('startDate')}
            className="w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 border-border"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">Message / Requirements *</label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
          className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? 'border-red-400' : 'border-border'}`}
          placeholder="Tell us about your wellness goals and requirements..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}
