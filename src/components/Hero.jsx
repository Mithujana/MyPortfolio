import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Code, Database, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] text-primary/40 dark:text-primary/60 hidden md:block"
      >
        <Code size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] text-blue-500/40 dark:text-blue-500/60 hidden md:block"
      >
        <Database size={56} />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-[20%] text-purple-400/40 dark:text-purple-400/60 hidden md:block"
      >
        <Layout size={40} />
      </motion.div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 mx-auto mb-8 rounded-full p-1 bg-gradient-to-r from-primary to-purple-400"
        >
          <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
             {/* Profile image placeholder - the user asked for an animated profile image placeholder */}
             <div className="text-6xl font-bold text-primary/50">M</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-gradient">Mithujan</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Full Stack Developer crafting scalable web applications and modern digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary/30 cursor-pointer w-full sm:w-auto"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer w-full sm:w-auto"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="#" className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors text-slate-600 dark:text-slate-400">
            <FaGithub size={24} />
          </a>
          <a href="#" className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors text-slate-600 dark:text-slate-400">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors text-slate-600 dark:text-slate-400">
            <FaEnvelope size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
