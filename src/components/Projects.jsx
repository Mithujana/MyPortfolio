import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Skill Sharing & Learning Platform",
      techStack: ["React.js", "Spring Boot", "MongoDB", "JWT", "WebSocket"],
      features: ["Authentication", "Real-time notifications", "Learning plans", "Community interaction"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Finance Management System",
      techStack: ["Spring Boot", "MongoDB", "OCR"],
      features: ["Expense tracking", "Receipt scanning", "Financial analytics"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Work Order Management System",
      techStack: ["Spring Boot", "MongoDB"],
      features: ["Work order management", "Status tracking", "User management"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-100/50 dark:bg-[#0f1423]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-medium bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors w-full justify-center shadow-lg shadow-primary/20"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-medium bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-lg transition-colors w-full justify-center"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
