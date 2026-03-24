import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    Briefcase,
    Image,
    MessageSquareQuote,
    HelpCircle,
    Building2,
    Users,
    Settings,
    LogOut,
    ChevronRight,
    Menu,
    X,
} from 'lucide-react';

const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { path: '/admin/services', label: 'Leistungen', icon: Briefcase },
    { path: '/admin/portfolio', label: 'Referenzen', icon: Image },
    { path: '/admin/testimonials', label: 'Bewertungen', icon: MessageSquareQuote },
    { path: '/admin/faqs', label: 'FAQ', icon: HelpCircle },
    { path: '/admin/business', label: 'Unternehmen', icon: Building2 },
    { path: '/admin/team', label: 'Team', icon: Users },
    { path: '/admin/settings', label: 'Einstellungen', icon: Settings },
];

export const AdminLayout: React.FC = () => {
    const { username, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-stone-100 flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-stone-900 text-white transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-stone-800">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-serif font-bold">
                                TEZGEL<span className="text-amber-500">.</span>
                            </h1>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-stone-400 hover:text-white"
                                aria-label="Seitenleiste schließen"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-stone-500 text-xs mt-1">Admin-System</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {navItems.map(({ path, label, icon: Icon, end }) => (
                            <NavLink
                                key={path}
                                to={path}
                                end={end}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                        ? 'bg-amber-600 text-white'
                                        : 'text-stone-400 hover:bg-stone-800 hover:text-white'
                                    }`
                                }
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{label}</span>
                                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </NavLink>
                        ))}
                    </nav>

                    {/* User Section */}
                    <div className="p-4 border-t border-stone-800">
                        <div className="flex items-center gap-3 px-4 py-3 mb-2">
                            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center font-bold">
                                {username?.charAt(0).toUpperCase() || 'A'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-white truncate">{username}</p>
                                <p className="text-xs text-stone-500">Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-red-600/10 hover:text-red-400 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Abmelden</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Bar */}
                <header className="bg-white shadow-sm px-4 lg:px-8 py-4 flex items-center gap-4">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-stone-600 hover:text-stone-900"
                        aria-label="Seitenleiste öffnen"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex-1" />
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-stone-600 hover:text-amber-600 transition-colors"
                    >
                        Website ansehen →
                    </a>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
