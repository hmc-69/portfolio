import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, CheckCircle } from 'lucide-react';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  image: string;
  description: string[];
};

// Import certificate images
import figmaCert from '../assets/Certificates/figma.jpg';
import deloitteCert from '../assets/Certificates/Deloitte.png';
import angularCert from '../assets/Certificates/Angular.png';

const certificates: Certificate[] = [
  {
    title: 'Complete Figma Course: Web & Mobile Projects from Scratch',
    issuer: 'Udemy',
    date: 'July 2025',
    credential: 'UC-f685f6b5-44bb-4b09-8086-b1765a29a592',
    image: figmaCert,
    description: [
      'Created responsive web/mobile UI designs with wireframes and prototypes',
      'Learned animations design systems and real-world UI/UX workflows.'
    ],
  },
  {
    title: 'Deloitte Australia Technology Job Simulation',
    issuer: 'Forage',
    date: 'July 2025',
    credential: 'ZGasMcLfNCQencaMP',
    image: deloitteCert,
    description: [
      'Completed a job simulation involving development and coding',
      'Wrote a proposal for creating a dashboard for a client',
    ],
  },
  {
    title: 'Angular (Basic) Certification',
    issuer: 'HackerRank',
    date: 'July 2025',
    credential: '8F86F2D45625',
    image: angularCert,
    description: [
      'Covered MVC frameworks, components, TypeScript, two-way binding, and form validation',
      'Validated core Angular skills through hands-on assessment and scenario-based questions',
    ],
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

// ...existing code...
// ...existing code...

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
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

        {/* Certificates Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {certificates.map((cert, index) => (
            <div
              key={cert.credential}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCert(cert)}
            >
              <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
              <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
            </div>
          ))}
        </div>

        {/* Certificate Popup Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setSelectedCert(null)}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl" onClick={() => setSelectedCert(null)}>&times;</button>
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-48 object-contain mb-4 rounded" />
              <h4 className="text-xl font-bold mb-2">{selectedCert.title}</h4>
              <p className="text-blue-600 dark:text-blue-400 mb-1">{selectedCert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{selectedCert.date}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Credential: {selectedCert.credential}</p>
              {Array.isArray(selectedCert.description) ? (
                <ul className="text-gray-700 dark:text-gray-300 mt-2 list-disc list-inside space-y-1">
                  {selectedCert.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 mt-2">{selectedCert.description}</p>
              )}
            </div>
          </div>
        )}

        {/* Badges & Achievements Section */}
        {/* <div className={`space-y-6 transform transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
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
        </div> */}
      </div>
    </section>
  );
}

export { Certificates };
