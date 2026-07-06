import { motion } from 'framer-motion';
import Container from '../common/Container';
import ServiceIcon from '../common/ServiceIcon';
import { whyChooseUs } from '../../assets/data/content';

export default function CareApproach() {
  return (
    <section className="py-14 md:py-18 bg-white relative z-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#72A93B] mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-[38px] font-serif font-medium text-[#0e261a] leading-tight">
              Corporate Wellness <br className="hidden md:inline" />
              You Can Trust
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed mt-4 max-w-sm">
              Every program is delivered by certified professionals using proven methods tailored to your organization and goals.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4.5 bg-[#F8FAF6]/60 rounded-2xl p-5 border border-[#E2E8E4]/50 hover:border-secondary/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730] shrink-0">
                    <ServiceIcon name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-[17px] text-[#0e261a]">{item.title}</h3>
                    <p className="text-sm text-[#4d5e53] font-semibold mt-1.5 leading-relaxed">{item.description}</p>
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
