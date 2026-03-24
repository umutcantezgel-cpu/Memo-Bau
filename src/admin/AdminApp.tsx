import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CMSProvider } from './context/CMSContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// Lazy load admin pages for code splitting
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const AdminLayout = lazy(() => import('./layouts/AdminLayout').then(m => ({ default: m.AdminLayout })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then(m => ({ default: m.DashboardPage })));
const ServicesManagementPage = lazy(() => import('./pages/ServicesManagementPage').then(m => ({ default: m.ServicesManagementPage })));
const PortfolioManagementPage = lazy(() => import('./pages/PortfolioManagementPage').then(m => ({ default: m.PortfolioManagementPage })));
const TestimonialsManagementPage = lazy(() => import('./pages/TestimonialsManagementPage').then(m => ({ default: m.TestimonialsManagementPage })));
const FaqManagementPage = lazy(() => import('./pages/FaqManagementPage').then(m => ({ default: m.FaqManagementPage })));
const BusinessManagementPage = lazy(() => import('./pages/BusinessManagementPage').then(m => ({ default: m.BusinessManagementPage })));
const SettingsManagementPage = lazy(() => import('./pages/SettingsManagementPage').then(m => ({ default: m.SettingsPage })));

// Team page placeholder (to be implemented)
const TeamPage: React.FC = () => (
    <div className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-2xl font-bold text-stone-900 mb-4">Team verwalten</h1>
        <p className="text-stone-500">Diese Seite wird bald implementiert.</p>
    </div>
);


const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
    </div>
);

const AdminContent: React.FC = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                {/* Login Route */}
                <Route
                    path="login"
                    element={isLoggedIn ? <Navigate to="/admin" replace /> : <LoginPage />}
                />

                {/* Protected Admin Routes */}
                <Route
                    element={
                        <ProtectedRoute>
                            <CMSProvider>
                                <AdminLayout />
                            </CMSProvider>
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<DashboardPage />} />
                    <Route path="services" element={<ServicesManagementPage />} />
                    <Route path="portfolio" element={<PortfolioManagementPage />} />
                    <Route path="testimonials" element={<TestimonialsManagementPage />} />
                    <Route path="faqs" element={<FaqManagementPage />} />
                    <Route path="business" element={<BusinessManagementPage />} />
                    <Route path="team" element={<TeamPage />} />
                    <Route path="settings" element={<SettingsManagementPage />} />
                </Route>

                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
        </Suspense>
    );
};

export const AdminApp: React.FC = () => (
    <AuthProvider>
        <AdminContent />
    </AuthProvider>
);

export default AdminApp;
