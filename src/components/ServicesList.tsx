import { Hand, Waves, User } from "lucide-react";
import { Button } from "./Button";

export function ServicesList() {
    const services = [
        {
            icon: Hand, // Approximation for Tarot/Cards
            title: "Tarot Reading",
            duration: "30 min",
            price: "60€",
        },
        {
            icon: Waves, // Approximation for Energy
            title: "Energy Healing",
            duration: "60 min",
            price: "90€",
        },
        {
            icon: User, // Approximation for Meditation/Coaching
            title: "Wellness Coaching",
            duration: "60 min",
            price: "90€",
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Services & Consultations</h2>
                <p className="max-w-2xl mx-auto text-foreground/70 font-sans mb-16">
                    Rouen-based esoteric and wellness practitioner&apos;s site. Elame vez consultan et nouvenes sxstiques réservez vous ses physic n óndicatas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-10 border border-secondary/30 flex flex-col items-center hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 mb-6 text-secondary flex items-center justify-center">
                                <service.icon strokeWidth={1} className="w-full h-full" />
                            </div>

                            <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                            <p className="font-sans text-foreground/80 mb-1">{service.duration}</p>
                            <p className="font-serif text-xl font-bold text-foreground mb-8">{service.price}</p>

                            <Button className="bg-secondary text-white hover:bg-secondary/90 w-full rounded-md font-medium text-lg py-6 h-auto uppercase tracking-wide">
                                Réserver
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
