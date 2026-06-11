import { ClientsSection } from "@/components/sections/home/clients-section";
import { FeaturedProjectsSection } from "@/components/sections/home/featured-projects-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { HomeCtaSection } from "@/components/sections/home/cta-section";
import { IntroSection } from "@/components/sections/home/intro-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Velora Studio | Premium Agency Portfolio",
  description:
    "A premium creative agency portfolio showcasing strategy, branding, web experiences, and growth-focused digital work.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <StatsSection />
      <ClientsSection />
      <TestimonialsSection />
      <HomeCtaSection />
    </>
  );
}
