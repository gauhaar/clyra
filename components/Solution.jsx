"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, GitMerge, LineChart } from "lucide-react";

const steps = [
  {
    icon: Layers,
    step: "Step 1",
    title: "Structure Your Organization",
    description: "Map your company hierarchy—CEO to team lead. Tasks and permissions cascade through departments automatically."
  },
  {
    icon: GitMerge,
    step: "Step 2",
    title: "Define Project Lifecycles",
    description: "Each stage activates its own tasks, deadlines, and approvals. Nothing starts before it should, nothing gets missed."
  },
  {
    icon: LineChart,
    step: "Step 3",
    title: "Execute with Full Visibility",
    description: "Every task tracked, every change logged, every expense visible in real-time. No surprises at project close."
  }
];

export default function Solution() {
  return (
    <section className="relative w-full py-8">
       {/* Ambient Background Glows */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
       </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
              The Solution
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            One Platform. Total Control.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Clyra doesn't adapt generic workflows to construction. It was built from the 
            ground up for how construction companies actually operate.
          </motion.p>
        </div>

        {/* 3-Column Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative mb-20">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -z-10">
            {/* Animated Dot 1: Step 1 -> Step 2 */}
            <motion.div
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: "50%", opacity: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_3px_rgba(168,85,247,0.8)]"
            />
            {/* Animated Dot 2: Step 2 -> Step 3 */}
            <motion.div
              initial={{ left: "50%", opacity: 0 }}
              animate={{ left: "100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5, // Slight stagger for visual interest
              }}
              className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(96,165,250,0.8)]"
            />
          </div>

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.15), duration: 0.5 }}
                className="relative group text-center"
              >
                {/* Icon Container with Glow */}
                <div className="mx-auto w-24 h-24 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-[#0b1022] border border-slate-800 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500 ease-out shadow-2xl" />
                   
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-slate-900/50 rounded-xl border border-slate-700/50 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Step Label */}
                <div className="mb-3">
                  <span className="text-sm font-bold uppercase tracking-widest text-purple-500/80 group-hover:text-purple-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
                
              </motion.div>
            );
          })}
        </div>

        {/* Large Image with Hover Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative w-full max-w-6xl mx-auto group perspective-1000"
        >
          {/* Animated Glowing Border Effect - Increased inset and blur for smoothness */}
          <div className="absolute -inset-4 md:-inset-6 rounded-[2rem] bg-gradient-to-r from-violet-600/40 via-purple-500/40 to-indigo-600/40 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100 group-hover:blur-3xl" />
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0f1629] aspect-video ring-1 ring-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
            
            <Image 
              src="/main image.png"
              alt="Clyra Unified Dashboard Interface"
              fill
              className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={95}
            />
            
            {/* Inner Sheen on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 mix-blend-overlay" />
            
            {/* Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1022] via-transparent to-transparent opacity-40 pointer-events-none z-20" />
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-600/5 blur-[100px] rounded-full transition duration-1000 group-hover:bg-purple-500/20" />
        </motion.div>

      </div>
    </section>
  );
}
