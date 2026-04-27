// src/components/common/TrustSignals.tsx
import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

interface TrustSignalsProps {
    className?: string;
    showStars?: boolean;
    showGuarantee?: boolean;
    rating?: number;
    reviewCount?: number;
    guaranteeText?: string;
}

export const TrustSignals: React.FC<TrustSignalsProps> = ({
    className = '',
    showStars = true,
    showGuarantee = true,
    rating = 4.9,
    reviewCount = 47,
    guaranteeText = 'Kostenlose Erstberatung'
}) => {
    return (
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-space-4 ${className}`}>
            {showStars && (
                <div className="flex items-center gap-2">
                    <div className="flex text-[#FFB800]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-darkgray">
                        {rating} <span className="font-normal text-neutral-midgray">({reviewCount} Bewertungen)</span>
                    </span>
                </div>
            )}
            
            {showStars && showGuarantee && (
                <span className="hidden sm:inline text-neutral-lightgray">•</span>
            )}
            
            {showGuarantee && (
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent-base" />
                    <span className="text-xs font-semibold text-neutral-darkgray">
                        {guaranteeText}
                    </span>
                </div>
            )}
        </div>
    );
};
