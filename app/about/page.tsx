import { CultureSection } from "@/components/sections/about/culture-section";
import { MissionSection } from "@/components/sections/about/mission-section";
import { TeamSection } from "@/components/sections/about/team-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { SectionHeader } from "@/components/ui/section-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About | Velora Studio",
  description:
    "Learn about Velora Studio, our mission, team, values, and the way we build premium brand and digital experiences.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="section-space pt-12 md:pt-20">
        <div className="shell">
          <SectionHeader
            eyebrow="About Velora"
            title="We exist to make ambitious companies look as strong as they truly are."
            description="Velora Studio is a senior-led agency focused on premium perception, strategic clarity, and digital execution that can stand up in front of serious buyers."
          />
        </div>
      </section>
      <MissionSection />
      <StatsSection />
      <TimelineSection />
      <TeamSection />
      <CultureSection />
    </>
  );
}
