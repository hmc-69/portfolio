import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '15+', label: 'Technologies' },
  { value: '6+', label: 'Projects Shipped' },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-label uppercase text-text-tertiary tracking-widest mb-6">About</p>
          <h2 className="text-heading text-text max-w-4xl text-balance">
            I believe great interfaces are invisible — they get out of the way
            and let users{' '}
            <span className="text-accent">achieve their goals.</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-body-lg text-text-secondary leading-relaxed">
              I'm a <span className="text-text font-medium">Frontend Engineer</span> and{' '}
              <span className="text-text font-medium">MCA Scholar</span> focused on building
              scalable, impact-driven applications. With over a year of professional
              experience, I've architected performant web applications and collaborative enterprise systems.
            </p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              My expertise lies in translating complex requirements into intuitive,
              performant interfaces using React, Angular, and Node.js. I don't just
              write code — I engineer solutions that drive engagement and business growth.
            </p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Currently expanding into AI-driven interfaces and adaptive UI systems,
              exploring how intelligent algorithms can reshape the way we interact
              with the web.
            </p>
          </motion.div>

          {/* Right column — Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img
                src={profileImage}
                alt="Hemanth Chandran"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 rounded-2xl border border-border pointer-events-none" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-3xl font-bold text-text">{stat.value}</p>
                  <p className="text-sm text-text-tertiary mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;