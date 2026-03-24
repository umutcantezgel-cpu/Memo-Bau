import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { MagneticEffect } from './MagneticEffect';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
    icon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = 'primary',
    icon: Icon,
    className,
    disabled = false,
    type = 'button',
    ...props
}, ref) => {
    // Luxury Foundation: 4px rounded (radius-sm), tracking-wide, 14px text
    // Spring physics included in base transition
    const baseStyle =
        'inline-flex items-center justify-center px-6 py-3 border text-sm font-semibold rounded-[var(--radius-sm)] transition-[transform,opacity,background-color,border-color,color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 active:scale-[0.98] active:duration-[50ms] uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transform-gpu';

    // Using semantic tokens mapping to Primary (Sage) and Accent (Timber)
    const variants = {
        primary:
            'border-transparent text-neutral-white bg-primary-base hover:bg-primary-hover hover:shadow-elevation-2 hover:-translate-y-[2px]',
        secondary:
            'border-primary-base text-primary-base bg-transparent hover:bg-primary-base hover:text-neutral-white',
        outline:
            'border-neutral-white/30 text-neutral-white bg-neutral-white/5 hover:bg-neutral-white/10 hover:border-neutral-white/50 backdrop-blur-sm',
        gold:
            'border-transparent text-neutral-white bg-accent-base hover:bg-accent-hover hover:shadow-elevation-2 hover:-translate-y-[2px]',
        ghost:
            'bg-transparent text-neutral-darkgray hover:bg-neutral-lightgray hover:text-primary-base',
    };

    const buttonElement = (
        <button
            ref={ref}
            type={type}
            disabled={disabled}
            className={cn(baseStyle, variants[variant], className)}
            {...props}
        >
            {children}
            {Icon && <Icon className="ml-2 -mr-1 h-4 w-4" />}
        </button>
    );

    // Apply magnetic effect for prominent buttons, unless they are full width / flex-1
    const shouldBeMagnetic = (variant === 'primary' || variant === 'secondary' || variant === 'gold') &&
        !disabled &&
        !className?.includes('w-full') &&
        !className?.includes('flex-1') &&
        !className?.includes('block');

    if (shouldBeMagnetic) {
        return (
            <MagneticEffect strength={0.15}>
                {buttonElement}
            </MagneticEffect>
        );
    }

    return buttonElement;
});

Button.displayName = 'Button';
