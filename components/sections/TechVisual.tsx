"use client";

import { motion } from "framer-motion";

export function TechVisual() {
  const dots = ["left-[18%] top-[24%]", "left-[72%] top-[18%]", "left-[58%] top-[72%]", "left-[30%] top-[68%]"];
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-card">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 26, ease: "linear" }} className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/40" />
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-electric p-5 text-white shadow-card">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Omixa Labs Core</p>
        <p className="mt-4 font-display text-2xl font-bold">AI Workflow Engine</p>
      </motion.div>
      {dots.map((dot, i) => <motion.span key={dot} animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.2 }} className={`absolute ${dot} h-4 w-4 rounded-full bg-white shadow-card`} />)}
      <div className="absolute inset-x-10 top-1/2 h-px bg-electric/45" />
      <div className="absolute inset-y-10 left-1/2 w-px bg-violet/45" />
    </div>
  );
}
