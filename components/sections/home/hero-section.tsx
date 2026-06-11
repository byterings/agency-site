import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Play } from "lucide-react";
import { TextReveal } from "@/components/animation/text-reveal";
import { MagneticButton } from "@/components/animation/magnetic-button";
import { SectionParallax } from "@/components/animation/section-parallax";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-24">
      <div className="shell grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
            <BadgeCheck className="h-3.5 w-3.5 text-brand-cyan" />
            Senior-led creative agency for ambitious brands
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            <TextReveal text="We build digital" />
            <TextReveal text="presence that" className="gradient-text" />
            <TextReveal text="feels as premium as the work behind it." />
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Velora Studio blends strategy, design, and motion to create brand systems,
            websites, and product experiences that move serious buyers to act.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact" label="Start your project" />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              <Play className="h-4 w-4 text-brand-peach" />
              Explore case studies
            </Link>
          </div>
        </div>

        <SectionParallax offset={36}>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,231,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,159,122,0.16),transparent_28%)]" />
            <div className="relative grid gap-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
                  alt="Velora Studio workspace"
                  width={1400}
                  height={900}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] to-transparent" />
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-[#0c1730]/70 p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-brand-cyan">Selected outcome</div>
                <div className="mt-5 text-4xl font-semibold text-white">+62% qualified leads</div>
                <p className="mt-4 text-sm leading-7">
                  From a complete repositioning and Next.js rebuild for a private equity
                  firm that needed to look current without losing authority.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-sm text-slate-400">Launch tempo</div>
                  <div className="mt-3 text-3xl text-white">6-12 weeks</div>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-sm text-slate-400">Client retention</div>
                  <div className="mt-3 text-3xl text-white">87%</div>
                </div>
              </div>
            </div>
          </div>
        </SectionParallax>
      </div>
    </section>
  );
}
