import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
            H M C
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-base font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2 px-4 text-base font-medium transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;