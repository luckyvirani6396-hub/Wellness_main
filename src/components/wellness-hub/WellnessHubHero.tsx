import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, BookOpen, Utensils, Brain, Flower2 } from 'lucide-react';
import Container from '../common/Container';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { fadeUp } from '../../utils/animations';

export default function WellnessHubHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F8F7F2] to-[#EEF5E8] min-h-screen lg:flex lg:items-center pt-36 pb-24 lg:pt-0 lg:pb-0">
      <div className="absolute left-[-120px] top-0 w-[520px] h-[520px] rounded-full bg-[#DDEFCF] blur-[140px] opacity-70" />
      <div className="absolute right-[-180px] bottom-[-150px] w-[420px] h-[420px] rounded-full bg-[#EAF4DD] blur-[120px] opacity-80" />

      <Container className="relative z-10 w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left relative z-10">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730]">
                <Leaf className="w-4.5 h-4.5" />
              </div>
              <nav className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-[#004B57]/90">
                <Link to="/" className="hover:text-[#5c8730] transition-colors duration-200">Home</Link>
                <span className="text-[#004B57]/30">/</span>
                <span className="text-[#5C8730]">Health Hub</span>
              </nav>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#153B24] leading-none">
              Health Hub
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-4 flex items-center gap-2">
              <svg className="w-40 h-2.5 text-[#5c8730]/75" viewBox="0 0 300 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5C50 2 150 2 299 5C150 7 50 7 1 5Z" />
              </svg>
              <Leaf className="w-4.5 h-4.5 text-[#8cb95d] transform rotate-12 shrink-0" />
            </motion.div>

            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-xl md:text-2xl font-bold text-[#5c8730] mb-4 leading-snug">
              Learn, Grow, and Thrive Every Day.
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-[#2c4033] text-sm md:text-[15.5px] leading-relaxed max-w-xl mb-8 font-medium">
              Explore expert articles, nourishing recipes, and practical tips to support your health journey — all in one place.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2">
              <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#5C8730]/65 z-0" />

              {[
                { key: 'articles', icon: BookOpen, label: <>Expert<br />Articles</> },
                { key: 'recipes', icon: Utensils, label: <>Healthy<br />Recipes</> },
                { key: 'tips', icon: Brain, label: <>Mind &amp;<br />Body Tips</> },
              ].map(({ key, icon: Icon, label }) => (
                <div key={key} className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <a
                href="#featured"
                className="px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
              >
                <span>Explore Articles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10">
            <div
              className="absolute inset-y-2 left-[-25px] right-10 border-2 border-[#5c8730]/40 pointer-events-none select-none z-0"
              style={{ borderRadius: '50% 0 0 0' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl z-10 bg-[#F8FAF6]"
              style={{ borderRadius: '50% 0 0 0' }}
            >
              <img
                src={PAGE_HERO_IMAGES.wellnessHub}
                alt="Meditation and mental health"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-[4000ms] hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
        >
          {[
            { icon: Leaf, title: 'Nutrition Tips', desc: 'Science-backed advice for smarter eating.' },
            { icon: Utensils, title: 'Healthy Recipes', desc: 'Delicious meals that nourish your body.' },
            { icon: Brain, title: 'Mental Health', desc: 'Calm your mind and reduce daily stress.' },
            { icon: Flower2, title: 'Yoga & Lifestyle', desc: 'Build habits that last a lifetime.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className={`flex items-center gap-4.5 px-2 ${i > 0 ? 'md:pl-6' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">{title}</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>

      <img
        src="/images/leaf.png"
        alt=""
        className="absolute right-0 bottom-0 w-36 sm:w-48 lg:w-60 h-auto pointer-events-none select-none opacity-95 z-0 translate-y-6"
      />
    </section>
  );
}
