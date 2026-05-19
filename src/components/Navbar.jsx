import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems } from '../data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const current = navItems
        .map((item) => ({ ...item, el: document.querySelector(item.href) }))
        .filter((item) => item.el)
        .findLast((item) => item.el.getBoundingClientRect().top <= 160);

      if (current) setActive(current.label);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-slate-600/60 bg-ink/72 shadow-card backdrop-blur-2xl'
            : 'border-slate-800/80 bg-white/[0.03] backdrop-blur-md'
        }`}
      >
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-ink">
            NF
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
            NovaForge
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === item.label
                  ? 'bg-white text-ink'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-cyanGlow px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white lg:inline-flex"
        >
          Start a Project
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-700/70 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-700/70 bg-ink/92 p-3 shadow-card backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
