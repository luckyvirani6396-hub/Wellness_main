import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Users, Utensils, Target, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProgramCard from '../../components/common/ProgramCard';
import NewsletterForm from '../../components/forms/NewsletterForm';
import { pagePrograms } from '../../assets/data/content';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function Programs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can I switch programs if my goals change?',
      a: 'Absolutely. We understand that your health journey can evolve. Your coach will review your progress and help transition you to the program that aligns best with your new direction.',
    },
    {
      q: 'Is support one-on-one or in a group?',
      a: 'Every program includes dedicated one-on-one video coaching sessions with your certified nutritionist, alongside access to our community groups for daily motivation and accountability.',
    },
    {
      q: 'Do you support vegetarian or food allergy diets?',
      a: 'Yes! All meal plans are customized from scratch. We accommodate vegetarian, vegan, gluten-free, dairy-free, PCOS-friendly, and all major food allergy requirements.',
    },
    {
      q: 'What happens after my program ends?',
      a: 'We focus on sustainable habit change so you feel equipped to maintain your results. We also offer affordable alumni maintenance packages for ongoing coach check-ins and support.',
    },
  ];

  return (
    <>
      {/* ── Custom Redesigned Programs Hero (Leaf Image Curve Grid Layout) ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F8F7F2] to-[#EEF5E8] min-h-screen lg:flex lg:items-center pt-10 pb-24 lg:pt-0 lg:pb-0">
        
        {/* Blurry Leaf Decoration Blobs */}
        <div className="absolute left-[-120px] top-0 w-[520px] h-[520px] rounded-full bg-[#DDEFCF] blur-[140px] opacity-70" />
        <div className="absolute right-[-180px] bottom-[-150px] w-[420px] h-[420px] rounded-full bg-[#EAF4DD] blur-[120px] opacity-80" />

        <Container className="relative z-10 w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left relative z-10">
              
              {/* Breadcrumbs with Leaf Icon */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730]">
                  <Leaf className="w-4.5 h-4.5" />
                </div>
                <nav className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-[#004B57]/90">
                  <Link to="/" className="hover:text-[#5c8730] transition-colors duration-200">Home</Link>
                  <span className="text-[#004B57]/30">/</span>
                  <span className="text-[#5C8730]">Programs</span>
                </nav>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#153B24] leading-none"
              >
                Programs
              </motion.h1>

              {/* Hand-drawn Underline divider & floating small leaf */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-4 flex items-center gap-2"
              >
                <svg className="w-40 h-2.5 text-[#5c8730]/75" viewBox="0 0 300 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5C50 2 150 2 299 5C150 7 50 7 1 5Z" />
                </svg>
                <Leaf className="w-4.5 h-4.5 text-[#8cb95d] transform rotate-12 shrink-0" />
              </motion.div>

              {/* Tagline */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl font-bold text-[#5c8730] mb-4 leading-snug"
              >
                Pick Your Transformation Path.
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[#2c4033] text-sm md:text-[15.5px] leading-relaxed max-w-xl mb-8 font-medium"
              >
                Time-bound programs that bundle coaching, meal plans, and milestones into a complete transformation experience.
              </motion.p>

              {/* Holistic Badge Flow Grid */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2"
              >
                {/* Horizontal Connection Line */}
                <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#5C8730]/65 z-0" />

                {/* Badge 1 */}
                <div className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    Personalized<br />Coaching
                  </span>
                </div>

                {/* Badge 2 */}
                <div className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Utensils className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    Custom<br />Nutrition
                  </span>
                </div>

                {/* Badge 3 */}
                <div className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    Milestone<br />Tracking
                  </span>
                </div>
              </motion.div>

              {/* Discover Our Programs Button */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative w-full"
              >
                <a
                  href="#programs-list"
                  className="px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right Image Column with Curved Leaf Frame Shape */}
            <div className="col-span-1 lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10">
              
              {/* Outer curved frame stroke outline decoration */}
              <div
                className="absolute inset-y-2 left-[-25px] right-10 border-2 border-[#5c8730]/40 pointer-events-none select-none z-0"
                style={{ borderRadius: '50% 0 0 0' }}
              />

              {/* Main Image Container with leaf shape border radius clip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl z-10 bg-[#F8FAF6]"
                style={{ borderRadius: '50% 0 0 0' }}
              >
                <img
                  src={PAGE_HERO_IMAGES.programs}
                  alt="Yoga and mindfulness health group"
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-[4000ms] hover:scale-105"
                />
              </motion.div>
            </div>
          </div>

          {/* ── Program Highlights Card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
          >
            <div className="flex items-center gap-4.5 px-2">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Coaching</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  One-on-one expert guidance.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Nutrition</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Custom meal plans built for you.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Milestones</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Weekly progress tracking.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Support</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Dedicated coach throughout.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Realistic leaf image decoration in bottom right corner */}
        <img
          src="/images/leaf.png"
          alt=""
          className="absolute right-0 bottom-0 w-36 sm:w-48 lg:w-60 h-auto pointer-events-none select-none opacity-95 z-0 translate-y-6"
        />
      </section>

      {/* ── Programs List Section ─────────────────────────── */}
      <section id="programs-list" className="py-14 md:py-18  relative z-10">
        <Container>
          <SectionTitle
            subtitle="Enroll Today"
            title="Pick Your Transformation Path"
            description="Every program includes personalized guidance, progress tracking, and dedicated coach support."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {pagePrograms.map((program) => (
              <ProgramCard
                key={program.id}
                id={program.id}
                title={program.title}
                subtitle={program.subtitle}
                description={program.description}
                duration={program.duration || ''}
                icon={program.icon}
                features={program.features || []}
                image={program.image}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── What's Included Section ─────────────────────────── */}
      <section className="py-14 md:py-18 relative overflow-hidden z-10">
        {/* Background decorations - Blur Blobs & Leaf outlines */}
        <div className="absolute left-0 top-1/4 w-[280px] h-[450px] bg-gradient-to-r from-[#E8F2EA]/85 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />
        <div className="absolute right-0 top-1/3 w-[280px] h-[450px] bg-gradient-to-l from-[#E8F2EA]/85 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />

        {/* Left Leaf branch outline drawing */}
        <div className="absolute left-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40">
          <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-[#72A93B]">
            <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <Container>
          <SectionTitle
            subtitle="Features"
            title="Fully Supported Journeys"
            description="Every transformation program bundles expert guidance, accountability, and practical tools."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Coach Support',
                features: ['1-on-1 consultations', 'Daily messaging support', 'Weekly goal check-ins'],
              },
              {
                icon: <Utensils className="w-6 h-6" />,
                title: 'Custom Meal Plans',
                features: ['Nutritionally balanced', 'Grocery shopping lists', 'Meal prep guidelines'],
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Milestone Tracking',
                features: ['Digital tracking portal', 'Metabolic checkpoints', 'Regular reports'],
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'Habit Integration',
                features: ['Mindfulness routines', 'Sleep optimization', 'Daily movement targets'],
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-[24px] border border-[#E2E8E4]/60 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-4 shadow-sm shadow-primary/20">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-bold text-dark mb-3">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.features.map((feat) => (
                      <li key={feat} className="text-xs text-[#4d5e53] font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#72A93B]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process Timeline Section ─────────────────────────── */}
      <section className="py-14 md:py-18 relative overflow-hidden z-10">
        {/* Decorative background dotted path */}
        <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[900px] h-[200px] pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 900 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 100 Q 225 150, 450 100 T 850 100"
              stroke="#72A93B"
              strokeWidth="2.5"
              strokeDasharray="6 8"
            />
          </svg>
        </div>

        <Container>
          <SectionTitle
            subtitle="Process"
            title="Your Path to Vitality"
            description="A simple, evidence-based approach designed to fit seamlessly into your life."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 relative z-10">
            {[
              {
                step: '01',
                title: 'Discovery Session',
                desc: 'A free introductory consultation to explore your health goals, medical profile, and lifestyle habits.',
              },
              {
                step: '02',
                title: 'Custom Plan Crafting',
                desc: 'Our experts curate personalized metabolic meal plans, movement guidelines, and habit roadmaps.',
              },
              {
                step: '03',
                title: 'Active Coaching & Results',
                desc: 'Weekly check-ins, metabolic monitoring, and continuous plan adjustments ensure you hit every milestone.',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Step circle */}
                <div className="w-16 h-16 rounded-full bg-[#EAF2E1] border-[3px] border-white shadow-md flex items-center justify-center text-[#5c8730] font-extrabold text-xl mb-6 relative z-10">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-dark mb-2.5">{step.title}</h4>
                <p className="text-xs text-muted leading-relaxed font-medium max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ Section ─────────────────────────── */}
      <section className="py-14 md:py-18 relative overflow-hidden z-10">
        {/* Background blobs */}
        <div className="absolute right-0 top-1/4 w-[280px] h-[400px] bg-gradient-to-l from-[#E8F2EA]/75 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />

        <Container>
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about starting and succeeding in our health and nutrition programs."
          />
          <div className="max-w-3xl mx-auto mt-10 bg-white rounded-[32px] border border-[#E2E8E4]/60 p-6 md:p-10 shadow-sm relative z-10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#E2E8E4]/60 last:border-b-0 pb-4 last:pb-0 pt-4 first:pt-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center py-2 text-left font-bold text-dark text-base md:text-lg hover:text-[#5c8730] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#5c8730] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#5f6b6e] shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted text-sm md:text-[14.5px] leading-relaxed pb-4 pt-2 pr-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Newsletter ────────────────────────────── */}
      <section className="py-14 md:py-18 relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[220px] h-[350px] bg-gradient-to-r from-[#E8F2EA]/70 to-transparent rounded-r-full blur-xl pointer-events-none" />
        <Container className="relative z-10">
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
