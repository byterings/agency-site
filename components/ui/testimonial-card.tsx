import Image from "next/image";
import { Testimonial } from "@/types/content";
import { Reveal } from "@/components/animation/reveal";

export function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="glass-panel h-full rounded-3xl p-6">
        <p className="text-lg leading-8 text-slate-100">“{testimonial.quote}”</p>
        <div className="mt-8 flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-slate-400">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
