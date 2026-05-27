import { motion } from 'framer-motion';

interface Capability {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Frontend Engineering',
    description:
      'Building performant, accessible interfaces at scale. From complex SPAs to design system architecture — pixel-perfect execution with clean, maintainable code.',
    technologies: ['React', 'Angular', 'TypeScript', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    number: '02',
    title: 'Motion & Interaction',
    description:
      'Crafting fluid, purposeful motion that guides users and elevates experiences. Micro-interactions, page transitions, and scroll-driven narratives.',
    technologies: ['Framer Motion', 'CSS Animations', 'GSAP', 'Lottie'],
  },
  {
    number: '03',
    title: 'Backend Integration',
    description:
      'Connecting frontend to robust backend systems. RESTful APIs, real-time data, authentication flows, and database architecture.',
    technologies: ['Node.js', 'REST APIs', 'MySQL', 'Firebase', 'Socket.io'],
  },
  {
    number: '04',
    title: 'AI & Experimental Interfaces',
    description:
      'Exploring the intersection of intelligence and interface. Building adaptive UI systems powered by language models and agentic workflows.',
    technologies: ['LLMs', 'RAG Pipelines', 'Python', 'LangChain'],
  },
];

const Skills = () => {
  return (
    <section id="capabilities" className="py-32 bg-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-label uppercase text-text-tertiary tracking-widest mb-6">
            Capabilities
          </p>
          <h2 className="text-heading text-text max-w-3xl">
            What I bring to the table.
          </h2>
        </motion.div>

        {/* Capability items */}
        <div className="space-y-0">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-t border-border hover:border-border-hover transition-colors duration-500"
            >
              <div className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-label font-mono text-text-tertiary group-hover:text-accent transition-colors duration-500">
                    {cap.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors duration-500">
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {cap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full border border-border text-text-tertiary group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Skills;