import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { Newsletter } from "@/components/Newsletter";
import { InstagramFeed } from "@/components/InstagramFeed";
import { ContactSection } from "@/components/ContactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollReveal animation="fade-in" duration={1000}>
        <Hero />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={1}>
        <AboutPreview />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={1}>
        <ServiceHighlights />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <InstagramFeed />
      </ScrollReveal>

      <ScrollReveal animation="slide-in-left">
        <Newsletter />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <ContactSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
