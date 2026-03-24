import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface RevealProps {
    children: React.ReactNode;
    animation?: 'fade-in-up' | 'fade-in-up-dramatic' | 'fade-in' | 'scale-in';
    delay?: 0 | 100 | 200 | 300 | 400 | 500;
    threshold?: number;
    className?: string;
    as?: React.ElementType;
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    animation = 'fade-in-up',
    delay = 0,
    threshold = 0.1,
    className = '',
    as: Component = 'div',
}) => {
    const { ref, hasIntersected } = useIntersectionObserver({
        threshold,
        triggerOnce: true,
    });

    const animationClass = hasIntersected ? `animate-${animation}` : 'opacity-0';
    const delayClass = delay > 0 ? `animation-delay-${delay}` : '';

    return (
        <Component
            ref={ref}
            className={`${animationClass} ${delayClass} ${className}`.trim()}
        >
            {children}
        </Component>
    );
};
