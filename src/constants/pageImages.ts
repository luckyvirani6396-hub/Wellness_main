export const PAGE_HERO_IMAGES = {
  about: '/images/about-hero-new.png',
  services: '/images/services-hero.png',
  programs: '/images/programs-hero1.jpg',
  wellnessHub: '/images/wellness-hub-hero.png',
  successStories: '/images/success-stories-hero.png',
  contact: '/images/contact-hero.png',
  default: '/images/about-hero.png',
} as const;

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  'weight-loss-program': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  'weight-gain-program': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
  'diabetes-program': 'https://images.unsplash.com/photo-1494597564530-871f86b893d4?w=800&h=600&fit=crop',
  hypothyroidism: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
  'child-and-women-program': 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop',
  'cholesterol-management': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
  hypertension: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
  'obesity-and-heart-disease': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  menopause: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop',
  pcos: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
};

export function getServiceHeroImage(slug: string): string {
  return SERVICE_HERO_IMAGES[slug] || PAGE_HERO_IMAGES.services;
}
