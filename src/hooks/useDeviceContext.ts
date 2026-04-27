import { useState, useEffect, useCallback } from 'react';

/** Device context information for adaptive UI rendering */
export interface DeviceContext {
  /** true if viewport ≤ 768px */
  isMobile: boolean;
  /** true if viewport 769px–1024px */
  isTablet: boolean;
  /** true if viewport > 1024px */
  isDesktop: boolean;
  /** true if primary pointer is coarse (touch) */
  isTouch: boolean;
  /** true if device supports hover (mouse/trackpad) */
  hasHover: boolean;
  /** true if user prefers reduced motion */
  isReducedMotion: boolean;
  /** true if user prefers high contrast */
  isHighContrast: boolean;
  /** true if user prefers reduced transparency */
  isReducedTransparency: boolean;
  /** Effective connection type: '4g' | '3g' | '2g' | 'slow-2g' | 'unknown' */
  connectionType: string;
  /** true if Save-Data header or navigator hint is set */
  isSaveData: boolean;
  /** Number of logical CPU cores (defaults to 4 if unavailable) */
  hardwareConcurrency: number;
}

const MOBILE_QUERY = '(max-width: 768px)';
const TABLET_QUERY = '(min-width: 769px) and (max-width: 1024px)';
const TOUCH_QUERY = '(pointer: coarse)';
const HOVER_QUERY = '(hover: hover)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const HIGH_CONTRAST_QUERY = '(prefers-contrast: more)';
const REDUCED_TRANSPARENCY_QUERY = '(prefers-reduced-transparency: reduce)';

/** Safe defaults for SSR / initial render to prevent hydration mismatch */
const SSR_DEFAULTS: DeviceContext = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouch: false,
  hasHover: true,
  isReducedMotion: false,
  isHighContrast: false,
  isReducedTransparency: false,
  connectionType: '4g',
  isSaveData: false,
  hardwareConcurrency: 4,
};

/**
 * useDeviceContext – Adaptive UI hook for detecting device capabilities,
 * accessibility preferences, and network conditions.
 *
 * SSR-safe: Returns safe defaults on the server, hydrates with real values
 * after mount via useEffect (no hydration mismatch).
 */
export function useDeviceContext(): DeviceContext {
  const [context, setContext] = useState<DeviceContext>(SSR_DEFAULTS);

  const update = useCallback(() => {
    if (typeof window === 'undefined') return;

    const mql = (query: string) => window.matchMedia(query).matches;
    const isMobile = mql(MOBILE_QUERY);
    const isTablet = mql(TABLET_QUERY);

    // Navigator.connection (Network Information API – Chrome/Edge/Opera)
    const nav = navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    };
    const conn = nav.connection;

    setContext({
      isMobile,
      isTablet,
      isDesktop: !isMobile && !isTablet,
      isTouch: mql(TOUCH_QUERY),
      hasHover: mql(HOVER_QUERY),
      isReducedMotion: mql(REDUCED_MOTION_QUERY),
      isHighContrast: mql(HIGH_CONTRAST_QUERY),
      isReducedTransparency: mql(REDUCED_TRANSPARENCY_QUERY),
      connectionType: conn?.effectiveType ?? '4g',
      isSaveData: conn?.saveData ?? false,
      hardwareConcurrency: navigator.hardwareConcurrency ?? 4,
    });
  }, []);

  useEffect(() => {
    update(); // Hydrate immediately after mount

    // Listen for viewport & preference changes
    const queries = [
      MOBILE_QUERY,
      TABLET_QUERY,
      TOUCH_QUERY,
      HOVER_QUERY,
      REDUCED_MOTION_QUERY,
      HIGH_CONTRAST_QUERY,
      REDUCED_TRANSPARENCY_QUERY,
    ];

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const handler = () => update();

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

    // Network change listener (if supported)
    const nav = navigator as Navigator & {
      connection?: EventTarget & { addEventListener: (e: string, fn: () => void) => void; removeEventListener: (e: string, fn: () => void) => void };
    };
    nav.connection?.addEventListener('change', handler);

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
      nav.connection?.removeEventListener('change', handler);
    };
  }, [update]);

  return context;
}
