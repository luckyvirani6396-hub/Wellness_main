import { motion } from 'framer-motion';
import { featuredPrograms } from '../../assets/data/content';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { staggerContainer, fadeUp } from '../../utils/animations';

export default function Programs() {
  const handleScrollToAssessment = () => {
    const element = document.getElementById('health-assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icons for step headers
  const stepIcons = [
    // Step 1: Leaf
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 7.5a10 10 0 0 1-10 10.5z" />
      <path d="M19 2L9.8 11.2" />
    </svg>,
    // Step 2: Lotus
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M12 3c-1.2 2.5-3.5 4-6 4 2.5 0 4.8 1.5 6 4 1.2-2.5 3.5-4 6-4-2.5 0-4.8-1.5-6-4z" />
      <path d="M12 11c-1.2 2.5-3.5 4-6 4 2.5 0 4.8 1.5 6 4 1.2-2.5 3.5-4 6-4-2.5 0-4.8-1.5-6-4z" />
      <path d="M12 19V22" />
    </svg>,
    // Step 3: Heartbeat
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ];


  return (
    <section className="py-14 md:py-18 relative overflow-hidden z-10">
      {/* Background decorations - Blur Blobs & Leaf branch drawings */}
      <div className="absolute left-0 top-1/4 w-[280px] h-[450px] bg-gradient-to-r from-[#E8F2EA]/85 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[280px] h-[450px] bg-gradient-to-l from-[#E8F2EA]/85 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />

      {/* Left Leaf branch outline drawing */}
      <div className="absolute left-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-secondary">
          {/* Stem */}
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          {/* Leaf outlines - transparent background (fill="none") */}
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Right Leaf branch outline drawing (flipped) */}
      <div className="absolute right-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40 transform scale-x-[-1]">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-secondary">
          {/* Stem */}
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          {/* Leaf outlines - transparent background (fill="none") */}
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* SVG ClipPaths for Program Card Images */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="programBlob1" clipPathUnits="objectBoundingBox">
            <path d="M0.15,0.2 C0.05,0.35 0,0.55 0.05,0.72 C0.1,0.88 0.32,0.95 0.55,0.92 C0.78,0.88 0.95,0.72 0.98,0.52 C1.02,0.32 0.92,0.18 0.72,0.1 C0.55,0.02 0.3,0.05 0.15,0.2 Z" />
          </clipPath>
          <clipPath id="programBlob2" clipPathUnits="objectBoundingBox">
            <path d="M0.22,0.12 C0.08,0.24 0.05,0.45 0.1,0.65 C0.18,0.85 0.38,0.95 0.58,0.92 C0.78,0.88 0.92,0.72 0.95,0.52 C0.98,0.32 0.88,0.15 0.7,0.08 C0.55,0.02 0.38,0.02 0.22,0.12 Z" />
          </clipPath>
          <clipPath id="programBlob3" clipPathUnits="objectBoundingBox">
            <path d="M0.25,0.1 C0.12,0.18 0.05,0.38 0.08,0.58 C0.12,0.78 0.3,0.92 0.5,0.95 C0.7,0.98 0.88,0.85 0.93,0.68 C0.98,0.5 0.95,0.3 0.8,0.15 C0.65,0.02 0.42,0.02 0.25,0.1 Z" />
          </clipPath>
        </defs>
      </svg>

      <Container>
        <SectionTitle
          subtitle="Corporate Packages"
          title="Wellness Packages for Every Team Size"
          description="From startups to enterprises — choose the package that matches your organization, or let us build a custom one."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mt-12 relative"
        >
          {featuredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              variants={fadeUp}
              className="relative flex flex-col items-center h-full z-10"
            >
              {/* Connector Arrow (Step 1 -> 2, Step 2 -> 3) - hidden on mobile */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-[18px] left-[70%] xl:left-[75%] w-[60px] xl:w-[90px] -translate-y-1/2 z-0 pointer-events-none">
                  <svg viewBox="0 0 80 20" fill="none" className="w-full h-auto text-secondary/40">
                    <path d="M5 10 H 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" />
                    <path d="M66 6 L 72 10 L 66 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Step Header */}
              <div className="flex items-center justify-center gap-2 mb-3 relative z-10">
                <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center text-[#72A93B] shrink-0">
                  {stepIcons[index]}
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#72A93B]">
                  STEP 0{index + 1}
                </span>
              </div>

              {/* Title & Duration */}
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-[22px] font-extrabold text-dark mb-2">
                  {program.title}
                </h3>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-3.5 py-1">
                  {program.duration}
                </span>
              </div>

              {/* Image Container with Organic Cutout Shape & Floating badge */}
              <div
                className="relative mx-auto w-[280px] sm:w-[320px] h-[190px] sm:h-[220px] mb-6 shrink-0 z-10"
                style={{ filter: 'drop-shadow(0 15px 20px rgba(0, 75, 87, 0.1))' }}
              >
                <div
                  className="w-full h-full bg-white"
                  style={{ clipPath: `url(#programBlob${index + 1})` }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

              {/* Description Paragraph */}
              <p className="text-muted leading-relaxed text-sm text-center max-w-xs mx-auto mb-6">
                {program.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3.5 mx-auto w-fit mb-4">
                {(program.features || []).map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-dark font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Horizontal CTA Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 bg-[#E8F2EA]/60 rounded-[24px] p-6 md:px-8 md:py-6 border border-[#E2E8E4]/50 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left flex-1">
            <div className="w-12 h-12 rounded-full bg-[#72A93B] flex items-center justify-center shrink-0 shadow-md shadow-secondary/20">
              {/* Star Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-6 h-6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="white" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-dark text-base md:text-lg mb-0.5">Not sure which package fits your organization?</h4>
              <p className="text-muted text-sm leading-relaxed">Take our quick assessment and we'll recommend the best-fit wellness package.</p>
            </div>
          </div>

          <Button
            onClick={handleScrollToAssessment}
            variant="primary"
            className="font-bold text-sm px-6 py-3.5 shrink-0 flex items-center gap-2 shadow-none"
          >
            {/* Magic Wand / Sparkles Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#8BC34A]">
              <path d="M12 3v1M12 20v1M3 12h1M20 12h1M5.5 5.5l.7.7M17.8 17.8l.7.7M5.5 17.8l.7-.7M17.8 5.5l.7-.7" />
              <path d="M15 15l-5-5-5 5 5 5z" fill="currentColor" opacity="0.3" />
              <path d="M15 9l-3.5 3.5" />
            </svg>
            Find My Program
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
