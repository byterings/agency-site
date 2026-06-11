import { CtaBlock } from "@/components/ui/cta-block";

export function HomeCtaSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <CtaBlock
          title="If the work is strong, the presentation should be stronger."
          description="We design websites and brand systems that help premium teams look current, credible, and commercially ready."
        />
      </div>
    </section>
  );
}
