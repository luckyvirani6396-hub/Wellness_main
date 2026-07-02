import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Check } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionDecorations from '../../components/common/SectionDecorations';
import ServiceDetailHero from '../../components/services/ServiceDetailHero';
import RelatedServices from '../../components/services/RelatedServices';
import { getServiceBySlug, getRelatedServices } from '../../assets/data/clinicalServices';
import { fadeUp } from '../../utils/animations';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = getRelatedServices(service.slug, 3);

  return (
    <>
      <ServiceDetailHero service={service} />

      <section id="service-details" className="py-14 md:py-18 bg-white relative overflow-hidden">
        <SectionDecorations />
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E2E8E4]/60 shadow-sm">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-4 py-2 mb-5">
                  About This Service
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-snug">
                  How We Help You
                </h2>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#F8FAF6]/60 rounded-[24px] p-7 md:p-8 border border-[#E2E8E4]/60 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
                  <h3 className="text-lg font-extrabold text-dark mb-5 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-[#72A93B] rounded-full" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-dark font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#72A93B]" strokeWidth={3} />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F8FAF6]/60 rounded-[24px] p-7 md:p-8 border border-[#E2E8E4]/60 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
                  <h3 className="text-lg font-extrabold text-dark mb-5 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-[#72A93B] rounded-full" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-dark font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#72A93B]" strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-[24px] p-8 border border-[#E2E8E4]/60 shadow-lg shadow-secondary/10 sticky top-28">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-3.5 py-1.5 mb-4">
                  Get Started
                </span>
                <h3 className="text-xl font-bold text-dark mb-3">Ready to Begin?</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Book a free consultation with our experts to create your personalized {service.title.toLowerCase()} plan.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {['Free 30-min consultation', 'Personalized assessment', 'No obligation'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#2c4033] font-semibold">
                      <Check className="w-3.5 h-3.5 text-[#72A93B]" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02] mb-4"
                >
                  Book Consultation
                  <HiArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#E2E8E4] text-[#2c4033] hover:border-[#5c8730]/50 hover:text-[#5c8730] font-bold text-sm transition-all duration-300"
                >
                  ← All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <RelatedServices services={relatedServices} currentTitle={service.title} />

      <section className="py-14 md:py-18 bg-white">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#E8F2EA]/60 rounded-[24px] p-8 md:p-12 border border-[#E2E8E4]/50 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-white rounded-full px-4 py-2 mb-4">
                Full Programs
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Want a Complete Transformation Plan?
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg">
                Our structured multi-week programs bundle coaching, meal plans, and milestones for lasting results.
              </p>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 shrink-0 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
            >
              View Programs
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
