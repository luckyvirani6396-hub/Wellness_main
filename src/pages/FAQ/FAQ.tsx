import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi';
import PageHero from '../../components/common/PageHero';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What wellness and nutrition programs do you offer?',
    answer: 'We provide specialized clinical nutrition programs for weight loss, weight gain, PCOS balance, diabetes management, hypothyroidism care, cholesterol management, hypertension support, and women & child health.',
  },
  {
    question: 'Are your meal plans customized for my lifestyle?',
    answer: 'Yes, absolutely. All meal and wellness plans are engineered around your unique metabolic rate, dietary preferences (vegetarian, vegan, gluten-free, etc.), daily schedule, and specific health goals. We believe in sustainable lifestyle habits, not restrictive diets.',
  },
  {
    question: 'How do I start and what is the process?',
    answer: 'Starting is easy. You can book an initial consultation online. We will perform a complete health audit, review your medical history and lifestyle, and design a customized multi-week transformation journey with clear milestones.',
  },
  {
    question: 'Do you offer daily tracking and coaching support?',
    answer: 'Yes! Our structured programs include weekly/bi-weekly coaching check-ins along with daily habit tracking, WhatsApp messaging support, and quick dietary adjustments to keep you on track throughout the week.',
  },
  {
    question: 'Can I manage clinical conditions like thyroid or diabetes?',
    answer: 'Yes. Our clinical nutritionists are specialized in managing hormonal imbalances (PCOS, thyroid) and metabolic conditions (diabetes, lipid profile, blood pressure) through targeted dietary and lifestyle interventions, working in harmony with your medical treatments.',
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We require a 24-hour notice to reschedule or cancel coaching sessions. This allows us to offer the slot to another client on the waiting list. Thank you for respecting our coaches and clients time.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="FAQ"
        description="Have questions about our programs, consulting, or nutritional plans? Find clear answers here."
        image="/images/services-hero.png"
        imageAlt="Frequently asked questions about wellness"
      />

      <section className="py-14 md:py-18 bg-white relative overflow-hidden z-10">
        {/* Background decorations - Ambient blur blobs */}
        <div className="absolute right-0 top-1/4 w-[280px] h-[400px] bg-gradient-to-l from-[#E8F2EA]/70 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />
        <div className="absolute left-0 bottom-1/4 w-[280px] h-[400px] bg-gradient-to-r from-[#E8F2EA]/70 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#E2E8E4] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-5 text-left text-dark hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3 font-semibold text-base md:text-[17px] leading-snug">
                        <HiQuestionMarkCircle className={`w-6 h-6 shrink-0 transition-colors ${isOpen ? 'text-secondary' : 'text-muted'}`} />
                        {item.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'text-muted'}`}>
                        <HiChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-[#E2E8E4]/60 text-[#5F6B6E] text-sm md:text-[14.5px] leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Support CTA card */}
            <div className="mt-14 p-8 rounded-3xl bg-[#E8F2EA]/50 border border-[#E2E8E4]/60 text-center max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-dark mb-2">Still have questions?</h3>
              <p className="text-sm text-[#5F6B6E] mb-6">
                Our support team and nutritionists are here to guide you. Drop us a line and we will get back to you shortly.
              </p>
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
