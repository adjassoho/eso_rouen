import Link from "next/link";
import { Navbar } from "./Navbar";

export function Hero() {
    return (
        <div className="relative h-[80vh] min-h-[600px] w-full bg-stone-900 text-white overflow-hidden">
            {/* Navbar is here for positioning over the hero */}
            <Navbar />

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero.png')",
                }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/20" /> */}

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto z-10 pt-20">
                <h1 className="font-serif text-5xl md:text-7xl mb-6 relative drop-shadow-md">
                    Révélez votre potentiel
                </h1>
                <p className="font-sans text-xl md:text-2xl font-light tracking-wide text-white/90 mb-8 max-w-2xl">
                    Praticienne ésotérique et boutique bien-être à Rouen
                </p>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </div>
    );
}
