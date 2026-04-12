import React, { useState } from 'react';
import { CityConfig } from '../../core/cityConfig.types';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface LocalFAQSectionProps {
    config: CityConfig;
}

export const LocalFAQSection: React.FC<LocalFAQSectionProps> = ({ config }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!config.faqItems || config.faqItems.length === 0) return null;

    return (
        <Section bgVariant="offwhite">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-space-12">
                    <Reveal animation="fade-in-up">
                        <div className="flex justify-center mb-4">
                            <HelpCircle className="w-8 h-8 text-neutral-midgray" />
                        </div>
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-4">
                            Häufige Fragen zu Projekten in {config.name}
                        </h2>
                        <p className="text-neutral-midgray">
                            Sie haben ein Bauvorhaben in {config.region}? Hier finden Sie lokalspezifische Antworten.
                        </p>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {config.faqItems.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <Reveal key={index} animation="fade-in-up" delay={index * 50}>
                                <div
                                    className={`bg-neutral-white border rounded-[var(--radius-lg)] overflow-hidden transition-colors duration-300 ${isOpen ? 'border-neutral-lightgray shadow-elevation-1' : 'border-neutral-offwhite hover:border-neutral-lightgray'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full px-space-6 py-space-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className={`font-bold pr-4 ${isOpen ? 'text-neutral-darkgray' : 'text-neutral-darkgray'}`}>
                                            {faq.q}
                                        </span>
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-neutral-offwhite text-neutral-darkgray' : 'bg-neutral-white border border-neutral-lightgray text-neutral-midgray hover:bg-neutral-offwhite'
                                                }`}
                                        >
                                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-space-6 pb-space-6 text-neutral-midgray leading-relaxed border-t border-neutral-offwhite pt-space-4">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            {/* JSON-LD Schema Integration for FAQs */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": config.faqItems.map(faq => ({
                        "@type": "Question",
                        "name": faq.q,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.a
                        }
                    }))
                })
            }} />
        </Section>
    );
};
