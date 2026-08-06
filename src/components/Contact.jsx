import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import {
  SiReact, SiSpringboot, SiMongodb, SiMysql, SiDocker,
  SiGit, SiGithub, SiPostman, SiTailwindcss, SiJsonwebtokens
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import ScrollFloat from './ScrollFloat';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setIsSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setIsSubmitting(false);
  };

  const techStack = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "React", icon: <SiReact /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "REST API", icon: <TbApi /> },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">

      {/* Tech Stack Marquee */}
      <div className="w-full bg-primary/5 border-y border-primary/10 py-6 mb-20 overflow-hidden relative flex">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-50 via-transparent to-slate-50 dark:from-[#0B0F19] dark:via-transparent dark:to-[#0B0F19]"></div>
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate the list for seamless loop */}
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-2 mx-8 text-slate-500 dark:text-slate-400 opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300">
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-lg font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

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
            Get In Touch
          </ScrollFloat>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 space-y-6"
          >
            <div className="glass-card p-6 rounded-3xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">Location</h4>
                <p className="text-slate-600 dark:text-slate-400">Sri Lanka</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">Email</h4>
                <a href="mailto:mithujanas2305@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">mithujanas2305@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl mt-8">
              <h4 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200 text-center">Connect with me</h4>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/Mithujana" className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-md text-slate-600 dark:text-slate-400 hover:shadow-primary/30">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mithujana-sriranjan-4324a4368/" className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-md text-slate-600 dark:text-slate-400 hover:shadow-primary/30">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:mithujanas2305@gmail.com" className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-md text-slate-600 dark:text-slate-400 hover:shadow-primary/30">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              {isSuccess ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 dark:text-slate-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 dark:text-slate-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 dark:text-slate-200"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-slate-800 dark:text-slate-200"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
