import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SectionDecorations from '../../components/common/SectionDecorations';
import ServiceCard from '../../components/common/ServiceCard';
import NewsletterForm from '../../components/forms/NewsletterForm';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesStatsBar from '../../components/services/ServicesStatsBar';
import CareApproach from '../../components/services/CareApproach';
import HowItWorks from '../../components/services/HowItWorks';
import { clinicalServices } from '../../assets/data/clinicalServices';
import { staggerContainer, fadeUp } from '../../utils/animations';

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesStatsBar />

      <section id="services-list" className="py-14 md:py-18 relative overflow-hidden z-10 bg-white">
        <SectionDecorations />
        <Container>
          <SectionTitle
            subtitle="Clinical Services"
            title="Choose Your Area of Care"
            description="Each service focuses on one health condition with personalized meal plans and ongoing expert guidance."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {clinicalServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                image={service.image}
                to={`/services/${service.slug}`}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      <CareApproach />
      <HowItWorks />

      {/* Consultation CTA */}
      <section className="py-14 md:py-18 relative overflow-hidden bg-[#F8FAF6]/30">
        <SectionDecorations />
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
                Free Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                Not Sure Which Service Is Right for You?
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg">
                Book a free consultation and our experts will recommend the best clinical nutrition plan for your health goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 shrink-0 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
            >
              Book Consultation
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-14 md:py-18 pb-20 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[220px] h-[350px] bg-gradient-to-r from-[#E8F2EA]/70 to-transparent rounded-r-full blur-xl pointer-events-none" />
        <Container className="relative z-10">
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
