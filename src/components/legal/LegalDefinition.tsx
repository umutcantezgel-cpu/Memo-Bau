import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface LegalDefinitionProps {
    term: string;
    definition: string;
}

export const LegalDefinition: React.FC<LegalDefinitionProps> = ({ term, definition }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-flex items-baseline cursor-help group text-primary-base font-semibold border-b border-primary-base/30 hover:border-primary-base transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            tabIndex={0}
        >
            {term}
            <Info className="w-3 h-3 ml-1 translate-y-0.5 text-neutral-midgray group-hover:text-primary-base transition-colors" />

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-neutral-darkgray text-neutral-white text-xs font-normal rounded-[var(--radius-md)] shadow-elevation-3 z-50 pointer-events-none text-left"
                    >
                        <span className="block font-bold text-accent-base mb-1">{term}</span>
                        {definition}
                        {/* Triangle Pointer */}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-neutral-darkgray"></span>
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
};
