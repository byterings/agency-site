import { faqs } from "@/data/site";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";

export function ContactFaqSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions that usually come up before kickoff."
          description="A few practical details about fit, timing, and how we structure delivery."
        />
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
