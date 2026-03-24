import React, { useState, useEffect } from 'react';
import { useCMS } from '../context/CMSContext';
import { CMSBusinessInfo, CMSBusinessHours } from '../../types/cms.types';
import { Save, Clock, MapPin, Phone, Mail, Globe } from 'lucide-react';

export const BusinessManagementPage: React.FC = () => {
    const { data, updateData } = useCMS();
    const [formData, setFormData] = useState<CMSBusinessInfo | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState<string | null>(null);

    useEffect(() => {
        if (data?.businessInfo) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData({ ...data.businessInfo });
        }
    }, [data?.businessInfo]);

    const handleSave = () => {
        if (!formData || !data) return;

        setIsSaving(true);
        const success = updateData({
            businessInfo: { ...formData, updatedAt: new Date().toISOString() }
        });

        setTimeout(() => {
            setIsSaving(false);
            setSaveMessage(success ? 'Erfolgreich gespeichert!' : 'Fehler beim Speichern');
            setTimeout(() => setSaveMessage(null), 3000);
        }, 500);
    };

    const updateHour = (index: number, field: keyof CMSBusinessHours, value: string | boolean) => {
        if (!formData) return;
        const newHours = [...formData.hours];
        newHours[index] = { ...newHours[index], [field]: value };
        setFormData({ ...formData, hours: newHours });
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
                    <h1 className="text-2xl font-bold text-stone-900">Unternehmensdaten</h1>
                    <p className="text-stone-500 mt-1">Kontaktinformationen und Öffnungszeiten</p>
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

            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-amber-600" />
                    Firmendaten
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-stone-700 mb-2">Firmenname</label>
                        <input
                            id="companyName"
                            type="text"
                            value={formData.companyName}
                            onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="tagline" className="block text-sm font-medium text-stone-700 mb-2">Slogan</label>
                        <input
                            id="tagline"
                            type="text"
                            value={formData.tagline}
                            onChange={e => setFormData({ ...formData, tagline: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-stone-700 mb-2">Beschreibung</label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                            rows={3}
                        />
                    </div>
                    <div>
                        <label htmlFor="foundedYear" className="block text-sm font-medium text-stone-700 mb-2">Gründungsjahr</label>
                        <input
                            id="foundedYear"
                            type="number"
                            value={formData.foundedYear}
                            onChange={e => setFormData({ ...formData, foundedYear: parseInt(e.target.value) || 1990 })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceArea" className="block text-sm font-medium text-stone-700 mb-2">Einzugsgebiet</label>
                        <input
                            id="serviceArea"
                            type="text"
                            value={formData.serviceArea}
                            onChange={e => setFormData({ ...formData, serviceArea: e.target.value })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-amber-600" />
                    Kontakt
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-2">
                            <Phone className="w-4 h-4" /> Telefon
                        </label>
                        <input
                            id="phone"
                            type="text"
                            value={formData.contact.phone}
                            onChange={e => setFormData({
                                ...formData,
                                contact: { ...formData.contact, phone: e.target.value }
                            })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-2">
                            <Mail className="w-4 h-4" /> E-Mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.contact.email}
                            onChange={e => setFormData({
                                ...formData,
                                contact: { ...formData.contact, email: e.target.value }
                            })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    Adresse
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label htmlFor="street" className="block text-sm font-medium text-stone-700 mb-2">Straße</label>
                        <input
                            id="street"
                            type="text"
                            value={formData.contact.address.street}
                            onChange={e => setFormData({
                                ...formData,
                                contact: {
                                    ...formData.contact,
                                    address: { ...formData.contact.address, street: e.target.value }
                                }
                            })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-stone-700 mb-2">PLZ</label>
                        <input
                            id="postalCode"
                            type="text"
                            value={formData.contact.address.postalCode}
                            onChange={e => setFormData({
                                ...formData,
                                contact: {
                                    ...formData.contact,
                                    address: { ...formData.contact.address, postalCode: e.target.value }
                                }
                            })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-2">Stadt</label>
                        <input
                            id="city"
                            type="text"
                            value={formData.contact.address.city}
                            onChange={e => setFormData({
                                ...formData,
                                contact: {
                                    ...formData.contact,
                                    address: { ...formData.contact.address, city: e.target.value }
                                }
                            })}
                            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    Öffnungszeiten
                </h2>
                <div className="space-y-3">
                    {formData.hours.map((hour, index) => (
                        <div
                            key={hour.day}
                            className={`grid grid-cols-12 gap-4 items-center p-3 rounded-lg ${hour.isClosed ? 'bg-stone-50' : 'bg-white'}`}
                        >
                            <div className="col-span-3 font-medium text-stone-700">{hour.day}</div>
                            <div className="col-span-3">
                                <input
                                    type="time"
                                    aria-label={`Öffnungszeit am ${hour.day}`}
                                    value={hour.openTime}
                                    onChange={e => updateHour(index, 'openTime', e.target.value)}
                                    disabled={hour.isClosed}
                                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 disabled:bg-stone-100"
                                />
                            </div>
                            <div className="col-span-1 text-center text-stone-400">–</div>
                            <div className="col-span-3">
                                <input
                                    type="time"
                                    aria-label={`Schließzeit am ${hour.day}`}
                                    value={hour.closeTime}
                                    onChange={e => updateHour(index, 'closeTime', e.target.value)}
                                    disabled={hour.isClosed}
                                    className="w-full px-3 py-1.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 disabled:bg-stone-100"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="flex items-center gap-2 cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        checked={hour.isClosed}
                                        onChange={e => updateHour(index, 'isClosed', e.target.checked)}
                                        className="w-4 h-4 text-amber-600 rounded"
                                    />
                                    Geschlossen
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
