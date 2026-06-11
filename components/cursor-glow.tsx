"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(101,231,255,0.18),transparent_70%)] blur-3xl md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
