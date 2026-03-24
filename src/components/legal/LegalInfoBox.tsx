import React from 'react';
import { Info, Lightbulb, AlertTriangle, Mail, BookOpen } from 'lucide-react';

type InfoBoxVariant = 'pflicht' | 'hinweis' | 'wichtig' | 'kontakt' | 'definition';

interface LegalInfoBoxProps {
    variant: InfoBoxVariant;
    title?: string;
    children: React.ReactNode;
}

const variantConfig: Record<InfoBoxVariant, {
    bg: string;
    border: string;
    iconColor: string;
    IconComponent: React.FC<{ className?: string }>;
}> = {
    pflicht: {
        bg: 'bg-primary-base/5',
        border: 'border-l-[3px] border-l-primary-base',
        iconColor: 'text-primary-base',
        IconComponent: ({ className }) => <Info className={className} />,
    },
    hinweis: {
        bg: 'bg-secondary-base/5',
        border: 'border-l-[2px] border-l-secondary-base',
        iconColor: 'text-secondary-base',
        IconComponent: ({ className }) => <Lightbulb className={className} />,
    },
    wichtig: {
        bg: 'bg-accent-base/5',
        border: 'border-l-[3px] border-l-accent-base',
        iconColor: 'text-accent-base',
        IconComponent: ({ className }) => <AlertTriangle className={className} />,
    },
    kontakt: {
        bg: 'bg-neutral-offwhite',
        border: 'border border-primary-base/30 rounded-[var(--radius-lg)]',
        iconColor: 'text-primary-base',
        IconComponent: ({ className }) => <Mail className={className} />,
    },
    definition: {
        bg: 'bg-neutral-offwhite/60',
        border: 'border-l-[2px] border-l-neutral-lightgray',
        iconColor: 'text-neutral-midgray',
        IconComponent: ({ className }) => <BookOpen className={className} />,
    },
};

export const LegalInfoBox: React.FC<LegalInfoBoxProps> = ({ variant, title, children }) => {
    const config = variantConfig[variant];

    return (
        <div
            className={`${config.bg} ${config.border} p-space-6 my-space-6 transition-colors duration-300`}
            role={variant === 'wichtig' ? 'alert' : undefined}
        >
            {title && (
                <div className="flex items-center gap-2 mb-3">
                    <config.IconComponent className={`w-5 h-5 ${config.iconColor}`} />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-darkgray m-0 p-0">
                        {title}
                    </h4>
                </div>
            )}
            <div className="text-sm text-neutral-midgray leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
                {children}
            </div>
        </div>
    );
};
