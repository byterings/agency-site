import { Project } from "@/types/content";

export const projectCategories = [
  "All",
  "Brand Systems",
  "Digital Products",
  "Growth Campaigns",
  "Web Experiences"
] as const;

export const projects: Project[] = [
  {
    slug: "northstar-capital",
    name: "Northstar Capital",
    category: "Web Experiences",
    industry: "Private Equity",
    clientType: "Financial Services",
    description: "Rebuilt a conservative firm into a modern investor-facing presence with a refined narrative and deal-focused content architecture.",
    impact: "The new site supported inbound LP conversations and improved qualified contact submissions within the first quarter.",
    metrics: [
      { label: "Qualified leads", value: "+62%" },
      { label: "Avg. session duration", value: "3.9m" },
      { label: "Launch window", value: "7 weeks" }
    ],
    technologies: ["Next.js", "Framer Motion", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "aurelia-health",
    name: "Aurelia Health",
    category: "Digital Products",
    industry: "Health Tech",
    clientType: "Series A Startup",
    description: "Unified product UX and launch messaging for a patient engagement platform entering enterprise procurement.",
    impact: "Sales demos became clearer, onboarding friction dropped, and stakeholders finally had one consistent narrative.",
    metrics: [
      { label: "Demo conversion", value: "+38%" },
      { label: "Onboarding completion", value: "+27%" },
      { label: "NPS change", value: "+11" }
    ],
    technologies: ["UX Systems", "Design Tokens", "User Flows"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "atlas-robotics",
    name: "Atlas Robotics",
    category: "Brand Systems",
    industry: "Industrial Automation",
    clientType: "B2B Manufacturer",
    description: "Created a sharper identity and launch toolkit for a robotics firm moving from engineering-led sales to category leadership.",
    impact: "The rebrand helped the company present as a credible enterprise partner across trade events and outbound sales.",
    metrics: [
      { label: "Brand recall", value: "+44%" },
      { label: "Sales deck adoption", value: "100%" },
      { label: "Trade show meetings", value: "+31%" }
    ],
    technologies: ["Identity Design", "3D Direction", "Messaging"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "sable-legal",
    name: "Sable Legal",
    category: "Web Experiences",
    industry: "Legal Advisory",
    clientType: "Professional Services",
    description: "Designed a premium web presence for a boutique disputes practice that needed to signal discretion, speed, and seniority.",
    impact: "The site repositioned the firm away from generic legal competition and improved high-value enquiry quality.",
    metrics: [
      { label: "Consultation requests", value: "+54%" },
      { label: "Bounce rate", value: "-29%" },
      { label: "Time to publish", value: "5 weeks" }
    ],
    technologies: ["Next.js", "Information Architecture", "SEO"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "vento-launch",
    name: "Vento Launch",
    category: "Growth Campaigns",
    industry: "SaaS",
    clientType: "Growth Team",
    description: "Built a launch campaign and motion-driven microsite for a workflow product introducing a new AI planning feature.",
    impact: "Campaign assets gave the team a stronger narrative across paid traffic, email, and demo follow-up.",
    metrics: [
      { label: "Signup conversion", value: "+47%" },
      { label: "Paid CAC", value: "-18%" },
      { label: "Waitlist volume", value: "8.4k" }
    ],
    technologies: ["Motion Design", "Experimentation", "Landing Pages"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "luma-residences",
    name: "Luma Residences",
    category: "Brand Systems",
    industry: "Real Estate",
    clientType: "Luxury Development",
    description: "Crafted a visual identity and digital brochure site for a residential development targeting international buyers.",
    impact: "The new materials created a more premium perception and helped the sales team present inventory more confidently.",
    metrics: [
      { label: "Inquiry rate", value: "+36%" },
      { label: "Brochure downloads", value: "+58%" },
      { label: "Avg. viewing time", value: "4.2m" }
    ],
    technologies: ["Art Direction", "Editorial Layout", "Webflow-to-Next Migration"],
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "quarry-cloud",
    name: "Quarry Cloud",
    category: "Digital Products",
    industry: "Developer Tools",
    clientType: "B2B SaaS",
    description: "Refined the platform UI, dashboard hierarchy, and website story for an infrastructure product selling to larger teams.",
    impact: "The redesign reduced friction for trial users and made the product easier for non-technical buyers to understand.",
    metrics: [
      { label: "Trial activation", value: "+24%" },
      { label: "Enterprise pipeline", value: "+33%" },
      { label: "Support tickets", value: "-21%" }
    ],
    technologies: ["UX Audit", "Component Systems", "Front-end Architecture"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "solace-foundation",
    name: "Solace Foundation",
    category: "Growth Campaigns",
    industry: "Nonprofit",
    clientType: "Mission-Driven Organization",
    description: "Produced a campaign identity and donation funnel for a youth mental health initiative with a national awareness push.",
    impact: "The campaign increased donor trust and brought a more emotionally coherent experience across every touchpoint.",
    metrics: [
      { label: "Donation conversion", value: "+29%" },
      { label: "Volunteer signups", value: "+51%" },
      { label: "Social engagement", value: "+73%" }
    ],
    technologies: ["Campaign Strategy", "Motion Content", "CRO"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
  }
];
