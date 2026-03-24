import React, { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

interface LegalTOCProps {
    items: TOCItem[];
    onItemClick?: () => void;
}

export const LegalTOC: React.FC<LegalTOCProps> = ({ items, onItemClick }) => {
    const [activeId, setActiveId] = useState<string>('');

    // Update active section on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find all entries that are intersecting
                const visibleEntries = entries.filter(entry => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    // Update to the first visible entry (top-most)
                    setActiveId(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: '-100px 0px -60% 0px', // Trigger slightly below top of viewport
                threshold: 0
            }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [items]);

    const scrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Header height + some padding
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            // Immediately set active to prevent flicker
            setActiveId(id);
            onItemClick?.();
        }
    };

    if (items.length === 0) return null;

    return (
        <nav className="sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-darkgray/50 mb-6">
                Auf dieser Seite
            </h4>
            <ul className="space-y-3 relative border-l-2 border-neutral-lightgray/50">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`relative transition-all duration-300 ${item.level === 3 ? 'ml-4' : ''}`}
                    >
                        {/* Active Indicator Line */}
                        <div
                            className={`absolute -left-[2px] top-0 bottom-0 w-[2px] transition-all duration-300 ${activeId === item.id ? 'bg-primary-base h-full' : 'bg-transparent h-0'
                                }`}
                        />
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => scrollToTarget(e, item.id)}
                            className={`block pl-4 py-1 text-sm transition-colors duration-[var(--default-transition-duration)] ${activeId === item.id
                                ? 'text-primary-base font-bold'
                                : 'text-neutral-midgray hover:text-neutral-darkgray'
                                }`}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
