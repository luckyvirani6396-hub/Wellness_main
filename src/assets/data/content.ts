import type { Stat, Service, Program, Testimonial, BlogPost, TimelineStep, SuccessStory, QuizQuestion } from '../../types';

export const stats: Stat[] = [
  { value: 5000, suffix: '+', label: 'Lives Impacted' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 100, suffix: '+', label: 'Wellness Workshops' },
];

export const coreServices: Service[] = [
  {
    id: 'nutrition',
    title: 'Personalized Nutrition Plans',
    description: 'Custom meal plans tailored to your health goals, dietary preferences, and lifestyle.',
    icon: 'nutrition',
  },
  {
    id: 'yoga',
    title: 'Yoga & Mindfulness',
    description: 'Guided yoga sessions and mindfulness practices for body-mind harmony.',
    icon: 'yoga',
  },
  {
    id: 'stress',
    title: 'Stress Management',
    description: 'Evidence-based techniques to reduce stress and improve mental resilience.',
    icon: 'stress',
  },
  {
    id: 'weight',
    title: 'Weight Management',
    description: 'Sustainable weight loss and maintenance through balanced nutrition.',
    icon: 'weight',
  },
  {
    id: 'corporate',
    title: 'Corporate Wellness',
    description: 'Comprehensive wellness programs designed for workplace health.',
    icon: 'corporate',
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Coaching',
    description: 'Holistic coaching to build lasting healthy habits and routines.',
    icon: 'lifestyle',
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: 'Initial Assessment',
    description: 'Comprehensive health evaluation including medical history, lifestyle, and goals.',
  },
  {
    step: 2,
    title: 'Wellness Consultation',
    description: 'One-on-one session with our certified experts to understand your unique needs.',
  },
  {
    step: 3,
    title: 'Customized Plan',
    description: 'Personalized nutrition and wellness plan designed specifically for you.',
  },
  {
    step: 4,
    title: 'Progress Tracking',
    description: 'Regular check-ins and adjustments to ensure you stay on track.',
  },
  {
    step: 5,
    title: 'Sustainable Results',
    description: 'Long-term lifestyle changes that lead to lasting health improvements.',
  },
];

export const featuredPrograms: Program[] = [
  {
    id: 'weight-transformation',
    title: 'Rebuild & Reset',
    subtitle: 'Full Body Reset',
    description: 'A complete 12-week journey combining nutrition, coaching, and habit building for lasting weight change.',
    duration: '12 WEEKS',
    icon: 'weight',
    features: ['Weekly coaching calls', 'Custom meal plans', 'Progress tracking'],
    image: '/images/program-weight-new.png',
  },
  {
    id: 'mind-body',
    title: 'Balance & Align',
    subtitle: 'Yoga + Meditation',
    description: 'Harmonize physical and mental wellness through guided yoga, meditation, and breathwork practices.',
    duration: '8 WEEKS',
    icon: 'mindfulness',
    features: ['Daily yoga sessions', 'Guided meditations', 'Breathwork training'],
    image: '/images/program-mind-new.png',
  },
  {
    id: 'lifestyle-reset',
    title: 'Transform & Thrive',
    subtitle: 'Complete Overhaul',
    description: 'A 90-day program to rebuild your nutrition, sleep, fitness, and stress management from the ground up.',
    duration: '90 DAYS',
    icon: 'lifestyle',
    features: ['Full health audit', 'Bi-weekly coaching', 'Habit tracking tools'],
    image: '/images/program-reset-new.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Weight Loss Client',
    rating: 5,
    feedback: 'Wellness transformed my relationship with food. I lost 15kg in 12 weeks and feel more energetic than ever. The personalized approach made all the difference.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'James Rodriguez',
    role: 'Corporate Wellness Participant',
    rating: 5,
    feedback: 'Our team wellness program reduced stress levels significantly. The yoga and nutrition workshops were engaging and practical for busy professionals.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'PCOS Wellness Client',
    rating: 5,
    feedback: 'After years of struggling with PCOS, Wellness helped me understand my body better. My symptoms have improved dramatically with their holistic approach.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Michael Chen',
    role: 'Diabetes Management Client',
    rating: 5,
    feedback: 'My blood sugar levels are now stable thanks to the diabetes nutrition program. The team provided incredible support throughout my journey.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
];

function articleBody(excerpt: string, focus: string): string[] {
  return [
    excerpt,
    focus,
    'Wellness combines clinical nutrition expertise with practical coaching so you can apply what you learn in everyday life — at home, at work, and on the go.',
    'If you have a medical condition or take regular medication, check with your healthcare provider before changing your diet, supplements, or exercise plan.',
  ];
}

const blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: '10-superfoods-for-boosting-immunity-naturally',
    title: '10 Superfoods for Boosting Immunity Naturally',
    category: 'Nutrition Tips',
    excerpt: 'Discover the power of nutrient-dense foods that strengthen your immune system.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    date: 'Jun 15, 2025',
    readTime: '5 min read',
    content: articleBody(
      'Discover the power of nutrient-dense foods that strengthen your immune system.',
      'Berries, leafy greens, citrus fruits, garlic, ginger, yogurt, nuts, seeds, turmeric, and green tea are among the most researched foods for immune support. Aim to include a variety of colors on your plate each day.',
    ),
  },
  {
    id: '2',
    slug: 'morning-yoga-routine-for-beginners',
    title: 'Morning Yoga Routine for Beginners',
    category: 'Yoga Practices',
    excerpt: 'Start your day with these simple yet effective yoga poses for energy and flexibility.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    date: 'Jun 12, 2025',
    readTime: '7 min read',
    content: articleBody(
      'Start your day with these simple yet effective yoga poses for energy and flexibility.',
      'A 15-minute flow of cat-cow, downward dog, sun salutations, and gentle twists can wake up your spine and improve circulation without needing advanced flexibility.',
    ),
  },
  {
    id: '3',
    slug: 'managing-stress-through-mindful-breathing',
    title: 'Managing Stress Through Mindful Breathing',
    category: 'Stress Management',
    excerpt: 'Learn breathing techniques that calm your nervous system in minutes.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    date: 'Jun 11, 2025',
    readTime: '4 min read',
    content: articleBody(
      'Learn breathing techniques that calm your nervous system in minutes.',
      'Box breathing (inhale 4 counts, hold 4, exhale 4, hold 4) and extended exhales activate the parasympathetic nervous system and can lower heart rate within a few cycles.',
    ),
  },
  {
    id: '4',
    slug: 'quinoa-buddha-bowl-recipe',
    title: 'Quinoa Buddha Bowl Recipe',
    category: 'Healthy Recipes',
    excerpt: 'A colorful, protein-packed bowl perfect for lunch or dinner.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    date: 'Jun 8, 2026',
    readTime: '6 min read',
    content: articleBody(
      'A colorful, protein-packed bowl perfect for lunch or dinner.',
      'Layer cooked quinoa with roasted sweet potato, chickpeas, avocado, shredded cabbage, and a lemon-tahini dressing for balanced macros and lasting energy.',
    ),
  },
  {
    id: '5',
    slug: 'the-science-of-sleep-and-weight-loss',
    title: 'The Science of Sleep and Weight Loss',
    category: 'Lifestyle Habits',
    excerpt: 'How quality sleep impacts your metabolism and weight management goals.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop',
    date: 'Jun 5, 2026',
    readTime: '8 min read',
    content: articleBody(
      'How quality sleep impacts your metabolism and weight management goals.',
      'Poor sleep disrupts hunger hormones ghrelin and leptin, increases cravings for high-calorie foods, and reduces insulin sensitivity — making weight management harder even with a good diet.',
    ),
  },
  {
    id: '6',
    slug: 'building-mental-resilience-daily',
    title: 'Building Mental Resilience Daily',
    category: 'Mental Wellness',
    excerpt: 'Practical strategies to strengthen your mental health and emotional well-being.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    date: 'Jun 3, 2026',
    readTime: '6 min read',
    content: articleBody(
      'Practical strategies to strengthen your mental health and emotional well-being.',
      'Journaling, gratitude practice, movement breaks, and setting boundaries on screen time are simple habits that compound into greater emotional stability over weeks and months.',
    ),
  },
  {
    id: '7',
    slug: 'anti-inflammatory-meal-prep-guide',
    title: 'Anti-Inflammatory Meal Prep Guide',
    category: 'Healthy Recipes',
    excerpt: 'Weekly meal prep ideas that fight inflammation and boost energy.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    date: 'Jun 1, 2026',
    readTime: '10 min read',
    content: articleBody(
      'Weekly meal prep ideas that fight inflammation and boost energy.',
      'Batch-cook salmon, roasted vegetables, brown rice, and a big jar of olive-oil dressing on Sunday so weekday meals center on omega-3 fats, fiber, and antioxidant-rich produce.',
    ),
  },
  {
    id: '8',
    slug: '5-minute-desk-stretches-for-office-workers',
    title: '5-Minute Desk Stretches for Office Workers',
    category: 'Yoga Practices',
    excerpt: 'Quick stretches to relieve tension and improve posture at your desk.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    date: 'May 28, 2026',
    readTime: '3 min read',
    content: articleBody(
      'Quick stretches to relieve tension and improve posture at your desk.',
      'Neck rolls, seated spinal twists, chest openers, and wrist stretches every hour can reduce stiffness and support better posture during long work sessions.',
    ),
  },
  {
    id: '9',
    slug: 'understanding-macronutrients',
    title: 'Understanding Macronutrients',
    category: 'Nutrition Tips',
    excerpt: 'A beginner-friendly guide to proteins, carbs, and fats for optimal health.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    date: 'May 25, 2026',
    readTime: '7 min read',
    content: articleBody(
      'A beginner-friendly guide to proteins, carbs, and fats for optimal health.',
      'Protein supports repair and satiety, carbohydrates fuel activity and brain function, and healthy fats aid hormone production and nutrient absorption — balance matters more than eliminating any one group.',
    ),
  },
];

export const blogPosts: BlogPost[] = blogPostsData.slice(0, 3);
export const allBlogPosts: BlogPost[] = blogPostsData;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  return allBlogPosts
    .filter((post) => post.slug !== slug && post.category === current.category)
    .slice(0, limit);
}

export const nutritionServices: Service[] = [
  { id: 'wm', title: 'Weight Management', description: 'Sustainable weight loss and maintenance programs.', icon: 'weight', category: 'nutrition' },
  { id: 'cn', title: 'Clinical Nutrition', description: 'Therapeutic nutrition for medical conditions.', icon: 'clinical', category: 'nutrition' },
  { id: 'sn', title: 'Sports Nutrition', description: 'Performance-focused nutrition for athletes.', icon: 'sports', category: 'nutrition' },
  { id: 'chn', title: 'Child Nutrition', description: 'Healthy eating habits for growing children.', icon: 'child', category: 'nutrition' },
  { id: 'wh', title: "Women's Health", description: 'Specialized nutrition for women\'s health needs.', icon: 'women', category: 'nutrition' },
];

export const wellnessServices: Service[] = [
  { id: 'ys', title: 'Yoga Sessions', description: 'Group and private yoga classes for all levels.', icon: 'yoga', category: 'wellness' },
  { id: 'mp', title: 'Meditation Programs', description: 'Guided meditation for stress relief and focus.', icon: 'meditation', category: 'wellness' },
  { id: 'sm', title: 'Stress Management', description: 'Techniques to manage and reduce daily stress.', icon: 'stress', category: 'wellness' },
  { id: 'lc', title: 'Lifestyle Coaching', description: 'Holistic coaching for lasting lifestyle changes.', icon: 'lifestyle', category: 'wellness' },
  { id: 'so', title: 'Sleep Optimization', description: 'Improve sleep quality through proven strategies.', icon: 'sleep', category: 'wellness' },
];

export const corporateServices: Service[] = [
  { id: 'ewp', title: 'Employee Wellness Programs', description: 'Comprehensive wellness initiatives for teams.', icon: 'corporate', category: 'corporate' },
  { id: 'ws', title: 'Workshops', description: 'Interactive wellness workshops and seminars.', icon: 'workshop', category: 'corporate' },
  { id: 'mws', title: 'Mental Wellness Sessions', description: 'Mental health support for employees.', icon: 'mental', category: 'corporate' },
  { id: 'ha', title: 'Health Assessments', description: 'On-site health screenings and evaluations.', icon: 'assessment', category: 'corporate' },
];

export const pagePrograms: Program[] = [
  {
    id: 'weight-transformation',
    title: 'Weight Transformation',
    subtitle: 'Full Body Reset',
    description: 'A comprehensive 12-week journey combining personalized nutrition, behavioral coaching, and fitness guidance for sustainable results.',
    duration: '12 Weeks',
    icon: 'weight',
    features: ['Personalized meal plans', 'Weekly coaching calls', 'Progress tracking app', 'Community support group'],
    image: '/images/program-weight-new.png',
  },
  {
    id: 'mind-body',
    title: 'Mind & Body Balance',
    subtitle: 'Yoga + Meditation',
    description: 'Harmonize your physical and mental well-being through integrated yoga, meditation, and breathwork practices.',
    duration: '8 Weeks',
    icon: 'mindfulness',
    features: ['Daily yoga sessions', 'Guided meditations', 'Breathwork training', 'Mindfulness journal'],
    image: '/images/program-mind-new.png',
  },
  {
    id: 'lifestyle-reset',
    title: 'Holistic Lifestyle Reset',
    subtitle: 'Complete Overhaul',
    description: 'A 90-day program to reset your nutrition, fitness, sleep, and stress management habits for lasting change.',
    duration: '90 Days',
    icon: 'lifestyle',
    features: ['Full health audit', 'Custom wellness plan', 'Bi-weekly coaching', 'Habit tracking tools'],
    image: '/images/program-reset-new.png',
  },
  {
    id: 'gut-health-journey',
    title: 'Gut Health Journey',
    subtitle: 'Digestive Wellness',
    description: 'A structured 6-week program to heal your gut through targeted nutrition, probiotics, and lifestyle adjustments.',
    duration: '6 Weeks',
    icon: 'gut',
    features: ['Gut healing protocol', 'Elimination diet guide', 'Microbiome support', 'Weekly check-ins'],
    image: '/images/program-gut-new.png',
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Wellness',
    subtitle: 'Team Health Initiative',
    description: 'Transform your workplace culture with comprehensive employee wellness workshops, screenings, and challenges.',
    duration: 'Custom',
    icon: 'corporate',
    features: ['On-site health screenings', 'Wellness workshops', 'Fitness challenges', 'Mental health sessions'],
    image: '/images/program-corporate-new.png',
  },
  {
    id: 'womens-wellness',
    title: "Women's Wellness Circle",
    subtitle: 'Hormonal Harmony',
    description: 'An 8-week supportive group program covering nutrition, hormones, stress, and self-care for women at every life stage.',
    duration: '8 Weeks',
    icon: 'women',
    features: ['Group coaching sessions', 'Hormone-friendly meal plans', 'Stress management tools', 'Peer community'],
    image: '/images/program-womens-new.png',
  },
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    program: 'Weight Transformation',
    beforeImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=400&fit=crop',
    result: 'Lost 18kg in 12 weeks',
  },
  {
    id: '2',
    name: 'David Park',
    program: 'Diabetes Management',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
    result: 'HbA1c reduced from 8.2 to 6.1',
  },
  {
    id: '3',
    name: 'Lisa Anderson',
    program: 'PCOS Wellness',
    beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop',
    result: 'Regular cycles restored in 3 months',
  },
];

export const whyChooseUs = [
  { title: 'Certified Experts', description: 'Our team includes certified nutritionists, yoga instructors, and wellness coaches.', icon: 'expert' },
  { title: 'Personalized Plans', description: 'Every program is tailored to your unique health profile and lifestyle.', icon: 'personalized' },
  { title: 'Science-Based Approach', description: 'All our methods are backed by the latest research and clinical evidence.', icon: 'science' },
  { title: 'Holistic Wellness Solutions', description: 'We address physical, mental, and emotional well-being together.', icon: 'holistic' },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'How would you rate your current energy levels throughout the day?',
    options: [
      { label: 'Consistently high', value: 4 },
      { label: 'Moderate with afternoon dips', value: 3 },
      { label: 'Often tired', value: 2 },
      { label: 'Constantly exhausted', value: 1 },
    ],
  },
  {
    id: '2',
    question: 'How many servings of fruits and vegetables do you eat daily?',
    options: [
      { label: '5 or more', value: 4 },
      { label: '3-4 servings', value: 3 },
      { label: '1-2 servings', value: 2 },
      { label: 'Rarely any', value: 1 },
    ],
  },
  {
    id: '3',
    question: 'How often do you engage in physical activity?',
    options: [
      { label: '5+ times per week', value: 4 },
      { label: '3-4 times per week', value: 3 },
      { label: '1-2 times per week', value: 2 },
      { label: 'Rarely or never', value: 1 },
    ],
  },
  {
    id: '4',
    question: 'How would you describe your stress levels?',
    options: [
      { label: 'Well managed', value: 4 },
      { label: 'Occasionally stressed', value: 3 },
      { label: 'Frequently stressed', value: 2 },
      { label: 'Overwhelmed daily', value: 1 },
    ],
  },
  {
    id: '5',
    question: 'How many hours of sleep do you get on average?',
    options: [
      { label: '7-9 hours', value: 4 },
      { label: '6-7 hours', value: 3 },
      { label: '5-6 hours', value: 2 },
      { label: 'Less than 5 hours', value: 1 },
    ],
  },
];
