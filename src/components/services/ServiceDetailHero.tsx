import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Check } from 'lucide-react';
import type { ClinicalService } from '../../types';
import Container from '../common/Container';
import ServiceIcon from '../common/ServiceIcon';
import UnderlineDivider from '../common/UnderlineDivider';
import { getServiceHeroImage } from '../../constants/pageImages';
import { fadeUp } from '../../utils/animations';

interface ServiceDetailHeroProps {
  service: ClinicalService;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const heroImage = service.image || getServiceHeroImage(service.slug);
  const highlightBenefits = service.benefits.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F8F7F2] to-[#EEF5E8] min-h-screen lg:flex lg:items-center pt-10 pb-24 lg:pt-0 lg:pb-0">
      <div className="absolute left-[-120px] top-0 w-[520px] h-[520px] rounded-full bg-[#DDEFCF] blur-[140px] opacity-70" />
      <div className="absolute right-[-180px] bottom-[-150px] w-[420px] h-[420px] rounded-full bg-[#EAF4DD] blur-[120px] opacity-80" />

      <Container className="relative z-10 w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left relative z-10">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730]">
                <Leaf className="w-4.5 h-4.5" />
              </div>
              <nav className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-[#004B57]/90 flex-wrap">
                <Link to="/" className="hover:text-[#5c8730] transition-colors duration-200">Home</Link>
                <span className="text-[#004B57]/30">/</span>
                <Link to="/services" className="hover:text-[#5c8730] transition-colors duration-200">Services</Link>
                <span className="text-[#004B57]/30">/</span>
                <span className="text-[#5C8730] line-clamp-1">{service.title}</span>
              </nav>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF2E1] flex items-center justify-center text-[#496b26] shrink-0">
                <ServiceIcon name={service.icon} className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B]">
                Clinical Nutrition
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#153B24] leading-tight"
            >
              {service.title}
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-4 flex items-center gap-2">
              <UnderlineDivider />
              <Leaf className="w-4.5 h-4.5 text-[#8cb95d] transform rotate-12 shrink-0" />
            </motion.div>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-[#2c4033] text-sm md:text-[15.5px] leading-relaxed max-w-xl mb-8 font-medium">
              {service.shortDescription}
            </motion.p>

            {highlightBenefits.length > 0 && (
              <motion.ul variants={fadeUp} initial="hidden" animate="visible" className="space-y-2.5 mb-10 w-full max-w-md">
                {highlightBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-sm text-[#2c4033] font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#72A93B]" strokeWidth={3} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
              <a
                href="#service-details"
                className="px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full border-2 border-[#5c8730] text-[#5c8730] hover:bg-[#5c8730]/5 font-bold text-sm transition-all duration-300 inline-flex items-center gap-2"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10">
            <div
              className="absolute inset-y-2 left-[-25px] right-10 border-2 border-[#5c8730]/40 pointer-events-none select-none z-0"
              style={{ borderRadius: '50% 0 0 0' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl z-10 bg-[#F8FAF6]"
              style={{ borderRadius: '50% 0 0 0' }}
            >
              <img
                src={heroImage}
                alt={service.title}
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-[4000ms] hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        {service.includes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-5 sm:p-6 lg:p-7 w-full z-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-[#E2E8E4]/70">
              {service.includes.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center gap-3 px-2 sm:px-5 py-1">
                  <div className="w-9 h-9 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <p className="text-xs text-[#2c4033] font-semibold leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </Container>

      <img
        src="/images/leaf.png"
        alt=""
        className="absolute right-0 bottom-0 w-36 sm:w-48 lg:w-60 h-auto pointer-events-none select-none opacity-95 z-0 translate-y-6"
      />
    </section>
  );
}
