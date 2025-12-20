import { Briefcase, Calendar } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details: string[];
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);


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
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'IHRD - College of Applied Science, Mallappally',
      period: 'Sept 2021 - May 2024',
      gpa: 'CGPA: 7.0/10',
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-display"
        >
          Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">& Growth</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto grid gap-16">

          {/* Experience Group */}
          <div>
            <div className="flex items-center mb-8 gap-4">
              <div className="p-3 bg-blue-500/10 rounded-full text-neon-blue">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>

            <div className="space-y-12">
              {experienceData.map((item, index) => (
                <TimelineItem key={index} index={index}>
                  <div className="bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-neon-blue/30 transition-colors shadow-lg dark:shadow-none">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-neon-blue font-medium mt-1">{item.company}</p>
                      </div>
                      <span className="flex items-center text-sm bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Calendar size={14} className="mr-2" /> {item.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 leading-relaxed">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-neon-purple rounded-full flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>

          {/* Education Group */}
          <div>
            <div className="flex items-center mb-8 gap-4">
              <div className="p-3 bg-purple-500/10 rounded-full text-neon-purple">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <TimelineItem key={index} index={index + experienceData.length}>
                  <div className="bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-neon-purple/30 transition-colors shadow-lg dark:shadow-none">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h4>
                        <p className="text-neon-purple font-medium mt-1">{item.institution}</p>
                      </div>
                      <span className="flex items-center text-sm bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Calendar size={14} className="mr-2" /> {item.period}
                      </span>
                    </div>
                    {item.gpa && <p className="text-gray-600 dark:text-gray-400 font-mono text-sm border-t border-gray-200 dark:border-white/5 pt-4 mt-4 inline-block">{item.gpa}</p>}
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ children, index }: { children: React.ReactNode, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 md:pl-0"
  >
    {children}
  </motion.div>
);

export default Experience;