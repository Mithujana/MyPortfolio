import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';

import profileCardImg from '../assets/myprofilecard.jpeg';
import ScrollFloat from './ScrollFloat';
import MagicBento from './ui/MagicBento';
import PixelTransition from './ui/PixelTransition';

const About = () => {


  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="text-3xl md:text-5xl font-bold mb-4"
          >
            About Me
          </ScrollFloat>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I am</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg text-justify">
              I am a final-year Software Engineering undergraduate at SLIIT with a strong passion for software development and emerging technologies. I enjoy transforming ideas into practical, user-focused applications that are scalable, efficient, and maintainable.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg text-justify">
              My academic journey, combined with my internship experience at CodeLantic Pvt Ltd, has provided me with hands-on experience in full-stack web development, backend engineering, database design, and RESTful API development. I have worked with technologies such as Java, Spring Boot, React.js, MongoDB, MySQL, JavaScript, TypeScript, and Git, enabling me to build modern web applications while following industry best practices.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg text-justify">
              Beyond technical skills, I value continuous learning, problem-solving, collaboration, and adaptability. I approach every project with curiosity and a commitment to delivering high-quality solutions that create meaningful impact.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8 text-justify">
              My goal is to grow as a skilled Full Stack Software Engineer, contribute to innovative software projects, and continuously expand my knowledge by embracing new technologies and challenges.
            </p>

            <div className="w-full mb-8">
              <MagicBento 
                cards={[
                  {
                    title: "10+",
                    label: "Projects Completed",
                    icon: <Code2 size={20} />,
                  },
                  {
                    title: "15+",
                    label: "Technologies Used",
                    icon: <Award size={20} />,
                  },
                  {
                    title: "1 Year",
                    label: "Experience",
                    icon: <Briefcase size={20} />,
                  },
                  {
                    title: "SLIIT",
                    label: "Education",
                    icon: <GraduationCap size={20} />,
                    description: "Undergraduate reading for a BSc (Hons) in Information Technology specializing in Software Engineering.",
                    className: "col-span-full md:col-span-2 lg:col-span-3",
                  },
                  {
                    title: "CodeLantic Pvt Ltd",
                    label: "Internship",
                    icon: <Briefcase size={20} />,
                    description: "Former Trainee Backend Developer gaining hands-on experience in building enterprise-level scalable backend systems.",
                    className: "col-span-full md:col-span-2 lg:col-span-3",
                  }
                ]}
                textAutoHide={false}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="82, 39, 255"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full sticky top-24"
          >
            <div className="glass-card w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-slate-800 shadow-2xl relative z-10">
                <PixelTransition
                  firstContent={
                    <img 
                      src={profileCardImg} 
                      alt="Mithujana" 
                      className="w-full h-full object-cover object-top"
                    />
                  }
                  secondContent={
                    <div className="w-full h-full bg-primary flex flex-col items-center justify-center text-white">
                      <p className="font-bold text-2xl mb-1">Hello!</p>
                      <p className="text-sm font-medium">Let's connect</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="currentColor"
                  animationStepDuration={0.4}
                  aspectRatio="100%"
                  className="text-primary"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 tracking-tight">Mithujana Sriranjan</h3>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm md:text-base tracking-wide mb-4">
                  Full Stack Developer
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  Passionate about building beautiful, scalable software solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
