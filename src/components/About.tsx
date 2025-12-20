import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../assets/profile.jpg';


const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            style={{ y }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-neon-blue rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
            <div className="absolute inset-0 bg-neon-purple rounded-2xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500 blur-xl"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                src={profileImage}
                alt="Hemanth Chandran"
                className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="text-sm font-light tracking-widest uppercase mb-1 text-neon-blue">Based in India</p>
                <p className="text-xl font-medium">Building the future, one pixel at a time.</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8 relative">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold font-display"
            >
              More than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                syntax & logic.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            >
              <p>
                I’m <span className="text-gray-900 dark:text-white font-medium">Hemanth Chandran</span>, an <span className="text-neon-blue">MCA student</span> and frontend developer working at the intersection of engineering and design.
              </p>

              <p>
                I focus on building clean, interactive, and performant web experiences, paying close attention to the details that elevate a product—from motion and layout to structure and scalability.
              </p>

              <p>
                Whether it’s architecting modern <span className="text-gray-900 dark:text-white">React/Angular</span> interfaces or experimenting with <span className="text-gray-900 dark:text-white">AI-integrated features</span>, I aim to build software that feels purposeful and memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <a href="#projects" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors duration-300 border-b border-neon-blue/30 hover:border-neon-purple pb-1">
                See my journey
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;