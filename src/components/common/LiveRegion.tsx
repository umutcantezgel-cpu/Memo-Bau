import React, { ReactNode } from 'react';

interface LiveRegionProps {
  /** Content to announce to screen readers */
  children: ReactNode;
  /** Politeness level: 'polite' for non-urgent, 'assertive' for critical (errors) */
  politeness?: 'polite' | 'assertive';
  /** aria-relevant: which mutations trigger announcements */
  relevant?: 'additions' | 'removals' | 'text' | 'all' | 'additions text';
  /** Whether the entire region is announced on change (true) or just additions */
  atomic?: boolean;
  /** Optional CSS class */
  className?: string;
}

/**
 * LiveRegion — Accessible announcement container for screen readers.
 *
 * Wraps dynamic content in an `aria-live` region so screen readers
 * announce changes without stealing focus.
 *
 * Usage:
 * ```tsx
 * <LiveRegion politeness="assertive">
 *   {errorMessage && <p>{errorMessage}</p>}
 * </LiveRegion>
 * ```
 */
export const LiveRegion: React.FC<LiveRegionProps> = ({
  children,
  politeness = 'polite',
  relevant = 'additions text',
  atomic = true,
  className = '',
}) => (
  <div
    aria-live={politeness}
    aria-relevant={relevant}
    aria-atomic={atomic}
    className={className}
  >
    {children}
  </div>
);

/**
 * VisuallyHidden — Renders content visible only to screen readers.
 * Use for providing additional context that sighted users don't need.
 */
export const VisuallyHidden: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);
