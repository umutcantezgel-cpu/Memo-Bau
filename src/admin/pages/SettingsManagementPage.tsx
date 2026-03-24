import React, { useState, useEffect } from 'react';
import { useCMS } from '../context/CMSContext';
import { CMSSiteSettings } from '../../types/cms.types';
import { Save, Palette, Bot, Settings } from 'lucide-react';

export const SettingsPage: React.FC = () => {
    const { data, updateData } = useCMS();
    const [formData, setFormData] = useState<CMSSiteSettings | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState<string | null>(null);

    useEffect(() => {
        if (data?.settings) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData({ ...data.settings });
        }
    }, [data?.settings]);

    const handleSave = () => {
        if (!formData || !data) return;

        setIsSaving(true);
        const success = updateData({
            settings: { ...formData, updatedAt: new Date().toISOString() }
        });

        setTimeout(() => {
            setIsSaving(false);
            setSaveMessage(success ? 'Einstellungen gespeichert!' : 'Fehler beim Speichern');
            setTimeout(() => setSaveMessage(null), 3000);
        }, 500);
    };

    if (!formData) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Einstellungen</h1>
                    <p className="text-stone-500 mt-1">Website-Konfiguration</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-amber-400"
                >
                    {isSaving ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <Save className="w-5 h-5" />
                    )}
                    Speichern
                </button>
            </div>

            {saveMessage && (
                <div className={`px-4 py-3 rounded-lg ${saveMessage.includes('Fehler') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {saveMessage}
                </div>
            )}

            {/* Site Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-amber-600" />
                    Website-Informationen
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="siteName" className="block text-sm font-medium text-stone-700 mb-2">Site-Name</label>
                        <input
                            id="siteName"
                            type="text"
                            value={formData.siteName}
                            onChange={e => setFormData({ ...formData, siteName: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="siteDescription" className="block text-sm font-medium text-stone-700 mb-2">Meta-Beschreibung</label>
                        <input
                            id="siteDescription"
                            type="text"
                            value={formData.siteDescription}
                            onChange={e => setFormData({ ...formData, siteDescription: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="logoUrl" className="block text-sm font-medium text-stone-700 mb-2">Logo-URL</label>
                        <input
                            id="logoUrl"
                            type="text"
                            value={formData.logoUrl || ''}
                            onChange={e => setFormData({ ...formData, logoUrl: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                            placeholder="/images/logo.svg"
                        />
                    </div>
                    <div>
                        <label htmlFor="faviconUrl" className="block text-sm font-medium text-stone-700 mb-2">Favicon-URL</label>
                        <input
                            id="faviconUrl"
                            type="text"
                            value={formData.faviconUrl || ''}
                            onChange={e => setFormData({ ...formData, faviconUrl: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                            placeholder="/favicon.ico"
                        />
                    </div>
                </div>
            </div>

            {/* Theme Colors */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-amber-600" />
                    Farbschema
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="primaryColorPicker" className="block text-sm font-medium text-stone-700 mb-2">Primärfarbe</label>
                        <div className="flex gap-3">
                            <input
                                id="primaryColorPicker"
                                type="color"
                                title="Primärfarbe auswählen"
                                value={formData.primaryColor}
                                onChange={e => setFormData({ ...formData, primaryColor: e.target.value })}
                                className="w-12 h-10 rounded border border-stone-300 cursor-pointer"
                            />
                            <input
                                type="text"
                                aria-label="Primärfarbe Hex-Code"
                                value={formData.primaryColor}
                                onChange={e => setFormData({ ...formData, primaryColor: e.target.value })}
                                className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-mono text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="accentColorPicker" className="block text-sm font-medium text-stone-700 mb-2">Akzentfarbe</label>
                        <div className="flex gap-3">
                            <input
                                id="accentColorPicker"
                                type="color"
                                title="Akzentfarbe auswählen"
                                value={formData.accentColor}
                                onChange={e => setFormData({ ...formData, accentColor: e.target.value })}
                                className="w-12 h-10 rounded border border-stone-300 cursor-pointer"
                            />
                            <input
                                type="text"
                                aria-label="Akzentfarbe Hex-Code"
                                value={formData.accentColor}
                                onChange={e => setFormData({ ...formData, accentColor: e.target.value })}
                                className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-mono text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-amber-600" />
                    Features
                </h2>
                <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-stone-50">
                        <input
                            type="checkbox"
                            checked={formData.enableNewsletter}
                            onChange={e => setFormData({ ...formData, enableNewsletter: e.target.checked })}
                            className="w-5 h-5 text-amber-600 rounded"
                            aria-label="Newsletter aktivieren"
                        />
                        <div>
                            <span className="font-medium text-stone-900">Newsletter</span>
                            <p className="text-sm text-stone-500">Zeigt das Newsletter-Anmeldeformular im Footer</p>
                        </div>
                    </label>
                </div>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6">Analytics</h2>
                <div>
                    <label htmlFor="gaId" className="block text-sm font-medium text-stone-700 mb-2">Google Analytics ID</label>
                    <input
                        id="gaId"
                        type="text"
                        value={formData.googleAnalyticsId || ''}
                        onChange={e => setFormData({ ...formData, googleAnalyticsId: e.target.value })}
                        className="w-full md:w-1/2 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        placeholder="G-XXXXXXXXXX"
                    />
                    <p className="text-sm text-stone-500 mt-2">
                        Geben Sie Ihre Google Analytics Measurement ID ein (erfordert Nutzer-Einwilligung)
                    </p>
                </div>
            </div>
        </div>
    );
};
