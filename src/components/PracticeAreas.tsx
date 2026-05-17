"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Briefcase, Landmark, HandCoins, ShieldCheck } from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Restructuring",
    description: "Expert guidance through complex mergers, acquisitions, and insolvency proceedings with technical precision.",
    icon: Briefcase,
  },
  {
    title: "Tax Litigation",
    description: "High-stakes representation in federal and international tax disputes for high-net-worth entities.",
    icon: Landmark,
  },
  {
    title: "Wealth Management",
    description: "Preserving multi-generational legacies through sophisticated trust structures and financial planning.",
    icon: HandCoins,
  },
  {
    title: "Intellectual Property",
    description: "Aggressive protection of technical innovation and creative assets in a globalized digital economy.",
    icon: ShieldCheck,
  },
];

const TiltCard = ({ area }: { area: typeof practiceAreas[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="perspective-1000 group relative w-full h-[400px] bg-white/5 border border-white/10 rounded-sm p-8 flex flex-col justify-between transition-colors duration-500 hover:bg-white/[0.08] hover:border-gold/30"
    >
      <div className="preserve-3d pointer-events-none">
        <area.icon className="text-gold mb-6 transition-transform duration-500 group-hover:translate-z-20" size={40} />
        <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-gold transition-colors duration-500">
          {area.title}
        </h3>
        <p className="text-foreground/50 font-sans leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
          {area.description}
        </p>
      </div>
      
      <div className="absolute top-4 right-8 text-white/5 text-8xl font-serif select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-700">
        0{practiceAreas.indexOf(area) + 1}
      </div>
    </motion.div>
  );
};

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundTextY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-obsidian">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="w-full max-w-7xl mx-auto px-6 relative z-10">
          {/* Background Floating Text */}
          <motion.div
            style={{ y: backgroundTextY }}
            className="absolute -top-40 -left-20 text-[20rem] font-serif text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
          >
            EXPERTISE AUTHORITY PRECISION
          </motion.div>

          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 relative z-20">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif text-foreground mb-6"
              >
                Excellence Across <br />
                <span className="italic text-gold">Legal Landscapes</span>
              </motion.h2>
              <p className="text-foreground/50 text-lg">
                Providing strategic counsel and aggressive advocacy in areas where failure is not an option.
              </p>
            </div>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-gold/50 font-sans tracking-widest uppercase text-xs border-b border-gold/30 pb-2"
            >
              Scroll to Explore
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard area={area} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
