import Image from "next/image";
import Link from "next/link";
import { contactDetails, navItems, siteName, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md">
          <Image src="/brand/logo-wordmark.svg" alt={siteName} width={180} height={36} className="h-7 w-auto" />
          <p className="mt-4 text-sm leading-7">
            Senior-led brand, web, and motion work for companies that want a sharper
            story and a more premium digital presence.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Explore</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{contactDetails.email}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.address}</p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
