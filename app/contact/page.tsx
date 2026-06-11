import { ContactCta } from "@/components/sections/contact/contact-cta";
import { ContactFaqSection } from "@/components/sections/contact/faq-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact | Velora Studio",
  description:
    "Contact Velora Studio for premium brand, web, and digital experience work tailored to ambitious teams.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <ContactInfoSection />
      <ContactFormSection />
      <ContactFaqSection />
      <ContactCta />
    </>
  );
}
