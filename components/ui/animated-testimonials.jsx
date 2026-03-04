"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const [rotationOffsets, setRotationOffsets] = useState([]);

  useEffect(() => {
    // Generate deterministic random rotations after mount to avoid hydration mismatch
    setRotationOffsets(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  const getRotation = (index) => {
    return rotationOffsets[index] || 0;
  };

  return (
    <div
      className={cn(
        "bg-transparent antialiased font-sans px-4 py-8 md:px-8",
        className
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24">
        {/* Image Stack Column - Adjusted for Landscape */}
        <div>
          <div className="relative h-[300px] w-full md:h-[400px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: 0, // Start with 0 to safely match server
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1.05 : 0.9, // Slightly larger active state
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex items-center justify-center"
                >
                  {/* Regular Rectangle (Landscape) for Web Pages */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                    {testimonial.src ? (
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={800}
                        height={500}
                        draggable={false}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-slate-800 text-slate-500">
                        <span className="text-sm">Image Placeholder</span>
                      </div>
                    )}
                    {/* Subtle overlay/highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="flex justify-between flex-col py-4 h-full"> 
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              {testimonials[active].name}
            </h3>
            <p className="mt-2 text-lg text-indigo-300">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-slate-300 mt-6 leading-relaxed min-h-[120px]">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
          {/* Navigation Buttons - Fixed at bottom */}
          <div className="flex gap-4 pt-10 mt-auto">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white/10 hover:scale-110 active:scale-95 ring-1 ring-white/10"
            >
              <ArrowLeft className="h-5 w-5 text-slate-300 transition-transform duration-300 group-hover/button:rotate-12 group-hover/button:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white/10 hover:scale-110 active:scale-95 ring-1 ring-white/10"
            >
              <ArrowRight className="h-5 w-5 text-slate-300 transition-transform duration-300 group-hover/button:-rotate-12 group-hover/button:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
