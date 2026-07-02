import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  HeartHandshake,
  Flower2,
  Sprout,
  Eye,
  Heart,
  ShieldCheck,
  Brain
} from 'lucide-react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ServiceIcon from '../../components/common/ServiceIcon';
import NewsletterForm from '../../components/forms/NewsletterForm';
import { whyChooseUs } from '../../assets/data/content';
import { PAGE_HERO_IMAGES } from '../../constants/pageImages';
import { fadeUp, staggerContainer } from '../../utils/animations';



export default function About() {
  return (
    <>
      {/* ── Custom Redesigned About Hero (Leaf Image Curve Grid Layout) ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F8F7F2] to-[#EEF5E8] min-h-screen lg:flex lg:items-center pt-10 pb-24 lg:pt-0 lg:pb-0">

        {/* Left Blurry Leaf Decoration */}
        <div className="absolute left-[-120px] top-0 w-[520px] h-[520px] rounded-full bg-[#DDEFCF] blur-[140px] opacity-70" />
        <div className="absolute right-[-180px] bottom-[-150px] w-[420px] h-[420px] rounded-full bg-[#EAF4DD] blur-[120px] opacity-80" />

        <Container className="relative z-10 w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left relative z-10">

              {/* Breadcrumbs with Leaf Icon */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730]">
                  <Leaf className="w-4.5 h-4.5" />
                </div>
                <nav className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-[#004B57]/90">
                  <Link to="/" className="hover:text-[#5c8730] transition-colors duration-200">Home</Link>
                  <span className="text-[#004B57]/30">/</span>
                  <span className="text-[#5C8730]">About Us</span>
                </nav>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#153B24] leading-none"
              >
                About Us
              </motion.h1>

              {/* Hand-drawn Underline divider & floating small leaf */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-4 flex items-center gap-2"
              >
                <svg className="w-40 h-2.5 text-[#5c8730]/75" viewBox="0 0 300 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5C50 2 150 2 299 5C150 7 50 7 1 5Z" />
                </svg>
                <Leaf className="w-4.5 h-4.5 text-[#8cb95d] transform rotate-12 shrink-0" />
              </motion.div>

              {/* Tagline */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl font-bold text-[#5c8730] mb-4 leading-snug"
              >
                Nurturing Wellness. Transforming Lives.
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[#2c4033] text-sm md:text-[15.5px] leading-relaxed max-w-xl mb-8 font-medium"
              >
                We believe in a holistic approach to wellness that nurtures the body, mind, and spirit.
              </motion.p>

              {/* Holistic Badge Flow Grid */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative flex items-start justify-between w-full max-w-[340px] sm:max-w-[420px] mb-10 px-2"
              >
                {/* Horizontal Connection Line */}
                <div className="absolute top-7 left-12 right-12 sm:top-8 sm:left-14 sm:right-14 h-[1.8px] bg-[#5C8730]/65 z-0" />

                {/* Badge 1 */}
                <div className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Sprout className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    Holistic<br />Approach
                  </span>
                </div>

                {/* Badge 2 */}
                <div className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Brain className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    Mind-Body<br />Balance
                  </span>
                </div>

                {/* Badge 3 */}
                <div className="flex flex-col items-center z-10 w-24 sm:w-28">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAF2E1] rounded-full flex items-center justify-center text-[#496b26] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#E2ECD8] shadow-[0_4px_12px_rgba(92,135,48,0.06)]">
                    <Flower2 className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold text-[#153B24] text-center mt-3.5 leading-snug tracking-wide">
                    Natural<br />Wellness
                  </span>
                </div>
              </motion.div>

              {/* Discover Our Journey Button */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative w-full"
              >
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#5c8730] hover:bg-[#496b26] text-white font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-md shadow-[#5c8730]/10 hover:scale-[1.02]"
                >
                  <span>Discover Our Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Image Column with Curved Leaf Frame Shape */}
            <div className="col-span-1 lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10">

              {/* Outer curved frame stroke outline decoration */}
              <div
                className="absolute inset-y-2 left-[-25px] right-10 border-2 border-[#5c8730]/40 pointer-events-none select-none z-0"
                style={{ borderRadius: '50% 0 0 0' }}
              />

              {/* Main Image Container with leaf shape border radius clip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-2xl z-10 bg-[#F8FAF6]"
                style={{ borderRadius: '50% 0 0 0' }}
              >
                <img
                  src={PAGE_HERO_IMAGES.about || "/images/about-hero-new.png"}
                  alt="Yoga stretching holistic wellness"
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-[4000ms] hover:scale-105"
                />
              </motion.div>
            </div>
          </div>

          {/* ── Mission / Vision / Values / Commitment Card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-5 lg:mt-2 translate-y-0 lg:translate-y-12 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 rounded-[10px] p-6 lg:p-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full z-20 md:divide-x md:divide-gray-150"
          >
            {/* Box 1: Our Mission */}
            <div className="flex items-center gap-4.5 px-2">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Our Mission</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  To inspire healthier, happier lives.
                </p>
              </div>
            </div>

            {/* Box 2: Our Vision */}
            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Our Vision</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  A world where wellness is a way of life.
                </p>
              </div>
            </div>

            {/* Box 3: Our Values */}
            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Our Values</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Compassion, Integrity, Excellence.
                </p>
              </div>
            </div>

            {/* Box 4: Our Commitment */}
            <div className="flex items-center gap-4.5 px-2 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#5c8730]/10 flex items-center justify-center shrink-0 text-[#5c8730]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider">Our Commitment</span>
                <p className="text-xs text-[#2c4033] font-semibold mt-0.5 leading-relaxed max-w-[190px]">
                  Your wellness is our priority.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Realistic leaf image decoration in bottom right corner */}
        <img
          src="/images/leaf.png"
          alt=""
          className="absolute right-0 bottom-0 w-36 sm:w-48 lg:w-60 h-auto pointer-events-none select-none opacity-95 z-0 translate-y-6"
        />
      </section>

      {/* ── Our Story ─────────────────────────────── */}
      <section className="pt-24 pb-14 md:pt-32 md:pb-18 pb-20 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[300px] h-[450px] bg-gradient-to-l from-[#E8F2EA]/85 to-transparent rounded-l-full blur-2xl pointer-events-none" />


        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Our Story" title="A Journey of Wellness" align="left" />
              <p className="text-muted text-[15px] leading-relaxed mb-5 mt-4">
                Founded over a decade ago, Wellness began with a simple mission: to make expert wellness guidance accessible to everyone. What started as a small nutrition consultancy has grown into a comprehensive wellness platform serving thousands of clients worldwide.
              </p>
              <p className="text-muted text-[15px] leading-relaxed mb-8">
                We focus on promoting physical, mental, and emotional well-being through evidence-based nutrition, mindful movement, and sustainable lifestyle changes. Our team of certified experts works closely with each client to create personalized plans that fit their unique needs and goals.
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-9">
                {['Evidence-based nutrition science', 'Personalized wellness roadmaps', 'Ongoing coaching & accountability'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14.5px] font-medium text-dark">
                    <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="3.5" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#002d26] text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#A5D03B] hover:text-[#002d26] transition-all duration-300 shadow-md"
              >
                Book a Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Image collage */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/about-trainer.png" alt="Wellness coaching" className="w-full h-[230px] md:h-[260px] object-cover hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img src="/images/about-food.png" alt="Healthy nutrition" className="w-full h-[150px] md:h-[170px] object-cover hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img src="/images/hero-yoga.png" alt="Yoga by the lake" className="w-full h-[150px] md:h-[170px] object-cover hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#E2E8E4]/60 z-10">
                <div className="text-2xl font-extrabold text-[#002d26]">10+</div>
                <div className="text-xs text-muted font-semibold leading-tight">Years<br />Expertise</div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── Vision & Mission ──────────────────────── */}
      <section className="py-14 md:py-18 pb-20 md:pb-24 bg-gradient-to-b from-[#f6faf7] to-white relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[280px] h-[450px] bg-gradient-to-r from-[#E8F2EA]/85 to-transparent rounded-r-full blur-xl pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle subtitle="Our Purpose" title="Vision & Mission" description="What drives everything we do at Wellness." />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" className="w-6 h-6">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
                label: 'Our Vision',
                text: 'Creating healthier and happier communities through holistic wellness. We envision a world where everyone has access to the knowledge and support they need to live their healthiest, most fulfilling lives.',
                img: '/images/program-mind.png',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" className="w-6 h-6">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
                label: 'Our Mission',
                text: 'Empower individuals with sustainable nutrition and wellness practices. We are committed to providing science-based, personalized guidance that leads to lasting transformation — not quick fixes.',
                img: '/images/about-yoga.png',
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-[28px] border border-[#E2E8E4]/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A5D03B]/30 transition-all duration-300 group"
              >
                {/* Card image header */}
                <div className="relative h-44 overflow-hidden">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002d26]/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="text-white font-extrabold text-lg drop-shadow">{item.label}</span>
                  </div>
                </div>
                {/* Card body */}
                <div className="p-8">
                  <p className="text-muted text-[14.5px] leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Approach Strip (3 pillars with images) ─── */}
      <section className="py-14 md:py-18 pb-20 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-[280px] h-[400px] bg-gradient-to-l from-[#E8F2EA]/70 to-transparent rounded-l-full blur-xl pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle subtitle="Our Approach" title="How We Help You Thrive" description="Three pillars that form the foundation of every Wellness journey." />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {[
              { img: '/images/about-food.png', title: 'Smart Nutrition', desc: 'Personalized meal plans built on your unique metabolic profile, health goals, and food preferences.' },
              { img: '/images/hero-yoga.png', title: 'Mindful Movement', desc: 'Gentle, sustainable activity routines that complement your nutrition and support lasting vitality.' },
              { img: '/images/about-watch.png', title: 'Progress Tracking', desc: 'Data-driven insights and coach check-ins keep you on track and celebrate every milestone.' },
            ].map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden border border-[#E2E8E4]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#A5D03B]/30 transition-all duration-300 group bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-[#002d26] mb-2">{pillar.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Why Choose Us ─────────────────────────── */}
      <section className="py-14 md:py-18 pb-20 md:pb-24 bg-gradient-to-b from-[#f6faf7] to-white relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[280px] h-[400px] bg-gradient-to-r from-[#E8F2EA]/85 to-transparent rounded-r-full blur-xl pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle subtitle="Why Wellness" title="Why Choose Us" description="What sets us apart in the wellness industry." />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-[#E2E8E4]/60 text-center hover:shadow-xl hover:border-[#A5D03B]/30 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#A5D03B]/5 rounded-full blur-xl pointer-events-none" />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#002d26]/10 to-[#A5D03B]/10 flex items-center justify-center mb-6 text-[#002d26] group-hover:from-[#002d26] group-hover:to-[#A5D03B] group-hover:text-white transition-all duration-300">
                  <ServiceIcon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[#002d26] mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Newsletter ────────────────────────────── */}
      <section className="py-14 md:py-18 pb-20 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-[220px] h-[350px] bg-gradient-to-r from-[#E8F2EA]/70 to-transparent rounded-r-full blur-xl pointer-events-none" />
        <Container className="relative z-10">
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
