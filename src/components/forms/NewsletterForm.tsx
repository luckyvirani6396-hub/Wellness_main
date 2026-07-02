import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import type { NewsletterFormData } from '../../types';
import { subscribeNewsletter } from '../../services/api';
import Button from '../common/Button';

interface NewsletterFormProps {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      await subscribeNewsletter(data.email);
    } catch {
      // Frontend-only fallback
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r from-primary/[0.06] to-secondary/[0.08] rounded-2xl border border-border ${
        compact ? 'p-5' : 'p-6 md:p-8 lg:p-10'
      }`}
    >
      {!compact && (
        <div className="absolute left-0 bottom-0 w-[120px] h-[200px] pointer-events-none opacity-30 text-secondary">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
            <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      <div className="relative z-10">
      <h3 className={`font-semibold text-dark mb-2 ${compact ? 'text-base' : 'text-lg md:text-xl'}`}>
        Stay Updated
      </h3>
      <p
        className={`text-muted leading-relaxed ${
          compact ? 'text-sm mb-5' : 'text-sm md:text-base mb-6 max-w-2xl'
        }`}
      >
        Get weekly wellness tips and exclusive offers in your inbox.
      </p>

      {submitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-secondary font-medium text-sm"
        >
          Thank you for subscribing!
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full min-w-0" noValidate>
          <div className={`flex gap-3 ${compact ? 'flex-col' : 'flex-col sm:flex-row sm:items-stretch'}`}>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
              className={`w-full min-w-0 px-4 py-3 rounded-xl border bg-white text-dark placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors ${
                compact ? '' : 'sm:flex-1'
              } ${errors.email ? 'border-red-400' : 'border-border'}`}
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              fullWidth={compact}
              className={compact ? '' : 'sm:px-10 shrink-0'}
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </Button>
          </div>
          {errors.email && (
            <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>
          )}
        </form>
      )}
      </div>
    </div>
  );
}
