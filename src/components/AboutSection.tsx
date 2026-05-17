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
    <section ref={containerRef} id="about" className="relative h-[300vh] bg-obsidian">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {/* Background Subtle Gradient */}
        <div className="absolute inset-0 bg-radial-at-c from-gold/5 to-transparent opacity-30" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {aboutText.map((line, index) => {
            // Calculate start and end points for each line reveal
            const start = index / aboutText.length;
            const end = (index + 1) / aboutText.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.1, 1, 1, 0.1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [20, -20]);
            
            return (
              <motion.div
                key={index}
                style={{ opacity, y }}
                className="mb-8 last:mb-0"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground text-center leading-tight">
                  {line}
                </h2>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Abstract Element */}
        <motion.div
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, 90]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.05, 0])
          }}
          className="absolute -right-40 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-[800px] h-[800px] border border-gold/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
