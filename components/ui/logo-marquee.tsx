"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const logos = [
  "/logos/client-01.svg",
  "/logos/client-02.svg",
  "/logos/client-03.svg",
  "/logos/client-04.svg",
  "/logos/client-05.svg",
  "/logos/client-06.svg"
];

export function LogoMarquee() {
  const reduceMotion = useReducedMotion();
  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-5">
      <motion.div
        animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
        transition={reduceMotion ? {} : { duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex min-w-max items-center gap-12 px-8"
      >
        {items.map((logo, index) => (
          <div key={`${logo}-${index}`} className="flex h-10 items-center">
            <Image src={logo} alt="" width={140} height={32} className="h-6 w-auto opacity-70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
