import React from 'react';

interface ImageSource {
  /** Image URL */
  src: string;
  /** Media query for this source (e.g. "(max-width: 768px)") */
  media: string;
  /** Image type (defaults to 'image/webp') */
  type?: string;
}

interface AdaptiveImageProps {
  /** Default/fallback image source */
  src: string;
  /** Alt text (required for accessibility) */
  alt: string;
  /** Width in pixels for layout stability (CLS prevention) */
  width: number;
  /** Height in pixels for layout stability (CLS prevention) */
  height: number;
  /** Art-direction sources for different viewports */
  sources?: ImageSource[];
  /** CSS class name */
  className?: string;
  /** Loading strategy: 'lazy' (default) or 'eager' for above-fold */
  loading?: 'lazy' | 'eager';
  /** Fetch priority hint for LCP images */
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Whether to apply low-quality settings on slow connections */
  adaptToNetwork?: boolean;
}

/**
 * AdaptiveImage — Art-direction-aware picture element with network adaptation.
 *
 * Features:
 * - `<picture>` with multiple `<source>` elements for viewport-specific crops
 * - Network-aware: reduces quality on slow connections when `adaptToNetwork` is true
 * - CLS prevention via explicit width/height
 * - Lazy loading by default, eager for above-fold LCP images
 */
export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt,
  width,
  height,
  sources = [],
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  adaptToNetwork = false,
}) => {
  // Network-adaptive quality suffix (convention: append ?q=60 for low-quality)
  const qualitySuffix = adaptToNetwork ? getQualitySuffix() : '';

  return (
    <picture>
      {sources.map((source, i) => (
        <source
          key={i}
          srcSet={`${source.src}${qualitySuffix}`}
          media={source.media}
          type={source.type || 'image/webp'}
        />
      ))}
      <img
        src={`${src}${qualitySuffix}`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
      />
    </picture>
  );
};

/** Check navigator.connection for slow networks */
function getQualitySuffix(): string {
  if (typeof navigator === 'undefined') return '';

  const nav = navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  };

  if (nav.connection?.saveData) return '?q=40';
  if (nav.connection?.effectiveType === '2g' || nav.connection?.effectiveType === 'slow-2g') return '?q=40';
  if (nav.connection?.effectiveType === '3g') return '?q=60';

  return '';
}
