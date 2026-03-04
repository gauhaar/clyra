import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { motion } from "framer-motion";

function AnimatedBorder({ children }) {
  return (
    <div className="relative w-full rounded-[32px]">
      {/* 
        Neon Gradient Border
        Uses CSS mask to cut out the center, leaving only the border visible.
        This allows the background to remain transparent.
      */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden rounded-[32px] pointer-events-none"
        style={{
            padding: '2px', // Control border width here
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor'
        }}
      >
         {/* Spinning Gradients */}
         <div className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#4f46e5_70%,#a855f7_80%,#ec4899_90%,#4f46e5_100%)] opacity-100 will-change-transform" />
         <div className="absolute inset-[-100%] animate-[spin_10s_linear_infinite_reverse] bg-[conic-gradient(from_270deg_at_50%_50%,#0000_0%,#0000_50%,#3b82f6_70%,#06b6d4_80%,#10b981_90%,#3b82f6_100%)] opacity-80 will-change-transform" />
      </div>

      {/* Content Container - Transparent */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}

export default function AISection() {
  const aiFeatures = [
    {
      name: "Instant Project Generation",
      designation: "Automated Lifecycle Planning",
      quote:
        "Generate full project plans from lifecycle documents in minutes. Our AI understands your documentation standards and builds complex dependencies automatically, saving weeks of manual planning time.",
      src: "/jcp active.png", 
    },
    {
      name: "Intelligent Mapping",
      designation: "Smart Resource Allocation",
      quote:
        "Map stages, tasks, and dependencies to your internal standards instantly. The system learns from your past projects to suggest the most efficient resource allocation strategies.",
      src: "/jcp default.png", 
    },
    {
      name: "Real-time Adaptation",
      designation: "Dynamic Workflow Adjustment",
      quote:
        "When requirements change, the AI automatically suggests plan adjustments. Visualise impact across your entire portfolio before committing to changes.",
      src: "/default page.png", 
    },
    {
      name: "Seamless Integration",
      designation: "Unified Data Ecosystem",
      quote:
        "Connect directly with your existing lifecycle management tools. We pull data from documents, emails, and tickets to keep your project plans synchronized with reality.",
      src: "/plc project.png", 
    },
    {
      name: "Predictive Analytics",
      designation: "Future-Proof Decision Making",
      quote:
        "Identify potential bottlenecks before they happen. Our predictive engine analyzes historical data to warn you about risks and propose mitigation plans.",
      src: "/plc predict.png", 
    },
  ];

  return (
    <section id="ai" className="relative py-10">
      <AnimatedBorder>
        <div className="relative z-10 px-4 py-8 md:px-8">
           <AnimatedTestimonials testimonials={aiFeatures} autoplay={false} />
        </div>
      </AnimatedBorder>
    </section>
  );
}
