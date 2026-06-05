import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJava, FaBrain, FaRobot } from 'react-icons/fa';
import profileImg from '../assets/Profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] text-[#61DAFB]/30 dark:text-[#61DAFB]/40 hidden md:block"
      >
        <FaReact size={56} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] text-[#f89820]/30 dark:text-[#f89820]/40 hidden md:block"
      >
        <FaJava size={56} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 left-[20%] text-emerald-500/30 dark:text-emerald-500/40 hidden md:block"
      >
        <FaRobot size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/3 right-[25%] text-pink-500/30 dark:text-pink-500/40 hidden md:block"
      >
        <FaBrain size={48} />
      </motion.div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 mx-auto mb-10 group"
        >
          {/* 3D Glowing Ambient Rings */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-blue-500 opacity-50 blur-xl group-hover:opacity-80 group-hover:blur-2xl transition-all duration-700"></div>
          
          {/* Main 3D Container */}
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-b from-white to-slate-300 dark:from-slate-700 dark:to-slate-900 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] dark:shadow-[0_20px_50px_rgba(139,_92,_246,_0.3)] group-hover:shadow-[0_20px_60px_rgba(139,_92,_246,_0.6)] transform group-hover:-translate-y-3 transition-all duration-500 z-10">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-[#0f1423] flex items-center justify-center bg-slate-200 dark:bg-slate-800">
               <img 
                 src={profileImg} 
                 alt="Mithujana" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-gradient">Mithujana</span>
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
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#1a1f35] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
            <FaGithub size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#1a1f35] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-[#1a1f35] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
            <FaEnvelope size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
