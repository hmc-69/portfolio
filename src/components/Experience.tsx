import { Briefcase, Calendar } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details: string[];
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const experienceData: ExperienceItem[] = [
    {
      title: 'Frontend Developer',
      company: 'Vigyan Infoventures (OPC) Pvt Ltd',
      period: 'May 2024 - June 2025',
      details: [
        'Spearheaded the development of Soulswed, a global wedding vendor booking platform, using Angular to build a fully responsive and dynamic web application used across 10+ countries.',
        'Translated Figma-based UI/UX designs into interactive interfaces, improving mobile user engagement by 30% through optimized responsive layouts and performance tuning.',
        'Integrated social login features (Google, Facebook) to streamline user onboarding, significantly boosting user acquisition.',
        'Engineered RESTful APIs with Node.js and managed application data using MySQL, enabling scalable vendor listings, user profiles, and booking functionalities.',
        'Led development of a real-time Airline Ticket Bidding System, building Angular modules and Node.js APIs for bidding, negotiation, and transaction tracking.',
        'Collaborated within Agile/Scrum teams, participating in daily standups, sprint planning, and retrospectives to ensure timely delivery and continuous improvement.',
      ],
    },
  ];

  const educationData = [
    {
      degree: 'Master of Computer Applications',
      institution: 'IHRD - College of Engineering, Chengannur',
      period: 'Aug 2025 - Present',
      // gpa: 'CGPA: 7.0/10',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'IHRD - College of Applied Science, Mallappally',
      period: 'Sept 2021 - May 2024',
      gpa: 'CGPA: 7.0/10',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Experience & Education
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Professional Experience
          </h3>

          <div className="space-y-8 ml-4">
            {experienceData.map((item, index) => (
              <div 
                key={index}
                className={`relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-900 transform transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-3 rounded-full flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{item.company}</p>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-16 mb-8 flex items-center">
            <Calendar className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
            Education
          </h3>

          <div className="space-y-8 ml-4">
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-900 transform transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + experienceData.length) * 200}ms` }}
              >
                <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-3 rounded-full flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{item.institution}</p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">{item.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;