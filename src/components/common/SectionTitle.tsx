import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-2xl mb-8 md:mb-10 ${alignClass}`}
    >
      {subtitle && (
        <div className="mb-5">
          <span className={`inline-block text-[11px] font-extrabold uppercase tracking-widest rounded-full px-4.5 py-2 ${
            light 
              ? 'text-white bg-white/10' 
              : 'text-[#72A93B] bg-[#E8F2EA]'
          }`}>
            {subtitle}
          </span>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/80' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
