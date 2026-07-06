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
    question: 'Can programs be customized?',
    answer: 'Yes. Every organization has different goals, and we tailor programs accordingly.',
  },
  {
    question: 'Do you offer virtual sessions?',
    answer: 'Yes. We provide onsite, virtual, and hybrid wellness programs.',
  },
  {
    question: 'How many employees can participate?',
    answer: 'Our programs scale from small teams to enterprise organizations with thousands of employees.',
  },
  {
    question: 'Can we combine different wellness services?',
    answer: 'Absolutely. We create customized wellness calendars that include multiple services throughout the year.',
  },
  {
    question: 'How long are the sessions?',
    answer: 'Programs typically range from 30 to 90 minutes, depending on the activity and objectives.',
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
        description="Have questions about our corporate wellness programs, packages, or delivery options? Find clear answers here."
        image="/images/services-hero.png"
        imageAlt="Frequently asked questions about corporate wellness"
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
                Our wellness consultants are here to guide you. Drop us a line and we will get back to you shortly.
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
