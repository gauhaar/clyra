"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import KeyFeatures from "../components/KeyFeatures";
import AISection from "../components/AISection";
import FinancialSection from "../components/FinancialSection";
import KPISection from "../components/KPISection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1022] text-[#f8fafc]">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,#8b5cf6,transparent_70%)] opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute left-[-15%] top-32 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,#1d4ed8,transparent_70%)] opacity-45 blur-3xl" />

        <Hero />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-12 pt-0">
          <Problem />
          <Solution />
        </div>

        <HowItWorks />

        <KeyFeatures />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-12">
          <AISection />
          <FinancialSection />
          <KPISection />
          <CTA />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
