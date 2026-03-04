"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CanvasText } from "./ui/canvas-text";

// The steps data structure aligns with the visual rhythm requested:
// Alternating split sections (Image Left/Text Right, then Reversed).
const steps = [
  {
    id: 1,
    title: "Structured Company Architecture",
    subtitle: "Vertical Alignment",
    description: "Clyra mirrors your real-world construction hierarchy—from CEO down to departments and individual teams. By mapping your exact organizational structure, we ensure absolute clarity of responsibility and strict vertical alignment across every level of the company.",
    points: [
      "Mirror real construction hierarchy (CEO → Teams)",
      "Clear role-based responsibility",
      "Strict vertical alignment",
    ],
    image: "/plc image.png",
    reverse: false, // Image Left, Text Right
  },
  {
    id: 2,
    title: "Lifecycle-Driven Process",
    subtitle: "Predictable Workflow",
    description: "Projects move through predefined lifecycle stages, from pre-construction to closeout. Tasks and requirements automatically activate as the project advances, ensuring a predictable, structured workflow where nothing is missed and timing is perfect.",
    points: [
      "Defined project lifecycle stages",
      "Stage-triggered task activation",
      "Standardized operational flow",
    ],
    image: "/default second.png",
    reverse: true, // Text Left, Image Right
  },
  {
    id: 3,
    title: "Controlled Task Execution",
    subtitle: "Operational Discipline",
    description: "Enforce accountability with urgent task prioritization, strict deadline controls, and robust version tracking. Our built-in approval system ensures that work is verified before it's closed, maintaining high standards across all operations.",
    points: [
      "Urgent task prioritization",
      "Approval loops & version tracking",
      "Strict deadline control",
    ],
    image: "/notion style.png",
    reverse: false, // Image Left, Text Right
  },
  {
    id: 4,
    title: "Executive-Level Transparency",
    subtitle: "Strategic Oversight",
    description: "Empower leadership with real-time visibility into KPI tracking, overdue items, and financial health. Monitor deadline extensions and project status instantly, turning raw data into actionable strategic insights.",
    points: [
      "Live KPI & financial tracking",
      "Overdue task visibility",
      "Strategic deadline oversight",
    ],
    image: "/finance.png",
    reverse: true, // Text Left, Image Right
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0b1022] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />
      {/* Noise texture overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.1em] text-purple-300 uppercase">Operational Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Total Control,{" "}
            <CanvasText
              text="Step by Step"
              className="font-bold text-4xl md:text-5xl lg:text-6xl"
              backgroundClassName="bg-[#0b1022]"
              colors={["#a855f7", "#c084fc", "#e879f9"]}
              lineGap={6}
              animationDuration={10}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Clyra transforms chaotic manual processes into a streamlined, high-performance operational machine.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="space-y-32">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col ${step.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, x: step.reverse ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f1629] shadow-2xl transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)] group-hover:-translate-y-2">
                  {/* Glass sheen effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[16/10] w-full">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements (Glows and Borders) */}
                <div className={`absolute -z-10 top-8 ${step.reverse ? '-right-8' : '-left-8'} w-full h-full border border-purple-500/10 rounded-2xl transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]`} />
                <div className={`absolute -z-10 -bottom-10 ${step.reverse ? '-left-10' : '-right-10'} w-2/3 h-2/3 bg-purple-600/10 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-purple-600/20 group-hover:blur-[60px]`} />
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: step.reverse ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-xl shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-500 hover:scale-110 hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] cursor-default">
                      0{step.id}
                    </span>
                    <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest">{step.subtitle}</h3>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.2]">
                    {step.title}
                  </h2>
                  
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <ul className="space-y-4">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 group/item">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 group-hover/item:text-purple-400 transition-colors" />
                      </div>
                      <span className="text-base font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
