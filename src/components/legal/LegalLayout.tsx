import React, { useEffect, useState, useCallback } from 'react';
import { LegalTOC } from './LegalTOC';
import { Section } from '../layout/Section';
import { Reveal } from '../common/Reveal';
import { ChevronUp, List, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface LegalLayoutProps {
    children: React.ReactNode;
    lastUpdated?: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ children, lastUpdated }) => {
    const [tocItems, setTocItems] = useState<{ id: string; title: string; level: number }[]>([]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [mobileTocOpen, setMobileTocOpen] = useState(false);

    // Extract headings for TOC
    const computeTocItems = useCallback(() => {
        const contentSection = document.getElementById('legal-content');
        if (!contentSection) return;

        const headings = contentSection.querySelectorAll('h2, h3');
        const items = Array.from(headings).map((heading) => {
            if (!heading.id) {
                heading.id = heading.textContent?.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-').replace(/^-|-$/g, '') || '';
            }
            return {
                id: heading.id,
                title: heading.textContent || '',
                level: parseInt(heading.tagName.substring(1), 10)
            };
        });

        setTocItems(items);
    }, []);

    useEffect(() => {
        requestAnimationFrame(computeTocItems);
    }, [children, computeTocItems]);

    // Track scroll progress + show/hide scroll-to-top
    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(Math.min(progress, 100));
        setShowScrollTop(progress > 30);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-[3px] bg-primary-base z-[60] transition-[width] duration-100 ease-linear"
                style={{ width: `${scrollProgress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(scrollProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Lesefortschritt"
            />

            <Section bgVariant="white" className="py-space-12 lg:py-space-24">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

                    {/* Desktop TOC - Left Sidebar */}
                    <aside className="hidden lg:block lg:col-span-3" aria-label="Inhaltsverzeichnis">
                        <Reveal animation="fade-in">
                            {lastUpdated && (
                                <p className="text-xs text-neutral-midgray mb-4">
                                    Letzte Aktualisierung: {lastUpdated}
                                </p>
                            )}
                            <LegalTOC items={tocItems} />
                        </Reveal>
                    </aside>

                    {/* Main Content Area */}
                    <article
                        id="legal-content"
                        className="col-span-1 lg:col-span-8 lg:col-start-5 prose prose-neutral lg:prose-lg max-w-none 
                        prose-p:text-neutral-midgray prose-p:leading-[1.9]
                        prose-headings:text-neutral-darkgray prose-headings:font-sans prose-headings:font-bold prose-headings:scroll-mt-32
                        prose-h2:border-b prose-h2:border-neutral-lightgray/50 prose-h2:pb-4 prose-h2:mt-space-16
                        prose-strong:text-neutral-darkgray prose-strong:font-bold 
                        prose-a:text-accent-base hover:prose-a:text-primary-base prose-a:transition-colors duration-[var(--default-transition-duration)] 
                        prose-li:text-neutral-midgray prose-ul:space-y-2
                        focus-visible:outline-none"
                        tabIndex={-1}
                    >
                        <Reveal animation="fade-in-up" threshold={0}>
                            {children}
                        </Reveal>
                    </article>

                </div>
            </Section>

            {/* Mobile TOC Floating Button + Overlay */}
            <div className="lg:hidden">
                <AnimatePresence>
                    {mobileTocOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-[70]"
                            onClick={() => setMobileTocOpen(false)}
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {mobileTocOpen && (
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 bg-neutral-white rounded-t-2xl shadow-elevation-3 z-[80] max-h-[70vh] overflow-y-auto p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-darkgray">
                                    Inhaltsverzeichnis
                                </h3>
                                <button
                                    onClick={() => setMobileTocOpen(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-offwhite"
                                    aria-label="Inhaltsverzeichnis schließen"
                                >
                                    <X className="w-4 h-4 text-neutral-darkgray" />
                                </button>
                            </div>
                            <LegalTOC items={tocItems} onItemClick={() => setMobileTocOpen(false)} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating TOC Button (mobile only) — stacks above scroll-to-top */}
                <AnimatePresence>
                    {!mobileTocOpen && tocItems.length > 0 && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setMobileTocOpen(true)}
                            className={`fixed right-4 w-12 h-12 rounded-full bg-primary-base text-white shadow-elevation-3 flex items-center justify-center z-[55] hover:bg-primary-dark transition-all duration-300 ${showScrollTop ? 'bottom-[5.5rem]' : 'bottom-6'
                                }`}
                            aria-label="Inhaltsverzeichnis öffnen"
                        >
                            <List className="w-5 h-5" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Scroll to Top Button — avoids Calendly on desktop */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-4 lg:bottom-8 lg:right-[17rem] w-12 h-12 rounded-full bg-primary-base text-white shadow-elevation-3 flex items-center justify-center z-50 hover:bg-primary-dark transition-colors"
                        aria-label="Zurück nach oben"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};
