import { Gem, HandHeart, Leaf, Sparkles } from "lucide-react";

// Using custom SVG paths for better match to the specific simple line art
const HandsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8V8a2 2 0 1 1 4 0" />
    </svg>
);

const PlanetIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="6" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
        {/* Stars */}
        <path d="M18 8l1-1" />
        <path d="M6 18l-1 1" />
    </svg>
);

const PlantIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-14" />
        <path d="M12 8c0 0-3-5-5-5s-5 3-5 5 5 5 5 5" />
        <path d="M12 8c0 0 3-5 5-5s5 3 5 5-5 5-5 5" />
        <path d="M12 14c0 0-4-3-6-3s-4 2-4 2" />
        <path d="M12 14c0 0 4-3 6-3s4 2 4 2" />
    </svg>
);

const CrystalIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l-5 9h10z" />
        <path d="M7 11l-3 5 8 5 8-5-3-5" />
        <path d="M7 11l5 10 5-10" />
    </svg>
);


export function Certifications() {
    const certs = [
        { icon: HandsIcon, title: "Maître Reiki", subtitle: "Maître Reiki" },
        { icon: PlanetIcon, title: "Astrologie Karmique", subtitle: "Astrologie Karmique" },
        { icon: PlantIcon, title: "Herboristerie Holistique", subtitle: "Herboristerie Holistique" },
        { icon: CrystalIcon, title: "Lithothérapie", subtitle: "Institution Lithothérapie" },
    ];

    return (
        <section className="pb-32 bg-[#FDFAF5]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-[#1A1A1A]">
                        Certifications & Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 max-w-6xl mx-auto">
                    {certs.map((cert, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Icon Circle - Muted Terracotta/Brown border with white icon line */}
                            <div className="w-24 h-24 rounded-full bg-[#C07A5F] flex items-center justify-center mb-6 text-white shadow-md transform group-hover:scale-105 transition-transform duration-300">
                                <cert.icon />
                            </div>
                            <h3 className="font-sans font-bold text-lg text-[#1A1A1A] mb-1">
                                {cert.title}
                            </h3>
                            <p className="font-sans text-sm text-[#4A4A4A]">
                                {cert.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
