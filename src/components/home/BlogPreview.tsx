import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../assets/data/content';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import BlogCard from '../common/BlogCard';
import SectionDecorations from '../common/SectionDecorations';
import { staggerContainer } from '../../utils/animations';

export default function BlogPreview() {
  return (
    <section className="py-14 md:py-18 relative overflow-hidden z-10">
      <SectionDecorations />

      <Container>
        <SectionTitle
          subtitle="Health Hub"
          title="Latest Articles"
          description="Expert insights and tips to support your health journey."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/health-hub"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#5c8730] text-[#5c8730] hover:bg-[#5c8730] hover:text-white font-bold text-sm transition-all duration-300"
          >
            View All Articles
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
