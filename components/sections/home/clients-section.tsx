import { LogoMarquee } from "@/components/ui/logo-marquee";
import { SectionHeader } from "@/components/ui/section-header";

export function ClientsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeader
          eyebrow="Trusted By"
          title="Selected by firms that care how quality feels."
          description="We work with investors, product teams, founders, and professional service leaders who need their presence to reflect the level they operate at."
          align="center"
        />
        <div className="mt-10">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}
