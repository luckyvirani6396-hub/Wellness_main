import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaUniversity,
  FaIndustry,
  FaHospital,
  FaGraduationCap,
  FaShoppingCart,
  FaHotel,
  FaLandmark,
  FaTruck,
  FaRocket,
  FaHeadset,
  FaBriefcase,
} from 'react-icons/fa';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { fadeUp, staggerContainer } from '../../utils/animations';

const industries = [
  { name: 'Information Technology', icon: FaLaptopCode },
  { name: 'Finance & Banking', icon: FaUniversity },
  { name: 'Healthcare', icon: FaHospital },
  { name: 'Education', icon: FaGraduationCap },
  { name: 'Manufacturing', icon: FaIndustry },
  { name: 'Retail', icon: FaShoppingCart },
  { name: 'Hospitality', icon: FaHotel },
  { name: 'Government', icon: FaLandmark },
  { name: 'Logistics', icon: FaTruck },
  { name: 'Startups', icon: FaRocket },
  { name: 'BPO & Customer Support', icon: FaHeadset },
  { name: 'Professional Services', icon: FaBriefcase },
];

export default function Industries() {
  return (
    <section className="py-14 md:py-18 relative z-10">
      <Container>
        <SectionTitle
          subtitle="Industries We Serve"
          title="Wellness Solutions for Every Industry"
          description="We deliver wellness programs tailored to the unique demands of your industry and workforce."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="flex items-center gap-3.5 bg-white rounded-2xl border border-[#E2E8E4]/60 px-5 py-4.5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730] shrink-0">
                <industry.icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-dark leading-snug">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
