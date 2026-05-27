import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
          <p className="text-xs font-mono text-text-tertiary">
            &copy; {new Date().getFullYear()} Hemanth Chandran. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/hmc-69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-text transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemanthchandran/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-text transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:hemanthchandran541@gmail.com"
            className="text-text-tertiary hover:text-text transition-colors duration-300"
            aria-label="Email Address"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;