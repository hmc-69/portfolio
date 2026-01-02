import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black py-12 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">Hemanth Chandran</h3>
          <p className="text-gray-500 text-sm mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/hmc-69" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/hemanthchandran/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:hemanthchandran541@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;