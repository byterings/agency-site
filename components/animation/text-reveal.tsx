"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
};

export function TextReveal({ text, className }: TextRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
