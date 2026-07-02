import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, Salad, TrendingUp } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/animations';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Health Assessment',
    description: 'We review your medical history, lifestyle, and goals to understand your unique needs.',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Personalized Plan',
    description: 'Your certified nutritionist creates a condition-specific meal and lifestyle plan.',
  },
  {
    step: '03',
    icon: Salad,
    title: 'Guided Implementation',
    description: 'Follow your custom plan with recipes, grocery lists, and daily coaching support.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Track & Adjust',
    description: 'Regular check-ins and progress reviews keep you on track toward lasting results.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-18 relative overflow-hidden bg-[#F8FAF6]/30">
      <Container>
        <SectionTitle
          subtitle="How It Works"
          title="Your Path to Better Health"
          description="A simple, structured process from first consultation to measurable results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {steps.map(({ step, icon: Icon, title, description }) => (
            <motion.div
              key={step}
              variants={fadeUp}
              className="bg-white rounded-[24px] border border-[#E2E8E4]/60 p-6 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 relative"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] mb-3 block">
                Step {step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5c8730] to-[#72A93B] flex items-center justify-center text-white mb-4 shadow-sm shadow-[#5c8730]/20">
                <Icon className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed font-medium">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
