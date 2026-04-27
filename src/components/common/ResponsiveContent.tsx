import React, { ReactNode } from 'react';

interface ResponsiveContentProps {
  /** Content priority level determines visibility per viewport */
  priority: 'high' | 'medium' | 'low';
  /** Content to render */
  children: ReactNode;
  /** Optional CSS class */
  className?: string;
}

/**
 * ResponsiveContent — Viewport-adaptive content visibility.
 *
 * - **high**: Always visible on all viewports (Hero, CTA, Contact).
 * - **medium**: Hidden on mobile, shown tablet+. On mobile renders as collapsed "Mehr anzeigen".
 * - **low**: Desktop only. Hidden on mobile and tablet.
 *
 * Uses pure CSS for hide/show — SEO sees all content.
 */
export const ResponsiveContent: React.FC<ResponsiveContentProps> = ({
  priority,
  children,
  className = '',
}) => {
  if (priority === 'high') {
    return <div className={className}>{children}</div>;
  }

  if (priority === 'medium') {
    return (
      <div className={`hidden md:block ${className}`}>
        {children}
      </div>
    );
  }

  // priority === 'low'
  return (
    <div className={`hidden lg:block ${className}`}>
      {children}
    </div>
  );
};
