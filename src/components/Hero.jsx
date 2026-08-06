import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJava, FaBrain, FaRobot, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/MyProfile.png';
import Particles from './Particles';
import MoltenMetal from './MoltenMetal';
import ScrollFloat from './ScrollFloat';
import Dock from './Dock';
import { HyperText } from './HyperText';
import { ShinyButton } from '../registry/magicui/shiny-button';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <MoltenMetal
          color1={darkMode ? "#5227FF" : "#cbd5e1"}
          color2={darkMode ? "#FF9FFC" : "#94a3b8"}
          color3={darkMode ? "#FFFFFF" : "#f8fafc"}
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.3}
          opacity={1.0}
        />
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] z-10 text-[#61DAFB]/30 dark:text-[#61DAFB]/40 hidden md:block"
      >
        <FaReact size={56} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] z-10 text-[#f89820]/30 dark:text-[#f89820]/40 hidden md:block"
      >
        <FaJava size={56} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 left-[20%] z-10 text-emerald-500/30 dark:text-emerald-500/40 hidden md:block"
      >
        <FaRobot size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/3 right-[25%] z-10 text-pink-500/30 dark:text-pink-500/40 hidden md:block"
      >
        <FaBrain size={48} />
      </motion.div>

      <div className="w-full px-8 lg:px-16 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[80vh]">

          {/* Left — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex items-center justify-center group"
          >
            <div className="relative w-full max-w-[620px] aspect-square flex items-center justify-center">
              <div className="relative z-10 w-[100%] max-w-[550px] transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                <img
                  src={profileImg}
                  alt="Mithujana"
                  className="w-full h-auto object-contain object-center drop-shadow-[0_18px_40px_rgba(15,23,42,0.18)] dark:drop-shadow-[0_18px_40px_rgba(2,6,23,0.35)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6 tracking-tight text-5xl md:text-7xl font-bold leading-none">
                <div className="text-slate-800 dark:text-slate-100 mb-2">Hi, I'm</div>
                <div className="inline-block" style={{ width: '100%', maxWidth: '600px' }}>
                  <HyperText
                    className="text-[60px] md:text-[100px] leading-tight text-primary dark:text-white -tracking-[2px]"
                    duration={800}
                    animateOnHover={true}
                  >
                    Mithujana
                  </HyperText>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
                Full Stack Developer crafting scalable web applications and modern digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-10"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="w-full sm:w-auto"
              >
                <ShinyButton className="w-full bg-transparent text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  View Projects
                </ShinyButton>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="w-full sm:w-auto"
              >
                <ShinyButton className="w-full bg-transparent text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  Contact Me
                </ShinyButton>
              </Link>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <Dock 
                items={[
                  { icon: <FaGithub size={18} />, label: 'GitHub', href: 'https://github.com/Mithujana', target: '_blank' },
                  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mithujana-sriranjan-4324a4368/', target: '_blank' },
                  { icon: <FaEnvelope size={18} />, label: 'Email', href: 'mailto:mithujanas2305@gmail.com' }
                ]}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
