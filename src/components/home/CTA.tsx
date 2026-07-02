import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeUp } from '../../utils/animations';

export default function CTA() {
  return (
    <section className="py-14 md:py-18">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-secondary p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier, happier you. Book a free consultation with our wellness experts.
            </p>
            <Button to="/contact" variant="accent" size="lg">
              Book Consultation
              <HiArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
