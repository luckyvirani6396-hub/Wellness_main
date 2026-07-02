import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import UnderlineDivider from '../common/UnderlineDivider';
import { Home } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  objectPosition = 'center',
}: PageHeroProps) {
  const bgImage = image || '/images/about-hero.png';

  return (
    <section className="relative w-full overflow-hidden flex items-center bg-[#F8FAF6] pt-[150px] pb-12 min-h-[380px] md:min-h-[420px]">
      {/* Background Image — Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 z-0 select-none"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <img
          src={bgImage}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
      </motion.div>

      {/* Strong white misty gradient matching the Home Hero */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 via-white/80 via-white/30 to-transparent md:bg-gradient-to-r md:from-white md:via-white/90 md:via-white/70 md:via-white/20 md:to-transparent" />

      {/* Content */}
      <Container className="relative z-20 w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#004B57]/90 mb-4">
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-[#72A93B] transition-colors duration-200"
            >
              <Home className="w-3.5 h-3.5 text-[#5c8730]" />
              <span>Home</span>
            </Link>
            <span className="text-[#004B57]/30">/</span>
            {subtitle && (
              <>
                <span className="text-[#004B57]/70">{subtitle}</span>
                <span className="text-[#004B57]/30">/</span>
              </>
            )}
            <span className="text-[#5C8730] font-bold">{title}</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#0e261a] leading-none mb-3">
            {title}
          </h1>

          <div className="mb-4 flex">
            <UnderlineDivider className="w-36 h-2 text-[#5c8730]/75" />
          </div>

          {/* Description */}
          {description && (
            <p className="text-[14px] md:text-[15.5px] text-[#2c4033] leading-relaxed max-w-md font-medium">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}