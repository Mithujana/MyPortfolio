import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-500/20 rounded-full pointer-events-none z-30 blur-[100px] hidden md:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
      {/* Inner trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 border border-purple-500 hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;
