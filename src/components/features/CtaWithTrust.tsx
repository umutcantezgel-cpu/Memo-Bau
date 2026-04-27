import React, { ReactNode } from 'react';
import { Button } from '../common/Button';
import { CTA_TEXTS, TrustCopyKey } from '../../lib/cta-texts';
import { ArrowRight } from 'lucide-react';

interface CtaWithTrustProps {
  /** Button text */
  children: ReactNode;
  /** Trust line variant */
  trustVariant?: TrustCopyKey;
  /** Custom trust text (overrides trustVariant) */
  trustText?: string;
  /** Button variant */
  variant?: 'primary' | 'outline';
  /** Click handler */
  onClick?: () => void;
  /** Link href (renders as <a> if provided) */
  href?: string;
  /** Additional CSS class */
  className?: string;
  /** Show arrow icon */
  showArrow?: boolean;
}

/**
 * CtaWithTrust — CTA button with trust micro-copy underneath.
 *
 * Combines a conversion-optimized button with a subtle trust line
 * ("Kostenlos & unverbindlich · Antwort in 24h · DSGVO-konform").
 *
 * Usage:
 * ```tsx
 * <CtaWithTrust trustVariant="default">
 *   Mein kostenloses Angebot anfordern
 * </CtaWithTrust>
 * ```
 */
export const CtaWithTrust: React.FC<CtaWithTrustProps> = ({
  children,
  trustVariant = 'default',
  trustText,
  variant = 'primary',
  onClick,
  href,
  className = '',
  showArrow = true,
}) => {
  const trust = trustText || CTA_TEXTS.trust[trustVariant];

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Button
        variant={variant}
        onClick={onClick}
        className="justify-center"
        {...(href ? { as: 'a', href } : {})}
      >
        <span className="flex items-center gap-2">
          {children}
          {showArrow && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
        </span>
      </Button>
      <p className="text-[11px] text-neutral-midgray font-normal tracking-wide text-center leading-tight">
        {trust}
      </p>
    </div>
  );
};
