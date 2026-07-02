import type { NavItem } from '../types';

export const SITE_NAME = 'Daystar Pinnacle';
export const SITE_TAGLINE = 'Personalized Health & Nutrition';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Programs', path: '/programs' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Health Hub', path: '/health-hub' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Contact', path: '/contact' },
];

export const WHATSAPP_NUMBER = '1204414400';
export const CONTACT_EMAIL = 'info@daystarpinnacle.in';
export const CONTACT_PHONE = '0120 - 4414400';
export const CONTACT_PHONE_TEL = '01204414400';
export const CONTACT_ADDRESS = 'Daystar Pinnacle Private Limited Plot No.46, Lal Kothi, Satya Vihar Colony, Gandhi Nagar (Jaipur), Jaipur, Jaipur - 302015, Rajasthan';

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'FaFacebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'FaInstagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'FaTwitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'FaLinkedin' },
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'FaWhatsapp' },
];

export const HEALTH_CATEGORIES = [
  'All',
  'Nutrition Tips',
  'Healthy Recipes',
  'Mental Health',
  'Yoga Practices',
  'Lifestyle Habits',
  'Stress Management',
] as const;
