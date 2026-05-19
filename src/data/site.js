import {
  ArrowUpRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Figma,
  Globe2,
  Layers3,
  LineChart,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '48+', label: 'Growth systems shipped' },
  { value: '6.8x', label: 'Average qualified lead lift' },
  { value: '92%', label: 'Client retention rate' },
  { value: '21d', label: 'Fastest MVP launch' },
];

export const services = [
  {
    title: 'Web Development',
    icon: Code2,
    description: 'High-performance websites engineered for trust, speed, search visibility, and conversion.',
  },
  {
    title: 'SaaS Development',
    icon: Boxes,
    description: 'Scalable product architecture, dashboards, customer portals, billing flows, and launch-ready MVPs.',
  },
  {
    title: 'UI/UX Design',
    icon: Figma,
    description: 'Research-led interfaces with clear information hierarchy, design systems, and polished prototypes.',
  },
  {
    title: 'Automation',
    icon: Workflow,
    description: 'Operational workflows that remove repetitive work across CRM, sales, reporting, and support.',
  },
  {
    title: 'Branding',
    icon: PenTool,
    description: 'Modern identity systems, messaging, and visual foundations that make companies feel credible.',
  },
  {
    title: 'SEO & Digital Growth',
    icon: Search,
    description: 'Technical SEO, content systems, analytics, and acquisition loops built around measurable growth.',
  },
];

export const projects = [
  {
    name: 'OrbitLedger',
    category: 'Fintech SaaS',
    summary: 'A compliance-ready revenue dashboard for subscription finance teams.',
    impact: '+38% faster monthly close',
    stack: ['React', 'Node', 'Stripe', 'Postgres'],
    accent: 'from-cyan-300/70 via-sky-400/40 to-violet-500/60',
    icon: LineChart,
  },
  {
    name: 'HelioCare',
    category: 'Healthcare Operations',
    summary: 'A patient intake automation platform for multi-location clinics.',
    impact: '12k hours saved annually',
    stack: ['SaaS', 'Automation', 'HIPAA UX', 'Analytics'],
    accent: 'from-acid/70 via-emerald-300/30 to-cyan-300/60',
    icon: ShieldCheck,
  },
  {
    name: 'Northstar Commerce',
    category: 'B2B Commerce',
    summary: 'A premium storefront and quoting workflow for enterprise buyers.',
    impact: '+54% quote-to-order lift',
    stack: ['Vite', 'Headless CMS', 'SEO', 'CRM'],
    accent: 'from-ember/80 via-rose-400/40 to-cyan-300/50',
    icon: BriefcaseBusiness,
  },
];

export const processSteps = [
  {
    title: 'Diagnose',
    description: 'We map your funnel, operations, customer journey, and technical constraints before design begins.',
    icon: Compass,
  },
  {
    title: 'Design',
    description: 'We shape a lean experience system: pages, flows, messaging, visual direction, and measurable goals.',
    icon: Layers3,
  },
  {
    title: 'Build',
    description: 'We engineer fast static sites, SaaS frontends, dashboards, integrations, and automation workflows.',
    icon: Cpu,
  },
  {
    title: 'Scale',
    description: 'We iterate with analytics, SEO, testing, and growth loops after launch instead of disappearing.',
    icon: Rocket,
  },
];

export const testimonials = [
  {
    quote:
      'NovaForge rebuilt our product website and onboarding flow with a level of polish we normally only see from funded SaaS teams.',
    name: 'Maya Shah',
    role: 'Founder, PulseOps',
  },
  {
    quote:
      'The team understood business impact, not just screens. Our sales team now sends prospects to the site with confidence.',
    name: 'Daniel Reed',
    role: 'CEO, LedgerPilot',
  },
  {
    quote:
      'They connected brand, product UX, and automation into one system. The launch felt calm, fast, and very senior.',
    name: 'Elena Martin',
    role: 'COO, BrightClinic',
  },
];

export const timeline = [
  { year: '2021', title: 'Studio formed', body: 'Built conversion-focused websites for B2B service companies.' },
  { year: '2022', title: 'SaaS practice launched', body: 'Expanded into MVPs, dashboards, and customer portals.' },
  { year: '2024', title: 'Automation layer added', body: 'Connected product, CRM, and growth operations into repeatable systems.' },
  { year: 'Today', title: 'Premium digital partner', body: 'Focused on modern web, SaaS, brand, SEO, and growth infrastructure.' },
];

export const principles = [
  { icon: Sparkles, label: 'Premium craft without excess' },
  { icon: CheckCircle2, label: 'Business outcomes before decoration' },
  { icon: Bot, label: 'Automation where it creates leverage' },
  { icon: Globe2, label: 'Fast, accessible, SEO-aware foundations' },
];

export const footerLinks = [
  { title: 'Company', links: ['About', 'Process', 'Careers', 'Partner Network'] },
  { title: 'Services', links: ['Web Development', 'SaaS Development', 'UI/UX Design', 'SEO Growth'] },
  { title: 'Resources', links: ['Case Studies', 'Playbooks', 'Audit Checklist', 'Founder Notes'] },
];

export const socialLinks = [
  { label: 'LinkedIn', href: '#contact', icon: ArrowUpRight },
  { label: 'Dribbble', href: '#projects', icon: ArrowUpRight },
  { label: 'X / Twitter', href: '#contact', icon: ArrowUpRight },
];
