import { motion } from 'framer-motion';
import { timelineSteps } from '../../assets/data/content';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { fadeUp } from '../../utils/animations';

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          subtitle="Our Process"
          title="How It Works"
          description="Getting started is simple — a proven 5-step process from inquiry to program launch."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-dark mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
