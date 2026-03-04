import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function Problem() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="py-3"
    >
      <div className="mx-auto max-w-5xl text-center mb-8">
        <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4b5fd]">
          The Structural Problem
        </motion.span>
        <motion.h2 variants={fadeUp} className="mt-4 text-4xl leading-tight font-semibold text-[#f8fafc]" style={{ fontFamily: "var(--font-display)" }}>
          Construction Doesn't Scale on Office Tools
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 mx-auto max-w-2xl text-lg text-[#a6b3d2]">
          General software disconnects tasks from finances and hierarchy.
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Teams Problem */}
        <motion.div variants={fadeUp} className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#22304f] bg-[#11182f]/80 p-0 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_80px_-20px_rgba(239,68,68,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative h-48 w-full border-b border-[#22304f] overflow-hidden">
             <Image 
                src="/teams.png" 
                alt="Microsoft Teams Interface" 
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity transition-transform duration-500 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#11182f] to-transparent opacity-60" />
          </div>

          <div className="relative z-10 flex flex-1 flex-col p-8 pt-6">
            <h3 className="mb-4 text-xl font-medium text-white transition-colors group-hover:text-red-400">Teams & Messengers</h3>
            <ul className="space-y-3 text-sm text-[#a6b3d2]">
            <li className="flex items-center gap-2">
              <X className="h-4 w-4 text-[#ef4444]" />
              Tasks get buried in chat
            </li>
            <li className="flex items-center gap-2">
              <X className="h-4 w-4 text-[#ef4444]" />
              No financial context
            </li>
            <li className="flex items-center gap-2">
              <X className="h-4 w-4 text-[#ef4444]" />
              Zero accountability
            </li>
            <li className="flex items-center gap-2">
              <X className="h-4 w-4 text-[#ef4444]" />
              Hard to audit decisions
            </li>
          </ul>
          </div>
        </motion.div>

        {/* Jira Problem */}
        <motion.div variants={fadeUp} className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#22304f] bg-[#11182f]/80 p-0 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_80px_-20px_rgba(249,115,22,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative h-48 w-full border-b border-[#22304f] overflow-hidden">
              <Image 
                src="/jira.png" 
                alt="Jira Interface" 
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11182f] to-transparent opacity-60" />
            </div>

          <div className="relative z-10 flex flex-1 flex-col p-8 pt-6">
            <h3 className="mb-4 text-xl font-medium text-white transition-colors group-hover:text-orange-400">Jira & IT Trackers</h3>
            <ul className="space-y-3 text-sm text-[#a6b3d2]">
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-[#ef4444]" />
                Too complex for field teams
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-[#ef4444]" />
                Steep learning curve
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-[#ef4444]" />
                Disconnected from budget
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-[#ef4444]" />
                Built for software, not sites
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Clyra Solution */}
        <motion.div variants={fadeUp} className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#8b5cf6]/30 bg-gradient-to-br from-[#1e1b4b] to-[#11182f] p-0 md:col-span-2 lg:col-span-1 border-t-4 border-t-[#a78bfa] transition-all duration-300 hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)] hover:border-[#a78bfa] hover:-translate-y-1 hover:from-[#2e2b5b] hover:to-[#1a1f3d]">
          
          <div className="relative h-48 w-full border-b border-[#3c2a6b] overflow-hidden">
             <Image 
                src="/plc image.png" 
                alt="Clyra dashboard" 
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity transition-transform duration-500 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] to-transparent opacity-60" />
          </div>

          <div className="relative z-10 flex flex-1 flex-col p-8 pt-6">
            <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#a78bfa] transition-colors">The Clyra Standard</h3>
            <ul className="space-y-3 text-sm text-[#c4b5fd]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              Tasks linked to finances
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              Built for hierarchies
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              Clear ownership
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              Full project visibility
            </li>
          </ul>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="mt-8 text-center">
         <p className="text-lg font-medium text-white tracking-wide">
           You can't scale what you can't see.
         </p>
      </motion.div>
    </motion.section>
  );
}
