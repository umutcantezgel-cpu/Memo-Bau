import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface LegalAccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export const LegalAccordion: React.FC<LegalAccordionProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-neutral-lightgray rounded-[var(--radius-lg)] overflow-hidden bg-neutral-white mb-space-6 transition-shadow hover:shadow-elevation-1 duration-[var(--default-transition-duration)]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-space-6 bg-neutral-offwhite/50 hover:bg-neutral-offwhite transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-sans font-bold text-neutral-darkgray m-0 p-0 leading-tight">
                    {title}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-neutral-white shadow-sm flex items-center justify-center border border-neutral-lightgray/50 text-primary-base"
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="p-space-6 border-t border-neutral-lightgray/50 prose prose-neutral max-w-none prose-p:text-neutral-midgray prose-p:leading-body prose-headings:font-sans prose-headings:text-neutral-darkgray prose-a:text-accent-base hover:prose-a:text-primary-base">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
