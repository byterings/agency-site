"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest))
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <div ref={ref} className="glass-panel rounded-3xl p-6">
      <div className="text-4xl font-semibold text-white md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
    </div>
  );
}
