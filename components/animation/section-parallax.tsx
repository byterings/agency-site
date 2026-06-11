"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type SectionParallaxProps = {
  children: ReactNode;
  offset?: number;
};

export function SectionParallax({ children, offset = 60 }: SectionParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
