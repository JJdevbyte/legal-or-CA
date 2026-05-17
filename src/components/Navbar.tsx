"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Gavel } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Practice Areas", href: "#practice-areas" },
  { name: "Attorneys", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Gavel size={24} className="text-gold transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-2xl font-serif tracking-tighter text-foreground">
            ELITE<span className="text-gold">LEGAL</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-sans font-medium text-foreground/70 transition-colors duration-300 hover:text-gold uppercase tracking-widest group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <button className="px-6 py-2 border border-gold/50 text-gold text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-gold hover:text-obsidian cursor-pointer">
            Secure Portal
          </button>
        </div>

        {/* Mobile Toggle Placeholder (Can be expanded later) */}
        <button className="md:hidden text-gold p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};
