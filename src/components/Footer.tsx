import React from "react";
import Link from "next/link";
import { Gavel, Shield, Mail, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-40 bg-obsidian border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <Gavel size={24} className="text-gold" />
              <span className="text-2xl font-serif tracking-tighter text-foreground">
                ELITE<span className="text-gold">LEGAL</span>
              </span>
            </Link>
            <p className="text-foreground/40 font-sans max-w-sm leading-relaxed mb-8">
              A premium legal and financial advisory firm dedicated to the uncompromising defense of corporate legacy and wealth preservation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-white/10 text-foreground/40 hover:text-gold hover:border-gold transition-all duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 text-foreground/40 hover:text-gold hover:border-gold transition-all duration-300">
                <Shield size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 text-foreground/40 hover:text-gold hover:border-gold transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="#about" className="text-foreground/40 hover:text-foreground transition-colors">Firm Profile</Link></li>
              <li><Link href="#practice-areas" className="text-foreground/40 hover:text-foreground transition-colors">Practice Areas</Link></li>
              <li><Link href="#team" className="text-foreground/40 hover:text-foreground transition-colors">Attorneys</Link></li>
              <li><Link href="#contact" className="text-foreground/40 hover:text-foreground transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">Offices</h4>
            <ul className="space-y-4 font-sans text-sm text-foreground/40 leading-relaxed">
              <li>
                <span className="block text-foreground font-medium mb-1">New York</span>
                1201 Avenue of the Americas<br />
                NY 10036
              </li>
              <li>
                <span className="block text-foreground font-medium mb-1">London</span>
                22 Bishopsgate, EC2N 4BQ<br />
                United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/20 text-xs font-sans tracking-widest uppercase">
            © {currentYear} Elite Legal Firm. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-sans text-foreground/20 uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-gold transition-colors">Regulatory Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
