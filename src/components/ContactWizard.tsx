"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Send, CheckCircle2 } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

const inquiryTypes = [
  "Corporate Strategy",
  "Tax Litigation",
  "Wealth & Trusts",
  "Intellectual Property",
  "Insolvency & Debt",
  "Other Legal Affairs",
];

export const ContactWizard = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    type: "",
    details: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setStep((prev) => (prev + 1) as Step);
  const handleBack = () => setStep((prev) => (prev - 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext(); // To Success Step
  };

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section id="contact" className="relative py-32 bg-obsidian border-t border-white/5 overflow-hidden mt-[10vh]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-sans tracking-[0.3em] uppercase text-xs mb-4"
          >
            Engagement
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground"
          >
            Initiate <span className="italic text-gold">Consultation</span>
          </motion.h2>
        </div>

        <div className="relative min-h-[400px] bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-sm">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-xl font-serif text-foreground mb-8">What is the focus of your inquiry?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      data-cursor="expand"
                      onClick={() => {
                        setFormData({ ...formData, type });
                        handleNext();
                      }}
                      className={`flex items-center justify-between p-4 border transition-all duration-300 rounded-sm text-left group ${
                        formData.type === type
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-white/10 hover:border-gold/50 text-foreground/70"
                      }`}
                    >
                      <span className="font-sans text-sm tracking-wide">{type}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        formData.type === type ? "border-gold bg-gold" : "border-white/20 group-hover:border-gold/50"
                      }`}>
                        {formData.type === type && <Check size={12} className="text-obsidian" />}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-xl font-serif text-foreground mb-8">Provide brief context or specific requirements</h3>
                <textarea
                  autoFocus
                  placeholder="The details of your situation..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full h-48 bg-white/5 border border-white/10 p-6 text-foreground font-sans placeholder:text-foreground/20 focus:outline-none focus:border-gold transition-colors resize-none rounded-sm"
                />
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors font-sans text-sm uppercase tracking-widest cursor-pointer"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    data-cursor="expand"
                    disabled={!formData.details.trim()}
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-gold text-obsidian font-bold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-gold-dark cursor-pointer text-sm uppercase tracking-widest"
                  >
                    Next <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                key="step3"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
              >
                <h3 className="text-xl font-serif text-foreground mb-8">Securing your representative contact details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gold mb-2 font-sans font-bold">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-foreground font-sans placeholder:text-foreground/20 focus:outline-none focus:border-gold transition-colors rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gold mb-2 font-sans font-bold">Official Email</label>
                      <input
                        required
                        type="email"
                        placeholder="a.vance@firm.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 text-foreground font-sans placeholder:text-foreground/20 focus:outline-none focus:border-gold transition-colors rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gold mb-2 font-sans font-bold">Contact Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 text-foreground font-sans placeholder:text-foreground/20 focus:outline-none focus:border-gold transition-colors rounded-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-12">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors font-sans text-sm uppercase tracking-widest cursor-pointer"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    type="submit"
                    data-cursor="expand"
                    className="flex items-center gap-2 px-10 py-4 bg-gold text-obsidian font-bold rounded-sm transition-all duration-300 hover:bg-gold-dark cursor-pointer text-sm uppercase tracking-[0.2em]"
                  >
                    Request Secure Consultation <Send size={16} />
                  </button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="inline-block mb-8"
                >
                  <CheckCircle2 size={80} className="text-gold" strokeWidth={1} />
                </motion.div>
                <h3 className="text-3xl font-serif text-foreground mb-4">Request Transmitted Successfully</h3>
                <p className="text-foreground/50 font-sans max-w-md mx-auto mb-10 leading-relaxed">
                  Our lead counsel will review your inquiry with the utmost confidentiality. 
                  Expect a formal response within 24 business hours.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="text-gold hover:text-gold-dark transition-colors font-sans text-sm uppercase tracking-[0.2em] underline underline-offset-8 cursor-pointer"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 transition-all duration-500 rounded-full ${
                step >= s ? "w-12 bg-gold" : "w-6 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
