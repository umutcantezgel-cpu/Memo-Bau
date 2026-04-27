// src/components/common/ValueProposition.tsx
import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface ValuePropositionProps {
    beforeState: string;
    afterState: string;
    metric?: string;
    timeframe?: string;
    className?: string;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
    beforeState,
    afterState,
    metric,
    timeframe,
    className = ''
}) => {
    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            <Reveal animation="fade-in-up">
                <div className="bg-neutral-white border border-neutral-lightgray rounded-[var(--radius-lg)] shadow-elevation-2 overflow-hidden flex flex-col md:flex-row items-stretch">
                    
                    {/* Before State */}
                    <div className="flex-1 p-space-8 md:p-space-10 bg-neutral-offwhite relative">
                        <div className="flex items-center gap-2 mb-space-4 opacity-60">
                            <XCircle className="w-5 h-5 text-neutral-darkgray" />
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-darkgray">Davor</span>
                        </div>
                        <p className="text-neutral-midgray font-normal leading-relaxed">
                            {beforeState}
                        </p>
                    </div>

                    {/* Arrow Divider (Desktop) */}
                    <div className="hidden md:flex relative w-16 bg-neutral-white items-center justify-center z-10 -mx-8 shadow-elevation-1">
                        <div className="bg-primary-base w-10 h-10 rounded-full flex items-center justify-center shadow-elevation-2">
                            <ArrowRight className="w-5 h-5 text-neutral-white" />
                        </div>
                    </div>

                    {/* Arrow Divider (Mobile) */}
                    <div className="md:hidden flex justify-center -my-5 z-10 relative">
                        <div className="bg-primary-base w-10 h-10 rounded-full flex items-center justify-center shadow-elevation-2 border-4 border-neutral-white flex-shrink-0">
                            <ArrowRight className="w-5 h-5 text-neutral-white rotate-90" />
                        </div>
                    </div>

                    {/* After State */}
                    <div className="flex-1 p-space-8 md:p-space-10 bg-primary-base/5 relative">
                        <div className="flex items-center gap-2 mb-space-4">
                            <CheckCircle2 className="w-5 h-5 text-accent-base" />
                            <span className="text-xs font-bold uppercase tracking-widest text-accent-base">Danach</span>
                        </div>
                        <p className="text-neutral-darkgray font-semibold leading-relaxed mb-space-6">
                            {afterState}
                        </p>
                        
                        {(metric || timeframe) && (
                            <div className="flex flex-wrap gap-3 mt-auto">
                                {metric && (
                                    <div className="bg-white border border-accent-base/20 px-3 py-1.5 rounded-[var(--radius-sm)] flex items-baseline gap-1 shadow-elevation-1">
                                        <span className="text-accent-base font-bold">{metric}</span>
                                    </div>
                                )}
                                {timeframe && (
                                    <div className="bg-white border border-neutral-lightgray px-3 py-1.5 rounded-[var(--radius-sm)] flex items-baseline gap-1 shadow-elevation-1">
                                        <span className="text-neutral-midgray text-xs font-semibold uppercase tracking-wider">{timeframe}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </Reveal>
        </div>
    );
};
