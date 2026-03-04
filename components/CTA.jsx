import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { fadeUp, stagger } from "./motion";
import { ArrowRight } from "lucide-react";
import TextGenerateEffect from "./ui/text-generate-effect";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden py-32" id="cta">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          {/* Overline */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]"></span>
              </span>
              <span className="text-sm font-medium tracking-wide text-[#e9d5ff]">
                Ready to take control?
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={fadeUp}
            className="mb-8 text-4xl sm:text-5xl font-medium tracking-tight text-white md:text-7xl leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Projects Deserve <br className="hidden md:block" />
            <TextGenerateEffect words={'Better Than "Good Enough"'} className="text-[#a78bfa] font-medium block mt-2 drop-shadow-[0_0_15px_rgba(167,139,250,0.6)]" />
          </motion.h2>

          {/* Supporting Paragraph */}
          <motion.p 
            variants={fadeUp}
            className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl leading-relaxed"
          >
            Clyra is built for construction leaders who refuse to lose another project to disorganization. Join the early access program.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary: Magic Rotating Border Button */}
            <button className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0b1022] px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-colors group-hover:bg-[#0b1022]/80">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            
            {/* Secondary: Sleek Outline with Shimmer */}
            <button className="group relative h-14 w-full sm:w-auto overflow-hidden rounded-full border border-slate-700 bg-transparent px-8 text-base font-bold text-slate-300 transition-all duration-300 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 active:scale-95">
              <span className="relative z-10">Schedule a Demo</span>
              <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
            </button>
          </motion.div>

          {/* Bottom Trust/Benefit Indicators */}
          <motion.div 
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-500"
          >
            <span>Enterprise-grade security</span>
            <span className="hidden sm:inline">·</span>
            <span>Dedicated implementation support</span>
            <span className="hidden sm:inline">·</span>
            <span>Built for construction teams</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
