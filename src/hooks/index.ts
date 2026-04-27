/**
 * Hook Library — Barrel Export (CC-12)
 *
 * Zentrale Re-Exports aller Custom Hooks für konsistenten Import:
 *   import { useDeviceContext, useOnlineStatus } from '@/hooks';
 */

export { useDeviceContext } from './useDeviceContext';
export { useFocusManagement } from './useFocusManagement';
export { useIntersectionObserver } from './useIntersectionObserver';
export { useOnlineStatus } from './useOnlineStatus';
export { useConversionTracking, useScrollDepth, usePageTracking } from './useTrackingHooks';
export { useVisitorType } from './useVisitorType';
