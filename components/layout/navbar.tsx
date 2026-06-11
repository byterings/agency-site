"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteName } from "@/data/site";
import { MagneticButton } from "@/components/animation/magnetic-button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (value) => setElevated(value > 24));
  }, [scrollY]);

  return (
    <motion.header
      className="sticky top-0 z-40"
      animate={{
        paddingTop: elevated ? 12 : 20
      }}
    >
      <div
        className={`shell transition-all duration-300 ${
          elevated ? "translate-y-0" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 py-4 transition-all duration-300 ${
            elevated ? "glass-panel shadow-card" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brand/logo-mark.svg" alt="Velora Studio" width={40} height={40} className="h-10 w-10" />
            <div>
              <div className="font-display text-sm uppercase tracking-[0.28em] text-slate-300">
                {siteName}
              </div>
              <div className="text-xs text-slate-500">Strategy, motion, digital craft</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-gradient-to-r from-brand-cyan to-brand-peach transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href="/contact" label="Book a call" />
          </div>

          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
