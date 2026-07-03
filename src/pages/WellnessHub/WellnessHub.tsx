import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { allBlogPosts } from '../../assets/data/content';
import Container from '../../components/common/Container';
import SectionDecorations from '../../components/common/SectionDecorations';
import NewsletterForm from '../../components/forms/NewsletterForm';

import WellnessHubHero from '../../components/wellness-hub/WellnessHubHero';
// import HubStatsBar from '../../components/wellness-hub/HubStatsBar';
import FeaturedArticle from '../../components/wellness-hub/FeaturedArticle';
import WellnessTips from '../../components/wellness-hub/WellnessTips';
import ArticleGrid from '../../components/wellness-hub/ArticleGrid';
import { fadeUp } from '../../utils/animations';

const featuredPost = allBlogPosts[0];

export default function WellnessHub() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? allBlogPosts
    : allBlogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <WellnessHubHero />
      {/* <HubStatsBar /> */}
      <FeaturedArticle post={featuredPost} />
      <WellnessTips />
      <ArticleGrid
        posts={filteredPosts}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Newsletter + Programs CTA Banner */}
      <section className="py-14 md:py-18 relative overflow-hidden z-10">
        <SectionDecorations />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <NewsletterForm />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#E8F2EA]/60 rounded-[24px] p-8 border border-[#E2E8E4]/50 flex flex-col justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#72A93B] flex items-center justify-center shrink-0 shadow-md shadow-secondary/20 mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Ready for a structured plan?</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Articles are a great start — but personalized coaching takes your results further. Explore our transformation programs.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 w-fit shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
              >
                View Programs
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
