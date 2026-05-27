import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Subtle ambient gradient — NOT neon, just soft directional light */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-screen py-32 lg:py-0">
          {/* Left — Text Content (60%) */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-text-secondary text-[13px] font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-text text-balance"
            >
              I craft digital
              <br />
              experiences that
              <br />
              <span className="text-accent">feel alive.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed"
            >
              Frontend Engineer & MCA Scholar building performant, immersive
              web experiences that scale across borders.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-text text-bg font-semibold text-[15px] rounded-full hover:bg-accent hover:text-white transition-all duration-300"
              >
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 border border-border-hover text-text-secondary font-medium text-[15px] rounded-full hover:border-text-tertiary hover:text-text transition-all duration-300"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Portrait (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={profileImage}
                alt="Hemanth Chandran"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>
            {/* Subtle border frame */}
            <div className="absolute inset-0 rounded-2xl border border-border pointer-events-none" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="w-px h-16 bg-gradient-to-b from-text-tertiary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;