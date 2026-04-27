import { useState, useEffect } from 'react';

/**
 * useOnlineStatus — Tracks browser online/offline state in real-time.
 *
 * Uses `navigator.onLine` + event listeners for live updates.
 * SSR-safe: defaults to `true`.
 *
 * @returns `true` if the browser is online, `false` if offline.
 */
export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
