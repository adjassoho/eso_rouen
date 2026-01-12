"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./Button";

type AnimationType = "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "zoom-in" | "blur-in";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationType;
    delay?: number; // index for staggered delay (x 100ms)
    duration?: number;
    threshold?: number;
    enableBlur?: boolean; // Add blur effect for extra smoothness
}

export function ScrollReveal({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    duration = 1000,
    threshold = 0.15,
    enableBlur = true,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    // Initial States (Hidden)
    const getHiddenClass = () => {
        const baseBlur = enableBlur ? "blur-md" : "";
        switch (animation) {
            case "fade-up":
                return `translate-y-12 opacity-0 ${baseBlur}`;
            case "fade-in":
                return `opacity-0 ${baseBlur}`;
            case "slide-in-right":
                return `translate-x-12 opacity-0 ${baseBlur}`;
            case "slide-in-left":
                return `-translate-x-12 opacity-0 ${baseBlur}`;
            case "zoom-in":
                return `scale-95 opacity-0 ${baseBlur}`;
            case "blur-in":
                return `blur-lg opacity-0 scale-95`;
            default:
                return "opacity-0";
        }
    };

    // Visible States
    const getVisibleClass = () => {
        switch (animation) {
            case "fade-up":
            case "fade-in":
            case "slide-in-right":
            case "slide-in-left":
            case "zoom-in":
            case "blur-in":
                return "translate-x-0 translate-y-0 opacity-100 blur-0 scale-100";
            default:
                return "opacity-100";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all will-change-transform",
                isVisible ? getVisibleClass() : getHiddenClass(),
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay * 150}ms`, // Increased stagger slightly
                transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)", // Custom smooth ease
            }}
        >
            {children}
        </div>
    );
}
