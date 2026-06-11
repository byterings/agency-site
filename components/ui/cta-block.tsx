import { MagneticButton } from "@/components/animation/magnetic-button";

type CtaBlockProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CtaBlock({
  title,
  description,
  primaryLabel = "Start a project",
  primaryHref = "/contact"
}: CtaBlockProps) {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 md:p-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.32em] text-brand-cyan">Let’s build well</div>
        <h2 className="mt-4 text-3xl text-white md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 md:text-lg">{description}</p>
        <div className="mt-8">
          <MagneticButton href={primaryHref} label={primaryLabel} />
        </div>
      </div>
    </div>
  );
}
