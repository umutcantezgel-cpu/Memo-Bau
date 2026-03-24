import React, { useState, useRef, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface Hover3DProps {
    children: React.ReactNode;
    className?: string;
    maxRotation?: number; // Max degrees of rotation
    scale?: number; // Scale on hover
    perspective?: number; // CSS perspective
}

export const Hover3D: React.FC<Hover3DProps> = ({
    children,
    className,
    maxRotation = 5,
    scale = 1.02,
    perspective = 1000
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate rotation (-maxRotation to +maxRotation)
        const rotateY = ((mouseX / width) - 0.5) * maxRotation * 2;
        // rotateX is inverted because top of element is Y=0 but positive rotateX tilts top away
        const rotateX = ((mouseY / height) - 0.5) * -maxRotation * 2;

        setStyle({
            transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setStyle({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transition: isHovered
                    ? 'transform var(--motion-micro-duration) var(--motion-micro-easing)'
                    : 'transform var(--motion-standard-duration) var(--motion-standard-easing)',
                willChange: 'transform',
                transformStyle: 'preserve-3d'
            }}
            className={twMerge('block', className)}
        >
            {children}
        </div>
    );
};
