"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    return scrollY.on("change", (value) => setVisible(value > 500));
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? {} : { opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-card backdrop-blur-xl"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
