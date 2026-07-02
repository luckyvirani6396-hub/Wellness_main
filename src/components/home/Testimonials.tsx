import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { testimonials } from '../../assets/data/content';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

export default function Testimonials() {
  const [current, setCurrent] = useState(4); // Start at middle copy
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  // Triple testimonials for infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Instantly reset position to middle copy for infinite looping
  useEffect(() => {
    if (current >= 8) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent((prev) => prev - 4);
      }, 400);
      return () => clearTimeout(timer);
    }
    if (current <= 0) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent((prev) => prev + 4);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const handlePrev = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrent((prev) => prev + 1);
  };

  const activeDotIndex = visibleCards === 3 ? (current + 1) % 4 : current % 4;

  const handleDotClick = (index: number) => {
    setTransitionEnabled(true);
    if (visibleCards === 3) {
      setCurrent(index + 3);
    } else {
      setCurrent(index + 4);
    }
  };

  const getCategory = (role: string) => {
    if (role.toLowerCase().includes('nutrition') || role.toLowerCase().includes('weight')) {
      return 'NUTRITION';
    }
    if (role.toLowerCase().includes('corporate') || role.toLowerCase().includes('wellness')) {
      return 'WELLNESS';
    }
    if (role.toLowerCase().includes('pcos') || role.toLowerCase().includes('holistic')) {
      return 'WELLNESS';
    }
    return 'NUTRITION';
  };

  return (
    <section className="py-14 md:py-18 relative overflow-hidden z-10">
      {/* Background decorations - Blur Blobs */}
      <div className="absolute left-0 top-1/4 w-[280px] h-[400px] bg-gradient-to-r from-[#E8F2EA]/75 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[280px] h-[400px] bg-gradient-to-l from-[#E8F2EA]/75 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />

      {/* Decorative dot grids */}
      <div className="absolute top-12 left-12 grid grid-cols-4 gap-2 opacity-25 pointer-events-none -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#72A93B]" />
        ))}
      </div>
      <div className="absolute bottom-12 right-12 grid grid-cols-4 gap-2 opacity-25 pointer-events-none -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#72A93B]" />
        ))}
      </div>

      {/* Left Leaf branch outline drawing */}
      <div className="absolute left-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-secondary">
          {/* Stem */}
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          {/* Leaf outlines - transparent background (fill="none") */}
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Right Leaf branch outline drawing (flipped) */}
      <div className="absolute right-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40 transform scale-x-[-1]">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-secondary">
          {/* Stem */}
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          {/* Leaf outlines - transparent background (fill="none") */}
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Real stories from people who transformed their health with Wellness."
        />

        <div className="relative max-w-6xl mx-auto mt-8 px-4 md:px-8">
          {/* Floating Chevron Navigation Chevrons on Carousel Boundaries */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#E2E8E4] flex items-center justify-center bg-white text-dark hover:bg-[#003D34] hover:text-white hover:border-[#003D34] transition-all duration-300 shadow-md z-20 cursor-pointer hidden md:flex"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#E2E8E4] flex items-center justify-center bg-white text-dark hover:bg-[#003D34] hover:text-white hover:border-[#003D34] transition-all duration-300 shadow-md z-20 cursor-pointer hidden md:flex"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Viewport Wrapper */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="overflow-hidden w-full py-4"
          >
            {/* Sliding Track */}
            <motion.div
              animate={{ x: `-${current * (100 / visibleCards)}%` }}
              transition={
                transitionEnabled
                  ? { type: 'spring', stiffness: 180, damping: 24 }
                  : { duration: 0 }
              }
              className="flex gap-0"
            >
              {extendedTestimonials.map((testimonial, index) => {
                // In a 3-card layout, the active card is the middle one: index === current + 1
                // In a 2-card or 1-card layout, it's the left-most visible card: index === current
                const isActive =
                  visibleCards === 3
                    ? index === current + 1
                    : index === current;

                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4 flex flex-col justify-between"
                  >
                    <div
                      className={`h-full flex flex-col justify-between rounded-[32px] p-8 relative transition-all duration-500 bg-white ${isActive
                          ? '!bg-[#F8FAF6] border-2 border-[#72A93B] shadow-md scale-[1.02]'
                          : 'border border-[#E2E8E4]/60 shadow-sm opacity-95 scale-100 hover:opacity-100 hover:border-[#E2E8E4]/90'
                        }`}
                    >
                      {/* Swallow-tail Green Ribbon Quote Flag (Active Card Only) */}
                      {isActive && (
                        <div
                          className="absolute top-0 left-8 w-11 h-14 bg-[#72A93B] flex items-center justify-center shadow-sm z-20"
                          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%)' }}
                        >
                          <span className="text-white text-3xl font-serif font-extrabold select-none -mt-1.5">
                            “
                          </span>
                        </div>
                      )}

                      {/* Top Content: Quote spacing & Feedback */}
                      <div>
                        {/* Quote mark spacer/drawing */}
                        <div className="h-14 flex items-center mb-4">
                          {!isActive && (
                            <span className="text-[#72A93B] text-[64px] font-serif leading-none select-none font-bold">
                              “
                            </span>
                          )}
                        </div>
                        {/* Feedback text */}
                        <p className="text-[#5F6B6E] text-[14px] md:text-[15.5px] leading-relaxed font-medium text-justify">
                          {testimonial.feedback}
                        </p>
                      </div>

                      {/* Bottom Content: Profile Avatar & Details */}
                      <div>
                        {/* Horizontal Divider Line */}
                        <hr className="border-t border-[#E2E8E4]/60 my-6" />

                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border border-[#E2E8E4] shadow-sm shrink-0"
                          />
                          <div>
                            <h5 className="font-bold text-dark text-[15px] leading-snug">
                              {testimonial.name}
                            </h5>
                            <p className="text-[#72A93B] text-[10px] font-extrabold uppercase tracking-widest mt-1">
                              {getCategory(testimonial.role)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Slider Pagination Controls (Dots) */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleDotClick(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeDotIndex
                    ? 'bg-[#72A93B]'
                    : 'bg-[#E2E8E4] hover:bg-[#72A93B]/50'
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
