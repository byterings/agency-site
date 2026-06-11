"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
  onSelect?: () => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={reduceMotion ? {} : { y: -8 }}
      className="group glass-panel overflow-hidden rounded-[2rem] text-left"
    >
      <div className="relative h-72 overflow-hidden">
        <motion.div whileHover={reduceMotion ? {} : { scale: 1.04 }} transition={{ duration: 0.5 }}>
          <Image
            src={project.image}
            alt={project.name}
            width={900}
            height={800}
            className="h-72 w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/20 to-transparent" />
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-brand-cyan">{project.category}</div>
        <h3 className="mt-3 text-2xl text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-7">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
