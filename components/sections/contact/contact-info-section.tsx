import Link from "next/link";
import { contactDetails, socialLinks } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";

export function ContactInfoSection() {
  return (
    <section className="section-space pb-0">
      <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to the team shaping premium launches."
          description="Whether you need a full repositioning, a sharper website, or a conversion-focused campaign, we can scope the right level of support."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-brand-cyan">Direct</div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>{contactDetails.email}</p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.hours}</p>
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-brand-cyan">Studio</div>
            <p className="mt-4 text-sm leading-7">{contactDetails.address}</p>
            <div className="mt-5 flex gap-4 text-sm text-slate-300">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href}>
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
