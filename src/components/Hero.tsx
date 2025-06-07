import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import illustration from '../assets/illustration.png';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.classList.add('animate-fadeInUp');
    }

    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fadeInUp');
      }, 200);
    }

    if (cta) {
      setTimeout(() => {
        cta.classList.add('animate-fadeInUp');
      }, 400);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute -inset-[10%] bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 transform translate-y-8"
            >
              <span className="block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text inline-block">
                Hemanth Chandran
              </span>
            </h1>
            
            <div 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 opacity-0 transform translate-y-8"
            >
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'Angular Specialist',
                    'Node.js Developer',
                    'UI/UX Enthusiast'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80
                }}
              />
            </div>
            
            <div 
              ref={ctaRef}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 opacity-0 transform translate-y-8"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-md transition-all duration-300 flex items-center justify-center"
              >
                View my work
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src={illustration}
              alt="Developer Illustration" 
              className="w-full h-auto rounded-lg  transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;