"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import { 
  GitMerge, 
  Workflow, 
  AlertCircle, 
  History, 
  FileCheck, 
  FolderOpen,
  ListTodo,
  ArrowUpCircle,
} from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const features = [
  {
    title: "Hierarchical Task Assignment",
    description: "Tasks flow from CEO to directors to team members. Everyone knows exactly what they own.",
    icon: GitMerge,
  },
  {
    title: "Lifecycle Stage Automation",
    description: "Define project phases. Tasks activate automatically when stages begin—no manual triggers.",
    icon: Workflow, 
  },
  {
    title: "Urgent Task Pinning",
    description: "Critical tasks are always surfaced at the top. Nothing urgent ever gets lost in the queue.",
    icon: AlertCircle,
  },
  {
    title: "Version History & Audit Trail",
    description: "Every deadline change requires a reason. Full history of who changed what and why.",
    icon: History,
  },
  {
    title: "Approval Workflows",
    description: "Tasks require explicit confirmation before marking complete. No silent completions.",
    icon: FileCheck,
  },
  {
    title: "Complete Document System",
    description: "PDFs, drawings, presentations, checklists—everything attached to the right task and stage.",
    icon: FolderOpen,
  },
  {
    title: "Subtasks & Checklists",
    description: "Break complex deliverables into granular steps. Track progress at any level of detail.",
    icon: ListTodo,
  },
  {
    title: "Smart Prioritization",
    description: "Tasks are ranked by urgency, deadline proximity, and organizational hierarchy.",
    icon: ArrowUpCircle,
  },
];

export default function KeyFeatures() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      id="features" 
      className="py-20 bg-[#0b1022] text-white overflow-hidden"
    >
        <div className="container mx-auto px-6 max-w-7xl">
             <div className="mb-16 text-center">
                <motion.span variants={fadeUp} className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-bold tracking-wider uppercase text-sm mb-4 block">
                  Features
                </motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Every Detail, Under Control
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
                  Purpose-built tools that match how construction projects actually move—from boardroom to job site.
                </motion.p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                    <motion.div variants={fadeUp} key={idx} className="relative h-full group">
                        {/* Animated Gradient Background Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
                        
                        <div className="relative h-full rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl">
                            <GlowingEffect
                              spread={40}
                          disabled={false}
                          proximity={64}
                          inactiveZone={0.01}
                          borderWidth={3}
                          gradient="radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 100%), conic-gradient(from 0deg, #ec4899 0deg, #a855f7 180deg, #ec4899 360deg)"
                        />
                        <div className="relative flex h-full flex-col justify-start gap-3 overflow-hidden rounded-xl px-6 py-5 bg-[#0f1629]/50 backdrop-blur-md transition-all duration-500 group-hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] group-hover:from-pink-900/40 group-hover:via-slate-900/80 group-hover:to-slate-900/90 group-hover:-translate-y-1">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-pink-500/20 bg-pink-500/10 text-pink-400 group-hover:text-pink-50 group-hover:bg-pink-500/30 group-hover:border-pink-300 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300">
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-sans text-lg font-bold text-white leading-tight group-hover:text-pink-200 transition-colors">
                                {feature.title}
                              </h3>
                              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
             </div>
        </div>
    </motion.section>
  );
}
