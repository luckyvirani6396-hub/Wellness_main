import { motion } from 'framer-motion';
import { TrendingUp, Heart, Trophy } from 'lucide-react';
import HeroLayout from '../common/HeroLayout';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';

export default function SuccessStoriesHero() {
  return (
    <HeroLayout
      breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Success Stories' },
      ]}
      title="Success Stories"
      subtitle="Real People. Real Results."
      description="Discover how our clients transformed their health, confidence, and daily lives through personalized wellness programs."
      imageSrc={PAGE_HERO_IMAGES.successStories}
      imageAlt="Fitness transformation success"
      ctaText="View Transformations"
      ctaHref="#transformations"
      sectionClassName="pt-36 pb-24 lg:pt-0 lg:pb-0"
      highlights={[
        { key: 'weight', icon: TrendingUp, label: <>Weight<br />Loss</> },
        { key: 'health', icon: Heart, label: <>Health<br />Recovery</> },
        { key: 'results', icon: Trophy, label: <>Life<br />Transformation</> },
      ]}
      bottomBar={
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
        >
          {[
            { value: '5000+', label: 'Lives Impacted' },
            { value: '95%', label: 'Client Satisfaction' },
            { value: '10+', label: 'Years Experience' },
            { value: '100+', label: 'Wellness Workshops' },
          ].map(({ value, label }, i) => (
            <div key={label} className={`flex flex-col items-center text-center px-2 ${i > 0 ? 'md:pl-6' : ''}`}>
              <span className="text-2xl md:text-3xl font-bold text-[#5c8730]">{value}</span>
              <p className="text-xs text-[#2c4033] font-semibold mt-1 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </motion.div>
      }
    />
  );
}
