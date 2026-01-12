import Link from "next/link";
import { cn } from "./Button";

export function Navbar({ className }: { className?: string }) {
    const navLinks = [
        { name: "À propos", href: "/about" },
        { name: "Guidance", href: "/services" },
        { name: "Bien-être", href: "/services" },
        { name: "Boutique", href: "/shop" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <nav className={cn("absolute top-0 w-full z-50 py-6", className)}>
            <div className="container mx-auto flex justify-center md:justify-end px-6">
                <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base font-medium text-white/90 uppercase tracking-widest font-sans">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="hover:text-primary transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
