import { motion } from 'framer-motion';
import { Stethoscope, Utensils, HeartPulse, Leaf } from 'lucide-react';
import HeroLayout from '../common/HeroLayout';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';

export default function ServicesHero() {
  return (
    <HeroLayout
      breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Services' },
      ]}
      title="Our Services"
      subtitle="Expert Care for Every Health Condition."
      description="Personalized nutrition support tailored to your specific health concern — from PCOS and diabetes to thyroid, heart health, and more."
      imageSrc={PAGE_HERO_IMAGES.services}
      imageAlt="Healthy nutrition and fresh food"
      ctaText="Explore Services"
      ctaHref="#services-list"
      highlights={[
        { key: 'clinical', icon: Stethoscope, label: <>Clinical<br />Nutrition</> },
        { key: 'meal', icon: Utensils, label: <>Custom<br />Meal Plans</> },
        { key: 'care', icon: HeartPulse, label: <>Ongoing<br />Care</> },
      ]}
      bottomBar={
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
        >
          {[
            { icon: Stethoscope, title: 'Condition-Specific', desc: 'Targeted plans for your health concern.' },
            { icon: Utensils, title: 'Meal Planning', desc: 'Custom nutrition built around you.' },
            { icon: HeartPulse, title: 'Health Monitoring', desc: 'Track progress with expert reviews.' },
            { icon: Leaf, title: 'Holistic Support', desc: 'Lifestyle guidance beyond just diet.' },
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
