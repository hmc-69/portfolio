import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  details: {
    problem: string;
    solution: string;
    outcome: string;
  };
  demoLink?: string;
  repoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Soulswed',
    category: 'Full Stack Web App',
    description: 'International Wedding Vendor Booking Platform connecting couples with vendors across 10+ countries.',
    image: 'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Angular', 'Node.js', 'MySQL', 'REST API'],
    details: {
      problem: 'Couples struggled to find reliable wedding vendors abroad due to language barriers and fragmented directories.',
      solution: 'Built a centralized platform with vetted vendor profiles, multi-language support, and secure booking capabilities.',
      outcome: 'Streamlined the booking process for users across 10+ countries, increasing vendor visibility and user trust.'
    }
  },
  {
    id: 2,
    title: 'Airline Bidding',
    category: 'Enterprise System',
    description: 'Real-time platform for airline analysts to bid on and negotiate ticket prices dynamically.',
    image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Angular', 'Node.js', 'Socket.io', 'MySQL'],
    details: {
      problem: 'Static pricing models led to unsold inventory and missed revenue opportunities for airlines.',
      solution: 'Developed a real-time bidding engine using WebSockets that allows analysts to adjust prices dynamically based on demand.',
      outcome: 'Enabled dynamic pricing strategies, potentially reducing unsold inventory and maximizing flight revenue.'
    }
  },
  {
    id: 3,
    title: 'Viberrr',
    category: 'Mobile App',
    description: 'Ad-free music streaming application focusing on pure listening experience.',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    details: {
      problem: 'Music listeners are frustrated by frequent interruptions and cluttered interfaces in commercial apps.',
      solution: 'Created a minimal, ad-free mobile player using Flutter that interacts directly with a curated backend.',
      outcome: 'Delivered a seamless, interruption-free listening experience with offline capabilities.'
    }
  },
  {
    id: 4,
    title: 'Tech Hub',
    category: 'E-commerce',
    description: 'Modern electronics marketplace with advanced filtering and cart management.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    details: {
      problem: 'Users needed a specialized marketplace for electronics with detailed specs comparison.',
      solution: 'Built a custom e-commerce solution with robust database schema for product specifications and filtering.',
      outcome: 'Provided a dedicated platform for tech enthusiasts to compare and purchase devices efficiently.'
    }
  },
  {
    id: 5,
    title: 'Password Roast',
    category: 'Web Application',
    description: 'Interactive password strength evaluator with roast-style feedback and real-time scoring.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    details: {
      problem: 'Standard password strength checkers are often boring and users ignore security advice.',
      solution: 'Developed a Python (Flask) scoring engine with a responsive glassmorphism UI and humorous feedback loops.',
      outcome: 'Resulted in an engaging tool that encourages users to create stronger passwords through gamified "roasting".'
    },
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 6,
    title: 'Gravity Fall',
    category: 'Game Development',
    description: 'Cyberpunk-style typing survival game with physics-based UI destruction.',
    image: 'https://images.pexels.com/photos/7852705/pexels-photo-7852705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['JavaScript', 'Matter.js', 'React'],
    details: {
      problem: 'Typing practice tools often lack visual engagement and high-stakes mechanics.',
      solution: 'Integrated Matter.js for physics simulations (UI collapse) and implemented sudden-death survival rules.',
      outcome: 'Created a high-intensity, visually reactive game that tests typing speed and accuracy under pressure.'
    },
    demoLink: '#',
    repoLink: '#'
  }
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: (p: Project) => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  return (
    <div
      className="group relative h-[450px] w-full rounded-xl bg-gray-900 border border-white/10 overflow-hidden cursor-none"
      onMouseMove={onMouseMove}
      onClick={() => onClick(project)}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`,
        }}
      />

      <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end h-full">
        <span className="text-neon-blue text-sm font-mono mb-2 track-wider">{project.category}</span>
        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
          Explore Project <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background relative selection:bg-neon-blue selection:text-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold font-display text-gray-900 dark:text-white">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            A collection of digital experiences, applications, and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Modal / Overlay */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

// Separate Modal Component
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative w-full max-w-4xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="h-64 md:h-96 relative">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4">
            <button onClick={onClose} className="p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-gray-900 to-transparent">
            <span className="text-neon-blue font-mono mb-2 block">{project.category}</span>
            <h3 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" /> The Problem
                </h4>
                <p className="text-gray-400 leading-relaxed">{project.details.problem}</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" /> The Solution
                </h4>
                <p className="text-gray-400 leading-relaxed">{project.details.solution}</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" /> The Outcome
                </h4>
                <p className="text-gray-400 leading-relaxed">{project.details.outcome}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-white font-bold mb-4">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.demoLink || project.repoLink) && (
                <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
                      View Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/5 transition-colors">
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

      </motion.div >
    </div >
  );
}

export default Projects;