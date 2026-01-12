import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesList } from "@/components/ServicesList";
import { ProcessSection } from "@/components/ProcessSection";
import { Newsletter } from "@/components/Newsletter";
import { InstagramFeed } from "@/components/InstagramFeed";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navbar wrapper for dark background header feel if needed, or overlay */}
            <div className="bg-stone-900">
                <Navbar className="relative" />
            </div>

            <ScrollReveal animation="fade-up">
                <ServicesList />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={2}>
                <ProcessSection />
            </ScrollReveal>

            <ScrollReveal animation="slide-in-left">
                <Newsletter />
            </ScrollReveal>

            <ScrollReveal animation="fade-in">
                <InstagramFeed />
            </ScrollReveal>

            <Footer />
        </main>
    );
}
