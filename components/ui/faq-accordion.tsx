"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaqItem } from "@/types/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="glass-panel rounded-3xl px-6 py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 text-left"
            >
              <span className="text-lg font-medium text-white">{item.question}</span>
              <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm leading-7">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
