import { Moon, Sun } from 'lucide-react';

interface ThemeButtonProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeButton = ({ theme, toggleTheme }: ThemeButtonProps) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-200 z-30 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeButton;