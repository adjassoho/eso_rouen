"use client";

import Link from "next/link";
import { cn } from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "À propos", href: "/about" },
        { name: "Guidance", href: "/services" },
        { name: "Bien-être", href: "/services" },
        { name: "Boutique", href: "/shop" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <nav className={cn("absolute top-0 w-full z-50 py-6", className)}>
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo/Brand */}
                <Link href="/" className="font-serif text-2xl text-white hover:text-primary transition-colors">
                    Mystique Rouen
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 md:space-x-8 text-sm md:text-base font-medium text-white/90 uppercase tracking-widest font-sans">
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white hover:text-primary transition-colors z-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-64 bg-[#2D2420] shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col pt-24 px-6 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white/90 hover:text-primary text-lg font-medium uppercase tracking-wider font-sans transition-colors py-2 border-b border-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
