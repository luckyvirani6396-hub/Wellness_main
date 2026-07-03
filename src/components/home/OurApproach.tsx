import { motion } from 'framer-motion';
import Container from '../common/Container';

interface ApproachItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function OurApproach() {
  const approaches: ApproachItem[] = [
    {
      title: 'Personalized Plans',
      description: 'Programs tailored to your goals and lifestyle.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Expert Guidance',
      description: 'Learn from certified health professionals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="12 8 13.5 11.5 17 11.5 14 13.5 15.5 17 12 15 8.5 17 10 13.5 7 11.5 10.5 11.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Mindful Living',
      description: 'Build healthy habits for lasting change.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
          <path d="M12 22C12 22 6 16 6 12C6 9.5 8 7.5 10 7.5C11 7.5 11.5 8 12 9C12.5 8 13 7.5 14 7.5C16 7.5 18 9.5 18 12C18 16 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22C12 22 9 17.5 9 14.5C9 12.5 10.5 11 12 11C13.5 11 15 12.5 15 14.5C15 17.5 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 14.5C4 14.5 10 16 12 22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 14.5C20 14.5 14 16 12 22" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Results',
      description: 'Achieve long-term health and vitality.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 md:py-18 relative z-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left Title Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#72A93B] mb-3">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-[38px] font-serif font-medium text-[#0e261a] leading-tight">
              Holistic Health for <br className="hidden md:inline" />
              Body, Mind & Soul
            </h2>
          </div>

          {/* Right Features Column */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {approaches.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4.5"
                >
                  {/* Circular Icon Wrapper */}
                  <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-[17px] text-[#0e261a]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4d5e53] font-semibold mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
