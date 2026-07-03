import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/animations';

const videoTestimonials = [
  { id: '1', name: 'Rachel Green', program: 'Weight Transformation', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop' },
  { id: '2', name: 'Tom Wilson', program: 'Mind & Body Balance', thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop' },
  { id: '3', name: 'Anita Patel', program: 'PCOS Health', thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=250&fit=crop' },
];

export default function VideoTestimonials() {
  return (
    <section className="py-14 md:py-18 relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Videos"
          title="Video Testimonials"
          description="Watch our clients share their health transformation stories in their own words."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {videoTestimonials.map((video) => (
            <motion.div
              key={video.id}
              variants={fadeUp}
              className="group relative rounded-[24px] overflow-hidden cursor-pointer border border-[#E2E8E4]/60 hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/12"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#153B24]/40 flex items-center justify-center group-hover:bg-[#153B24]/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <FaPlay className="w-5 h-5 text-[#5c8730] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-extrabold text-dark text-base group-hover:text-[#72A93B] transition-colors">
                  {video.name}
                </h3>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] mt-1.5">
                  {video.program}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
