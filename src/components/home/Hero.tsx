import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Leaf } from 'lucide-react';
import UnderlineDivider from '../common/UnderlineDivider';
import {
  useHeroScale,
  HERO_DESIGN_WIDTH,
} from '../../hooks/useHeroScale';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};

/** Original hero — unchanged responsive layout (used at viewport ≥ 1440px) */
function HeroResponsive() {
  return (
    <section className="relative w-full min-h-[750px] lg:h-screen flex items-center bg-[#F8FAF6] overflow-hidden">
      {/* Background Image with subtle sun overlay */}
      <div className="absolute inset-0 z-0 select-none -top-5">
        <img
          src="/images/hero.png"
          alt="WellRise Wellness Path"
          className="w-full h-full object-cover object-[center_12%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 via-white/40 to-transparent md:bg-gradient-to-r md:from-white md:via-white/22 md:via-white/15 md:via-white/35 md:to-transparent" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-6 md:px-12 pt-[120px] lg:pt-[120px] pb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start text-left"
            >
              <motion.div
                variants={childVariants}
                className="flex items-center gap-2 mb-2"
              >
                <img src="/images/leaf.png" alt="" className='w-12 h-12 object-contain' />
                <span className="font-script text-2xl text-[#5c8730] font-medium leading-none">
                  Inspiring you to live a healthier lifestyle
                </span>
              </motion.div>

              <motion.h1
                variants={childVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] tracking-tight leading-[1.05] text-[#0e261a] font-serif font-medium mb-3 max-w-2xl"
              >
                Empower Your <br />
                <span className="italic font-normal text-[#5c8730] inline-flex items-center gap-2.5">
                  Wellness Journey
                </span>
              </motion.h1>

              <motion.div
                variants={childVariants}
                className="mb-6 flex"
              >
                <UnderlineDivider className="w-48 h-2.5 text-[#5c8730]/75" />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={childVariants}
                className="text-sm sm:text-base md:text-[16.5px] text-[#2c4033] max-w-lg mb-8 leading-relaxed font-medium"
              >
                Transform your daily habits and restore natural vitality with personalized wellness coaching, active living, and mindful nutrition.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={childVariants}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/programs"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
                >
                  <span>Explore Programs</span>
                  <span className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center text-[#5c8730]">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-transparent border border-[#0e261a] text-[#0e261a] hover:bg-[#0e261a]/5 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#0e261a]" strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Client Stats Card (Bottom Left) - hidden on mobile, visible on sm and up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        className="hidden sm:flex absolute bottom-16 lg:bottom-20 left-6 lg:left-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl px-6 py-4.5 items-center gap-6 max-w-xl z-20"
      >
        {/* Stat 1 */}
        <div className="flex items-center gap-3.5">
          <Users className="w-7 h-7 shrink-0 text-[#5c8730]" strokeWidth={1.8} />
          <div>
            <div className="text-[17px] font-extrabold text-[#0e261a] leading-none">5000+</div>
            <div className="text-[11px] text-[#4d5e53] font-semibold mt-1 whitespace-nowrap">Happy Clients</div>
          </div>
        </div>

        {/* Separator */}
        <span className="h-8 w-[1px] bg-gray-200" />

        {/* Stat 2 */}
        <div className="flex items-center gap-3.5">
          <Award className="w-7 h-7 shrink-0 text-[#5c8730]" strokeWidth={1.8} />
          <div>
            <div className="text-[17px] font-extrabold text-[#0e261a] leading-none">20+</div>
            <div className="text-[11px] text-[#4d5e53] font-semibold mt-1 whitespace-nowrap">Expert Coaches</div>
          </div>
        </div>

        {/* Separator */}
        <span className="h-8 w-[1px] bg-gray-200" />

        {/* Stat 3 */}
        <div className="flex items-center gap-3.5">
          <Leaf className="w-7 h-7 shrink-0 text-[#5c8730]" strokeWidth={1.8} />
          <div>
            <div className="text-[17px] font-extrabold text-[#0e261a] leading-none">100%</div>
            <div className="text-[11px] text-[#4d5e53] font-semibold mt-1 whitespace-nowrap">Holistic Approach</div>
          </div>
        </div>
      </motion.div>

      {/* Curved White Wave Separator at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[110px] block translate-y-[1px]"
        >
          <path
            d="M0,80 C320,130 720,10 1440,70 L1440,120 L0,120 Z"
            fill="#F8FAF6"
          />
        </svg>
      </div>
    </section>
  );
}

/**
 * Same hero frozen at desktop (1440px) appearance — only used inside the scale wrapper
 * below 1440px viewport. Visual matches HeroResponsive at lg breakpoint.
 */
function HeroCanvas({
  canvasHeight,
  contentTopPadding,
}: {
  canvasHeight: number;
  contentTopPadding: number;
}) {
  return (
    <section
      className="relative flex flex-col justify-start bg-[#F8FAF6] overflow-hidden"
      style={{ width: HERO_DESIGN_WIDTH, height: canvasHeight }}
    >
      <div className="absolute inset-0 z-0 select-none -top-5">
        <img
          src="/images/hero.png"
          alt="WellRise Wellness Path"
          className="w-full h-full object-cover object-[center_12%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/22 via-white/15 via-white/35 to-transparent" />
      </div>

      <div
        className="relative z-20 w-full max-w-8xl mx-auto px-12 pb-20"
        style={{ paddingTop: contentTopPadding }}
      >
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-7 flex flex-col items-start justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start text-left"
            >
              <motion.div variants={childVariants} className="flex items-center gap-2 mb-2">
                <img src="/images/leaf.png" alt="" className="w-12 h-12 object-contain" />
                <span className="font-script text-3xl text-[#5c8730] font-medium leading-none">
                  Inspiring you to live a healthier lifestyle
                </span>
              </motion.div>

              <motion.h1
                variants={childVariants}
                className="text-[80px] tracking-tight leading-[1.05] text-[#0e261a] font-serif font-medium mb-3 max-w-4xl"
              >
                Empower Your <br />
                <span className="italic font-normal text-[#5c8730] inline-flex items-center gap-2.5">
                  Wellness Journey
                </span>
              </motion.h1>

              <motion.div variants={childVariants} className="mb-6 flex">
                <UnderlineDivider className="w-48 h-2.5 text-[#5c8730]/75" />
              </motion.div>

              <motion.p
                variants={childVariants}
                className="text-[20.5px] text-[#2c4033] max-w-lg mb-8 leading-relaxed font-medium"
              >
                Transform your daily habits and restore natural vitality with personalized wellness coaching, active living, and mindful nutrition.
              </motion.p>

              <motion.div variants={childVariants} className="flex flex-wrap items-center gap-4">
                <Link
                  to="/programs"
                  className="px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
                >
                  <span>Explore Programs</span>
                  <span className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center text-[#5c8730]">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-transparent border border-[#0e261a] text-[#0e261a] hover:bg-[#0e261a]/5 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#0e261a]" strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        className="hidden  absolute bottom-[126px] left-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-2xl px-6 py-4.5 items-center gap-6 max-w-xl z-20"
      >
        <div className="flex items-center gap-3.5">
          <Users className="w-9 h-9 shrink-0 text-[#5c8730]" strokeWidth={1.8} />
          <div>
            <div className="text-[22px] font-extrabold text-[#0e261a] leading-none">5000+</div>
            <div className="text-[15px] text-[#4d5e53] font-semibold mt-1 whitespace-nowrap">Happy Clients</div>
          </div>
        </div>
        <span className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3.5">
          <Award className="w-9 h-9 shrink-0 text-[#5c8730]" strokeWidth={1.8} />
          <div>
            <div className="text-[22px] font-extrabold text-[#0e261a] leading-none">20+</div>
            <div className="text-[15px] text-[#4d5e53] font-semibold mt-1 whitespace-nowrap">Expert Coaches</div>
          </div>
        </div>
        <span className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3.5">
          <Leaf className="w-9 h-9 shrink-0 text-[#5c8730]" strokeWidth={1.8} />
          <div>
            <div className="text-[22px] font-extrabold text-[#0e261a] leading-none">100%</div>
            <div className="text-[15px] text-[#4d5e53] font-semibold mt-1 whitespace-nowrap">Holistic Approach</div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[110px] block translate-y-[1px]"
        >
          <path
            d="M0,80 C320,130 720,10 1440,70 L1440,120 L0,120 Z"
            fill="#F8FAF6"
          />
        </svg>
      </div>
    </section>
  );
}

export default function Hero() {
  const { scale, height, canvasHeight, contentTopPadding } = useHeroScale();

  // Viewport ≥ 1024px (lg breakpoint) or full desktop — use native responsive layout
  if (scale >= 0.71) {
    return <HeroResponsive />;
  }

  // Viewport < 1440px — proportionally scale desktop layout to fit width
  const scaledWidth = HERO_DESIGN_WIDTH * scale;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      <div className="relative mx-auto" style={{ width: scaledWidth, height }}>
        <div
          style={{
            width: HERO_DESIGN_WIDTH,
            height: canvasHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            willChange: 'transform',
          }}
        >
          <HeroCanvas
            canvasHeight={canvasHeight}
            contentTopPadding={contentTopPadding}
          />
        </div>
      </div>
    </section>
  );
}
