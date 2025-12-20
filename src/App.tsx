import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';
import ThemeButton from './components/ThemeButton';
import { Certificates } from './components/Certificates'
import { Cursor } from './components/Cursor';

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('Current theme:', theme); // Debugging
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <Snowfall
        snowflakeCount={200}
        color="white"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          pointerEvents: 'none'
        }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Cursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
    </div>
  );
}

export default App;