import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeader
          eyebrow="Services"
          title="Creative systems built for real commercial pressure."
          description="From positioning and identity to launch-ready front-end execution, our work is designed to improve both perception and performance."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
