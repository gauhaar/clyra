"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const SCROLL_THRESHOLD = 10;
const DESKTOP_WIDTH = 1130;

export default function Navbar() {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_WIDTH);
    };

    const handleScroll = () => {
      setIsCondensed(window.scrollY > SCROLL_THRESHOLD);
    };

    // Initial check
    if (typeof window !== "undefined") {
      handleResize();
      handleScroll();
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const widthTarget = "100%";
  const condensedShift = isCondensed ? (isDesktop ? 24 : 16) : 0;

  return (
    <motion.header
      className="fixed left-0 top-2 z-50 w-full px-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto w-full max-w-7xl rounded-full border border-transparent transition-colors"
        animate={{
          width: widthTarget,
          borderRadius: 9999,
          backgroundColor: isCondensed ? "rgba(5, 5, 10, 0.4)" : "rgba(0,0,0,0)",
          borderColor: isCondensed ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0)",
          backdropFilter: isCondensed ? "blur(16px)" : "blur(0px)",
        }}
        transition={{
          width: { duration: 0.3, ease: "easeOut" },
          borderRadius: { duration: 0.3, ease: "easeOut" },
          backgroundColor: { duration: 0.3, ease: "easeOut" },
          borderColor: { duration: 0.3, ease: "easeOut" },
          backdropFilter: { duration: 0.3, ease: "easeOut" },
        }}
        style={{ minWidth: isDesktop || isCondensed ? undefined : "100%" }}
      >
        <motion.div
          className="flex items-center justify-between px-3 py-2 sm:px-7 lg:px-9"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            animate={{ x: condensedShift }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center gap-2">
              <img src="/clyra logo.png" alt="Logo" className="h-8 sm:h-10 md:h-14 w-auto" />
            </Link>
          </motion.div>

          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-white">
            <Link href="#features" className="cursor-pointer transition-colors hover:text-[#8b5cf6]">Features</Link>
            <Link href="#ai" className="cursor-pointer transition-colors hover:text-[#8b5cf6]">AI</Link>
            <Link href="#finance" className="cursor-pointer transition-colors hover:text-[#8b5cf6]">Finance</Link>
          </nav>

          {/* Right Actions Section */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            animate={{ x: -condensedShift }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 md:gap-4">
              <Button className="animate-gradient-x rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#10b981] to-[#7c3aed] bg-[length:200%_200%] px-3 py-1.5 text-xs sm:text-sm md:px-6 md:py-2 md:text-lg font-bold text-white shadow-[0_4px_24px_rgba(139,92,246,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(16,185,129,0.5)] active:scale-95">
                <span className="hidden sm:inline">Get Early Access</span>
                <span className="sm:hidden">Access</span>
                {/* <span className="ml-1 md:ml-2">→</span> */}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
