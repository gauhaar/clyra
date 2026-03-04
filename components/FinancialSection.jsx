"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp, Wallet, DollarSign, Activity, PieChart } from "lucide-react";
import { cn } from "../lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// 3D Isometric Bar
function IsoBar({ height, color, label, value, delay, isActive }) {
  return (
    <div className="relative flex flex-col items-center justify-end group cursor-default" style={{ height: 320, width: 100 }}>
       
       {/* Floating Label - Always visible and clear */}
       <motion.div 
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: delay + 0.5, duration: 0.5 }}
         className="absolute -top-12 z-20 flex flex-col items-center"
       >
          <div className={cn(
            "px-2 py-1 rounded-md border backdrop-blur-md shadow-xl mb-2 transition-all duration-300",
            isActive 
              ? "bg-purple-500/10 border-purple-500/50 text-white" 
              : "bg-slate-900/80 border-slate-700 text-slate-300"
          )}>
             <span className="text-[10px] font-bold tracking-wide uppercase">{label}</span>
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight",
            isActive ? "text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "text-slate-400"
          )}>
            {value}
          </span>
       </motion.div>

       {/* The 3D Bar */}
       <motion.div
          className="relative w-16 [transform-style:preserve-3d]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: height, transformOrigin: 'bottom' }}
       >
          {/* Front Face */}
          <div className={cn(
             "absolute inset-0 border-x border-t border-white/10 overflow-hidden", 
             color,
             isActive ? "bg-opacity-90" : "bg-opacity-80"
          )} 
          style={{ transform: "translateZ(32px)" }}>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
             {/* Subtle Flowing Shine */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent w-[200%] h-full animate-shine-slow" />
             {/* Active Pulse (if active) */}
             {isActive && (
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent animate-pulse-slow" />
             )}
          </div>

          {/* Back Face */}
          <div className={cn("absolute inset-0 bg-slate-950", color)} style={{ transform: "translateZ(-32px) rotateY(180deg)" }} />

          {/* Right Face side */}
          <div className={cn("absolute inset-y-0 right-0 w-[64px] origin-right", color, "brightness-[0.7]")} style={{ transform: "rotateY(90deg)" }}>
             <div className="absolute inset-0 border-t border-r border-white/10" />
          </div>

          {/* Left Face side */}
          <div className={cn("absolute inset-y-0 left-0 w-[64px] origin-left", color, "brightness-[0.6]")} style={{ transform: "rotateY(-90deg)" }}>
             <div className="absolute inset-0 border-t border-l border-white/10" />
          </div>

          {/* Top Face (Lid) */}
          <div className={cn(
             "absolute top-0 inset-x-0 h-[64px] origin-top flex items-center justify-center", 
             color, 
             isActive ? "brightness-125" : "brightness-110"
          )} 
          style={{ transform: "rotateX(-90deg)" }}>
             <div className="absolute inset-0 border border-white/20" />
             {/* Inner Glow center */}
             {isActive && <div className="w-8 h-8 bg-purple-400/30 blur-md rounded-full" />}
          </div>
       </motion.div>
       
       {/* Floor Reflection / Shadow */}
       <div className="absolute bottom-0 w-24 h-8 bg-black/50 blur-xl rounded-full transform scale-x-150 translate-y-4" />
    </div>
  )
}

function FinancialDashboard() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
       <style jsx global>{`
         @keyframes shine-slow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(50%); }
         }
         .animate-shine-slow {
            animation: shine-slow 4s linear infinite;
         }
         @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
         }
         .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
         }
       `}</style>

       {/* Ambient Backdrop */}
       <div className="absolute inset-0 pointer-events-none" />
       
       {/* Main Stage */}
       <div className="relative perspective-[2000px] flex items-center justify-center pt-32">
         
         {/* Isometric Platform Container with Movement */}
         <motion.div 
            className="relative [transform-style:preserve-3d]"
            initial={{ rotateX: 15, rotateY: -15, y: 0 }}
            animate={{ 
               rotateX: [15, 20, 15],
               rotateY: [-15, -25, -15],
               y: [0, -10, 0]
            }}
            transition={{ 
               duration: 8, 
               repeat: Infinity, 
               ease: "easeInOut" 
            }}
         > 
             {/* Platform Base - Tech Floor */}
             <div className="absolute top-[350px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] [transform:rotateX(90deg)_translateZ(-50px)]">
                 
                 {/* Radial Fade Logic */}
                 <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm rounded-full [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)]">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    
                    {/* Rotating Cyber Rings on Floor */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-60">
                        {/* Ring 1 - Large Slow */}
                        <motion.div 
                            className="w-[400px] h-[400px] border border-dashed border-white/10 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Ring 2 - Medium Counter-Rotate */}
                        <motion.div 
                            className="absolute w-[280px] h-[280px] border-[1px] border-transparent border-t-purple-500/30 border-b-purple-500/10 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Ring 3 - Pulse Core */}
                        <motion.div 
                            className="absolute w-[120px] h-[120px] border border-purple-400/20 rounded-full flex items-center justify-center"
                            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl" />
                        </motion.div>
                    </div>
                 </div>
             </div>

             {/* Floating Particles in 3D Space */}
             <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-300 rounded-full shadow-[0_0_10px_#a855f7]"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0], 
                            y: -250 - Math.random() * 100, // Move UP
                            x: (Math.random() - 0.5) * 80, // Drift X
                            z: (Math.random() - 0.5) * 80  // Drift Z
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeOut"
                        }}
                        style={{
                            left: '50%',
                            top: '60%', // Start near platform center
                            transform: `translateZ(${Math.random() * 100}px)`
                        }}
                    />
                ))}
             </div>

             <div className="flex items-end gap-10 pb-12 pl-4" style={{ transform: "translateZ(0)" }}>
                <IsoBar 
                  height={140} 
                  color="bg-slate-800" 
                  label="Planned" 
                  value="$1.2M" 
                  delay={0}
                />
                
                <IsoBar 
                  height={240} 
                  color="bg-purple-600 shadow-[0_0_50px_rgba(168,85,247,0.4)]" 
                  label="Actual" 
                  value="$850k" 
                  isActive={true}
                  delay={0.2} 
                />
                
                <IsoBar 
                  height={180} 
                  color="bg-slate-700" 
                  label="Forecast" 
                  value="$2.1M" 
                  delay={0.4} 
                />
             </div>
         </motion.div>

       </div>
    </div>
  );
}


export default function FinancialSection() {
  const benefits = [
    "Planned vs. unplanned expense tracking",
    "Real-time budget utilization dashboards",
    "Financial reports at project/task level",
    "Early warning alerts for budget deviation",
  ];

  return (
    <section id="finance" className="relative w-full py-24 lg:py-32 overflow-hidden">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side - 3D Visualization */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full flex justify-center lg:justify-end lg:pr-12 order-2 lg:order-1"
          >
            <FinancialDashboard />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col justify-center space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                 <div className="h-px w-8 bg-purple-500" />
                 <span className="text-sm font-bold tracking-[0.2em] text-purple-400 uppercase">
                  Financial Control
                 </span>
              </motion.div>
              
              <motion.h2 
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] max-w-lg"
              >
                Know Where Every <span className="text-purple-500 selection:bg-purple-500 selection:text-white">Dollar</span> Goes.
              </motion.h2>
              
              <motion.p 
                variants={fadeUp}
                className="text-base text-slate-400 leading-relaxed max-w-xl"
              >
                Clyra separates planned and unplanned expenses automatically, 
                provides real-time visibility across projects, stages, and tasks, 
                and prevents budget overruns before they escalate.
              </motion.p>
            </div>

            <motion.ul variants={stagger} className="space-y-4 pt-2">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  variants={fadeUp}
                  className="flex items-center gap-3 group"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-purple-400" strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
