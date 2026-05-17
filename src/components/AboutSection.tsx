"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aboutText = [
  "Built on a foundation of integrity and technical mastery,",
  "Elite Legal provides unyielding advocacy in the pursuit of justice.",
  "We navigate the complexities of corporate law and taxation",
  "with the precision of an architect and the foresight of a sage.",
  "Your legacy is our command. Your trust, our highest currency.",
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="about" className="relative h-[400vh] bg-obsidian z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {/* Background Subtle Gradient */}
        <div className="absolute inset-0 bg-radial-at-c from-gold/5 to-transparent opacity-30" />
        
        <div className="relative z-10 w-full max-w-5xl h-[200px] flex items-center justify-center">
          {aboutText.map((line, index) => {
            // Adjusting the timing to be more distinct
            const start = index / aboutText.length;
            const end = (index + 1) / aboutText.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress, 
              [start, start + 0.05, end - 0.05, end], 
              [0, 1, 1, 0]
            );
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(
              scrollYProgress, 
              [start, start + 0.1, end - 0.1, end], 
              [0.95, 1, 1, 1.05]
            );
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [40, -40]);
            
            return (
              <motion.div
                key={index}
                style={{ opacity, y, scale }}
                className="absolute w-full px-4"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground text-center leading-tight tracking-tight">
                  {line}
                </h2>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Abstract Element */}
        <motion.div
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.08, 0]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
          }}
          className="absolute -right-40 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-[1000px] h-[1000px] border border-gold/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
