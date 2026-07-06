import type { Stat, Service, Program, Testimonial, BlogPost, TimelineStep, SuccessStory, QuizQuestion } from '../../types';

export const stats: Stat[] = [
  { value: 5000, suffix: '+', label: 'Employees Engaged' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 100, suffix: '+', label: 'Wellness Workshops' },
];

export const coreServices: Service[] = [
  {
    id: 'physical',
    title: 'Physical Wellness',
    description: 'Corporate yoga, fitness classes, and walking challenges that keep teams active.',
    icon: 'yoga',
  },
  {
    id: 'mental',
    title: 'Mental Wellbeing',
    description: 'Meditation, mindfulness training, and burnout prevention programs.',
    icon: 'meditation',
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Healthy Living',
    description: 'Nutrition workshops, cooking demos, and healthy eating challenges.',
    icon: 'nutrition',
  },
  {
    id: 'social',
    title: 'Social Wellbeing',
    description: 'Team building activities, wellness days, and recognition events.',
    icon: 'corporate',
  },
  {
    id: 'balance',
    title: 'Work-Life Balance',
    description: 'Flexible and hybrid wellness sessions that support healthier work habits.',
    icon: 'lifestyle',
  },
  {
    id: 'preventive',
    title: 'Preventive Healthcare',
    description: 'Health screenings, vaccination drives, and wellness checkups.',
    icon: 'clinical',
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: 'Submit Your Company Details',
    description: 'Fill out our quick registration or inquiry form with your company information, employee count, and wellness requirements.',
  },
  {
    step: 2,
    title: 'Sales Team Consultation',
    description: 'Our wellness consultant or sales representative will contact you to understand your needs, goals, and challenges.',
  },
  {
    step: 3,
    title: 'Program Recommendation',
    description: 'We suggest the best-fit wellness programs based on your company size, industry, and objectives.',
  },
  {
    step: 4,
    title: 'Customized Proposal',
    description: 'Receive a tailored wellness plan with pricing, schedule, and program details.',
  },
  {
    step: 5,
    title: 'Program Launch',
    description: 'Once approved, we begin your wellness program with expert-led sessions and ongoing support.',
  },
];

export const featuredPrograms: Program[] = [
  {
    id: 'kickstart',
    title: 'Kickstart Package',
    subtitle: 'Best for 20–50 Employees',
    description: 'The perfect entry point for growing teams — monthly wellness sessions, challenges, and resources that build healthy habits.',
    duration: '20–50 EMPLOYEES',
    icon: 'lifestyle',
    features: ['Monthly Yoga Session', 'Guided Meditation', 'Monthly Fitness Challenge'],
    image: '/images/program-weight-new.png',
  },
  {
    id: 'growth',
    title: 'Growth Package',
    subtitle: 'Best for 50–250 Employees',
    description: 'Everything in Kickstart, plus workshops, quarterly events, and participation reporting for mid-sized organizations.',
    duration: '50–250 EMPLOYEES',
    icon: 'mindfulness',
    features: ['Nutrition & Mental Wellness Workshops', 'Quarterly Wellness Events', 'Employee Participation Reports'],
    image: '/images/program-mind-new.png',
  },
  {
    id: 'total-transformation',
    title: 'Total Transformation',
    subtitle: 'Best for 250+ Employees',
    description: 'Everything in Growth, plus a dedicated consultant, leadership coaching, and an annual wellness strategy for large organizations.',
    duration: '250+ EMPLOYEES',
    icon: 'corporate',
    features: ['Dedicated Wellness Consultant', 'Leadership Wellbeing Coaching', 'Advanced Reporting & Analytics'],
    image: '/images/program-reset-new.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'HR Manager',
    role: 'HR Manager',
    rating: 5,
    feedback: 'Our wellness program significantly improved employee participation and team engagement. The sessions were well organized, practical, and easy to implement.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Head of People & Culture',
    role: 'Head of People & Culture',
    rating: 5,
    feedback: 'The customized wellness strategy aligned perfectly with our company culture. Employees appreciated the flexibility and variety of programs.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Operations Director',
    role: 'Operations Director',
    rating: 5,
    feedback: 'Our leadership team noticed improvements in morale, communication, and overall workplace energy after launching the wellness initiative.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
];

function articleBody(excerpt: string, focus: string): string[] {
  return [
    excerpt,
    focus,
    'Daystar Pinnacle combines clinical nutrition expertise with practical coaching so you can apply what you learn in everyday life — at home, at work, and on the go.',
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
    category: 'Mental Health',
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

export const healthServices: Service[] = [
  { id: 'ys', title: 'Yoga Sessions', description: 'Group and private yoga classes for all levels.', icon: 'yoga', category: 'health' },
  { id: 'mp', title: 'Meditation Programs', description: 'Guided meditation for stress relief and focus.', icon: 'meditation', category: 'health' },
  { id: 'sm', title: 'Stress Management', description: 'Techniques to manage and reduce daily stress.', icon: 'stress', category: 'health' },
  { id: 'lc', title: 'Lifestyle Coaching', description: 'Holistic coaching for lasting lifestyle changes.', icon: 'lifestyle', category: 'health' },
  { id: 'so', title: 'Sleep Optimization', description: 'Improve sleep quality through proven strategies.', icon: 'sleep', category: 'health' },
];

export const corporateServices: Service[] = [
  { id: 'ewp', title: 'Employee Health Programs', description: 'Comprehensive health initiatives for teams.', icon: 'corporate', category: 'corporate' },
  { id: 'ws', title: 'Workshops', description: 'Interactive health workshops and seminars.', icon: 'workshop', category: 'corporate' },
  { id: 'mws', title: 'Mental Health Sessions', description: 'Mental health support for employees.', icon: 'mental', category: 'corporate' },
  { id: 'ha', title: 'Health Assessments', description: 'On-site health screenings and evaluations.', icon: 'assessment', category: 'corporate' },
];

export const pagePrograms: Program[] = [
  {
    id: 'kickstart',
    title: 'Kickstart Package',
    subtitle: 'Small Teams & Startups',
    description: 'The perfect entry point for growing teams — monthly wellness sessions, fitness challenges, and digital resources that build healthy habits.',
    duration: '20–50 Employees',
    icon: 'lifestyle',
    features: ['1 monthly yoga or fitness session', '1 guided meditation session', 'Monthly wellness challenge', 'Digital wellness resources'],
    image: '/images/program-weight-new.png',
  },
  {
    id: 'growth',
    title: 'Growth Package',
    subtitle: 'Mid-Sized Organizations',
    description: 'Everything in Kickstart, plus expert-led workshops, quarterly wellness events, and employee participation reporting.',
    duration: '50–250 Employees',
    icon: 'mindfulness',
    features: ['Everything in Kickstart', 'Nutrition & mental wellness workshops', 'Quarterly wellness events', 'Employee participation reports'],
    image: '/images/program-mind-new.png',
  },
  {
    id: 'total-transformation',
    title: 'Total Transformation Package',
    subtitle: 'Large Organizations',
    description: 'Everything in Growth, plus a dedicated wellness consultant, leadership wellbeing coaching, and an annual wellness strategy.',
    duration: '250+ Employees',
    icon: 'corporate',
    features: ['Everything in Growth', 'Dedicated wellness consultant', 'Leadership wellbeing coaching', 'Annual wellness strategy & analytics'],
    image: '/images/program-reset-new.png',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Custom Package',
    subtitle: 'Fully Customized Programs',
    description: 'A fully customized wellness program built around your organization\u2019s goals, culture, and global footprint.',
    duration: 'Custom',
    icon: 'assessment',
    features: ['Fully customized program design', 'Onsite, virtual & hybrid delivery', 'Multi-location support', 'Dedicated account management'],
    image: '/images/program-corporate-new.png',
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
    program: 'PCOS Health',
    beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop',
    result: 'Regular cycles restored in 3 months',
  },
];

export const whyChooseUs = [
  { title: 'Customized Wellness Strategies', description: 'Wellness experiences aligned with your company culture, employee needs, and business objectives.', icon: 'personalized' },
  { title: 'Certified Wellness Professionals', description: 'Expert-led sessions delivered by certified trainers, nutritionists, and mental health experts.', icon: 'expert' },
  { title: 'Flexible Delivery & Scheduling', description: 'Virtual, onsite, and hybrid delivery with easy implementation and flexible scheduling.', icon: 'science' },
  { title: 'Scalable & Measurable', description: 'Programs that scale to any organization size, with engagement tracking and dedicated support.', icon: 'holistic' },
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
