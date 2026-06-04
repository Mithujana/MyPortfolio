import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-card' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient cursor-pointer">
          <Link to="home" smooth={true} duration={500}>Mithujana.</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-sm font-medium hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-card border-t border-white/10 shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
