import { ComponentType } from "react";
import * as Icons from "lucide-react";
import { Service } from "@/types/content";
import { Reveal } from "@/components/animation/reveal";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = Icons[service.icon as keyof typeof Icons] as ComponentType<{ className?: string }>;

  return (
    <Reveal delay={index * 0.08}>
      <div className="glass-panel group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-brand-cyan">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 text-2xl text-white">{service.title}</h3>
        <p className="mt-4 text-sm leading-7">{service.description}</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-200">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-peach" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
