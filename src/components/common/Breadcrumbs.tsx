import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

/**
 * Visible breadcrumb navigation component.
 * Renders semantic <nav> with <ol> for accessibility and SEO.
 * The last item is rendered as the current page (no link).
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    return (
        <div className={`bg-neutral-offwhite border-b border-neutral-lightgray/30 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-6 py-3">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-1.5 flex-wrap text-xs text-neutral-midgray">
                        {/* Home Link (always first) */}
                        <li className="flex items-center gap-1.5">
                            <Link to="/" className="hover:text-accent-base transition-colors flex items-center gap-1">
                                <Home className="w-3 h-3" />
                                <span className="sr-only">Startseite</span>
                            </Link>
                        </li>

                        {items.map((item, index) => {
                            const isLast = index === items.length - 1;
                            return (
                                <li key={index} className="flex items-center gap-1.5">
                                    <ChevronRight className="w-3 h-3 text-neutral-lightgray" />
                                    {isLast || !item.href ? (
                                        <span className="text-neutral-darkgray font-semibold" aria-current="page">{item.label}</span>
                                    ) : (
                                        <Link to={item.href} className="hover:text-accent-base transition-colors">{item.label}</Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    );
};
