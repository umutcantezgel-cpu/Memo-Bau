import React from 'react';
import { useCMS } from '../context/CMSContext';
import {
    Briefcase,
    Image,
    MessageSquareQuote,
    HelpCircle,
    Clock,

} from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-stone-500 text-sm font-medium">{title}</p>
                <p className="text-3xl font-bold text-stone-900 mt-2">{value}</p>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                {icon}
            </div>
        </div>
    </div>
);

interface ActivityItemProps {
    title: string;
    description: string;
    time: string;
    type: 'create' | 'update' | 'delete';
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, description, time, type }) => (
    <div className="flex items-start gap-4 py-4 border-b border-stone-100 last:border-0">
        <div
            className={`w-2 h-2 rounded-full mt-2 ${type === 'create' ? 'bg-green-500' : type === 'update' ? 'bg-amber-500' : 'bg-red-500'
                }`}
        />
        <div className="flex-1 min-w-0">
            <p className="font-medium text-stone-900">{title}</p>
            <p className="text-sm text-stone-500 truncate">{description}</p>
        </div>
        <p className="text-xs text-stone-400 whitespace-nowrap">{time}</p>
    </div>
);

export const DashboardPage: React.FC = () => {
    const { data, isLoading } = useCMS();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const stats = [
        {
            title: 'Leistungen',
            value: data?.services.filter(s => s.isActive).length || 0,
            icon: <Briefcase className="w-6 h-6 text-blue-600" />,
            color: 'bg-blue-100',
        },
        {
            title: 'Referenzen',
            value: data?.portfolio.filter(p => p.isActive).length || 0,
            icon: <Image className="w-6 h-6 text-green-600" />,
            color: 'bg-green-100',
        },
        {
            title: 'Bewertungen',
            value: data?.testimonials.filter(t => t.isActive).length || 0,
            icon: <MessageSquareQuote className="w-6 h-6 text-amber-600" />,
            color: 'bg-amber-100',
        },
        {
            title: 'FAQ Einträge',
            value: data?.faqs.filter(f => f.isActive).length || 0,
            icon: <HelpCircle className="w-6 h-6 text-purple-600" />,
            color: 'bg-purple-100',
        },
    ];

    const recentActivity = [
        { title: 'CMS System initialisiert', description: 'Alle Daten wurden erfolgreich geladen', time: 'Gerade', type: 'create' as const },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-stone-900">Dashboard</h1>
                <p className="text-stone-500 mt-1">
                    Willkommen zurück! Hier ist ein Überblick über Ihre Website.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            {/* Content Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-stone-900 mb-4">Schnellaktionen</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="/admin/services"
                            className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                        >
                            <Briefcase className="w-5 h-5 text-stone-600" />
                            <span className="text-sm font-medium text-stone-700">Leistung bearbeiten</span>
                        </a>
                        <a
                            href="/admin/portfolio"
                            className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                        >
                            <Image className="w-5 h-5 text-stone-600" />
                            <span className="text-sm font-medium text-stone-700">Projekt hinzufügen</span>
                        </a>
                        <a
                            href="/admin/testimonials"
                            className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                        >
                            <MessageSquareQuote className="w-5 h-5 text-stone-600" />
                            <span className="text-sm font-medium text-stone-700">Bewertung hinzufügen</span>
                        </a>
                        <a
                            href="/admin/business"
                            className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                        >
                            <Clock className="w-5 h-5 text-stone-600" />
                            <span className="text-sm font-medium text-stone-700">Öffnungszeiten</span>
                        </a>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-stone-900 mb-4">Letzte Aktivität</h2>
                    <div className="divide-y divide-stone-100">
                        {recentActivity.map((activity, index) => (
                            <ActivityItem key={index} {...activity} />
                        ))}
                        {recentActivity.length === 0 && (
                            <p className="text-stone-500 text-sm py-4">Keine Aktivitäten vorhanden.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* System Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-4">Systeminformationen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                        <p className="text-sm text-stone-500">Datenversion</p>
                        <p className="font-medium text-stone-900">{data?.version || 1}</p>
                    </div>
                    <div>
                        <p className="text-sm text-stone-500">Letzte Änderung</p>
                        <p className="font-medium text-stone-900">
                            {data?.lastModified
                                ? new Date(data.lastModified).toLocaleDateString('de-DE', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })
                                : '-'}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-stone-500">Status</p>
                        <p className="font-medium text-green-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            Online
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
