import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/content";
import { Reveal } from "@/components/animation/reveal";

export function TeamMemberCard({
  member,
  index
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <Image
          src={member.image}
          alt={member.name}
          width={700}
          height={800}
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl text-white">{member.name}</h3>
          <div className="mt-2 text-sm uppercase tracking-[0.24em] text-brand-cyan">{member.role}</div>
          <p className="mt-4 text-sm leading-7">{member.bio}</p>
          <div className="mt-5 flex gap-4 text-sm text-slate-300">
            {member.socials.map((social) => (
              <Link key={social.label} href={social.href}>
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
