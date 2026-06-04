import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#0a0d14] py-12 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-gradient">
            Mithujan.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-slate-500 hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="p-2 text-slate-500 hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="p-2 text-slate-500 hover:text-primary transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link to="home" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">About</Link>
            <Link to="projects" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Projects</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Mithujan. All rights reserved.
          </p>
          
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
