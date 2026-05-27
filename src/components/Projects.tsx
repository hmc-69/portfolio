import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Github } from 'lucide-react';
import gravityFall from '../assets/gravityfall.png';

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
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'LunarFarm',
    category: 'AI Agriculture · Hackathon',
    description:
      'AI-powered farming assistant built as a collaborative team project during a hackathon to help farmers make smarter, data-driven decisions using weather data and Google Gemini.',
    image:
      'https://images.pexels.com/photos/2288691/pexels-photo-2288691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'Node.js', 'Express', 'Firebase', 'Google Gemini', 'LangChain'],
    details: {
      problem:
        'Agriculture relies heavily on guesswork, unpredictable weather, and limited access to real-time insights, especially in regions like Kerala with irregular rainfall and complex water management.',
      solution:
        'Engineered an intelligent assistant that synthesizes location-based weather, soil moisture/pH metrics, and crop types with Gemini AI using LangChain reasoning.',
      outcome:
        'Collaborative team hackathon build designed to make farming smarter, reduce climate risks, and empower farmers with simple, real-time insights.',
    },
    featured: true,
  },
  {
    id: 2,
    title: 'LunarHealth',
    category: 'AI Healthcare · Hackathon',
    description:
      'AI-powered patient management system built as a team project during the Code Kalari IIIT Kottayam Hackathon to improve clinical care transparency.',
    image:
      'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Supabase', 'Google Gemini'],
    details: {
      problem:
        'Hospitals struggle with fragmented medical records, lack of automated summaries, and poor transparency of patient progress for anxious family members during hospital stays.',
      solution:
        'Developed an intelligent analyzer with secure medical records, doctor assignment flows, automated clinical summaries, and a real-time status tracker for bystanders.',
      outcome:
        'Successfully built and presented as a team project during the Code Kalari IIIT Kottayam Hackathon, improving care workflows and patient transparency.',
    },
    featured: true,
  },
  {
    id: 3,
    title: 'Soulswed',
    category: 'Full Stack Platform',
    description:
      'International Wedding Vendor Booking Platform connecting couples with vendors across 10+ countries.',
    image:
      'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Angular', 'Node.js', 'MySQL', 'REST API'],
    details: {
      problem:
        'Couples struggled to find verified international wedding vendors due to fragmented data and language barriers.',
      solution:
        'Architected a centralized multi-tenant marketplace with vetted profiles, real-time currency conversion, and social auth.',
      outcome:
        'Scaled to serve 10+ countries, increasing vendor visibility and reducing booking friction by 40%.',
    },
    featured: true,
  },
  {
    id: 4,
    title: 'Airline Bidding',
    category: 'Enterprise System',
    description:
      'Real-time platform for airline analysts to bid on and negotiate ticket prices dynamically.',
    image:
      'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Angular', 'Node.js', 'Socket.io', 'MySQL'],
    details: {
      problem:
        'Static pricing models resulted in unsold inventory and missed revenue optimization opportunities.',
      solution:
        'Developed a real-time collaborative bidding engine using WebSockets, enabling dynamic price negotiation.',
      outcome:
        'Replaced legacy static models, allowing analysts to maximize flight revenue through data-driven price adjustments.',
    },
    featured: true,
  },
  {
    id: 5,
    title: 'Gravity Fall',
    category: 'Game Development',
    description:
      'Typing survival game with physics-based UI destruction. Miss a letter and the interface collapses.',
    image: gravityFall,
    technologies: ['JavaScript', 'Matter.js', 'React'],
    details: {
      problem:
        'Standard typing tools lack urgency and visual feedback, leading to low user retention.',
      solution:
        'Engineered a physics-based survival game using Matter.js, where UI elements collapse dynamically upon errors.',
      outcome:
        'Achieved high user engagement by gamifying skill acquisition, demonstrating complex DOM manipulation and state management.',
    },
    demoLink: 'https://gravity-fall.vercel.app/',
    repoLink: 'https://github.com/hmc-69/gravity-fall',
  },
  {
    id: 6,
    title: 'Password Roast',
    category: 'Web Application',
    description:
      'Interactive password strength evaluator with roast-style feedback and real-time scoring.',
    image:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    details: {
      problem:
        'Standard password strength checkers are boring and users ignore security advice.',
      solution:
        'Developed a Python scoring engine with responsive UI and humorous feedback loops.',
      outcome:
        'An engaging tool that encourages users to create stronger passwords through gamified "roasting".',
    },
    demoLink: 'https://hmc-pass-check.vercel.app/',
    repoLink: 'https://github.com/hmc-69/password-strength-checker',
  },
  {
    id: 7,
    title: 'Viberrr',
    category: 'Mobile Application',
    description:
      'Ad-free music streaming app focusing on a pure, uninterrupted listening experience.',
    image:
      'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    details: {
      problem:
        'Music listeners are frustrated by frequent interruptions and cluttered interfaces in commercial apps.',
      solution:
        'Created a minimal, ad-free mobile player using Flutter that interacts directly with a curated backend.',
      outcome:
        'Delivered a seamless, interruption-free listening experience with offline capabilities.',
    },
  },
  {
    id: 8,
    title: 'Tech Hub',
    category: 'E-commerce',
    description:
      'Modern electronics marketplace with advanced filtering and cart management.',
    image:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    details: {
      problem:
        'Users needed a specialized marketplace for electronics with detailed specs comparison.',
      solution:
        'Built a custom e-commerce solution with robust database schema for product specifications and filtering.',
      outcome:
        'Provided a dedicated platform for tech enthusiasts to compare and purchase devices efficiently.',
    },
  },
];

/* ─── Project Card ─── */

const ProjectCard = ({
  project,
  onClick,
  className = '',
}: {
  project: Project;
  onClick: (p: Project) => void;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(project)}
      className={`group cursor-pointer ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-border group-hover:border-border-hover transition-colors duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-bg/20 group-hover:bg-bg/10 transition-colors duration-500" />

        {/* Hover overlay CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="flex items-center gap-2 px-5 py-2.5 bg-bg/80 backdrop-blur-sm text-text text-sm font-medium rounded-full border border-border">
            View Case Study <ArrowRight size={14} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-0.5 rounded border border-border text-text-tertiary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Project Modal ─── */

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-bg/90 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Hero image */}
        <div className="h-64 md:h-80 relative bg-bg flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-bg/60 backdrop-blur-sm text-text-secondary hover:text-text rounded-full border border-border hover:border-border-hover transition-all duration-300"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-6 left-8">
            <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2 block">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-text">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-10">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              {[
                { label: 'The Problem', text: project.details.problem },
                { label: 'The Solution', text: project.details.solution },
                { label: 'The Outcome', text: project.details.outcome },
              ].map((section) => (
                <div key={section.label}>
                  <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    {section.label}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface-secondary border border-border rounded text-sm text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.demoLink || project.repoLink) && (
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-text text-bg font-semibold text-sm rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 border border-border text-text-secondary font-medium text-sm rounded-lg hover:border-border-hover hover:text-text transition-all duration-300"
                    >
                      <Github size={14} /> Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Projects Section ─── */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // First 4 projects are the featured ones
  const featuredProjects = projects.slice(0, 4);
  const additionalProjects = projects.slice(4);

  return (
    <section id="projects" className="py-32 bg-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-label uppercase text-text-tertiary tracking-widest mb-6">
            Projects
          </p>
          <h2 className="text-heading text-text max-w-3xl">Selected work.</h2>
          <p className="text-text-secondary mt-4 max-w-xl">
            A collection of digital experiences, applications, and experiments
            — each solving a real problem.
          </p>
        </motion.div>

        {/* Featured Projects Grid: 4 projects */}
        <div className="space-y-10">
          {/* Row 1: Featured 1 (LunarFarm) — Full-width */}
          <ProjectCard
            project={featuredProjects[0]}
            onClick={setSelectedProject}
          />

          {/* Row 2: Featured 2 (LunarHealth) & Featured 3 (Soulswed) — Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard project={featuredProjects[1]} onClick={setSelectedProject} />
            <ProjectCard project={featuredProjects[2]} onClick={setSelectedProject} />
          </div>

          {/* Row 3: Featured 4 (Airline Bidding) — Full-width */}
          <ProjectCard
            project={featuredProjects[3]}
            onClick={setSelectedProject}
          />
        </div>

        {/* Collapsible Additional Projects Grid */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden space-y-10 mt-10"
            >
              {/* Row 4: Project 5 (Gravity Fall) & Project 6 (Password Roast) — Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ProjectCard project={additionalProjects[0]} onClick={setSelectedProject} />
                <ProjectCard project={additionalProjects[1]} onClick={setSelectedProject} />
              </div>

              {/* Row 5: Project 7 (Viberrr) & Project 8 (Tech Hub) — Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ProjectCard project={additionalProjects[2]} onClick={setSelectedProject} />
                <ProjectCard project={additionalProjects[3]} onClick={setSelectedProject} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand / Collapse Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 border border-border hover:border-accent hover:text-accent font-semibold text-sm rounded-full text-text-secondary transition-all duration-300"
          >
            {showAll ? 'Show Fewer Projects' : 'View All Projects'}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;