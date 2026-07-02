import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import type { BlogPost } from '../../types';
import { fadeUp } from '../../utils/animations';

function getCategoryIcon(category: string) {
  const cat = category.toLowerCase();
  if (cat.includes('yoga') || cat.includes('practices') || cat.includes('fitness')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-secondary">
        <path d="M12 3c-1.2 2.5-3.5 4-6 4 2.5 0 4.8 1.5 6 4 1.2-2.5 3.5-4 6-4-2.5 0-4.8-1.5-6-4z" />
        <path d="M12 11c-1.2 2.5-3.5 4-6 4 2.5 0 4.8 1.5 6 4 1.2-2.5 3.5-4 6-4-2.5 0-4.8-1.5-6-4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-secondary">
      <path d="M2 22C2 22 8 20 12 16C16 12 22 2 22 2C22 2 12 8 8 12C4 16 2 22 2 22Z" />
      <path d="M8 16L16 8" />
    </svg>
  );
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-[24px] overflow-hidden border border-[#E2E8E4]/60 hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/12 group relative flex flex-col h-full"
    >
      <Link to={`/wellness-hub/${post.slug}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden h-56 shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <span className="absolute top-4 left-4 bg-white/95 text-[#003D34] text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#E2E8E4]/20 shadow-sm flex items-center gap-1.5 z-10">
            {getCategoryIcon(post.category)}
            {post.category}
          </span>
        </div>

        <div className="p-7 flex flex-col flex-1 relative justify-between z-10">
          <div>
            <div className="flex items-center gap-4 text-xs text-muted mb-4 font-semibold">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-secondary">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {post.date}
              </span>
              <span className="text-muted/30 font-normal">•</span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-secondary">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {post.readTime}
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-dark mb-3 line-clamp-2 leading-snug group-hover:text-[#72A93B] transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-muted text-[14px] leading-relaxed mb-6 line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[#003D34] group-hover:text-secondary text-sm font-extrabold uppercase tracking-wider transition-colors duration-300">
            Read More
            <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>

          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none z-[-1] opacity-15 text-secondary translate-x-2 translate-y-2">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-current">
              <path d="M10 90C25 75 35 50 30 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M30 65C15 60 10 50 15 42C23 48 27 55 30 65Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M31 62C44 52 46 44 38 36C31 42 30 52 31 62Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M30 42C16 38 12 30 18 22C26 28 28 35 30 42Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M30 38C43 28 45 20 37 12C31 18 30 28 30 38Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
