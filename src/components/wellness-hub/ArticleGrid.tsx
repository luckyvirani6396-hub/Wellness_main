import { AnimatePresence, motion } from 'framer-motion';
import type { BlogPost } from '../../types';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import SectionDecorations from '../common/SectionDecorations';
import BlogCard from '../common/BlogCard';
import { HEALTH_CATEGORIES } from '../../constants';


interface ArticleGridProps {
  posts: BlogPost[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ArticleGrid({ posts, activeCategory, onCategoryChange }: ArticleGridProps) {
  return (
    <section id="articles" className="py-14 md:py-18 relative overflow-hidden z-10">
      <SectionDecorations />

      <Container>
        <SectionTitle
          subtitle="All Articles"
          title="Latest from the Hub"
          description="Filter by topic or browse everything — fresh insights updated regularly."
        />

        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {HEALTH_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#5c8730] text-white shadow-lg shadow-[#5c8730]/25'
                  : 'bg-white text-dark/70 border border-[#E2E8E4] hover:border-[#5c8730]/50 hover:text-[#5c8730]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {posts.length === 0 && (
          <p className="text-center text-muted py-12">No articles found in this category.</p>
        )}
      </Container>
    </section>
  );
}
