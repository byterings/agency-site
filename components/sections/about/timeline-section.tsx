import { timeline } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";

export function TimelineSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeader
          eyebrow="Timeline"
          title="Built deliberately, not scaled recklessly."
          description="Velora grew by refining the quality of its work and staying close to the commercial stakes of every client engagement."
        />
        <div className="mt-12 grid gap-4">
          {timeline.map((item) => (
            <div key={item.year} className="glass-panel grid gap-4 rounded-[1.7rem] p-6 md:grid-cols-[160px_1fr]">
              <div className="text-2xl text-brand-cyan">{item.year}</div>
              <div>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
