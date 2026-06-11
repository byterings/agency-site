import { siteStats } from "@/data/site";
import { StatCounter } from "@/components/ui/stat-counter";

export function StatsSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {siteStats.map((stat) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
