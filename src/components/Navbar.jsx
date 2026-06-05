import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50">
      <nav 
        className={`transition-all duration-500 rounded-full flex items-center justify-between md:justify-center gap-6 md:gap-12 border ${
          isScrolled 
            ? 'glass-card border-white/20 shadow-2xl py-2 px-6' 
            : 'bg-white/40 dark:bg-black/20 backdrop-blur-md border-white/10 shadow-lg py-3 px-8'
        }`}
      >
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-gradient cursor-pointer flex-shrink-0">
          <Link to="home" smooth={true} duration={500}>Mithujana.</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="bg-primary/10 text-primary dark:text-primary font-semibold"
                  className="cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex items-center border-l border-slate-300 dark:border-slate-700 pl-6 ml-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors duration-300 focus:outline-none shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 focus:outline-none">
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-4 left-0 w-full glass-card border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col py-2 px-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block text-center text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 rounded-xl py-3 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
