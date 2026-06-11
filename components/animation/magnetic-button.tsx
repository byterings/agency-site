"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function MagneticButton({ href, label, className }: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? { x: 0, y: 0 } : { x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.4 }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.08;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.08;
        setOffset({ x, y });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={className}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-cyan",
          className
        )}
      >
        {label}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
