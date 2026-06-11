import { capabilities, values } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";

export function MissionSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Mission & Vision"
          title="Build brands and digital experiences that look decisive."
          description="Our mission is to help strong companies appear as strong as they actually are. We design for trust, clarity, and premium perception."
        />
        <div className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-brand-cyan">Core capabilities</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((value) => (
              <div key={value.title} className="glass-panel rounded-[1.7rem] p-6">
                <h3 className="text-xl text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
