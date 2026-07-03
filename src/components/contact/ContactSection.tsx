import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../common/Container';
import SectionDecorations from '../common/SectionDecorations';
import ContactForm from '../forms/ContactForm';
import Button from '../common/Button';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_ADDRESS,
  WHATSAPP_NUMBER,
} from '../../constants';
import { fadeUp } from '../../utils/animations';

const contactMethods = [
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    detail: CONTACT_ADDRESS,
    href: undefined,
  },
  {
    icon: HiPhone,
    title: 'Call Us',
    detail: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_TEL}`,
  },
  {
    icon: HiMail,
    title: 'Email Us',
    detail: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

export default function ContactSection() {
  return (
    <section id="contact-form" className="py-14 md:py-18 relative overflow-hidden z-10">
      <SectionDecorations />

      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#72A93B] mb-3 block">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-[38px] font-serif font-medium text-[#0e261a] leading-tight mb-4">
                Let&apos;s Start Your Journey
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Whether you have a question about programs, pricing, or anything else — our team is ready to answer.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, title, detail, href }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#E2E8E4]/60 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
                >
                  <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{title}</p>
                    {href ? (
                      <a href={href} className="text-muted text-xs mt-1 leading-relaxed hover:text-[#5c8730] transition-colors block">
                        {detail}
                      </a>
                    ) : (
                      <p className="text-muted text-xs mt-1 leading-relaxed">{detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-[24px] p-6 border border-[#25D366]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-bold text-dark">Chat on WhatsApp</p>
                  <p className="text-xs text-muted">Get instant responses</p>
                </div>
              </div>
              <Button
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to know more about your health programs.`}
                variant="secondary"
                fullWidth
                className="font-bold"
              >
                <FaWhatsapp className="w-5 h-5" />
                Message Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E2E8E4]/60 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-shadow duration-500">
              <div className="mb-8">
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-4 py-2 mb-4">
                  Contact Form
                </span>
                <h3 className="text-2xl font-bold text-dark">Send Us a Message</h3>
                <p className="text-muted text-sm mt-2">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
