import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeader
          eyebrow="Client Feedback"
          title="Trusted because the work looks refined and performs under scrutiny."
          description="Our clients tend to arrive with a perception problem and leave with a digital presence that feels coherent, modern, and commercially sharp."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
