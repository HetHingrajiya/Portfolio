import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    // Synchronize React state with the blocking script's decision on mount
    const currentTheme = document.documentElement.classList.contains('dark');
    setIsDark(currentTheme);
    
    // Listen for system theme changes if no preference is saved
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const shouldBeDark = e.matches;
        document.documentElement.classList.toggle('dark', shouldBeDark);
        setIsDark(shouldBeDark);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    setIsDark(isDarkNow);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <ScrollProgress />
      <BackgroundParticles isDark={isDark} />
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="mesh-bg"></div>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
