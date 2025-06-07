import { useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  details: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Soulswed',
      description: 'International Wedding Vendor Booking Platform',
      image: 'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Angular', 'Node.js', 'MySQL', 'RESTful API'],
      details: [
        'Built a dynamic Angular application for users to discover and book wedding venues, vendors, and planners across 10+ countries.',
        'Designed and implemented responsive UI/UX interfaces based on Figma designs.',
        'Integrated Google and Facebook social authentication.',
        'Developed scalable RESTful APIs in Node.js.',
        'Managed data using MySQL for vendor listings, bookings, and user profiles.'
      ],
    },
    {
      id: 2,
      title: 'Airline Ticket Bidding System',
      description: 'Platform for bidding on flight tickets in real-time',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Socket.io'],
      details: [
        'Architected a user-centric airline ticket booking system with bidding capabilities.',
        'Implemented real-time negotiation features for airline analysts.',
        'Built Angular modules for bidding, negotiation dashboards, and dynamic ticket tracking.',
        'Developed backend APIs with Node.js.',
        'Designed relational data structures in MySQL for airline transactions and bid management.'
      ],
    },
    {
      id: 3,
      title: 'Tech Hub',
      description: 'E-commerce platform for electronic devices',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      details: [
        'Built an e-commerce platform for easy access to the latest electronic devices.',
        'Created a user-friendly interface for browsing and purchasing products.',
        'Implemented shopping cart functionality and secure checkout process.',
        'Designed and optimized database schema for product listings and order management.',
        'Integrated responsive design for optimal viewing on all devices.'
      ],
    },
    {
      id: 4,
      title: 'Viberrr',
      description: 'Flutter music streaming application',
      image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      details: [
        'Developed a Flutter music streaming app with intuitive design and user experience.',
        'Implemented free access model with ad-free experience.',
        'Created custom music player interface with playlist management.',
        'Utilized Firebase for backend services, authentication, and storage.',
        'Optimized app performance for smooth playback and minimal loading times.'
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            My Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <button
                      onClick={() => openModal(project)}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto">
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-gray-200">{selectedProject.description}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                Project Details
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 mr-2"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;