import React from 'react';
import { Calendar } from 'lucide-react';

interface LastUpdatedProps {
  /** ISO date string or Date object */
  date: Date | string;
  /** Optional CSS class */
  className?: string;
}

/**
 * LastUpdated — Renders "Zuletzt aktualisiert am TT.MM.JJJJ"
 * with dateModified schema signal for content freshness.
 */
export const LastUpdated: React.FC<LastUpdatedProps> = ({ date, className = '' }) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const formatted = d.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <p className={`flex items-center gap-2 text-xs text-neutral-midgray ${className}`}>
      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
      <time dateTime={d.toISOString()}>Zuletzt aktualisiert am {formatted}</time>
    </p>
  );
};
