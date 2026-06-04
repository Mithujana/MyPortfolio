import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiBootstrap,
  SiSpringboot, SiSpringsecurity, SiJsonwebtokens,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman, SiJira, SiDocker, SiIntellijidea
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { TbApi, TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "Spring Security", icon: <SiSpringsecurity className="text-[#6DB33F]" /> },
        { name: "REST APIs", icon: <TbApi className="text-slate-500" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000] dark:text-white" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-[#181717] dark:text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-[#000000] dark:text-white" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-100/50 dark:bg-[#0f1423]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-default border border-transparent hover:border-primary/20"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
