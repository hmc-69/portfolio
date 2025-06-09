import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import IconCloud from './magicui/icon-cloud';
import { Marquee } from './magicui/marquee';

// Import images
import angularLogo from '../assets/logo/Angular.png';
import bootstrapLogo from '../assets/logo/bootstrap.png';
import chatgptLogo from '../assets/logo/chatgpt.png';
import cppLogo from '../assets/logo/cpp.png';
import cssLogo from '../assets/logo/css.png';
import dartLogo from '../assets/logo/Dart_logo.png';
import firebaseLogo from '../assets/logo/Firebase.png';
import flutterLogo from '../assets/logo/flutter.png';
import gitLogo from '../assets/logo/git.png';
import githubLogo from '../assets/logo/github.png';
import htmlLogo from '../assets/logo/html.png';
import javaLogo from '../assets/logo/java-logo.png';
import javascriptLogo from '../assets/logo/javascript.png';
import magicLogo from '../assets/logo/magic.png';
import mysqlLogo from '../assets/logo/mysql.png';
import phpLogo from '../assets/logo/php.png';
import pythonLogo from '../assets/logo/Python.png';
import reactLogo from '../assets/logo/React.png';
import typescriptLogo from '../assets/logo/Typescript.png';
import vercelLogo from '../assets/logo/vercel.png';
import viteLogo from '../assets/logo/vite.png';
import vscodeLogo from '../assets/logo/VScode.png';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

// Images for the IconCloud
const images = [
  angularLogo,
  bootstrapLogo,
  chatgptLogo,
  cppLogo,
  cssLogo,
  dartLogo,
  firebaseLogo,
  flutterLogo,
  gitLogo,
  htmlLogo,
  javaLogo,
  javascriptLogo,
  magicLogo,
  mysqlLogo,
  phpLogo,
  pythonLogo,
  reactLogo,
  vercelLogo,
  vscodeLogo,
  typescriptLogo,
  githubLogo,
  viteLogo,
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'RESTful APIs', level: 85 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 75 },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'UI/UX Design', level: 70 },
        { name: 'Agile/Scrum', level: 80 },
        { name: 'Problem Solving', level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            My Skills
          </span>
        </h2>

         {/* IconCloud Section */}
         <div className="mb-6">
          <IconCloud imageArray={images} />
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-500 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} 
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium block text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600 dark:text-blue-400">
            Code Arsenal
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16 overflow-hidden">
            <Marquee 
              className="py-4"
              pauseOnHover={true}
              reverse={false}
            >
              {['Python', 'Java', 'C', 'C++', 'JavaScript', 'PHP', 'TypeScript' , 'Dart'].map((lang) => (
                <span key={lang} className="mx-8 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text whitespace-nowrap">
                  {lang}
                </span>
              ))}
            </Marquee>
          </div>

          <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-500 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                'Agile Development (Scrum)',
                'Problem-Solving',
                'Team Collaboration',
                'UI/UX Implementation',
                'Time Management',
              ].map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 text-center text-sm font-medium transform transition-all hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;