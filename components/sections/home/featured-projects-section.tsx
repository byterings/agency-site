import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";

export function FeaturedProjectsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Featured Work"
            title="Work that shifts perception and supports growth."
            description="Each project combines positioning, craft, and measurable outcomes rather than surface-level decoration."
          />
          <Link href="/projects" className="text-sm font-semibold text-white underline decoration-white/20 underline-offset-8">
            View all projects
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
