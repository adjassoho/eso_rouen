import { Button } from "./Button";
import { FAQ } from "./FAQ";

export function ContactSection() {
    return (
        <section className="py-20 bg-background" id="contact">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">FAQ et Contact</h2>
                </div>

                {/* FAQ Grid */}
                <div className="mb-20">
                    <FAQ />
                </div>

                {/* Contact Form & Info Grid - Though visual shows Form usually separate or next to info. 
           In the design provided (FAQ et Contact), the FAQ is top, form is bottom left, info is bottom right.
        */}
                <div className="bg-accent/10 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-accent/20">
                            <form className="space-y-4">
                                <input type="text" placeholder="Nom" className="w-full h-12 px-4 rounded-md border border-input bg-background focus:ring-1 focus:ring-primary outline-none font-sans" />
                                <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded-md border border-input bg-background focus:ring-1 focus:ring-primary outline-none font-sans" />
                                <textarea placeholder="Message" className="w-full h-32 p-4 rounded-md border border-input bg-background focus:ring-1 focus:ring-primary outline-none font-sans resize-none"></textarea>

                                <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-medium rounded-md">
                                    Envoyer le message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info (if not in footer, but design shows it here too next to form?) 
                   Actually the design 'uploaded_image_2' shows Form Left, Info Right (Address/Email icons).
                   Create that structure.
                */}
                        <div className="flex flex-col items-center md:items-start space-y-8 pl-0 md:pl-12 text-center md:text-left">
                            <div className="space-y-2">
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-secondary mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </span>
                                    <h4 className="font-sans font-medium text-lg">Adresse :</h4>
                                    <p className="text-foreground/80">123 Rue de la Mystique, Rouen, France</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-secondary mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </span>
                                    <h4 className="font-sans font-medium text-lg">Email :</h4>
                                    <p className="text-foreground/80">contact@revelezvotrepotenciel.fr</p>
                                </div>
                            </div>

                            {/* Icons */}
                            <div className="flex space-x-4 pt-4">
                                {/* Socials again? matching design */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
