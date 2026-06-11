import { FaqItem, NavItem, SocialLink, TimelineItem } from "@/types/content";

export const siteName = "Velora Studio";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" }
];

export const siteStats = [
  { label: "Revenue influenced", value: 128, suffix: "M+" },
  { label: "Launches delivered", value: 74, suffix: "" },
  { label: "Average engagement lift", value: 41, suffix: "%" },
  { label: "Senior specialists", value: 18, suffix: "" }
];

export const capabilities = [
  "Strategic positioning",
  "Identity systems",
  "High-converting web design",
  "Product UX for scale",
  "Campaign creative",
  "Performance storytelling"
];

export const values = [
  {
    title: "Clarity wins",
    description: "We turn complex offers into narratives buyers can understand in seconds."
  },
  {
    title: "Taste with discipline",
    description: "Every visual decision has to earn trust, not just attention."
  },
  {
    title: "Senior-led delivery",
    description: "Clients work directly with experienced strategists, designers, and motion specialists."
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "2018",
    title: "Velora launched in London",
    description: "Started as a strategy-led design studio for premium digital brands."
  },
  {
    year: "2020",
    title: "Expanded into product design",
    description: "Added UX systems and growth landing pages for SaaS and finance clients."
  },
  {
    year: "2023",
    title: "Global remote team",
    description: "Built a senior international team serving clients across North America, Europe, and the Gulf."
  },
  {
    year: "2026",
    title: "Performance creative practice",
    description: "Merged brand, motion, CRO, and content into one integrated offer."
  }
];

export const faqs: FaqItem[] = [
  {
    question: "What types of clients do you work with?",
    answer: "We partner with funded startups, established service firms, and product teams that need a sharper market presence."
  },
  {
    question: "How long does a typical engagement take?",
    answer: "Most web and brand engagements run between six and twelve weeks depending on scope and stakeholders."
  },
  {
    question: "Do you handle development as well as design?",
    answer: "Yes. We scope strategy, design, motion, and front-end implementation as one delivery stream."
  },
  {
    question: "Can you support post-launch optimization?",
    answer: "We offer retained growth design support for experiments, campaign pages, and ongoing conversion work."
  }
];

export const contactDetails = {
  email: "hello@velorastudio.com",
  phone: "+44 20 7946 1288",
  address: "24 Mercer Yard, Shoreditch, London E2 8PN",
  hours: "Mon-Fri / 09:00-18:00 GMT"
};
