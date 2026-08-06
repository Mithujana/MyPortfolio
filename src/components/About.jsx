import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import Lanyard from './Lanyard';
import profileCardImg from '../assets/myprofilecard.jpeg';
import ScrollFloat from './ScrollFloat';

const About = () => {
  const stats = [
    { icon: <Code2 size={24} />, label: "Projects Completed", value: "10+" },
    { icon: <Award size={24} />, label: "Technologies Used", value: "15+" },
    { icon: <Briefcase size={24} />, label: "Experience", value: "1 Year" },
  ];

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

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-2xl text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stat.value}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Education</h4>
                    <p className="text-primary font-medium mb-2">SLIIT</p>
                    <p className="text-slate-600 dark:text-slate-400">Undergraduate reading for a BSc (Hons) in Information Technology specializing in Software Engineering.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Internship</h4>
                    <p className="text-blue-500 font-medium mb-2">CodeLantic Pvt Ltd</p>
                    <p className="text-slate-600 dark:text-slate-400">Former Trainee Backend Developer gaining hands-on experience in building enterprise-level scalable backend systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full sticky top-24"
          >
            <div className="w-full h-[700px] relative">
              <Lanyard 
                position={[0, 0, 15]} 
                fov={15}
                gravity={[0, -40, 0]} 
                frontImage={profileCardImg} 
                imageFit="cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
