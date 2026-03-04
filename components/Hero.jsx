// components/Hero.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, BarChart3, Zap } from "lucide-react";
import { StarfieldBackground } from "./ui/starfield-background";

// --- Utility Components ---

function FloatingElement({ children, depth = 1, className, delay = 0 }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const x = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-10 * depth, 10 * depth]);
  const y = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-10 * depth, 10 * depth]);

  const springConfig = { damping: 50, stiffness: 400 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`absolute ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2, z: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function GradientText({ children, className }) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient ${className}`}>
      {children}
    </span>
  );
}

// --- Main Hero Component ---

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden text-white py-20 pb-42 pt-45">
      
      {/* 1. Background Effects */}
      <StarfieldBackground className="absolute inset-0 z-0" />

      {/* 2. Main Container */}
      <div className="container relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left relative z-20">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 tracking-wide">Next-gen Site Control</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.1, duration: 0.8 }}
              className="block text-white"
            >
              Master Your
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              <GradientText>Construction</GradientText>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block text-gray-400"
            >
              Command Chain.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Clyra replaces fragmented updates with a <span className="text-white font-medium">unified operating system</span>. Enforce hierarchy, track live reporting, and kill delays before they start.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed] via-[#d946ef] to-[#6366f1] rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              <button className="relative rounded-full bg-gradient-to-r from-[#7c3aed] via-[#d946ef] to-[#6366f1] bg-[length:200%_auto] px-10 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(217,70,239,0.8)] hover:bg-[position:100%_0] active:scale-95 animate-gradient-x cursor-pointer ring-1 ring-white/40">
                 <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                   Get Started <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                 </span>
              </button>
            </div>
            
            <button className="group px-10 py-4 rounded-full bg-transparent border border-white/10 text-white font-medium text-lg hover:bg-white/5 transition-all hover:border-white/20 backdrop-blur-sm cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
              View Live Demo
            </button>
          </motion.div>
        </div>

        {/* Right: Dashboard Mockup + Floating Element */}
        <div className="lg:col-span-6 relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-1000 z-10">
          
          {/* Main Dashboard Mockup (Larger, central) */}
          <FloatingElement depth={0.5} delay={0.6} className="relative z-20 w-full max-w-lg">
             <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 shadow-2xl backdrop-blur-sm">
                <div className="rounded-xl bg-[#0f111a] border border-white/10 overflow-hidden">
                  {/* Fake UI Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#161b2c]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                      </div>
                      <div className="h-4 w-[1px] bg-white/10 mx-2" />
                      <span className="text-xs font-medium text-gray-400">Project Alpha Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">LIVE</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-5 space-y-5">
                    {/* Top Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-3 rounded-lg bg-[#1e2335]/50 border border-white/5">
                          <div className="text-xs text-gray-400 mb-1">Total Tasks</div>
                          <div className="text-xl font-bold text-white">1,248</div>
                       </div>
                       <div className="p-3 rounded-lg bg-[#1e2335]/50 border border-white/5">
                          <div className="text-xs text-gray-400 mb-1">Completion Rate</div>
                          <div className="text-xl font-bold text-blue-400">84%</div>
                       </div>
                    </div>
                  
                    {/* Activity Feed */}
                    <div className="space-y-3">
                         <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Recent Activity</div>
                         {[1, 2, 3].map((i) => (
                           <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors cursor-default">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] border border-white/10 ${i===1 ? 'bg-blue-500/20 text-blue-300' : 'bg-gray-700/50 text-gray-400'}`}>
                                {i === 1 ? 'PM' : 'U'+i}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-gray-300 truncate">
                                  {i === 1 ? 'Site inspection approved' : 'Updated structural drawings'}
                                </div>
                                <div className="text-[10px] text-gray-500">2 mins ago</div>
                              </div>
                           </div>
                         ))}
                    </div>

                    
                  </div>
                </div>
             </div>
          </FloatingElement>

          {/* Secondary Floating Card (Notification) - Positioned relative to Main */}
          <FloatingElement depth={1.2} delay={1.0} className="absolute -right-4 top-[20%] z-30 w-[240px]">
             <div className="p-4 rounded-xl border border-white/10 bg-[#161b2c]/90 backdrop-blur-xl shadow-xl shadow-black/50">
                <div className="flex gap-3 items-start">
                  <div className="mt-1 w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Zap size={14} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-1">Blocker Detected</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Material delivery delayed for Zone B foundation work.</p>
                  </div>
                </div>
            </div>
          </FloatingElement>
          
        </div>
      </div>

      {/* 3. Bottom Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b1022] via-[#0b1022]/80 to-transparent pointer-events-none"></div>
      

      
      {/* Global Styles for animations that might not be in Tailwind */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
