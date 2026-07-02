import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../../components/home/Hero';
import OurApproach from '../../components/home/OurApproach';
import AboutPreview from '../../components/home/AboutPreview';
import Services from '../../components/home/Services';
// import HowItWorks from '../../components/home/HowItWorks';
import Programs from '../../components/home/Programs';
import Testimonials from '../../components/home/Testimonials';
import BlogPreview from '../../components/home/BlogPreview';
import Container from '../../components/common/Container';
import BMICalculator from '../../components/calculators/BMICalculator';
import CalorieCalculator from '../../components/calculators/CalorieCalculator';
import WaterIntakeCalculator from '../../components/calculators/WaterIntakeCalculator';
import WellnessAssessmentQuiz from '../../components/forms/WellnessAssessmentQuiz';
import NewsletterForm from '../../components/forms/NewsletterForm';
import SectionTitle from '../../components/common/SectionTitle';

const tabContent = {
  bmi: {
    image: '/images/bmi-wellness.png',
    pill: 'Body Metrics',
    title: 'Body Mass Index (BMI)',
    heading: 'Smart Weight & Height Assessment',
    description: 'Body Mass Index (BMI) is a quick indicator to help categorize your body weight. Knowing your BMI is a valuable first step in understanding if you are within a healthy weight range.',
    bullets: [
      'Quick ratio of weight-to-height',
      'Standard clinical health categories',
      'Baseline starting point for body goals',
    ],
  },
  calorie: {
    image: '/images/calorie-wellness.png',
    pill: 'Nutrition Planning',
    title: 'Daily Caloric Budget',
    heading: 'Fuel Your Daily Activities',
    description: 'Calculate your Total Daily Energy Expenditure (TDEE) based on height, weight, age, and activity level. Get clear guidance on daily calorie targets for weight management, maintenance, or growth.',
    bullets: [
      'Custom calculation based on basal metabolic rate (BMR)',
      'Activity level multiplier (TDEE)',
      'Specific calorie targets for your weight goals',
    ],
  },
  water: {
    image: '/images/water-wellness.png',
    pill: 'Hydration Tracking',
    title: 'Daily Water Target',
    heading: 'Replenish and Stay Energized',
    description: 'Water is essential for every cell and metabolic process. Calculate your daily recommended water intake based on your weight to support energy levels, digestion, and mental focus.',
    bullets: [
      'Personalized hydration baseline',
      'Calculated for your specific body weight',
      'Supports digestion, healthy skin, and cognitive function',
    ],
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'bmi' | 'calorie' | 'water'>('bmi');
  return (
    <>
      <Hero />
      <OurApproach />
      <AboutPreview />
      <Services />
      <Programs />
      {/* <HowItWorks /> */}
      <Testimonials />
      <BlogPreview />
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

        <Container>
          <SectionTitle
            subtitle="Tools"
            title="Wellness Calculators"
            description="Use our free tools to understand your health metrics and get personalized insights."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mt-10 mb-16 relative z-10">
            {/* Left Column: Dynamic Banner & Text */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative w-full rounded-[24px] overflow-hidden mb-6 z-10 bg-white border border-[#E2E8E4]/60"
                    style={{ filter: 'drop-shadow(0 15px 20px rgba(0, 75, 87, 0.08))' }}
                  >
                    <img
                      src={tabContent[activeTab].image}
                      alt={tabContent[activeTab].title}
                      className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003D34]/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-3 py-1 mb-2">
                        {tabContent[activeTab].pill}
                      </span>
                      <h4 className="text-xl font-bold text-white leading-tight">
                        {tabContent[activeTab].heading}
                      </h4>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-dark mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-muted text-sm md:text-[14.5px] leading-relaxed mb-6">
                    {tabContent[activeTab].description}
                  </p>
                  <ul className="space-y-3.5">
                    {tabContent[activeTab].bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5 text-sm text-dark font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="3.5" className="w-3.5 h-3.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Tabbed Calculators */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Tabs Selector Bar */}
              <div className="flex bg-white p-1 sm:p-1.5 rounded-full gap-0.5 sm:gap-1 border border-[#E2E8E4]/60 shadow-sm">
                <button
                  onClick={() => setActiveTab('bmi')}
                  className={`flex-1 py-2.5 sm:py-3.5 text-[10px] sm:text-xs md:text-sm font-extrabold rounded-full uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer ${activeTab === 'bmi'
                    ? 'bg-[#003D34] text-white shadow-md'
                    : 'text-[#5F6B6E] hover:text-[#003D34] hover:bg-[#F8FAF6]'
                    }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                  <span>BMI</span>
                </button>
                <button
                  onClick={() => setActiveTab('calorie')}
                  className={`flex-1 py-2.5 sm:py-3.5 text-[10px] sm:text-xs md:text-sm font-extrabold rounded-full uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer ${activeTab === 'calorie'
                    ? 'bg-[#003D34] text-white shadow-md'
                    : 'text-[#5F6B6E] hover:text-[#003D34] hover:bg-[#F8FAF6]'
                    }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                  <span>Calories</span>
                </button>
                <button
                  onClick={() => setActiveTab('water')}
                  className={`flex-1 py-2.5 sm:py-3.5 text-[10px] sm:text-xs md:text-sm font-extrabold rounded-full uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer ${activeTab === 'water'
                    ? 'bg-[#003D34] text-white shadow-md'
                    : 'text-[#5F6B6E] hover:text-[#003D34] hover:bg-[#F8FAF6]'
                    }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                  <span>Water</span>
                </button>
              </div>

              {/* Active Calculator Wrapper */}
              <div className="relative flex-1 flex flex-col">
                {activeTab === 'bmi' && (
                  <motion.div
                    key="bmi"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    <BMICalculator className="flex-1" />
                  </motion.div>
                )}
                {activeTab === 'calorie' && (
                  <motion.div
                    key="calorie"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    <CalorieCalculator className="flex-1" />
                  </motion.div>
                )}
                {activeTab === 'water' && (
                  <motion.div
                    key="water"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                  >
                    <WaterIntakeCalculator className="flex-1" />
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div id="wellness-assessment" className="space-y-6">
            <WellnessAssessmentQuiz />
            <NewsletterForm />
          </div>
        </Container>
      </section>
      {/* <CTA /> */}
    </>
  );
}
