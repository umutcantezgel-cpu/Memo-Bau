import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface StaggeredListProps {
    children: React.ReactNode;
    animation?: 'fade-in-up' | 'fade-in' | 'scale-in';
    baseDelay?: number;
    staggerDelay?: 100 | 200 | 300 | 400 | 500;
    threshold?: number;
    className?: string;
    as?: React.ElementType;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
    children,
    animation = 'fade-in-up',
    baseDelay = 0,
    staggerDelay = 100,
    threshold = 0.1,
    className = '',
    as: Component = 'div',
}) => {
    const { ref, hasIntersected } = useIntersectionObserver({
        threshold,
        triggerOnce: true,
    });

    return (
        <Component ref={ref} className={className}>
            {React.Children.map(children, (child, index) => {
                const childDelay = baseDelay + index * staggerDelay;
                const delayClass = childDelay > 0 && childDelay <= 500 ? `animation-delay-${childDelay}` : '';
                const animationClass = hasIntersected ? `animate-${animation}` : 'opacity-0';

                // We wrap the child in a div that handles its specific animation class
                return (
                    <div className={`${animationClass} ${delayClass}`.trim()}>
                        {child}
                    </div>
                );
            })}
        </Component>
    );
};
