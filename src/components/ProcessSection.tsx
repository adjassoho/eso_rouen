import { Video, MapPin } from "lucide-react";

export function ProcessSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-5xl text-center">

                <div className="flex justify-center mb-8 text-secondary">
                    {/* Decorative Hand holding something or just separator */}
                    <svg width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16">
                        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" opacity="0.2" />
                        <path d="M8 12h8" />
                    </svg>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16">
                    Comment ça se passe
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:px-12">
                    <div className="flex flex-col items-center">
                        <div className="mb-6 text-secondary">
                            <Video strokeWidth={1.5} className="w-12 h-12" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">En Visio</h3>
                        <p className="font-sans text-foreground/70 leading-relaxed">
                            Pour votre découer la video calls d&apos;intenation dans des volore le remaine. Vous connos revialouer à tiscologia ca passervanitrs optimization.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-6 text-secondary">
                            <MapPin strokeWidth={1.5} className="w-12 h-12" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">En Personne</h3>
                        <p className="font-sans text-foreground/70 leading-relaxed">
                            Pour reeictruis irnen studio detanant le par ls site de Rouen, la voowez nous récomren ecrooilsant plus-trande sevitencipantne.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
