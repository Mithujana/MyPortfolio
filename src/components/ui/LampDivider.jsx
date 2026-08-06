import React from "react";
import { motion } from "framer-motion";

export const LampDivider = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto h-24 flex flex-col items-center justify-start mt-4 overflow-visible">
      {/* The crisp glowing line */}
      <motion.div
        initial={{ width: "5%" }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute top-0 z-50 h-[2px] bg-cyan-400 w-4/5"
      ></motion.div>
      
      {/* The soft ambient glow below the line */}
      <motion.div
        initial={{ opacity: 0, width: "5%" }}
        whileInView={{ opacity: 1, width: "80%" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute top-0 z-30 h-24 w-4/5 bg-cyan-400/30 blur-2xl rounded-t-full"
      ></motion.div>
    </div>
  );
};
