import React from 'react';
import { cn } from '../../lib/utils';

import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    className?: string;
    centered?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    description,
    backgroundImage,
    className,
    centered = false,
}) => {
    const navigate = useNavigate();

    return (
        <div className={cn("relative h-[60vh] min-h-[500px] flex items-center bg-primary-base overflow-hidden", className)}>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary-base/40 mix-blend-multiply z-10"></div>
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt="Hero"
                        fetchPriority="high"
                        loading="eager"
                        decoding="sync"
                        width="1920"
                        height="1080"
                        className="absolute inset-0 w-full h-full object-cover scale-105 bg-primary-base"
                    />
                ) : (
                    <div className="absolute inset-0 bg-primary-base"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-base via-primary-base/50 to-transparent z-20"></div>
            </div>

            {/* Content Layer */}
            <div className={`relative z-30 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 ${centered ? 'text-center' : ''}`}>
                {/* Back Button (Subtle) */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-8 left-6 md:left-12 flex items-center text-white/90 hover:text-accent-base transition-colors text-xs uppercase tracking-widest font-bold mb-8 drop-shadow-md"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
                </button>

                {subtitle && (
                    <span className="inline-block mb-6 text-accent-base font-bold uppercase tracking-[0.25em] text-xs animate-fade-in-up">
                        {subtitle}
                    </span>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium text-white mb-6 leading-tight drop-shadow-md animate-fade-in-up delay-100">
                    {title}
                </h1>

                {description && (
                    <p className={`text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl animate-fade-in-up delay-200 ${centered ? 'mx-auto' : ''}`}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};
