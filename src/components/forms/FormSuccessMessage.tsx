import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Button from '../common/Button';

interface FormSuccessMessageProps {
  icon: ReactNode;
  title: string;
  message: string;
  resetLabel: string;
  onReset: () => void;
  colorClass?: string;
}

export default function FormSuccessMessage({
  icon,
  title,
  message,
  resetLabel,
  onReset,
  colorClass = 'primary',
}: FormSuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`text-center py-12 px-6 bg-${colorClass}/10 rounded-2xl`}
    >
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${colorClass}/20 flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
      <p className="text-muted mb-6">{message}</p>
      <Button variant="outline" onClick={onReset}>
        {resetLabel}
      </Button>
    </motion.div>
  );
}
