import Image from "next/image";
import { Button } from "./Button";
import { Zap, Flower2, ShoppingBag } from "lucide-react";

export function AboutPreview() {
    const services = [
        {
            icon: Zap,
            title: "Guidance Personnalisée",
            description: "Séances de tarot et astrologie pour éclairer votre chemin. Explorez vos forces et opportunités.",
            buttonText: "En savoir plus",
        },
        {
            icon: Flower2,
            title: "Bien-être Holistique",
            description: "Soins énergétiques et rituels pour harmoniser le corps et l'esprit. Retrouvez votre équilibre.",
            buttonText: "Découvrir",
        },
        {
            icon: ShoppingBag,
            title: "Boutique Ésotérique",
            description: "Sélection d'objets sacrés, cristaux, encens et outils de pratique soigneusement choisis.",
            buttonText: "Visiter la boutique",
        },
    ];

    return (
        <section className="py-24 bg-[#FDFAF5] relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Title with decorative border */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-2xl h-20 border-2 border-[#C5A572] rounded-lg"
                            style={{
                                clipPath: "polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%)"
                            }}
                        />
                    </div>
                    <h2 className="font-serif text-5xl text-center text-[#2D2420] relative z-10 py-6">
                        À Propos
                    </h2>
                </div>

                {/* Main card with profile and intro */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="relative bg-white rounded-2xl shadow-md p-8 border-2 border-[#C5A572]">
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#C5A572] rounded-tl-2xl" />
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#C5A572] rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#C5A572] rounded-bl-2xl" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#C5A572] rounded-br-2xl" />

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="w-32 h-40 md:w-36 md:h-44 rounded-2xl overflow-hidden shadow-lg relative">
                                    <Image
                                        src="/portrait.png"
                                        alt="Claire"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 text-center md:text-left">
                                <p className="font-sans text-[#2D2420] leading-relaxed text-base">
                                    Bienvenue. Je suis Claire, votre guide pour une vie plus alignée.
                                    Avec bienveillance et expertise, j&apos;utilise les outils ancestraux
                                    pour vous accompagner vers l&apos;épanouissement personnel.
                                    Découvrez mon approche unique à Rouen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Three service cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full border-2 border-[#C5A572] flex items-center justify-center mb-6 text-[#C5A572]">
                                <service.icon className="w-8 h-8" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-xl font-bold text-[#2D2420] mb-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-sm text-[#2D2420] leading-relaxed mb-6 flex-1">
                                {service.description}
                            </p>

                            {/* Button */}
                            <Button className="bg-[#C07A5F] text-white hover:bg-[#A86B52] px-6 py-2 rounded-full text-sm font-medium">
                                {service.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
