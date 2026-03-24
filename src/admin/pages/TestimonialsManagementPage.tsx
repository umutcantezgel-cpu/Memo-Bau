import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CMSTestimonial } from '../../types/cms.types';
import { Plus, Pencil, Trash2, X, Save, Eye, EyeOff, Star } from 'lucide-react';

interface TestimonialFormData {
    name: string;
    role: string;
    text: string;
    rating: number;
    imageUrl: string;
    isActive: boolean;
}

export const TestimonialsManagementPage: React.FC = () => {
    const { data, updateData } = useCMS();
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState<TestimonialFormData>({
        name: '',
        role: '',
        text: '',
        rating: 5,
        imageUrl: '',
        isActive: true,
    });


    const testimonials = data?.testimonials || [];

    const resetForm = () => {
        setFormData({ name: '', role: '', text: '', rating: 5, imageUrl: '', isActive: true });
        setEditingId(null);
        setIsCreating(false);
    };

    const handleEdit = (item: CMSTestimonial) => {
        setFormData({
            name: item.name,
            role: item.role,
            text: item.text,
            rating: item.rating,
            imageUrl: item.imageUrl || '',
            isActive: item.isActive,
        });
        setEditingId(item.id);
        setIsCreating(false);
    };

    const handleSave = () => {
        if (!data) return;
        const now = new Date().toISOString();

        if (isCreating) {
            const newId = Math.max(0, ...testimonials.map(t => t.id)) + 1;
            const newItem: CMSTestimonial = {
                id: newId,
                ...formData,
                order: testimonials.length + 1,
                createdAt: now,
                updatedAt: now,
            };
            updateData({ testimonials: [...testimonials, newItem] });
            resetForm();
        } else if (editingId !== null) {
            const updated = testimonials.map(t =>
                t.id === editingId ? { ...t, ...formData, updatedAt: now } : t
            );
            updateData({ testimonials: updated });
            resetForm();
        }
    };



    const handleToggleActive = (item: CMSTestimonial) => {
        if (!data) return;
        const updated = testimonials.map(t =>
            t.id === item.id ? { ...t, isActive: !t.isActive, updatedAt: new Date().toISOString() } : t
        );
        updateData({ testimonials: updated });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Bewertungen verwalten</h1>
                    <p className="text-stone-500 mt-1">Kundenbewertungen und Testimonials</p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsCreating(true); }}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                >
                    <Plus className="w-5 h-5" />
                    Neue Bewertung
                </button>
            </div>

            {(isCreating || editingId !== null) && (
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-amber-200">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">
                            {isCreating ? 'Neue Bewertung' : 'Bewertung bearbeiten'}
                        </h2>
                        <button onClick={resetForm} className="text-stone-400 hover:text-stone-600" aria-label="Abbrechen">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                placeholder="z.B. Dr. Thomas Weber"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Rolle / Typ</label>
                            <input
                                type="text"
                                value={formData.role}
                                onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                placeholder="z.B. Privatkunde"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-stone-700 mb-2">Bewertungstext *</label>
                            <textarea
                                value={formData.text}
                                onChange={e => setFormData(prev => ({ ...prev, text: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                rows={4}
                                placeholder="Die Erfahrung des Kunden..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Bewertung (Sterne)</label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                                        className={`p-1 ${star <= formData.rating ? 'text-amber-500' : 'text-stone-300'}`}
                                        aria-label={`${star} Sterne`}
                                    >
                                        <Star className="w-6 h-6 fill-current" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Bild-URL</label>
                            <input
                                type="text"
                                value={formData.imageUrl}
                                onChange={e => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                placeholder="/images/avatar.jpg"
                            />
                        </div>

                        <div>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isActive}
                                    onChange={e => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                                    className="w-5 h-5 text-amber-600 rounded"
                                />
                                <span className="text-sm text-stone-700">Auf Website anzeigen</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
                        <button onClick={resetForm} className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg">
                            Abbrechen
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!formData.name.trim() || !formData.text.trim()}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-stone-300"
                        >
                            <Save className="w-5 h-5" />
                            Speichern
                        </button>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {testimonials.sort((a, b) => a.order - b.order).map(item => (
                    <div
                        key={item.id}
                        className={`bg-white rounded-xl shadow-sm p-6 ${!item.isActive ? 'opacity-60' : ''}`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-medium">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-medium text-stone-900">{item.name}</h3>
                                    <p className="text-sm text-stone-500">{item.role}</p>
                                    <div className="flex gap-0.5 mt-1">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= item.rating ? 'text-amber-500 fill-current' : 'text-stone-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleToggleActive(item)}
                                    className={`p-2 rounded ${item.isActive ? 'text-green-600' : 'text-stone-400'}`}
                                    aria-label={item.isActive ? "Deaktivieren" : "Aktivieren"}
                                >
                                    {item.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                                <button onClick={() => handleEdit(item)} className="p-2 text-stone-400 hover:text-amber-600" aria-label="Bearbeiten">
                                    <Pencil className="w-4 h-4" />
                                </button>
                                <button
                                    className={`p-2 text-stone-400 hover:text-red-600`}
                                    aria-label="Löschen"
                                >
                                    {<Trash2 className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 text-stone-600 italic">"{item.text}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
