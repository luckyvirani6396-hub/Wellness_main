import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import type { BlogPost } from '../../types';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { fadeUp } from '../../utils/animations';

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <section id="featured" className="py-14 md:py-18 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Editor's Pick"
          title="Featured Article"
          description="Our top read this week — handpicked by our wellness experts."
        />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="group bg-white rounded-[28px] overflow-hidden border border-[#E2E8E4]/60 hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden h-64 lg:h-auto lg:min-h-[380px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-5 left-5 bg-[#72A93B] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                Featured
              </span>
            </div>

            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center relative">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-3.5 py-1.5 w-fit mb-5">
                {post.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-extrabold text-dark mb-4 leading-snug group-hover:text-[#72A93B] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-muted text-base leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted mb-8 font-semibold">
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-secondary">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {post.date}
                </span>
                <span className="text-muted/30">•</span>
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-secondary">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              <Link
                to={`/wellness-hub/${post.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 w-fit shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
              >
                Read Full Article
                <HiArrowRight className="w-4 h-4" />
              </Link>

              <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-10 text-secondary translate-x-4 translate-y-4">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-current">
                  <path d="M10 90C25 75 35 50 30 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M30 65C15 60 10 50 15 42C23 48 27 55 30 65Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M31 62C44 52 46 44 38 36C31 42 30 52 31 62Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
