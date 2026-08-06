import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import Lanyard from './Lanyard';
import profileCardImg from '../assets/myprofilecard.jpeg';
import ScrollFloat from './ScrollFloat';
import MagicBento from './ui/MagicBento';

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
