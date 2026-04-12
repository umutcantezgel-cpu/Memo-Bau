import React, { useEffect, useRef, useCallback } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface CounterProps {
    end: number;
    duration?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    startImmediately?: boolean;
}

export const Counter: React.FC<CounterProps> = ({
    end,
    duration = 2000,
    decimals = 0,
    suffix = '',
    prefix = '',
    className = '',
    startImmediately = false,
}) => {
    const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
    const contentRef = useRef<HTMLSpanElement>(null);
    const hasAnimatedRef = useRef(false);
    const animationFrameRef = useRef<number>(0);

    const formatValue = useCallback(
        (val: number) => `${prefix}${val.toFixed(decimals)}${suffix}`,
        [prefix, decimals, suffix]
    );

    useEffect(() => {
        const shouldAnimate = startImmediately || hasIntersected;
        if (!shouldAnimate || hasAnimatedRef.current || !contentRef.current) return;

        // Mark as animating immediately to prevent double-fire in StrictMode
        hasAnimatedRef.current = true;

        // For startImmediately counters (e.g. hero section), skip animation
        // to avoid showing misleading intermediate values (UWG §5 compliance)
        if (startImmediately) {
            contentRef.current.textContent = formatValue(end);
            return;
        }

        // Respect user's accessibility preference for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            contentRef.current.textContent = formatValue(end);
            return;
        }

        let startTime: number | null = null;
        const easeOutQuad = (t: number) => t * (2 - t);

        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeProgress = easeOutQuad(percentage);
            const currentCount = easeProgress * end;

            if (contentRef.current) {
                contentRef.current.textContent = formatValue(currentCount);
            }

            if (progress < duration) {
                animationFrameRef.current = requestAnimationFrame(animateCount);
            } else if (contentRef.current) {
                contentRef.current.textContent = formatValue(end);
            }
        };

        animationFrameRef.current = requestAnimationFrame(animateCount);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [hasIntersected, startImmediately, end, duration, formatValue]);

    // For startImmediately counters, render the end value as initial content
    // to prevent the "0+" flash before hydration/effect fires
    const initialDisplay = startImmediately ? formatValue(end) : formatValue(0);

    return (
        <span
            ref={(node) => {
                ref.current = node;
                if (node) {
                    contentRef.current = node;
                }
            }}
            className={`inline-block transform-gpu ${className}`}
        >
            {initialDisplay}
        </span>
    );
};
