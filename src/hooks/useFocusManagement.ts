import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useFocusManagement — Handles keyboard focus across route changes.
 *
 * Ensures that when navigating to a new route, focus is programmatically
 * moved to the `<main>` element or first `<h1>`. This mimics native browser
 * behavior and alerts screen readers to the new page content.
 */
export function useFocusManagement() {
  const { pathname } = useLocation();
  const prevPathName = useRef(pathname);

  useEffect(() => {
    // Only move focus if we actually changed routes (not just initial mount)
    if (prevPathName.current !== pathname) {
      prevPathName.current = pathname;
      
      // RequestAnimationFrame ensures DOM has updated with new route content
      requestAnimationFrame(() => {
        const main = document.querySelector('main');
        const h1 = document.querySelector('h1');
        
        // Prefer explicit focus target if defined, otherwise main, then h1
        const target = document.querySelector('[data-focus-target]') || main || h1;
        
        if (target instanceof HTMLElement) {
          // If element isn't naturally focusable, make it focusable temporarily
          const prevTabIndex = target.getAttribute('tabindex');
          if (!prevTabIndex) {
            target.setAttribute('tabindex', '-1');
          }
          
          target.focus({ preventScroll: true }); // Avoid aggressive jumping
          
          // Clean up to prevent mouse-click focus outlines on main
          target.addEventListener('blur', function cleanup() {
            if (!prevTabIndex) {
              target.removeAttribute('tabindex');
            }
            target.removeEventListener('blur', cleanup);
          });
        }
      });
    }
  }, [pathname]);
}
