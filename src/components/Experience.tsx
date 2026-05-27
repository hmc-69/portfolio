import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, ExternalLink, X, GraduationCap, Briefcase } from 'lucide-react';
import figmacert from '../assets/figma.jpg';
import deloitteCert from '../assets/deloitte.png';
import angularCert from '../assets/angular.png';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  image: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Vigyan Infoventures (OPC) Pvt Ltd',
    period: 'May 2024 — June 2025',
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

const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'IHRD — College of Engineering, Chengannur',
    period: 'Aug 2025 — Present',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'IHRD — College of Applied Science, Mallappally',
    period: 'Sept 2021 — May 2024',
    gpa: 'CGPA: 7.0 / 10',
  },
];

const certificates: Certificate[] = [
  {
    title: 'Complete Figma Course: Web & Mobile Projects from Scratch',
    issuer: 'Udemy',
    date: 'July 2025',
    credential: 'UC-f685f6b5-44bb-4b09-8086-b1765a29a592',
    image: figmacert,
    description: [
      'Created responsive web/mobile UI designs with wireframes and prototypes.',
      'Learned animation design systems and real-world UI/UX workflows.',
    ],
  },
  {
    title: 'Deloitte Australia Technology Job Simulation',
    issuer: 'Forage',
    date: 'July 2025',
    credential: 'ZGasMcLfNCQencaMP',
    image: deloitteCert,
    description: [
      'Completed a job simulation involving development and coding.',
      'Wrote a technical proposal for creating a client dashboard.',
    ],
  },
  {
    title: 'Angular (Basic) Certification',
    issuer: 'HackerRank',
    date: 'July 2025',
    credential: '8F86F2D45625',
    image: angularCert,
    description: [
      'Covered MVC frameworks, components, TypeScript, two-way binding, and form validation.',
      'Validated core Angular skills through hands-on scenario assessments.',
    ],
  },
];

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="experience" className="py-32 bg-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-label uppercase text-text-tertiary tracking-widest mb-6">
            Journey
          </p>
          <h2 className="text-heading text-text max-w-3xl">
            Experience & Education.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Experience & Education (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
                <Briefcase size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-12">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={item.title + index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary mt-1 font-medium text-sm">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-text-tertiary whitespace-nowrap md:self-start">
                        {item.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mt-4">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start text-text-secondary text-[15px] leading-relaxed"
                        >
                          <span className="mr-3 mt-2.5 w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
                <GraduationCap size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider">
                  Education
                </h3>
              </div>

              <div className="space-y-10">
                {educationData.map((item, index) => (
                  <motion.div
                    key={item.degree + index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors duration-300">
                          {item.degree}
                        </h4>
                        <p className="text-text-secondary mt-1 font-medium text-sm">
                          {item.institution}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-text-tertiary whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    {item.gpa && (
                      <p className="text-xs font-mono text-accent mt-2 bg-accent/5 inline-block px-2.5 py-1 rounded">
                        {item.gpa}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Certifications (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
              <Award size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.credential}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedCert(cert)}
                  className="group p-5 bg-surface border border-border hover:border-border-hover rounded-xl cursor-pointer transition-all duration-300"
                >
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1">
                    {cert.issuer}
                  </span>
                  <h4 className="text-sm font-semibold text-text group-hover:text-accent transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h4>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/40">
                    <span className="text-[11px] font-mono text-text-tertiary">
                      {cert.date}
                    </span>
                    <span className="text-xs flex items-center gap-1 text-text-tertiary group-hover:text-text transition-colors duration-300">
                      View Credential <ExternalLink size={10} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg/90 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl z-10 p-6 md:p-8"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-bg/60 backdrop-blur-sm text-text-secondary hover:text-text rounded-full border border-border hover:border-border-hover transition-all duration-300"
              >
                <X size={14} />
              </button>

              <div className="mb-6 rounded-lg overflow-hidden border border-border bg-bg aspect-video flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                    {selectedCert.issuer}
                  </span>
                  <h4 className="text-lg font-bold text-text leading-snug">
                    {selectedCert.title}
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-border/40 text-xs">
                  <div>
                    <span className="text-text-tertiary block mb-0.5">Date Issued</span>
                    <span className="text-text-secondary font-medium">{selectedCert.date}</span>
                  </div>
                  <div>
                    <span className="text-text-tertiary block mb-0.5">Credential ID</span>
                    <span className="text-text-secondary font-mono">{selectedCert.credential}</span>
                  </div>
                </div>

                {selectedCert.description && (
                  <div>
                    <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider block mb-2">
                      Key Learnings
                    </span>
                    <ul className="space-y-2">
                      {selectedCert.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-xs text-text-secondary leading-relaxed">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;