import { Button } from "./Button";

export function Newsletter() {
    return (
        <section className="py-20 bg-accent/20">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    Recevez votre Guide Gratuit
                </h2>
                <p className="text-foreground/80 mb-8 font-sans">
                    Inscrivez-vous pour télécharger &apos;5 Rituels pour un Quotidien Magique&apos; et recevoir nos actualités exclusives.
                </p>

                <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 h-12 px-4 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary font-sans"
                    />
                    <Button className="h-12 px-8 bg-primary text-white hover:bg-primary/90 font-medium">
                        S'abonner
                    </Button>
                </form>

                <p className="mt-12 font-medium text-foreground">
                    Rejoignez-nous sur Instagram @ClaireEsoterique
                </p>
            </div>
        </section>
    );
}
