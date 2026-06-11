"use client";

import { Send } from "lucide-react";

export function ContactFormSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.32em] text-brand-cyan">Project Enquiry</div>
          <h2 className="mt-4 text-3xl text-white md:text-5xl">Tell us what needs to change.</h2>
          <form className="mt-8 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                <span>Name</span>
                <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-slate-500" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                <span>Company</span>
                <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-slate-500" placeholder="Company" />
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                <span>Email</span>
                <input type="email" className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-slate-500" placeholder="Email address" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                <span>Budget range</span>
                <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-slate-500" placeholder="Budget range" />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-slate-300">
              <span>Project details</span>
              <textarea rows={6} className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-slate-500" placeholder="Project goals, timing, and what is not working today" />
            </label>
            <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-cyan">
              Send enquiry
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="text-sm uppercase tracking-[0.24em] text-brand-cyan">What to expect</div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>1. A senior reply within one business day.</li>
              <li>2. A scoped recommendation based on your commercial goals.</li>
              <li>3. Clear timelines, deliverables, and launch assumptions.</li>
            </ul>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="text-sm uppercase tracking-[0.24em] text-brand-cyan">Best fit</div>
            <p className="mt-4 text-sm leading-7">
              We are typically the right partner when the service, product, or expertise is already strong and the presentation needs to catch up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
