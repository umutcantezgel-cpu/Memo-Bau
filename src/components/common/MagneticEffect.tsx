import React, { useRef, useState, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface MagneticEffectProps {
    children: React.ReactElement;
    className?: string;
    strength?: number; // How far the content moves towards the cursor
    padding?: number; // Activation area padding around the element
}

export const MagneticEffect: React.FC<MagneticEffectProps> = ({
    children,
    className,
    strength = 0.2,
    padding = 0
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        setPosition({
            x: distanceX * strength,
            y: distanceY * strength
        });
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={twMerge('inline-block', className)}
            style={{ padding: `${padding}px` }}
        >
            <div
                className="will-change-transform inline-block"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
            >
                {children}
            </div>
        </div>
    );
};
