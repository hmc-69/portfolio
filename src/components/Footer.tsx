import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/hemanthchandran/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      url: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:hemanthchandran541@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone size={20} />,
      url: 'tel:+919605331411',
      label: 'Phone',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            H M C
          </a>
          
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/40 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Hemanth Chandran. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;