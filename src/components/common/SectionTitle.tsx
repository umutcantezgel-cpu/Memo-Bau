import React from 'react';

interface SectionTitleProps {
    subtitle: string;
    title: string;
    align?: 'center' | 'left';
    light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = React.memo(({
    subtitle,
    title,
    align = 'center',
    light = false,
}) => (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <span
            className={`uppercase tracking-widest text-xs font-bold mb-3 block ${light ? 'text-white/80' : 'text-accent-base'}`}
        >
            {subtitle}
        </span>
        <h2
            className={`text-h2 font-sans font-bold tracking-h2 leading-h2 ${light ? 'text-neutral-white' : 'text-primary-base'}`}
        >
            {title}
        </h2>
        <div className={`h-1 w-20 bg-accent-base mt-4 rounded-radius-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
));

SectionTitle.displayName = 'SectionTitle';
