import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SmoothCursor } from './components/SmoothCursor';
import { FaDownload } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <SmoothCursor />
      {/* Background gradients */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 dark:bg-primary/20 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-[120px]" />
      </div>

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* Fixed Global Resume Button */}
      <a
        href="/resume.pdf"
        download="Mithujana_Resume.pdf"
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 px-4 py-2 bg-primary text-white text-sm font-medium rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
      >
        <FaDownload size={12} /> Resume
      </a>

      <main>
        <Hero darkMode={darkMode} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
