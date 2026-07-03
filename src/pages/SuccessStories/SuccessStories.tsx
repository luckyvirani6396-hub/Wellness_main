import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { successStories } from '../../assets/data/content';
import SuccessStoriesHero from '../../components/success-stories/SuccessStoriesHero';
import TransformationCards from '../../components/success-stories/TransformationCards';
import VideoTestimonials from '../../components/success-stories/VideoTestimonials';
import Testimonials from '../../components/home/Testimonials';
import Container from '../../components/common/Container';
import SectionDecorations from '../../components/common/SectionDecorations';
import { fadeUp } from '../../utils/animations';

export default function SuccessStories() {
  return (
    <>
      <SuccessStoriesHero />
      <TransformationCards stories={successStories} />
      <Testimonials />
      <VideoTestimonials />

      {/* CTA Banner */}
      <section className="py-14 md:py-18 relative overflow-hidden z-10">
        <SectionDecorations />
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#E8F2EA]/60 rounded-[24px] p-8 md:p-12 border border-[#E2E8E4]/50 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-white rounded-full px-4 py-2 mb-4">
                Your Turn
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg">
                Join thousands who transformed their health with personalized coaching, nutrition plans, and ongoing support.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 shrink-0 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
            >
              Start Your Journey
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
