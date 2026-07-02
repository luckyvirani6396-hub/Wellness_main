import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { SITE_NAME, NAV_ITEMS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, CONTACT_ADDRESS, WHATSAPP_NUMBER } from '../../constants';
import Container from '../common/Container';
import Logo from '../common/Logo';

const socialIcons = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#002D26] to-[#001713] text-white mt-auto overflow-hidden z-10">
      {/* Decorative Blur Blobs in Background */}
      <div className="absolute left-1/4 top-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#72A93B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative leaf watermark outline on the right side of the footer */}
      <div className="absolute right-[-50px] bottom-[-20px] w-[260px] h-[320px] pointer-events-none z-0 opacity-10 transform rotate-12 text-[#72A93B]">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-current">
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <Container className="py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Logo className="mb-6" />
            <p className="text-[#E2E8E4]/85 text-sm md:text-[14.5px] leading-relaxed mb-8 max-w-sm">
              Empowering individuals with sustainable nutrition and holistic wellness practices for a healthier, happier, and more balanced life.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#72A93B] hover:border-[#72A93B] hover:scale-110 hover:shadow-lg hover:shadow-[#72A93B]/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-[#E2E8E4] hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#72A93B] mb-6 relative after:content-[''] after:block after:w-6 after:h-[2px] after:bg-[#72A93B]/60 after:mt-2.5">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-[#E2E8E4]/70 hover:text-white transition-all duration-300 text-sm hover:translate-x-1.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3 lg:pl-2">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#72A93B] mb-6 relative after:content-[''] after:block after:w-6 after:h-[2px] after:bg-[#72A93B]/60 after:mt-2.5">
              Our Programs
            </h3>
            <ul className="space-y-3.5">
              {['Weight Transformation', 'PCOS Wellness', 'Diabetes Management', 'Corporate Wellness', 'Mind & Body Balance'].map((program) => (
                <li key={program}>
                  <Link 
                    to="/programs" 
                    className="text-[#E2E8E4]/70 hover:text-white transition-all duration-300 text-sm hover:translate-x-1.5 inline-block"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#72A93B] mb-6 relative after:content-[''] after:block after:w-6 after:h-[2px] after:bg-[#72A93B]/60 after:mt-2.5">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="group flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#72A93B] group-hover:bg-[#72A93B] group-hover:text-white transition-all duration-300 shrink-0">
                  <HiLocationMarker className="w-4 h-4" />
                </div>
                <span className="text-sm text-[#E2E8E4]/70 leading-relaxed pt-0.5 group-hover:text-[#E2E8E4] transition-colors">
                  {CONTACT_ADDRESS}
                </span>
              </li>
              <li className="group flex items-start gap-4">
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#72A93B] group-hover:bg-[#72A93B] group-hover:text-white transition-all duration-300 shrink-0">
                    <HiPhone className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#E2E8E4]/70 pt-2 group-hover:text-[#E2E8E4] transition-colors">
                    {CONTACT_PHONE}
                  </span>
                </a>
              </li>
              <li className="group flex items-start gap-4">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#72A93B] group-hover:bg-[#72A93B] group-hover:text-white transition-all duration-300 shrink-0">
                    <HiMail className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-[#E2E8E4]/70 pt-2 group-hover:text-[#E2E8E4] transition-colors break-all">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </Container>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 border-t border-white/5 bg-black/10">
        <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#E2E8E4]/40 text-xs md:text-sm text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. <br className="sm:hidden" />
            <span className="text-white/20 px-1 hidden md:inline">|</span> Powered By DAYSTAR PINNACLE PRIVATE LIMITED.
          </p>
          <div className="flex gap-6 text-xs md:text-sm text-[#E2E8E4]/40">
            <a href="#" className="hover:text-[#72A93B] hover:underline transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#72A93B] hover:underline transition-all duration-300">Terms of Service</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
