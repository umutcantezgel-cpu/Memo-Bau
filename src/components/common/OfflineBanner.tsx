import React from 'react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

/**
 * OfflineBanner — Shows a non-intrusive banner when the user goes offline.
 *
 * Automatically disappears on reconnect. Rendered at the top of the viewport
 * as a slim notification bar.
 */
export const OfflineBanner: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-0 left-0 right-0 z-[9999] bg-amber-600 text-white text-center py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 animate-fade-in-up shadow-elevation-2"
    >
      <WifiOff className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span>Sie sind offline. Einige Funktionen sind eingeschränkt.</span>
    </div>
  );
};
