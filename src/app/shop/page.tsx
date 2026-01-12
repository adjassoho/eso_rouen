import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShopSidebar } from "@/components/ShopSidebar";
import { ProductCard } from "@/components/ProductCard";
import { ShoppingCart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ShopPage() {
    // Mock Data
    const products = [
        { title: "Bougie 'Éveil de l'Âme'", price: "28,00 €", image: "/eso3.png" },
        { title: "Pierre de Lune Brute", price: "14,50 €", image: "/eso1.png" },
        { title: "Oracle du Chemin Sacré", price: "35,00 €", image: "/eso6.png" },
        { title: "Kit de Purification Maison", price: "22,00 €", image: "/eso4.png" },
        { title: "Quartz Rose Poli (x3)", price: "9,50 €", image: "/eso2.png" },
        { title: "Coffret 'Rituels du Soir'", price: "45,00 €", image: "/eso5.png" },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Header with Cart Icon override if possible, or standard Navbar */}
            <div className="bg-stone-900 sticky top-0 z-50">
                <Navbar className="relative" />
                {/* Simple Cart Badge overlay for demo */}
                <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 text-white flex items-center gap-2 cursor-pointer hover:text-secondary hover:scale-105 transition-all">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Shop - Produits Mystiques
                    </h1>
                    <div className="h-1 w-20 bg-secondary mx-auto" />
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    <ScrollReveal animation="slide-in-left" className="w-full md:w-64 flex-shrink-0">
                        <ShopSidebar />
                    </ScrollReveal>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <ScrollReveal key={index} animation="fade-up" delay={index}>
                                    <ProductCard {...product} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
