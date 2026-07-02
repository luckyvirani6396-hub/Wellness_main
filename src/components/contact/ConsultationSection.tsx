import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ConsultationForm from '../forms/ConsultationForm';
import { fadeUp } from '../../utils/animations';

export default function ConsultationSection() {
  return (
    <section className="py-14 md:py-18 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="Free Consultation"
              title="Book a Health Consultation"
              description="Schedule a free 30-minute call with our certified nutritionists and health coaches."
              align="left"
            />
            <ul className="space-y-4 mt-6">
              {[
                'Personalized health assessment',
                'Program recommendations tailored to you',
                'No obligation — completely free',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#2c4033] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#F8FAF6]/60 rounded-[24px] p-8 md:p-10 border border-[#E2E8E4]/50"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function MapSection() {
  return (
    <section id="map" className="pb-14 md:pb-18">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[24px] overflow-hidden border border-[#E2E8E4]/60 shadow-sm"
          style={{ height: '450px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.851267533604!2d75.79022246886417!3d26.889983765924757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cbb6782825%3A0xd335fbef952709fb!2sLal%20kothi%20jaipur!5e0!3m2!1sen!2sin!4v1782995687126!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Our Location - Lal Kothi, Jaipur"
          />
        </motion.div>
      </Container>
    </section>
  );
}
