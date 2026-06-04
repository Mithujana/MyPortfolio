import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "CodeLantic Pvt Ltd",
      role: "Trainee Backend Developer",
      date: "Past Experience",
      responsibilities: [
        "Developed backend services using Spring Boot",
        "Designed RESTful APIs",
        "Worked with MongoDB",
        "Collaborated using GitLab and Jira",
        "Participated in Agile development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between mb-8 relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2 z-0"></div>
                
                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>

                <div className="md:w-5/12 mb-6 md:mb-0 text-left md:text-right pr-0 md:pr-10 relative z-10">
                  <div className="glass-card p-6 rounded-3xl inline-block w-full hover:shadow-primary/10 transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                    <p className="text-primary font-medium text-lg mt-1">{exp.company}</p>
                    <div className="flex items-center md:justify-end gap-2 mt-3 text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-[-1.1rem] md:left-1/2 top-6 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-slate-50 dark:border-[#0B0F19] z-20 shadow-lg shadow-primary/40">
                  <Briefcase size={18} className="text-white" />
                </div>

                <div className="md:w-5/12 pl-0 md:pl-10 relative z-10">
                  <div className="glass-card p-6 rounded-3xl hover:shadow-primary/10 transition-shadow duration-300">
                    <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Responsibilities:</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
