"use client";

import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsFilterProps = {
  selected: string;
  onSelect: (value: string) => void;
};

export function ProjectsFilter({ selected, onSelect }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {projectCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition",
            selected === category
              ? "border-brand-cyan bg-brand-cyan text-brand-ink"
              : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
