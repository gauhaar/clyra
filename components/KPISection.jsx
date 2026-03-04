"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Zap,
  Activity,
  Users,
  BarChart3,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { cn } from "../lib/utils";
import { useRef, useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function Counter({ value, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => {
    if (suffix === "%" || suffix === "s") {
      return current.toFixed(1) + suffix;
    } 
    // Handle "k" or other suffixes or no suffix
    return Math.floor(current).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref} className={className}>{displayValue}</motion.span>;
}

function KPICard({ 
  label, 
  value, 
  trend, 
  trendValue, 
  icon: Icon, 
  delay,
  color = "blue"
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer"
    >
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl",
        color === "blue" ? "bg-blue-500" : 
        color === "purple" ? "bg-purple-500" :
        color === "emerald" ? "bg-emerald-500" : "bg-pink-500"
      )} />
      
      <div className={cn(
        "relative flex items-center p-3 lg:p-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-300 h-full gap-4",
        "group-hover:border-white/20 group-hover:bg-slate-900/80 shadow-lg group-hover:shadow-xl",
        color === "blue" ? "group-hover:shadow-blue-500/20" : 
        color === "purple" ? "group-hover:shadow-purple-500/20" :
        color === "emerald" ? "group-hover:shadow-emerald-500/20" : "group-hover:shadow-pink-500/20"
      )}>
        
        {/* Icon Box */}
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-lg border border-white/5 bg-white/5 transition-colors group-hover:bg-white/10 shrink-0",
          color === "blue" ? "text-blue-400 group-hover:text-blue-300" : 
          color === "purple" ? "text-purple-400 group-hover:text-purple-300" :
          color === "emerald" ? "text-emerald-400 group-hover:text-emerald-300" : "text-pink-400 group-hover:text-pink-300"
        )}>
          <Icon size={22} />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
             <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
               <Counter value={value} />
             </h3>
             {trend && (
                <span className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap shrink-0 flex items-center justify-center h-fit",
                  trend === "up" 
                    ? "text-emerald-100 border-emerald-500/40 bg-emerald-500/40" 
                    : "text-rose-100 border-rose-500/40 bg-rose-500/40"
                )}>
                  {trendValue}
                </span>
              )}
          </div>
          <p className="text-xs text-slate-400 font-medium truncate group-hover:text-slate-300 transition-colors">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}


function FloatingElement({ className, children, delay = 0, yOffset = 10, duration = 4 }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -yOffset, 0],
      }}
      transition={{ 
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={cn("absolute z-20", className)}
    >
      <div className="p-3 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
        {children}
      </div>
    </motion.div>
  );
}

function ScannerEffect() {
  return (
    <motion.div 
      initial={{ top: "-10%" }}
      animate={{ top: "110%" }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "linear",
        repeatDelay: 1
      }}
      className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent pointer-events-none z-20"
    />
  );
}

function RotatingGlow() {
   return (
     <motion.div
       animate={{ rotate: 360 }}
       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
       className="absolute inset-[-50px] -z-10 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.3)_180deg,transparent_360deg)] rounded-full opacity-40 blur-2xl"
     />
   );
}

export default function KPISection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section ref={containerRef} className="w-full py-4 md:py-10 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Text & Metrics - Occupies 5 cols */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:col-span-5"
            >
              <motion.div variants={fadeUp} className="mb-6">
                 {/* Badge */}
                 <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Performance Intelligence
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Execution You Can <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x bg-size-[200%_auto]">
                  Quantify.
                </span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-base text-slate-400 mb-8 leading-relaxed">
                Transform daily activity into measurable performance signals. Real-time operational insight that drives accountability across every team.
              </motion.p>
              

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <KPICard 
                  icon={CheckCircle2}
                  value="99.9%"
                  label="System Uptime"
                  trend="up"
                  trendValue="0.2%"
                  delay={0.1}
                  color="purple"
                />
                <KPICard 
                  icon={Zap}
                  value="1.2s"
                  label="Avg Latency"
                  trend="down"
                  trendValue="-12%"
                  delay={0.2}
                  color="blue"
                />
                <KPICard 
                  icon={Activity}
                  value="850+"
                  label="Active Projects"
                  trend="up"
                  trendValue="8.5%"
                  delay={0.3}
                  color="emerald"
                />
                <KPICard 
                  icon={Users}
                  value="12k"
                  label="Team Members"
                  trend="up"
                  trendValue="24%"
                  delay={0.4}
                  color="pink"
                />
              </div>
            </motion.div>
            
            {/* Right Column: Visual Composition - Occupies 7 cols for better balance */}
            <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center perspective-1000 lg:col-span-7">
               
               {/* Main Dashboard Card - Scaled UP */}
               <motion.div 
                 initial={{ y: 20, rotateX: 5 }}
                 animate={{ y: -20, rotateX: 10 }}
                 transition={{ 
                   duration: 5, 
                   repeat: Infinity, 
                   repeatType: "reverse",
                   ease: "easeInOut" 
                 }}
                 className="relative w-full max-w-[650px] aspect-[16/10] rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden group/card z-10"
               >
                 {/* Scanner Effect */}
                 <ScannerEffect />
                 
                 {/* Rotating Glow Background */}
                 <div className="absolute inset-0 bg-transparent overflow-hidden rounded-2xl">
                    <RotatingGlow />
                 </div>

                 {/* Inner Glow/Sheen */}
                 <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
                 
                 {/* Mock UI Header */}
                 <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                 </div>
  
                 <div className="p-6 md:p-8 space-y-6 md:space-y-8 flex flex-col h-full">
                   {/* Chart Area */}
                   <div className="flex items-end justify-between flex-1 gap-2 md:gap-4 pb-4 border-b border-white/5 min-h-[140px]">
                      {[35, 60, 45, 80, 55, 75, 50, 90, 65, 85, 40, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.4 + (i * 0.05) }}
                          className="w-full bg-linear-to-t from-purple-500/40 to-blue-500/40 rounded-t-sm relative group/bar hover:from-purple-500 hover:to-blue-500 transition-colors"
                        >
                        </motion.div>
                      ))}
                   </div>
  
                   {/* List Area - More items */}
                   <div className="space-y-3">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                            {i === 0 ? <Activity size={18} className="text-purple-400" /> : <BarChart3 size={18} className="text-blue-400" />}
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 w-full max-w-[140px] bg-slate-700/50 rounded-full" />
                            <div className="h-1.5 w-20 bg-slate-800/50 rounded-full" />
                          </div>
                          <div className="text-right shrink-0">
                            <div className="h-5 w-12 rounded bg-green-500/10 border border-green-500/20" />
                          </div>
                        </div>
                      ))}
                   </div>
                 </div>
               </motion.div>
  
               {/* Floating Elements - Adjusted positions */}
               <FloatingElement className="-left-2 lg:-left-8 top-16 lg:top-32" delay={0.5} yOffset={15}>
                 <div className="flex items-center gap-3 pr-2">
                   <div className="p-2 bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg text-emerald-400">
                     <TrendingUp size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Growth Rate</p>
                     <p className="text-lg font-bold text-white">+124.5%</p>
                   </div>
                 </div>
               </FloatingElement>
  
               <FloatingElement className="-right-2 lg:-right-4 bottom-16 lg:bottom-40" delay={1} yOffset={20} duration={5}>
                 <div className="flex flex-col gap-2 min-w-[140px]">
                   <div className="flex items-center justify-between gap-4">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs text-slate-300 font-medium">Live Users</span>
                     </div>
                     <span className="text-xs font-bold text-blue-400">2,401</span>
                   </div>
                   <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "75%" }}
                       transition={{ duration: 1.5, delay: 1.5 }}
                       className="h-full bg-blue-500 rounded-full" 
                     />
                   </div>
                 </div>
               </FloatingElement>
               
            </div>
            
          </div>
      </div>
    </section>
  );
}
