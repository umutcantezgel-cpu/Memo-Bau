import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
    bgVariant?: 'white' | 'offwhite' | 'primary' | 'accent' | 'dark' | 'transparent';
    fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
    children,
    id,
    className,
    containerClassName,
    bgVariant = 'transparent',
    fullWidth = false,
}) => {
    const bgColors = {
        white: 'bg-neutral-white',
        offwhite: 'bg-neutral-offwhite',
        primary: 'bg-primary-base text-neutral-white',
        accent: 'bg-accent-base text-neutral-white',
        dark: 'bg-neutral-darkgray text-neutral-white',
        transparent: 'bg-transparent',
    };

    // Phase 3 Vertical Rhythm: 64px mobile, 80px desktop.
    return (
        <section
            id={id}
            className={cn(
                'py-space-16 md:py-space-20 relative overflow-hidden',
                bgColors[bgVariant],
                className
            )}
        >
            {fullWidth ? (
                children
            ) : (
                <div
                    className={cn(
                        'max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 w-full',
                        containerClassName
                    )}
                >
                    {children}
                </div>
            )}
        </section>
    );
};
