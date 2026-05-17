"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Scale, Shield, Gavel, ArrowRight } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse tracking for abstract elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 100 };
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian px-6 py-24"
    >
      <div className="noise-overlay" />

      {/* Abstract Background Elements */}
      <motion.div
        style={{ y: y1, x: translateX, rotate: 15 }}
        className="absolute top-20 -left-20 opacity-10 pointer-events-none"
      >
        <Scale size={400} strokeWidth={0.5} className="text-gold" />
      </motion.div>

      <motion.div
        style={{ y: y2, x: translateY, rotate: -10 }}
        className="absolute -bottom-40 -right-20 opacity-10 pointer-events-none"
      >
        <Shield size={500} strokeWidth={0.5} className="text-gold" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8"
        >
          <Gavel size={16} className="text-gold" />
          <span className="text-xs font-medium tracking-widest uppercase text-gold">Established Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-serif text-foreground leading-[1.1] mb-8"
        >
          Defending Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold italic">
            Legacy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 font-sans leading-relaxed mb-12"
        >
          Uncompromising legal counsel for high-stakes litigation and complex corporate affairs. 
          Where precision meets authority.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-gold text-obsidian font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:bg-gold-dark cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Request Consultation <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-foreground/20 text-foreground font-semibold rounded-sm transition-all duration-300 hover:border-gold/50 hover:bg-white/5 cursor-pointer">
            Practice Areas
          </button>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 w-px h-24 bg-gradient-to-t from-gold/50 to-transparent opacity-30 animate-pulse" />
    </section>
  );
};
