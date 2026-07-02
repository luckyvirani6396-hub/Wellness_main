import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MapPin, Phone, Mail, Leaf, ArrowRight } from 'lucide-react';
import {
  SITE_NAME,
  NAV_ITEMS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_ADDRESS,
  WHATSAPP_NUMBER,
} from '../../constants';
import Container from '../common/Container';
import Logo from '../common/Logo';

const socialIcons = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp' },
];

const programs = [
  'Weight Transformation',
  'PCOS Health',
  'Diabetes Management',
  'Corporate Health',
  'Mind & Body Balance',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1a3a2a] via-[#0e261a] to-[#071810] text-white">

      {/* ── Organic blob decorations ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#5c8730]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[420px] h-[420px] rounded-full bg-[#72A93B]/8 blur-[90px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#5c8730]/5 blur-[120px]" />

      {/* ── Decorative large leaf outline watermark ── */}
      <div className="pointer-events-none absolute right-[-60px] bottom-[-30px] w-[300px] h-[360px] opacity-[0.07] text-[#72A93B] rotate-12">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-current">
          <path d="M50 195 C50 195 10 150 10 90 C10 40 30 10 50 5 C70 10 90 40 90 90 C90 150 50 195 50 195Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 195 L50 5" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M50 80 C35 65 25 55 20 45" stroke="currentColor" strokeWidth="1" />
          <path d="M50 100 C65 85 75 75 80 65" stroke="currentColor" strokeWidth="1" />
          <path d="M50 130 C35 115 28 105 22 95" stroke="currentColor" strokeWidth="1" />
          <path d="M50 150 C65 135 72 122 78 112" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Small leaf watermark top-left ── */}
      <div className="pointer-events-none absolute left-10 top-10 w-[120px] h-[120px] opacity-[0.05] text-[#72A93B] -rotate-45">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M50 95 C20 75 5 50 5 30 C5 15 20 5 50 5 C80 5 95 15 95 30 C95 50 80 75 50 95Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      {/* ── Wave top separator ── */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px] block">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#EEF5E8" />
        </svg>
      </div>

      <Container className="relative z-10 pt-24 pb-16">

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">

            {/* Logo */}
            <Logo className="mb-5" light />

            {/* Divider underline */}
            <svg className="w-32 h-2.5 text-[#5c8730]/50 mb-5" viewBox="0 0 200 10" fill="currentColor">
              <path d="M1 5C40 2 120 2 199 5C120 7 40 7 1 5Z" />
            </svg>

            <p className="text-[#b8cfc0] text-[14px] leading-relaxed mb-7 max-w-xs">
              Empowering individuals with sustainable nutrition and holistic health practices for a healthier, happier, and more balanced life.
            </p>

            {/* Hours badge */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-7 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#72A93B] animate-pulse shrink-0" />
              <span className="text-[#b8cfc0] text-[12px] font-medium">Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5c8730] hover:border-[#5c8730] hover:scale-110 hover:shadow-lg hover:shadow-[#5c8730]/30 transition-all duration-300"
                >
                  <Icon className="w-[15px] h-[15px] text-[#b8cfc0] hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pl-2">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#72A93B] mb-5 flex items-center gap-2">
              <span className="block w-4 h-[2px] bg-[#72A93B]/60 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-[#b8cfc0] hover:text-white transition-all duration-300 text-[13.5px]"
                  >
                    <ArrowRight className="w-3 h-3 text-[#5c8730] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#72A93B] mb-5 flex items-center gap-2">
              <span className="block w-4 h-[2px] bg-[#72A93B]/60 rounded-full" />
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="group flex items-center gap-2 text-[#b8cfc0] hover:text-white transition-all duration-300 text-[13.5px]"
                  >
                    <ArrowRight className="w-3 h-3 text-[#5c8730] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{program}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#72A93B] mb-5 flex items-center gap-2">
              <span className="block w-4 h-[2px] bg-[#72A93B]/60 rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#5c8730]/15 border border-[#5c8730]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#5c8730] group-hover:border-[#5c8730] transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-[#72A93B] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[13px] text-[#b8cfc0] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {CONTACT_ADDRESS}
                </span>
              </li>

              {/* Phone */}
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#5c8730]/15 border border-[#5c8730]/30 flex items-center justify-center shrink-0 group-hover:bg-[#5c8730] group-hover:border-[#5c8730] transition-all duration-300">
                    <Phone className="w-3.5 h-3.5 text-[#72A93B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] text-[#b8cfc0] group-hover:text-white transition-colors duration-300 font-medium">
                    {CONTACT_PHONE}
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#5c8730]/15 border border-[#5c8730]/30 flex items-center justify-center shrink-0 group-hover:bg-[#5c8730] group-hover:border-[#5c8730] transition-all duration-300">
                    <Mail className="w-3.5 h-3.5 text-[#72A93B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] text-[#b8cfc0] group-hover:text-white transition-colors duration-300 break-all font-medium">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/8" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#0e261a] px-4">
              <Leaf className="w-5 h-5 text-[#5c8730]/60" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#b8cfc0]/50 text-[12px] text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-[#b8cfc0]/70">{SITE_NAME}</span>. All rights reserved.
            <span className="mx-2 text-white/15">|</span>
            Powered by <span className="text-[#72A93B]/80">Daystar Pinnacle Private Limited</span>.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-[#b8cfc0]/50">
            <a href="#" className="hover:text-[#72A93B] transition-colors duration-300">Privacy Policy</a>
            <span className="text-white/15">·</span>
            <a href="#" className="hover:text-[#72A93B] transition-colors duration-300">Terms of Service</a>
            <span className="text-white/15">·</span>
            <a href="#" className="hover:text-[#72A93B] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>

      </Container>
    </footer>
  );
}
