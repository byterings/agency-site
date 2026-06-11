import Image from "next/image";

export function CultureSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="relative h-80">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
              alt="Velora Studio team workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101f] via-[#06101f]/55 to-transparent" />
          </div>
          <div className="p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.32em] text-brand-cyan">Culture</div>
            <h2 className="mt-4 text-3xl text-white md:text-5xl">
              Serious about craft. Easy to work with.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8">
              We care about detail, pace, and clarity. Internally that means direct feedback,
              fewer layers, and a strong bias toward finish quality. Clients experience that
              as calm delivery, thoughtful decisions, and fewer surprises.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-3xl text-white">Remote by design</div>
            <p className="mt-4 text-sm leading-7">
              London, Dubai, Lisbon, and Toronto. We structure teams around expertise, not office geography.
            </p>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-3xl text-white">Senior touchpoints</div>
            <p className="mt-4 text-sm leading-7">
              Strategy and creative leadership stay involved from kickoff through launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
