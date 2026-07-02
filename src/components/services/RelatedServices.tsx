import { motion } from 'framer-motion';
import type { ClinicalService } from '../../types';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import SectionDecorations from '../common/SectionDecorations';
import { staggerContainer } from '../../utils/animations';

interface RelatedServicesProps {
  services: ClinicalService[];
  currentTitle: string;
}

export default function RelatedServices({ services, currentTitle }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className="py-14 md:py-18 relative overflow-hidden bg-[#F8FAF6]/30">
      <SectionDecorations />
      <Container>
        <SectionTitle
          subtitle="Explore More"
          title="Related Services"
          description={`Other clinical nutrition programs that may complement your ${currentTitle.toLowerCase()} journey.`}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
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
  );
}
