import { motion } from 'framer-motion';
import Container from '../common/Container';
import { allBlogPosts } from '../../assets/data/content';
import { HEALTH_CATEGORIES } from '../../constants';
import { fadeUp, staggerContainer } from '../../utils/animations';

const hubStats = [
  { value: `${allBlogPosts.length}+`, label: 'Expert Articles' },
  { value: `${HEALTH_CATEGORIES.length - 1}`, label: 'Topic Categories' },
  { value: 'Weekly', label: 'Fresh Content' },
  { value: '100%', label: 'Free Resources' },
];

export default function HubStatsBar() {
  return (
    <section className="py-14 md:py-18  bg-[#002d26] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {hubStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block">
                {stat.value}
              </span>
              <p className="text-white/80 mt-2 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
