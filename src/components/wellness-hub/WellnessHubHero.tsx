import { motion } from 'framer-motion';
import { BookOpen, Utensils, Brain, Leaf, Flower2 } from 'lucide-react';
import HeroLayout from '../common/HeroLayout';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';

export default function WellnessHubHero() {
  return (
    <HeroLayout
      breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Wellness Hub' },
      ]}
      title="Wellness Hub"
      subtitle="Learn, Grow, and Thrive Every Day."
      description="Explore expert articles, nourishing recipes, and practical tips to support your wellness journey — all in one place."
      imageSrc={PAGE_HERO_IMAGES.wellnessHub}
      imageAlt="Meditation and mental wellness"
      ctaText="Explore Articles"
      ctaHref="#featured"
      sectionClassName="pt-36 pb-24 lg:pt-0 lg:pb-0"
      highlights={[
        { key: 'articles', icon: BookOpen, label: <>Expert<br />Articles</> },
        { key: 'recipes', icon: Utensils, label: <>Healthy<br />Recipes</> },
        { key: 'tips', icon: Brain, label: <>Mind &amp;<br />Body Tips</> },
      ]}
      bottomBar={
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
        >
          {[
            { icon: Leaf, title: 'Nutrition Tips', desc: 'Science-backed advice for smarter eating.' },
            { icon: Utensils, title: 'Healthy Recipes', desc: 'Delicious meals that nourish your body.' },
            { icon: Brain, title: 'Mental Wellness', desc: 'Calm your mind and reduce daily stress.' },
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
      }
    />
  );
}
