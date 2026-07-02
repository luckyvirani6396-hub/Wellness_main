import { motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ConsultationForm from '../forms/ConsultationForm';
import { CONTACT_ADDRESS } from '../../constants';
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
              title="Book a Wellness Consultation"
              description="Schedule a free 30-minute call with our certified nutritionists and wellness coaches."
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
          className="rounded-[24px] overflow-hidden h-80 bg-[#E8F2EA]/40 border border-[#E2E8E4]/60 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5c8730]/5 to-[#72A93B]/10">
            <div className="text-center px-6">
              <div className="w-14 h-14 rounded-full bg-[#5c8730]/10 flex items-center justify-center mx-auto mb-4">
                <HiLocationMarker className="w-7 h-7 text-[#5c8730]" />
              </div>
              <p className="font-bold text-dark text-lg">Find Us Here</p>
              <p className="text-muted text-sm mt-2 max-w-md mx-auto leading-relaxed">{CONTACT_ADDRESS}</p>
              <p className="text-xs text-muted/70 mt-4">Google Maps integration placeholder</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
