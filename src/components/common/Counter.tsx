import React, { useEffect, useRef, useState } from 'react';
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
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const shouldAnimate = startImmediately || hasIntersected;
        if (!shouldAnimate || isFinished || !contentRef.current) return;

        // Respect user's accessibility preference for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            contentRef.current.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`;
            requestAnimationFrame(() => setIsFinished(true));
            return;
        }

        let startTime: number | null = null;
        let animationFrameId: number;

        const easeOutQuad = (t: number) => t * (2 - t);

        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Apply easing
            const easeProgress = easeOutQuad(percentage);
            const currentCount = (easeProgress * end).toFixed(decimals);

            if (contentRef.current) {
                // Direct DOM manipulation inside RAF avoids React re-renders
                contentRef.current.textContent = `${prefix}${currentCount}${suffix}`;
            }

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animateCount);
            } else {
                if (contentRef.current) {
                    contentRef.current.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`;
                }
                setIsFinished(true);
            }
        };

        animationFrameId = requestAnimationFrame(animateCount);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [hasIntersected, end, duration, decimals, prefix, suffix, isFinished]);

    return (
        <span
            ref={(node) => {
                ref.current = node;
                if (node && !contentRef.current) {
                    contentRef.current = node;
                }
            }}
            className={`inline-block transform-gpu ${className}`}
        >
            {/* Fallback to 0 initial state */}
            {prefix}{0..toFixed(decimals)}{suffix}
        </span>
    );
};
