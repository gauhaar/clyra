import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { fadeUp, stagger } from "./motion";

const stats = [
  { label: "Lifecycle stages", value: "12+" },
  { label: "Accountability levels", value: "3" },
  { label: "Urgent task SLA", value: "Pinned" },
  { label: "Reporting cadence", value: "Live" },
];

export default function Hero() {
  return (
    <section className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-col gap-6"
      >
        <motion.span
          variants={fadeUp}
          className="w-fit rounded-full border border-[#22304f] bg-[#11182f]/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b6c2de]"
        >
          Built for construction leadership
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold leading-tight text-[#f8fafc] md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Clyra is the operating system for construction teams that own every deadline.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg text-[#b6c2de]">
          Replace fragmented communication with a single chain of accountability. Clyra
          enforces hierarchy, activates tasks by lifecycle stage, and ties execution to
          financial reality.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white shadow-[0_0_24px_rgba(139,92,246,0.45)] hover:from-[#9f7bff] hover:to-[#7c3aed]">
            Request a demo
          </Button>
          <Button
            variant="outline"
            className="border-[#2a3352] text-[#e5e7ff] hover:bg-[#161c32] hover:text-white"
          >
            View sample project
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="space-y-6"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-3xl border border-[#22304f] bg-[#11182f]/80 p-6 shadow-[0_24px_60px_-45px_rgba(76,29,149,0.6)]"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c4b5fd]">
            Executive control
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-[#f8fafc]">
            Every task, reason, and approval lives in one system.
          </h3>
          <p className="mt-4 text-sm text-[#a6b3d2]">
            Leadership sees where delivery stands, why it changed, and how it impacts the
            bottom line.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 gap-4 text-sm"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#22304f] bg-[#11182f]/70 p-4"
            >
              <div className="text-2xl font-semibold text-[#f8fafc]">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#9aa6c4]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
