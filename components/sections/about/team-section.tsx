import { team } from "@/data/team";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamMemberCard } from "@/components/ui/team-member-card";

export function TeamSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeader
          eyebrow="Leadership Team"
          title="A compact senior team with strategy, design, and motion under one roof."
          description="We keep the delivery team intentionally small so the work stays coherent and decisions move quickly."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
