import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#003D34] text-white hover:bg-[#002C25] shadow-md shadow-[#003D34]/20 hover:shadow-lg hover:shadow-[#003D34]/25',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/25',
  outline: 'border-2 border-[#003D34] text-[#003D34] hover:bg-[#003D34] hover:text-white bg-transparent',
  accent: 'bg-accent text-white hover:bg-accent-dark shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/25',
  ghost: 'text-[#003D34] hover:bg-[#003D34]/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

const motionProps = (disabled: boolean) => ({
  whileHover: { scale: disabled ? 1 : 1.02 },
  whileTap: { scale: disabled ? 1 : 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
});

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-medium rounded-full',
    'transition-colors duration-300 cursor-pointer no-underline',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        {...motionProps(disabled)}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps(disabled)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps(disabled)}
    >
      {children}
    </motion.button>
  );
}
