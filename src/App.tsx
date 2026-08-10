import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CookieConsentProvider } from './components/common/CookieConsentProvider';
import { GoogleAnalytics } from './components/features/GoogleAnalytics';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { PersonalizationProvider } from './context/PersonalizationContext';
import { MobileQuickContact } from './components/features/MobileQuickContact';
import { GlobalCalendlyWidget } from './components/features/GlobalCalendlyWidget';
import { ScrollProgressIndicator } from './components/common/ScrollProgressIndicator';
import { PageTransition } from './components/common/PageTransition';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { StickyMobileCta } from './components/features/StickyMobileCta';
import { useFocusManagement } from './hooks/useFocusManagement';
import { OfflineBanner } from './components/common/OfflineBanner';
import { FloatingCookieButton } from './components/common/FloatingCookieButton';

import { usePageTracking, useScrollDepth } from './hooks/useTrackingHooks';

const GlobalTracker = () => {
    const location = useLocation();
    useScrollDepth();
    usePageTracking(location.pathname, location.search);
    return null;
};

const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage })),
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })),
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })),
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })),
);
const ImprintPage = lazy(() =>
  import('./pages/ImprintPage').then((module) => ({ default: module.ImprintPage })),
);
const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage })),
);
const LocationOverviewPage = lazy(() =>
  import('./pages/LocationOverviewPage').then((module) => ({ default: module.LocationOverviewPage })),
);
const LocationPage = lazy(() =>
  import('./pages/LocationPage').then((module) => ({ default: module.LocationPage })),
);
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage })),
);
const AgbPage = lazy(() =>
  import('./pages/AgbPage').then((module) => ({ default: module.AgbPage })),
);
const CookiePolicyPage = lazy(() =>
  import('./pages/CookiePolicyPage').then((module) => ({ default: module.CookiePolicyPage })),
);
const AccessibilityPage = lazy(() =>
  import('./pages/AccessibilityPage').then((module) => ({ default: module.AccessibilityPage })),
);
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage })),
);
const BlogPage = lazy(() =>
  import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })),
);
const BlogPostPage = lazy(() =>
  import('./pages/BlogPostPage').then((module) => ({ default: module.BlogPostPage })),
);
const AdminApp = lazy(() =>
  import('./admin/AdminApp').then((module) => ({ default: module.AdminApp })),
);
const MaintenancePage = lazy(() =>
  import('./pages/MaintenancePage').then((module) => ({ default: module.MaintenancePage })),
);

const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-white p-6 space-y-8 animate-pulse">
    {/* Majestic Skeleton Shimmer */}
    <div className="w-full max-w-4xl h-[400px] bg-neutral-lightgray/30 rounded-[var(--radius-xl)] relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-neutral-white/40 to-transparent"></div>
    </div>
    <div className="w-full max-w-4xl flex gap-6">
      <div className="w-1/3 h-[200px] bg-neutral-lightgray/20 rounded-[var(--radius-lg)] relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-neutral-white/40 to-transparent"></div>
      </div>
      <div className="w-2/3 space-y-4">
        <div className="w-3/4 h-8 bg-neutral-lightgray/20 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-neutral-white/40 to-transparent"></div>
        </div>
        <div className="w-full h-4 bg-neutral-lightgray/20 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-neutral-white/40 to-transparent"></div>
        </div>
        <div className="w-5/6 h-4 bg-neutral-lightgray/20 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-neutral-white/40 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isMaintenanceMode = false; // Maintenance mode deactivated

  if (isMaintenanceMode) {
    return (
      <ErrorBoundary>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={<LoadingFallback />}>
            <MaintenancePage />
          </Suspense>
          <CookieConsentProvider />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PersonalizationProvider>
          <Routes>
            {/* Admin Routes - Separate from main site */}
            <Route
              path="/admin/*"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <AdminApp />
                </Suspense>
              }
            />

            {/* Main Site Routes */}
            <Route
              path="/*"
              element={
                <MainSiteLayout
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              }
            />
          </Routes>
        </PersonalizationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

interface MainSiteLayoutProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const MainSiteLayout: React.FC<MainSiteLayoutProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const location = useLocation();
  useFocusManagement();

  return (
    <div className="font-sans text-neutral-darkgray bg-neutral-white selection:bg-primary-base selection:text-neutral-white min-h-screen flex flex-col antialiased relative">
      {/* Global subtle film grain noise */}
      <div className="bg-noise absolute inset-0 pointer-events-none z-[1]" aria-hidden="true" />
      
      <GlobalTracker />
      <OfflineBanner />
      <ScrollToTop />
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Zum Hauptinhalt springen
      </a>

      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <ScrollProgressIndicator />

      <main id="main-content" className="flex-grow" role="main" tabIndex={-1}>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <PageTransition>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/produkte" element={<ProductsPage />} />
                <Route path="/leistungen" element={<ServicesPage />} />
                <Route path="/leistungen/:serviceSlug" element={<ServiceDetailPage />} />
                <Route path="/ratgeber" element={<BlogPage />} />
                <Route path="/ratgeber/:postSlug" element={<BlogPostPage />} />
                <Route path="/standorte" element={<LocationOverviewPage />} />
                <Route path="/standorte/:cityId" element={<LocationPage />} />
                <Route path="/kontakt" element={<ContactPage />} />
                <Route path="/ueber-uns" element={<AboutPage />} />
                <Route path="/impressum" element={<ImprintPage />} />
                <Route path="/datenschutz" element={<PrivacyPage />} />
                <Route path="/agb" element={<AgbPage />} />
                <Route path="/cookie-richtlinie" element={<CookiePolicyPage />} />
                <Route path="/barrierefreiheit" element={<AccessibilityPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageTransition>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <MobileQuickContact />
      <StickyMobileCta />
      <GlobalTracker />
      <GlobalCalendlyWidget />
      <CookieConsentProvider />
      <FloatingCookieButton />
      <GoogleAnalytics />
    </div>
  );
};

export default App;
