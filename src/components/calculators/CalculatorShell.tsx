import type { ReactNode } from 'react';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-border bg-background text-dark placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors';

interface CalculatorFieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  className?: string;
}

export function CalculatorField({ label, children, error, className = '' }: CalculatorFieldProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-dark mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function CalculatorInput({
  error,
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      className={`${inputClass} ${error ? 'border-red-400' : ''} ${className}`}
      {...props}
    />
  );
}

export function CalculatorSelect({
  className = '',
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={`${inputClass} ${className}`} {...props}>
      {children}
    </select>
  );
}

interface CalculatorShellProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export default function CalculatorShell({
  icon,
  title,
  description,
  children,
  className = '',
}: CalculatorShellProps) {
  return (
    <div className={`group flex flex-col bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/25 transition-all duration-300 ${className}`}>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-5 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 text-primary group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-dark leading-snug">{title}</h3>
            <p className="text-muted text-sm mt-1 leading-relaxed line-clamp-2 min-h-[2.5rem]">{description}</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
