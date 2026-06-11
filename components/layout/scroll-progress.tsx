"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-peach"
      style={{ scaleX }}
    />
  );
}
