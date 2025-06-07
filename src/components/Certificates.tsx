import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, CheckCircle } from 'lucide-react';

const certificates = [
  {
    title: 'Angular Advanced Concepts',
    issuer: 'Udemy',
    date: 'March 2024',
    credential: 'UC-123456'
  },
  {
    title: 'Node.js Developer Certification',
    issuer: 'FreeCodeCamp',
    date: 'January 2024',
    credential: 'FCC-789012'
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    date: 'December 2023',
    credential: 'COUR-345678'
  }
];

const badges = [
  {
    name: 'Problem Solver',
    description: 'Solved 100+ coding challenges',
    icon: CheckCircle
  },
  {
    name: 'Top Contributor',
    description: 'Active open source contributor',
    icon: Award
  }
];

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Certificates & Achievements
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className={`space-y-6 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Certificates
            </h3>
            {certificates.map((cert, index) => (
              <div
                key={cert.credential}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-semibold mb-2">{cert.title}</h4>
                <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{cert.date}</span>
                  <span>Credential: {cert.credential}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`space-y-6 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Badges & Achievements
            </h3>
            {badges.map((badge, index) => (
              <div
                key={badge.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${(index + certificates.length) * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <badge.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{badge.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{badge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;