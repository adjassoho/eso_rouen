import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { Certifications } from "@/components/Certifications";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FDFAF5] text-foreground overflow-x-hidden">
            {/* Navbar with dark background wrapper to match site theme or absolute if designed that way. 
                Mockup background is beige, so standard Navbar might need adjustment or wrapper.
                For consistency with other pages, let's use the dark wrapper.
            */}
            <div className="bg-stone-900">
                <Navbar className="relative" />
            </div>

            <ScrollReveal animation="fade-in" duration={1000}>
                <AboutHero />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={2}>
                <Certifications />
            </ScrollReveal>

            <Footer />
        </main>
    );
}
