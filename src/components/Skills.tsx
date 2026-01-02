import { motion, Variants } from 'framer-motion';

// Import images
import angularLogo from '../assets/logo/Angular.png';
import chatgptLogo from '../assets/logo/chatgpt.png';
import cppLogo from '../assets/logo/cpp.png';
import cssLogo from '../assets/logo/css.png';
import firebaseLogo from '../assets/logo/Firebase.png';
import flutterLogo from '../assets/logo/flutter.png';
import gitLogo from '../assets/logo/git.png';
import githubLogo from '../assets/logo/github.png';
import htmlLogo from '../assets/logo/html.png';
import javaLogo from '../assets/logo/java-logo.png';
import mysqlLogo from '../assets/logo/mysql.png';
import pythonLogo from '../assets/logo/Python.png';
import reactLogo from '../assets/logo/React.png';
import typescriptLogo from '../assets/logo/Typescript.png';
import vercelLogo from '../assets/logo/vercel.png';
import viteLogo from '../assets/logo/vite.png';
import vscodeLogo from '../assets/logo/VScode.png';

const skillCategories = [
  {
    title: 'Core Engineering',
    description: 'The foundation of scalable systems and logic.',
    skills: [
      { name: 'Java', icon: javaLogo },
      { name: 'C++', icon: cppLogo },
      { name: 'Python', icon: pythonLogo },
      { name: 'MySQL', icon: mysqlLogo },
      { name: 'Git', icon: gitLogo },
      { name: 'GitHub', icon: githubLogo },
    ],
  },
  {
    title: 'Product Construction',
    description: 'Modern frameworks for building high-impact apps.',
    skills: [
      { name: 'React', icon: reactLogo },
      { name: 'Angular', icon: angularLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Flutter', icon: flutterLogo },
      { name: 'HTML5', icon: htmlLogo },
      { name: 'CSS3', icon: cssLogo },
    ],
  },
  {
    title: 'Future Tech & Tools',
    description: 'Emerging technologies and developer tooling.',
    skills: [
      { name: 'AI Integration', icon: chatgptLogo },
      { name: 'Vite', icon: viteLogo },
      { name: 'Firebase', icon: firebaseLogo },
      { name: 'VS Code', icon: vscodeLogo },
      { name: 'Vercel', icon: vercelLogo },
    ],
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    }
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Arsenal</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My weapon of choice for conquering digital challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-white/5 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-lg dark:shadow-none"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800/50 rounded-xl flex items-center justify-center p-3 border border-gray-200 dark:border-white/5 group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(0,180,255,0.2)] transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter dark:grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;