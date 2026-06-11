import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { MotionProvider } from "@/components/animation/motion-provider";
import { CursorGlow } from "@/components/cursor-glow";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Velora Studio | Premium Creative Agency",
  description:
    "Velora Studio creates premium brand systems, marketing sites, and digital experiences for ambitious companies."
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <MotionProvider>
          <main className="relative z-10">{children}</main>
        </MotionProvider>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
