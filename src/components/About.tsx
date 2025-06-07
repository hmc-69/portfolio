import { useRef } from 'react';
import profileImage from '../assets/profile.jpg'; // Import the local image
import { useInView } from '../hooks/useInView';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 transition-opacity duration-1000 ease-in-out ${isInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 dark:bg-blue-500 relative">
              <img 
                src={profileImage}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Frontend Developer</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Detail-oriented and passionate Frontend Developer with 1 year of experience specializing in Angular development, RESTful API integration, and backend technologies like Node.js and MySQL.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Skilled in building scalable, responsive web applications with an emphasis on user experience and performance optimization. Strong collaborator in Agile/Scrum environments.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-400 w-24">Location:</span>
                  <span>India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-400 w-24">Email:</span>
                  <a href="mailto:hemanthchandran541@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    hemanthchandran541@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-400 w-24">Phone:</span>
                  <a href="tel:+919605331411" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +91 9605331411
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;