import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, MessageCircle, Clock, Users } from 'lucide-react';
import Container from '../common/Container';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../../constants';
import { fadeUp } from '../../utils/animations';

const contactQuickInfo = [
  {
    label: 'Phone',
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_TEL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Gandhi Nagar, Jaipur, Rajasthan 302015',
    href: '#map',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ContactHero() {
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
              <nav className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-[#004B57]/90">
                <Link to="/" className="hover:text-[#5c8730] transition-colors duration-200">Home</Link>
                <span className="text-[#004B57]/30">/</span>
                <span className="text-[#5C8730]">Contact</span>
              </nav>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#153B24] leading-none">
              Contact Us
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-4 flex items-center gap-2">
              <svg className="w-40 h-2.5 text-[#5c8730]/75" viewBox="0 0 300 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5C50 2 150 2 299 5C150 7 50 7 1 5Z" />
              </svg>
              <Leaf className="w-4.5 h-4.5 text-[#8cb95d] transform rotate-12 shrink-0" />
            </motion.div>

            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-xl md:text-2xl font-bold text-[#5c8730] mb-4 leading-snug">
              We&apos;re Here to Help You Thrive.
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-[#2c4033] text-sm md:text-[15.5px] leading-relaxed max-w-xl mb-8 font-medium">
              Ready to start your wellness journey? Reach out for a free consultation, program details, or any questions — our team responds within 24 hours.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2">
              <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#5C8730]/65 z-0" />
              {[
                { key: 'consult', icon: Users, label: <>Free<br />Consultation</> },
                { key: 'response', icon: Clock, label: <>Quick<br />Response</> },
                { key: 'support', icon: MessageCircle, label: <>Expert<br />Support</> },
              ].map(({ key, icon: Icon, label }) => (
                <div key={key} className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <a
                href="#contact-form"
                className="px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
                src={PAGE_HERO_IMAGES.contact}
                alt="Healthcare consultation"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-[4000ms] hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-5 sm:p-6 lg:p-7 w-full z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-[#E2E8E4]/70">
            {contactQuickInfo.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 px-2 sm:px-6 py-2 sm:py-1 group hover:opacity-90 transition-opacity"
              >
                <div className="w-11 h-11 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730] group-hover:bg-[#5c8730]/15 transition-colors">
                  {icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-extrabold text-[#5c8730] uppercase tracking-widest block mb-0.5">
                    {label}
                  </span>
                  <p className="text-sm text-[#2c4033] font-semibold leading-snug truncate sm:whitespace-normal">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </Container>

      <img
        src="/images/leaf.png"
        alt=""
        className="absolute right-0 bottom-0 w-36 sm:w-48 lg:w-60 h-auto pointer-events-none select-none opacity-95 z-0 translate-y-6"
      />
    </section>
  );
}
