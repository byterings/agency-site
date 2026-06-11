import { ProjectsGrid } from "@/components/sections/projects/projects-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects | Velora Studio",
  description:
    "Explore premium web, brand, and growth projects delivered for finance, SaaS, real estate, legal, and mission-driven teams.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <section className="section-space pt-12 md:pt-20">
      <div className="shell">
        <SectionHeader
          eyebrow="Projects"
          title="A portfolio built around outcomes, not gallery filler."
          description="These case studies show how we align positioning, visual quality, and front-end execution to create stronger market presence."
        />
        <div className="mt-12">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
