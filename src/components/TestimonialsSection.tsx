import { Button } from "./Button";
import { Star, MoreHorizontal, Phone, Video, Heart, Share2, Sparkles } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

type CardType = 'quote' | 'social-bubble' | 'instagram-dm';

interface Testimonial {
    type: CardType;
    name: string;
    handle?: string;
    text: string;
    location?: string;
    rating?: number;
    bgColor: string; // Tailwind class
    avatarUrl?: string;
    heightClass?: string; // To mimic the masonry variation
    extraDecor?: boolean; // For the leaf
}

export function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        // --- Column 1 ---
        {
            type: 'instagram-dm',
            name: "claire_du_bois",
            handle: "@claire_du_bois",
            avatarUrl: "/portrait.png",
            text: "Such a transformative session! The tarot reading was incredibly insightful. Thank you for your guidance, Mystique. 🙏✨",
            bgColor: "bg-[#A3BFB0]", // Sage Green
        },
        {
            type: 'quote',
            name: "Sophie L.",
            location: "Rouen",
            text: "A true haven in Rouen. The practitioner is so knowledgeable and kind. I will definitely be back for another session.",
            rating: 5,
            bgColor: "bg-[#FAF9F6] border border-stone-100", // Cream with slight border
        },

        // --- Column 2 ---
        {
            type: 'quote',
            name: "Julien M.",
            location: "Rouen",
            text: "I purchased the 'Inner Peace' crystal set and it has brought such a calming energy to my home. The packaging was beautiful too!",
            rating: 5,
            bgColor: "bg-[#FAF9F6] border border-stone-100",
        },
        {
            type: 'social-bubble',
            name: "marie.yoga",
            handle: "@marie.yoga",
            avatarUrl: "/eso2.png",
            text: "The aura cleansing was just what I needed to reset. Feeling so much lighter. Highly recommend! ✨",
            bgColor: "bg-[#E6C9C3]", // Dusty Pink
        },

        // --- Column 3 ---
        {
            type: 'social-bubble',
            name: "marie.yoga",
            handle: "@marie.yoga",
            avatarUrl: "/eso2.png",
            text: "The aura cleansing was just what I needed to reset. Feeling so much lighter. Highly recommend! ✨",
            bgColor: "bg-[#E6C9C3]", // Dusty Pink
            heightClass: "h-[320px] flex items-center", // Taller card manually forced
        },
        {
            type: 'quote',
            name: "Sophie L.",
            location: "Rouen",
            text: "A true haven in Rouen. The practitioner is so knowledgeable and kind. I will definitely be back for another session.",
            rating: 5,
            bgColor: "bg-[#FAF9F6] border border-stone-100",
        },

        // --- Column 4 ---
        {
            type: 'quote',
            name: "Sophie M.",
            location: "Rouen",
            text: "I purchased the 'Inner Peace' crystal set and it has brought such a calming energy to my home. The packaging was beautiful too!",
            rating: 5,
            bgColor: "bg-[#FAF9F6] border border-stone-100",
        },
        {
            type: 'social-bubble',
            name: "claire_du_bois",
            handle: "@claire_du_bois",
            avatarUrl: "/portrait.png",
            text: "Such a transformative session! The tarot reading was incredibly insightful. Thank you for your guidance, Mystique. 🙏✨",
            bgColor: "bg-[#A3BFB0]", // Sage Green
            extraDecor: true,
        },
    ];

    return (
        <section className="py-24 bg-[#FDFAF5]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="flex justify-center mb-4 text-stone-300">
                        <Sparkles className="w-8 h-8 opacity-50" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                        Testimonials & Guestbook
                    </h2>
                    <p className="max-w-2xl mx-auto text-foreground/80 font-sans text-lg">
                        Read about the experiences of our community in Rouen and beyond. <br />
                        Your wellness journey is our inspiration.
                    </p>
                    {/* Decorative Stars (CSS approximate) */}
                    <div className="absolute top-10 left-[10%] text-[#9CAF88] opacity-40 text-4xl hidden lg:block">✦</div>
                    <div className="absolute bottom-0 right-[15%] text-[#9CAF88] opacity-40 text-2xl hidden lg:block">✦</div>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className={clsx(
                            "rounded-[2rem] break-inside-avoid shadow-sm hover:shadow-md transition-shadow relative overflow-hidden",
                            t.bgColor,
                            t.heightClass
                        )}>

                            {/* --- TYPE: STANDARD QUOTE --- */}
                            {t.type === 'quote' && (
                                <div className="p-8 flex flex-col items-center text-center">
                                    <div className="flex gap-1 mb-5 text-[#C5A572]"> {/* Gold Stars */}
                                        {[...Array(t.rating || 5)].map((_, r) => (
                                            <Star key={r} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="font-serif text-lg italic mb-6 leading-relaxed text-foreground">
                                        {t.text}
                                    </p>
                                    <div>
                                        <p className="font-bold text-sm text-foreground mb-1">- {t.name}, {t.location}</p>
                                    </div>
                                </div>
                            )}

                            {/* --- TYPE: INSTAGRAM DM --- */}
                            {t.type === 'instagram-dm' && !t.extraDecor && (
                                <div className="p-6">
                                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                                        {/* Top Bar */}
                                        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden relative">
                                                    {t.avatarUrl && <Image src={t.avatarUrl} alt="avatar" fill className="object-cover" />}
                                                </div>
                                                <span className="text-xs font-bold text-foreground">{t.handle}</span>
                                            </div>
                                            <div className="flex gap-3 text-stone-400">
                                                <Phone className="w-4 h-4" />
                                                <Video className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Time */}
                                        <div className="text-center text-[10px] text-gray-400 mb-4">10:30 AM</div>

                                        {/* Message */}
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden relative flex-shrink-0 self-end">
                                                {t.avatarUrl && <Image src={t.avatarUrl} alt="avatar" fill className="object-cover" />}
                                            </div>
                                            <div className="bg-gray-100 rounded-2xl rounded-bl-none p-3 text-sm text-foreground/80 leading-snug">
                                                {t.text}
                                            </div>
                                        </div>
                                        <div className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center mt-[-8px] ml-12 border-2 border-white relative z-10">
                                            <Heart className="w-2 h-2 text-white fill-current" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* --- TYPE: SOCIAL BUBBLE --- */}
                            {t.type === 'social-bubble' && (
                                <div className={clsx("p-6 flex items-center justify-center w-full h-full", t.heightClass ? "" : "min-h-[200px]")}>
                                    <div className="bg-white p-5 rounded-2xl shadow-sm w-full max-w-[280px]">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden relative">
                                                {t.avatarUrl && <Image src={t.avatarUrl} alt="avatar" fill className="object-cover" />}
                                            </div>
                                            <div className="leading-tight">
                                                <p className="text-xs font-bold text-foreground">{t.handle || t.name}</p>
                                            </div>
                                            {/* Twitter bird or generic icon could go here */}
                                        </div>
                                        <p className="text-xs text-foreground/80 leading-relaxed font-sans">
                                            {t.text}
                                        </p>
                                    </div>
                                    {/* Decorative Leaf for the specific card */}
                                    {t.extraDecor && (
                                        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
                                            {/* Simply a placeholder for the leaf graphic in the corner */}
                                            <svg viewBox="0 0 100 100" className="fill-current text-white">
                                                <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* --- TYPE: INSTAGRAM DM (Social Bubble Variation for Column 4) --- */}
                            {/* The last card in the mockup is a green card with a white bubble, just like social bubble, not the full phone UI. 
                         Re-using social-bubble type logic but with extra decor handled above. 
                     */}

                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button className="bg-[#9CAF88] text-white hover:bg-[#8DA899] px-8 py-3 rounded-full font-medium text-lg transition-colors shadow-lg shadow-[#9CAF88]/20">
                        Share Your Experience ✨
                    </Button>
                </div>
            </div>
        </section>
    );
}
