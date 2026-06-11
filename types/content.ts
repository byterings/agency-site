export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
};

export type ProjectCategory =
  | "Brand Systems"
  | "Digital Products"
  | "Growth Campaigns"
  | "Web Experiences";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  industry: string;
  clientType: string;
  description: string;
  impact: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: SocialLink[];
};

export type Testimonial = {
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
