import { motion } from 'framer-motion';
import type { SuccessStory } from '../../types';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import SectionDecorations from '../common/SectionDecorations';
import { fadeUp, staggerContainer } from '../../utils/animations';

interface TransformationCardsProps {
  stories: SuccessStory[];
}

export default function TransformationCards({ stories }: TransformationCardsProps) {
  return (
    <section id="transformations" className="py-14 md:py-18 relative overflow-hidden z-10">
      <SectionDecorations />

      <Container>
        <SectionTitle
          subtitle="Transformations"
          title="Before & After Results"
          description="Inspiring transformations from clients who committed to their health journey."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story) => (
            <motion.article
              key={story.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[24px] overflow-hidden border border-[#E2E8E4]/60 hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/12 group"
            >
              <div className="grid grid-cols-2 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={story.beforeImage}
                    alt={`${story.name} before`}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#153B24]/80 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={story.afterImage}
                    alt={`${story.name} after`}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#72A93B] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                    After
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#72A93B] flex items-center justify-center shadow-lg z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="p-7 relative">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-3.5 py-1.5 mb-3">
                  {story.program}
                </span>
                <h3 className="text-lg font-extrabold text-dark mb-2 group-hover:text-[#72A93B] transition-colors">
                  {story.name}
                </h3>
                <p className="text-[#5c8730] font-bold text-sm flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {story.result}
                </p>

                <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none opacity-10 text-secondary translate-x-2 translate-y-2">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-current">
                    <path d="M10 90C25 75 35 50 30 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M30 65C15 60 10 50 15 42C23 48 27 55 30 65Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
