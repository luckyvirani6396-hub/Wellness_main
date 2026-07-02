import ContactHero from '../../components/contact/ContactHero';
import ContactSection from '../../components/contact/ContactSection';
import ConsultationSection, { MapSection } from '../../components/contact/ConsultationSection';

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ConsultationSection />
      <MapSection />
    </>
  );
}
