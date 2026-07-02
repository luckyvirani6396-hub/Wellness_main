import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { fadeUp } from '../../utils/animations';

const MotionLink = motion.create(Link);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  to?: string;
  image?: string;
}

export default function ServiceCard({ title, description, to, image }: ServiceCardProps) {
  const cardClass =
    'group relative flex flex-col h-full bg-white rounded-2xl border border-border hover:border-secondary/40 transition-all duration-500 no-underline overflow-hidden hover:shadow-2xl hover:shadow-secondary/15';

  const cardContent = (
    <>
      {/* Image section with overlay animations */}
      {image && (
        <div className="relative w-full h-56 overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Dark gradient overlay — slides up on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          {/* Centered CTA on image — fades in on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span className="px-6 py-2.5 rounded-full bg-white/95 text-secondary text-sm font-bold shadow-lg backdrop-blur-sm flex items-center gap-2 scale-75 group-hover:scale-100 transition-transform duration-500 delay-150">
              View Details
              <HiArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      )}

      {/* Content section */}
      <div className={`flex flex-col flex-1 ${image ? 'p-6 sm:p-7' : 'p-8'}`}>
        {/* Accent line — expands on hover */}
        <div className="w-8 h-0.5 bg-secondary rounded-full mb-4 transition-all duration-500 group-hover:w-14 group-hover:bg-secondary" />

        <h3 className="text-lg font-bold text-dark mb-2 transition-colors duration-300 group-hover:text-secondary">
          {title}
        </h3>
        <p className="text-muted leading-relaxed text-sm flex-1">{description}</p>


      </div>
    </>
  );

  const motionProps = {
    variants: fadeUp,
  };

  if (to) {
    return (
      <MotionLink to={to} className={cardClass} {...motionProps}>
        {cardContent}
      </MotionLink>
    );
  }

  return (
    <motion.div className={cardClass} {...motionProps}>
      {cardContent}
    </motion.div>
  );
}
