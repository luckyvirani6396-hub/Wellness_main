import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Check } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import { fadeUp } from '../../utils/animations';

const MotionLink = motion.create(Link);

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: string;
  features: string[];
  to?: string;
  compact?: boolean;
  image?: string;
}

export default function ProgramCard({
  title,
  subtitle,
  description,
  duration,
  icon,
  features,
  to = '/contact',
  compact = false,
  image,
}: ProgramCardProps) {
  const card = (
    <div className="group relative flex flex-col h-full bg-white rounded-[24px] border border-[#E2E8E4]/60 overflow-hidden hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/12">
      {image && (
        <div className="relative w-full aspect-[4/3] min-h-[220px] overflow-hidden shrink-0 bg-[#EAF2E1]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 text-[#003D34] text-[10px] font-extrabold uppercase tracking-widest shadow-sm border border-[#E2E8E4]/20">
            {duration}
          </span>
        </div>
      )}

      <div className={`flex flex-col flex-1 ${image ? 'p-6 md:p-7' : compact ? 'p-6' : 'p-8 md:p-10'}`}>
        {!image && (
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EAF2E1] to-[#DDEFCF] flex items-center justify-center shrink-0 border border-[#E2E8E4]/40 text-[#496b26] shadow-sm">
              <ServiceIcon name={icon} className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#EAF2E1]/80 text-[#5c8730] border border-[#5c8730]/20 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              {duration}
            </span>
          </div>
        )}

        {image && (
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#EAF2E1] flex items-center justify-center shrink-0 text-[#496b26]">
              <ServiceIcon name={icon} className="w-4.5 h-4.5" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B]">
              {subtitle}
            </span>
          </div>
        )}

        {!image && (
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] mb-1.5 leading-none">
            {subtitle}
          </p>
        )}

        <h3 className={`font-extrabold text-dark mb-3 group-hover:text-[#72A93B] transition-colors duration-300 leading-snug ${
          compact ? 'text-lg' : 'text-xl md:text-2xl'
        }`}>
          {title}
        </h3>

        <p className="text-muted leading-relaxed text-sm mb-5 flex-1 line-clamp-3">
          {description}
        </p>

        <ul className="space-y-2.5 mb-5">
          {features.slice(0, compact ? 3 : 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-dark font-medium">
              <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#72A93B]" strokeWidth={3} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-[#E2E8E4]/60 flex items-center justify-between">
          <span className="text-[#003D34] group-hover:text-secondary text-sm font-extrabold uppercase tracking-wider transition-colors duration-300">
            Enroll in Program
          </span>
          <span className="w-8 h-8 rounded-full bg-[#E8F2EA] group-hover:bg-[#5c8730] transition-colors duration-300 flex items-center justify-center text-[#5c8730] group-hover:text-white shrink-0">
            <HiArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
      <MotionLink to={to} className="block h-full no-underline">
        {card}
      </MotionLink>
    </motion.div>
  );
}
