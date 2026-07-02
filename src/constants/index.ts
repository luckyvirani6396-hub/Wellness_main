import type { NavItem } from '../types';

export const SITE_NAME = 'Wellness';
export const SITE_TAGLINE = 'Personalized Wellness & Nutrition';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Programs', path: '/programs' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Wellness Hub', path: '/wellness-hub' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Contact', path: '/contact' },
];

export const WHATSAPP_NUMBER = '919958992616';
export const CONTACT_EMAIL = 'info@wellness.com';
export const CONTACT_PHONE = '+91-9******';
export const CONTACT_PHONE_TEL = '+91-9******';
export const CONTACT_ADDRESS = 'DAYSTAR PINNACLE PRIVATE LIMITED PLOT NO.46, LAL KOTHI, SATYA VIHAR COLONY, Gandhi Nagar (Jaipur), Jaipur, Jaipur- 302015, Rajasthan';

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'FaFacebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'FaInstagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'FaTwitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'FaLinkedin' },
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'FaWhatsapp' },
];

export const WELLNESS_CATEGORIES = [
  'All',
  'Nutrition Tips',
  'Healthy Recipes',
  'Mental Wellness',
  'Yoga Practices',
  'Lifestyle Habits',
  'Stress Management',
] as const;
