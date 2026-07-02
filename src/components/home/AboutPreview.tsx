import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Container from '../common/Container';
import Button from '../common/Button';
import { SITE_NAME } from '../../constants';
import { fadeUp } from '../../utils/animations';

export default function AboutPreview() {
  return (
    <section className="py-14 md:py-18 pb-20 md:pb-24 relative overflow-x-clip">
      {/* Background leaf shadows / depth-of-field foliage overlays */}

      {/* Bottom-left: sharper organic branch */}
      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] pointer-events-none z-10 blur-[1.5px] opacity-85 origin-bottom-left scale-110">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A0D978" />
              <stop offset="100%" stopColor="#72A93B" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#72A93B" />
              <stop offset="100%" stopColor="#5C8730" />
            </linearGradient>
          </defs>
          {/* Stems */}
          <path d="M0 200C40 180 80 140 110 90" stroke="#5C8730" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 175C60 155 80 145 95 138" stroke="#5C8730" strokeWidth="2" strokeLinecap="round" />
          <path d="M70 148C85 125 105 115 115 110" stroke="#5C8730" strokeWidth="2" strokeLinecap="round" />

          {/* Leaves */}
          <path d="M110 90C125 80 145 75 160 80C145 95 125 100 110 90Z" fill="url(#leafGrad1)" />
          <path d="M95 138C110 125 130 120 145 125C130 140 110 145 95 138Z" fill="url(#leafGrad1)" />
          <path d="M70 148C85 130 100 125 115 130C100 148 85 155 70 148Z" fill="url(#leafGrad2)" />
          <path d="M40 175C55 160 70 155 85 160C70 178 55 182 40 175Z" fill="url(#leafGrad2)" />
          <path d="M80 115C90 105 105 100 115 105C105 118 90 122 80 115Z" fill="url(#leafGrad1)" />
          <path d="M115 110C125 100 135 95 145 100C135 112 125 118 115 110Z" fill="url(#leafGrad1)" />
        </svg>
      </div>

      {/* Top-left: very blurry organic leaf shadow */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] pointer-events-none z-10 blur-[8px] opacity-40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full transform -rotate-90">
          <path d="M0 200C40 180 80 140 110 90" stroke="#72A93B" strokeWidth="3" />
          <path d="M110 90C125 80 145 75 160 80C145 95 125 100 110 90Z" fill="#72A93B" />
          <path d="M95 138C110 125 130 120 145 125C130 140 110 145 95 138Z" fill="#72A93B" />
        </svg>
      </div>

      {/* Top-right: very blurry organic leaf shadow */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] pointer-events-none z-10 blur-[12px] opacity-30">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full transform scale-x-[-1] -rotate-45">
          <path d="M0 200C40 180 80 140 110 90" stroke="#72A93B" strokeWidth="3" />
          <path d="M110 90C125 80 145 75 160 80C145 95 125 100 110 90Z" fill="#72A93B" />
          <path d="M95 138C110 125 130 120 145 125C130 140 110 145 95 138Z" fill="#72A93B" />
        </svg>
      </div>

      {/* Bottom-right: very blurry organic leaf shadow */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] pointer-events-none z-10 blur-[10px] opacity-35">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full transform scale-y-[-1] rotate-45">
          <path d="M0 200C40 180 80 140 110 90" stroke="#72A93B" strokeWidth="3" />
          <path d="M110 90C125 80 145 75 160 80C145 95 125 100 110 90Z" fill="#72A93B" />
        </svg>
      </div>

      {/* Soft organic green shape behind bottom-left of trainer image */}
      <div className="absolute -left-16 bottom-16 w-36 h-96 bg-[#E8F2EA]/85 rounded-full -z-10 blur-sm pointer-events-none" />

      {/* Decorative circular images — right edge of section connected by a dotted curve */}
      <div className="hidden xl:block absolute right-4 2xl:right-16 top-1/2 -translate-y-1/2 w-[160px] h-[520px] z-10 pointer-events-none">
        {/* SVG Dotted Curve */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 80 40 C 160 140, 160 220, 130 280 C 90 360, 20 400, 80 480"
            stroke="#72A93B"
            strokeWidth="2"
            strokeDasharray="4 6"
            strokeOpacity="0.25"
          />
        </svg>

        {/* Top Circle - Food */}
        <div className="absolute left-[80px] top-[40px] -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full overflow-hidden border-[3px] border-white shadow-lg bg-white pointer-events-auto">
          <img src="/images/about-food.png" alt="Healthy food" className="w-full h-full object-cover" />
        </div>

        {/* Middle Circle - Meditation */}
        <div className="absolute left-[130px] top-[280px] -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full overflow-hidden border-[3px] border-white shadow-lg bg-white pointer-events-auto">
          <img src="/images/about-yoga.png" alt="Meditation" className="w-full h-full object-cover" />
        </div>

        {/* Bottom Circle - Smartwatch */}
        <div className="absolute left-[80px] top-[480px] -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full overflow-hidden border-[3px] border-white shadow-lg bg-white pointer-events-auto">
          <img src="/images/about-watch.png" alt="Fitness tracking" className="w-full h-full object-cover" />
        </div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image with overlays */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative order-2 lg:order-1"
          >
            {/* SVG ClipPath for the image cutout */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <clipPath id="imageCutout" clipPathUnits="objectBoundingBox">
                  <path d="M 0,0.08 C 0,0.03 0.03,0 0.08,0 L 0.78,0 C 0.81,0 0.82,0.02 0.82,0.07 L 0.82,0.13 C 0.82,0.17 0.84,0.18 0.88,0.18 L 0.93,0.18 C 0.97,0.18 1,0.20 1,0.25 L 1,0.92 C 1,0.97 0.97,1 0.92,1 L 0.08,1 C 0.03,1 0,0.97 0,0.92 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Dot pattern decoration */}
            <div className="absolute top-5 right-6 grid grid-cols-5 gap-2.5 opacity-80 z-10 pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-secondary" />
              ))}
            </div>

            {/* Main image container */}
            <div
              className="relative z-10"
              style={{ filter: 'drop-shadow(0 20px 25px rgba(0, 75, 87, 0.12))' }}
            >
              <div
                className="bg-white"
                style={{ clipPath: 'url(#imageCutout)' }}
              >
                <img
                  src="/images/about-trainer.png"
                  alt={`${SITE_NAME} wellness trainer coaching a client`}
                  className="w-full h-[340px] sm:h-[440px] lg:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Floating badge — top left (outside overflow-hidden to prevent clipping) */}
            <div className="absolute top-12 -left-6 bg-[#0D3E36] text-white rounded-2xl p-4 shadow-xl border border-white/10 w-[142px] z-20">
              <div className="w-9 h-9 rounded-xl bg-secondary/20 flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4V22l3-1.5 3 1.5v-1.6c2.7-1.8 4.5-4.9 4.5-8.4 0-5.5-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                </svg>
              </div>
              <p className="text-[14px] font-bold leading-tight tracking-wide">Holistic</p>
              <p className="text-[14px] font-bold leading-tight tracking-wide mb-1">Wellness</p>
              <p className="text-[10px] text-white/50 font-medium">Body • Mind • Spirit</p>
            </div>

            {/* Floating stats bar */}
            <div className="absolute -bottom-10 left-4 right-4 sm:left-6 sm:right-6 bg-white rounded-2xl shadow-lg border border-border/40 px-4 sm:px-6 py-4 flex items-center justify-around gap-4 z-20">
              {/* Stat 1 */}
              <div className="text-center flex-1">
                <div className="w-9 h-9 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-[#004B57] leading-none">10+</p>
                <p className="text-[10px] sm:text-[11px] text-muted font-medium mt-1 leading-tight">Years of</p>
                <p className="text-[10px] sm:text-[11px] text-muted font-medium leading-tight">Expertise</p>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border/60" />

              {/* Stat 2 */}
              <div className="text-center flex-1">
                <div className="w-9 h-9 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polygon points="12 7.5 13.5 11 17 11 14.2 13 15.2 16.5 12 14.5 8.8 16.5 9.8 13 7 11 10.5 11" fill="none" stroke="#72A93B" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-[#004B57] leading-none">3K+</p>
                <p className="text-[10px] sm:text-[11px] text-muted font-medium mt-1 leading-tight">Lives</p>
                <p className="text-[10px] sm:text-[11px] text-muted font-medium leading-tight">Transformed</p>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border/60" />

              {/* Stat 3 */}
              <div className="text-center flex-1">
                <div className="w-9 h-9 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.7 7.7l1.1 1.1L12 21.3l7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.7z" />
                    <path d="M8.5 12h1.5l1.5-2.5 1.5 5 1.5-3.5 1 1" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-[#004B57] leading-none">98%</p>
                <p className="text-[10px] sm:text-[11px] text-muted font-medium mt-1 leading-tight">Client</p>
                <p className="text-[10px] sm:text-[11px] text-muted font-medium leading-tight">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="order-1 lg:order-2 lg:pr-10 xl:pr-16"
          >
            {/* Pill Badge */}
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#72A93B] mb-5 bg-[#E8F2EA] rounded-full px-4.5 py-2">
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-5">
              Empowering{' '}
              <br className="hidden sm:block" />
              Healthier{' '}
              <span className="relative inline-block text-dark">
                Lives
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-secondary/80 rounded-full -z-10" />
              </span>
            </h2>

            {/* Main paragraph */}
            <p className="text-muted leading-relaxed mb-6 text-sm md:text-base">
              We take a holistic approach to wellness, nurturing the body, mind,
              and spirit — with expert guidance that's personalized, practical,
              and accessible to all.
            </p>

            {/* Feature List */}
            <div className="space-y-5.5 mb-8">
              {/* Bullet 1 — Highlighted */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-secondary/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-white">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 7.5a10 10 0 0 1-10 10.5z" />
                    <path d="M19 2L9.8 11.2" />
                  </svg>
                </div>
                <p className="text-muted leading-relaxed text-sm md:text-base">
                  <span className="font-semibold text-dark">{SITE_NAME}</span> began with a simple mission: to help people build sustainable habits through nutrition, mindful movement, and lifestyle changes that actually last.
                </p>
              </div>

              {/* Bullet 2 — Certified Experts */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 11l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark mb-0.5">Certified Experts</h4>
                  <p className="text-sm text-muted leading-relaxed">Guidance from qualified nutrition & wellness professionals</p>
                </div>
              </div>

              {/* Bullet 3 — Personalized Plans */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark mb-0.5">Personalized Plans</h4>
                  <p className="text-sm text-muted leading-relaxed">Evidence-based strategies tailored to your unique goals</p>
                </div>
              </div>

              {/* Bullet 4 — Proven Results */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
                    <path d="M19 3l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3z" opacity="0.6" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark mb-0.5">Proven Results</h4>
                  <p className="text-sm text-muted leading-relaxed">10+ years of helping clients build healthier, stronger lives</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                fullWidth
                className="sm:w-auto text-[13px] sm:text-[14px] font-bold px-5 sm:px-6 py-2.5 sm:py-3 shadow-none flex items-center justify-center gap-2"
              >
                <span>Explore Our Approach</span>
                <HiArrowRight className="w-4 h-4 shrink-0" />
              </Button>
              <Button
                to="/contact"
                variant="outline"
                fullWidth
                className="sm:w-auto text-[13px] sm:text-[14px] font-bold px-5 sm:px-6 py-2.5 sm:py-3 shadow-none flex items-center justify-center"
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
