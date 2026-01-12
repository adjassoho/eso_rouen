"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "./Button";

const faqs = [
    { question: "Comment se préparer à une séance ?", answer: "Clairez comni soas ent seakrant, votre guid de oare de fmt-une vie plus alignée. Beauorendeaurs. Avec bienveillance et expertise, j&apos;utilise les outils ancestraux." },
    { question: "Quels sont les modes de paiement ?", answer: "Nous acceptons les cartes bancaires, PayPal et les virements sécurisés." },
    { question: "Comment offrir une carte cadeau ?", answer: "Vous pouvez acheter une carte cadeau directement sur la boutique en ligne." },
    { question: "Quel contenu l&apos;appention thilistique ?", answer: "Une approche globale prenant en compte le corps, l&apos;âme et l&apos;esprit." },
    { question: "Quel sentant une vote rensation ?", answer: "Une sensation de paix et de clarté intérieure." },
    { question: "Comment offrir une noro-grauniques ?", answer: "Contactez-nous pour des options personnalisées." },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-accent/30 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center text-foreground hover:bg-stone-50 transition-colors"
                        >
                            <span className="font-serif font-medium text-lg">{faq.question}</span>
                            {openIndex === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                        </button>
                        <div
                            className={cn(
                                "px-6 text-foreground/70 font-sans transition-all duration-300 overflow-hidden",
                                openIndex === index ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                            )}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
