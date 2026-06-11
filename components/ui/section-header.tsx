import { Reveal } from "@/components/animation/reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <div className="text-xs uppercase tracking-[0.32em] text-brand-cyan">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 md:text-lg">{description}</p>
    </Reveal>
  );
}
