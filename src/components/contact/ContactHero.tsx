import { motion } from 'framer-motion';
import { Users, Clock, MessageCircle } from 'lucide-react';
import HeroLayout from '../common/HeroLayout';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../../constants';

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
    <HeroLayout
      breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: 'Contact' },
      ]}
      title="Contact Us"
      subtitle="We're Here to Help You Thrive."
      description="Ready to start your wellness journey? Reach out for a free consultation, program details, or any questions — our team responds within 24 hours."
      imageSrc={PAGE_HERO_IMAGES.contact}
      imageAlt="Healthcare consultation"
      ctaText="Send a Message"
      ctaHref="#contact-form"
      highlights={[
        { key: 'consult', icon: Users, label: <>Free<br />Consultation</> },
        { key: 'response', icon: Clock, label: <>Quick<br />Response</> },
        { key: 'support', icon: MessageCircle, label: <>Expert<br />Support</> },
      ]}
      bottomBar={
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
      }
    />
  );
}
