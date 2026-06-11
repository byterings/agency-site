import { CtaBlock } from "@/components/ui/cta-block";

export function ContactCta() {
  return (
    <section className="section-space pt-0">
      <div className="shell">
        <CtaBlock
          title="Need a site that feels premium before the first sales call?"
          description="We can shape the brand, the story, and the front-end experience into one launch-ready system."
        />
      </div>
    </section>
  );
}
