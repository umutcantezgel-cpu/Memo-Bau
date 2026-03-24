import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useIntersectionObserver({
    threshold = 0.15,
    rootMargin = '0px 0px -80px 0px',
    triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
    const ref = useRef<HTMLElement | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasIntersected, setHasIntersected] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isCurrentlyIntersecting = entry.isIntersecting;

                // 60fps Optimization: Batch reads/writes via requestAnimationFrame
                requestAnimationFrame(() => {
                    setIsIntersecting(isCurrentlyIntersecting);
                    if (isCurrentlyIntersecting) {
                        setHasIntersected(true);
                    }
                });

                if (isCurrentlyIntersecting && triggerOnce) {
                    observer.unobserve(element);

                    // GPU Memory Management: Remove will-change hint after transition finishes
                    const handleTransitionEnd = (e: TransitionEvent) => {
                        if (e.target === element) {
                            element.style.willChange = 'auto';
                        }
                    };
                    element.addEventListener('transitionend', handleTransitionEnd, { once: true });

                    // Safety fallback in case transitionend doesn't fire
                    setTimeout(() => {
                        if (element && element.style.willChange !== 'auto') {
                            element.style.willChange = 'auto';
                        }
                    }, 1500);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isIntersecting, hasIntersected };
}
