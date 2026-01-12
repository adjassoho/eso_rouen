import { Compass, Flower2, Moon } from "lucide-react"; // Flower2 as Lotus alternative
import { Button } from "./Button";

export function ServiceHighlights() {
    const services = [
        {
            icon: Compass,
            title: "Guidance Personnalisée",
            description: "Séances de tarot et astrologie pour éclairer votre chemin. Explorez vos forces et opportunités.",
            action: "En savoir plus",
            href: "/services"
        },
        {
            icon: Flower2, // Placeholder for Lotus
            title: "Bien-être Holistique",
            description: "Soins énergétiques et rituels pour harmoniser le corps et l&apos;esprit. Retrouvez votre équilibre.",
            action: "Découvrir",
            href: "/services"
        },
        {
            icon: Moon,
            title: "Boutique Ésotérique",
            description: "Sélection d'objets sacrés, cristaux, encens et outils de pratique soigneusement choisis.",
            action: "Visiter la boutique",
            href: "/shop"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center border border-accent/20"
                        >
                            <div className="w-16 h-16 mb-6 text-secondary flex items-center justify-center">
                                <service.icon strokeWidth={1} className="w-full h-full" />
                            </div>

                            <h3 className="font-serif text-2xl mb-4 text-foreground">{service.title}</h3>

                            <p className="text-foreground/70 mb-8 font-sans leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <Button variant="default" className="bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium px-8 py-6 h-auto text-base shadow-none">
                                {service.action}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
