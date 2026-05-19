import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react';
import {
  footerLinks,
  principles,
  processSteps,
  projects,
  services,
  socialLinks,
  stats,
  testimonials,
  timeline,
} from '../data/site';
import { HeroVisual } from './HeroVisual';
import { staggerChild, staggerParent } from './motionVariants';
import { Reveal, Section } from './Section';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-36 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-radial-grid" />
      <motion.div
        className="absolute left-[8%] top-32 h-28 w-28 rounded-full border border-cyanGlow/30 bg-cyanGlow/10 blur-sm"
        animate={{ y: [0, 24, 0], rotate: [0, 18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-48 h-20 w-20 rounded-3xl border border-acid/30 bg-acid/10"
        animate={{ y: [0, -28, 0], rotate: [12, -10, 12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 left-[42%] h-36 w-36 rounded-full border border-ember/20 bg-ember/10 blur-xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
            <Sparkles size={16} className="text-cyanGlow" />
            Strategy, design, engineering, and growth in one studio
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            We build scalable digital experiences for ambitious businesses.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            NovaForge Studio partners with founders and business teams to design premium websites,
            SaaS products, automation systems, brands, and growth engines that feel credible from
            the first click.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-cyanGlow"
            >
              Book Strategy Call <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600/60 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyanGlow/60 hover:bg-cyanGlow/10"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section aria-label="Agency results" className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-slate-700/70 bg-white/[0.055] p-4 shadow-glow backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group rounded-3xl border border-slate-700/70 bg-gradient-to-br from-white/[0.085] to-white/[0.025] p-6 text-center shadow-card backdrop-blur-xl transition hover:border-cyanGlow/40 hover:from-white/[0.12] hover:to-cyanGlow/[0.055]"
          >
            <p className="font-display text-4xl font-semibold text-white transition group-hover:text-cyanGlow">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Capabilities"
      title="Premium digital systems, built around business outcomes."
      description="Each engagement blends sharp strategy, elegant interfaces, fast frontend execution, and the operational details needed after launch."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              variants={staggerChild}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group rounded-[1.75rem] border border-slate-700/70 bg-white/[0.045] p-7 shadow-glow backdrop-blur-xl transition hover:border-cyanGlow/40 hover:bg-white/[0.075]"
            >
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink transition group-hover:bg-cyanGlow">
                <Icon size={25} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Fictional case studies with real-world business logic."
      description="Examples of the kind of product thinking, conversion design, and technical delivery we bring to modern companies."
      className="bg-white/[0.02]"
    >
      <div className="grid gap-7 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -10 }}
                className="group h-full overflow-hidden rounded-[2rem] border border-slate-700/70 bg-surface/80 shadow-card"
              >
                <div className={`relative h-64 bg-gradient-to-br ${project.accent} p-5`}>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="relative h-full rounded-3xl border border-slate-500/50 bg-ink/55 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
                        {project.category}
                      </span>
                      <Icon className="text-white" />
                    </div>
                    <div className="mt-12 space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-white/80" />
                      <div className="h-3 w-1/2 rounded-full bg-white/45" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                      {[68, 86, 52].map((height) => (
                        <span key={height} className="rounded-xl bg-white/15 p-3">
                          <span className="block rounded-full bg-white/70" style={{ height }} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{project.summary}</p>
                  <p className="mt-5 text-sm font-semibold text-acid">{project.impact}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700/70 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Operating Model"
      title="A calm, senior process from strategy to launch."
      description="The work moves through clear phases with the right level of documentation, creative direction, and technical depth."
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="relative h-full rounded-[1.75rem] border border-slate-700/70 bg-white/[0.04] p-6 backdrop-blur-xl">
                <span className="text-sm font-semibold text-cyanGlow">0{index + 1}</span>
                <Icon className="mt-8 text-white" size={30} />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Client Voice" title="Trusted by founders who care about signal.">
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.08}>
            <figure className="h-full rounded-[1.75rem] border border-slate-700/70 bg-white/[0.045] p-7">
              <blockquote className="text-lg leading-8 text-slate-200">
                {`"${testimonial.quote}"`}
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Built for companies that need their digital presence to feel as strong as their offer."
      description="NovaForge Studio is a compact senior team with a product mindset. We help clients move from scattered digital assets to a composed system that earns trust and supports growth."
      className="bg-white/[0.02]"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-slate-700/70 bg-white/[0.045] p-8">
            <p className="text-lg leading-8 text-slate-300">
              Our philosophy is simple: every interface should clarify the business, every page
              should move a buyer closer to confidence, and every system should reduce operational
              drag after launch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.label} className="rounded-2xl border border-slate-800/80 bg-ink/50 p-4">
                    <Icon className="mb-4 text-cyanGlow" size={22} />
                    <p className="text-sm font-medium text-white">{principle.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.08}>
              <div className="grid gap-4 rounded-[1.5rem] border border-slate-700/70 bg-white/[0.04] p-5 sm:grid-cols-[120px_1fr]">
                <p className="font-display text-2xl font-semibold text-cyanGlow">{item.year}</p>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-400">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function PartnerBand() {
  return (
    <section className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-slate-700/70 bg-gradient-to-r from-white/[0.07] via-cyanGlow/10 to-white/[0.04] p-7 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyanGlow">
            Technical Development Partner
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white">ByteRings</h2>
        </div>
        <p className="max-w-2xl leading-7 text-slate-300">
          ByteRings supports deep implementation, architecture reviews, and scalable engineering
          execution for projects that need production-grade technical delivery.
        </p>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-slate-700/70 bg-white/[0.055] p-8 text-center shadow-card backdrop-blur-2xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-acid">Launch with clarity</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl">
          Build the digital system your next stage of growth deserves.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          Bring us your business goals, product idea, or broken digital funnel. We will shape a
          focused path from strategy to launch.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyanGlow px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
        >
          Plan the First Sprint <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell us what you are building next."
      description="The form is static for Vercel-ready frontend deployment. Connect it later to your preferred form service, CRM, or booking workflow."
      className="bg-white/[0.02]"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-700/70 bg-white/[0.045] p-7">
              <Mail className="text-cyanGlow" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">Business inquiries</h3>
              <p className="mt-3 text-slate-400">hello@novaforge.studio</p>
            </div>
            <div className="rounded-[2rem] border border-slate-700/70 bg-white/[0.045] p-7">
              <CalendarDays className="text-acid" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">Strategy booking</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Reserve a 30-minute discovery call to review goals, scope, timeline, and the best
                first sprint.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-600/60 px-5 py-3 text-sm font-semibold text-white transition hover:border-acid/70 hover:bg-acid/10">
                View Availability <ArrowRight size={17} />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2 text-sm text-slate-300 transition hover:bg-white hover:text-ink"
                  >
                    {social.label} <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="rounded-[2rem] border border-slate-700/70 bg-white/[0.055] p-6 shadow-card backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-slate-300">Name</span>
                <input className="w-full rounded-2xl border border-slate-700/70 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow" placeholder="Avery Brooks" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-slate-300">Work email</span>
                <input className="w-full rounded-2xl border border-slate-700/70 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow" placeholder="avery@company.com" type="email" />
              </label>
            </div>
            <label className="mt-4 block space-y-2">
              <span className="text-sm text-slate-300">Project type</span>
              <select className="w-full rounded-2xl border border-slate-700/70 bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-cyanGlow">
                <option>Website / Brand System</option>
                <option>SaaS Product</option>
                <option>Automation Workflow</option>
                <option>SEO & Growth</option>
              </select>
            </label>
            <label className="mt-4 block space-y-2">
              <span className="text-sm text-slate-300">What should we know?</span>
              <textarea className="min-h-36 w-full resize-none rounded-2xl border border-slate-700/70 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyanGlow" placeholder="Share goals, current blockers, timeline, and target audience." />
            </label>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-cyanGlow"
            >
              Send Project Brief <Send size={17} />
            </button>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-2"><MessageSquare size={16} /> Response within 1 business day</span>
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Remote-first studio</span>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-700/70 px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-ink">
              NF
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
              NovaForge
            </span>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            Premium digital agency for web, SaaS, UI/UX, automation, branding, SEO, and growth.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-white">{group.title}</h3>
              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <a key={link} href="#home" className="block text-sm text-slate-400 transition hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-slate-700/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 NovaForge Studio. All rights reserved.</p>
        <p>Technical Development Partner: ByteRings</p>
      </div>
    </footer>
  );
}
