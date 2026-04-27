import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedPage {
  /** Route path */
  href: string;
  /** Display title */
  title: string;
  /** Short description */
  description: string;
}

interface RelatedContentProps {
  /** Section title */
  title?: string;
  /** Related pages to link to */
  pages: RelatedPage[];
  /** Optional CSS class */
  className?: string;
}

/**
 * RelatedContent — Internal linking component for content clusters.
 *
 * Renders a "Related Content" section at the bottom of pages,
 * establishing hub-and-spoke topology for topical authority.
 *
 * Each link uses keyword-relevant anchor text.
 */
export const RelatedContent: React.FC<RelatedContentProps> = ({
  title = 'Das könnte Sie auch interessieren',
  pages,
  className = '',
}) => {
  if (!pages.length) return null;

  return (
    <nav aria-label="Verwandte Inhalte" className={`py-space-8 ${className}`}>
      <h3 className="text-lg font-bold text-neutral-darkgray mb-space-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className="group p-space-4 rounded-[var(--radius-md)] border border-neutral-lightgray hover:border-accent-base/40 hover:shadow-elevation-2 transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)]"
          >
            <h4 className="font-semibold text-neutral-darkgray group-hover:text-accent-base transition-colors text-sm mb-1">
              {page.title}
            </h4>
            <p className="text-xs text-neutral-midgray leading-relaxed mb-2">{page.description}</p>
            <span className="text-xs text-accent-base font-medium flex items-center gap-1">
              Mehr erfahren <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
