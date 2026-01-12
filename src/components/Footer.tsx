import { Facebook, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background py-16 border-t border-accent/30 relative overflow-hidden">
            {/* Background decorative elements could go here */}

            <div className="container mx-auto px-6 flex flex-col items-center text-center">

                {/* Address and Contact Info */}
                <div className="flex flex-col md:flex-row gap-12 mb-12 w-full justify-center items-start md:items-center">

                    {/* Address */}
                    <div className="flex flex-col items-center gap-3">
                        <MapPin className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                        <p className="font-serif text-lg text-foreground">Adresse : 123 Rue de la Mystique, Rouen, France</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center gap-3">
                        <Mail className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                        <p className="font-serif text-lg text-foreground">Email : contact@revelezvotrepotenciel.fr</p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6 mb-12">
                    <a href="#" className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                        <Facebook className="w-6 h-6" />
                    </a>
                    {/* Pinterest icon isn't in default Lucide, using Linkedin as placeholder or generic share */}
                    <a href="#" className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-muted-foreground text-sm border-t border-accent/30 pt-8 w-full max-w-4xl">
                    <p>© 2024 Révélez votre potentiel. Tous droits réservés. | Mentions Légales | Contact | Rouen, France</p>
                </div>
            </div>
        </footer>
    );
}
