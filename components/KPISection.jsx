"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from "lucide-react";
import { cn } from "../lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function MetricCard({ 
  label, 
  value, 
  trend, 
  trendValue, 
  icon: Icon, 
  delay 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-col p-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm hover:border-purple-500/30 transition-colors group"
    >
      <div className="flex justify-between items-start mb-2">
        <div className="p-2 rounded-lg bg-slate-800/50 text-purple-400 group-hover:text-purple-300 transition-colors">
          <Icon size={18} />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full border",
            trend === "up" 
              ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" 
              : "text-rose-400 border-rose-500/20 bg-rose-500/10"
          )}>
            {trend === "up" ? <ArrowUpRight size={10} className="mr-0.5" /> : <ArrowDownRight size={10} className="mr-0.5" />}
            {trendValue}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-xs text-slate-400 font-medium">{label}</p>
    </motion.div>
  );
}

export default function KPISection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
                Performance Intelligence
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Execution You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Quantify.</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-8 leading-relaxed max-w-md">
              Transform daily activity into measurable performance signals. Real-time operational insight that drives accountability across every team.
            </motion.p>
            
            {/* Metrics List - 2x2 Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <MetricCard 
                icon={CheckCircle2}
                value="94%"
                label="On-Time Completion"
                trend="up"
                trendValue="4.2%"
                delay={0.2}
              />
              <MetricCard 
                icon={Zap}
                value="1.4x"
                label="Task Efficiency"
                trend="up"
                trendValue="0.8x"
                delay={0.3}
              />
              <MetricCard 
                icon={Clock}
                value="12h"
                label="Avg Approval Time"
                trend="down"
                trendValue="-6h"
                delay={0.4}
              />
              <MetricCard 
                icon={AlertCircle}
                value="Low"
                label="Execution Risk"
                delay={0.5}
              />
            </motion.div>
          </motion.div>
          
          {/* Visual Content - Dashboard Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur-sm overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <Image 
                 src="/reports page.png"
                 alt="KPI Dashboard Interface"
                 width={800}
                 height={600}
                 className="w-full h-auto rounded-xl shadow-2xl"
               />
            </div>
            
            {/* Floating Elements/Decorations - Removed as per request */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
