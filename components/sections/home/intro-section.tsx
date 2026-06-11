import { Reveal } from "@/components/animation/reveal";

export function IntroSection() {
  return (
    <section className="section-space pt-0">
      <div className="shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="text-xs uppercase tracking-[0.32em] text-brand-cyan">Why clients hire us</div>
          <div className="text-2xl leading-[1.4] text-slate-100 md:text-3xl">
            We help companies close the gap between excellent work and how that work is
            perceived. The result is sharper positioning, stronger trust, and a digital
            presence built to convert.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
