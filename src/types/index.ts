export interface ClinicalService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  includes: string[];
  image?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category?: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration?: string;
  icon: string;
  features?: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  program: string;
  beforeImage: string;
  afterImage: string;
  result: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  headcount: string;
  programType: string;
  deliveryMode: string;
  startDate: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  healthGoal: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: number }[];
}

export interface QuizResult {
  score: number;
  title: string;
  description: string;
  recommendation: string;
}
