"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectsFilter } from "@/components/sections/projects/projects-filter";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const activeProject =
    filteredProjects.find((project) => project.slug === activeSlug) ?? filteredProjects[0];

  return (
    <div className="space-y-10">
      <ProjectsFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      {activeProject ? (
        <div className="glass-panel grid gap-8 overflow-hidden rounded-[2rem] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <Image
              src={activeProject.image}
              alt={activeProject.name}
              width={1200}
              height={900}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.28em] text-brand-cyan">
              {activeProject.category}
            </div>
            <h3 className="mt-4 text-3xl text-white md:text-4xl">{activeProject.name}</h3>
            <p className="mt-5 text-base leading-8">{activeProject.impact}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {activeProject.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-2xl text-white">{metric.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onSelect={() => setActiveSlug(project.slug)}
          />
        ))}
      </div>
    </div>
  );
}
