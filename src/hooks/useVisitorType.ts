import { useState, useEffect } from 'react';

export type VisitorType = 'new' | 'returning';

const STORAGE_KEY = 'memo_visitor_type';

/**
 * useVisitorType — Detects whether the current user is a first-time or returning visitor.
 *
 * Uses localStorage to persist across sessions. On first visit, sets 'new'.
 * On subsequent visits, returns 'returning'.
 *
 * Privacy-compliant: no PII is stored, only a simple flag.
 */
export function useVisitorType(): VisitorType {
  const [visitorType, setVisitorType] = useState<VisitorType>('new');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored === 'returning') {
        setVisitorType('returning');
      } else {
        // First visit — mark as new, then schedule transition to 'returning'
        localStorage.setItem(STORAGE_KEY, 'returning');
        setVisitorType('new');
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — default to 'new'
      setVisitorType('new');
    }
  }, []);

  return visitorType;
}
