import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-in-up' | 'enter' | 'fade-in';
    delay?: number; // in ms
    duration?: number; // in ms
    threshold?: number; // 0-1
    once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className,
    animation = 'fade-in-up',
    delay = 0,
    duration,
    threshold = 0.1,
    once = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && currentRef) {
                        observer.unobserve(currentRef);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before bottom
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, once]);

    const animationClass = {
        'fade-in-up': 'animate-fade-in-up',
        'enter': 'animate-enter',
        'fade-in': 'animate-enter' // Mapping fade-in to enter for now, can be refined
    }[animation];

    const style = {
        animationDelay: `${delay}ms`,
        animationDuration: duration ? `${duration}ms` : undefined,
        animationFillMode: 'both', // Ensure it stays visible after animation
    };

    return (
        <div
            ref={ref}
            className={cn(
                isVisible ? animationClass : 'opacity-0', // Start invisible
                className
            )}
            style={isVisible ? style : undefined}
        >
            {children}
        </div>
    );
};
