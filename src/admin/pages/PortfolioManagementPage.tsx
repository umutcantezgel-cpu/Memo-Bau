import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CMSPortfolioItem, CMSPortfolioCategory, CMSPortfolioSize } from '../../types/cms.types';
import {
    Plus,
    Pencil,
    Trash2,
    X,
    Save,
    Eye,
    EyeOff,
    Check,
    Star,
    StarOff,
} from 'lucide-react';

interface PortfolioFormData {
    title: string;
    description: string;
    category: CMSPortfolioCategory;
    size: CMSPortfolioSize;
    imageUrl: string;
    isActive: boolean;
    isFeatured: boolean;
}

const CATEGORY_OPTIONS: { value: CMSPortfolioCategory; label: string }[] = [
    { value: 'bad', label: 'Bad' },
    { value: 'living', label: 'Wohnraum' },
    { value: 'kitchen', label: 'Küche' },
    { value: 'outdoor', label: 'Außenbereich' },
];

const SIZE_OPTIONS: { value: CMSPortfolioSize; label: string }[] = [
    { value: 'small', label: 'Klein' },
    { value: 'wide', label: 'Breit' },
    { value: 'tall', label: 'Hoch' },
    { value: 'large', label: 'Groß' },
];

export const PortfolioManagementPage: React.FC = () => {
    const { data, updateData } = useCMS();
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState<PortfolioFormData>({
        title: '',
        description: '',
        category: 'bad',
        size: 'small',
        imageUrl: '',
        isActive: true,
        isFeatured: false,
    });
    const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

    const portfolio = data?.portfolio || [];

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: 'bad',
            size: 'small',
            imageUrl: '',
            isActive: true,
            isFeatured: false,
        });
        setEditingId(null);
        setIsCreating(false);
    };

    const handleEdit = (item: CMSPortfolioItem) => {
        setFormData({
            title: item.title,
            description: item.description || '',
            category: item.category,
            size: item.size,
            imageUrl: item.imageUrl || '',
            isActive: item.isActive,
            isFeatured: item.isFeatured,
        });
        setEditingId(item.id);
        setIsCreating(false);
    };

    const handleCreate = () => {
        resetForm();
        setIsCreating(true);
    };

    const handleSave = () => {
        if (!data) return;

        const now = new Date().toISOString();

        if (isCreating) {
            const newId = Math.max(0, ...portfolio.map(p => p.id)) + 1;
            const newItem: CMSPortfolioItem = {
                id: newId,
                ...formData,
                order: portfolio.length + 1,
                createdAt: now,
                updatedAt: now,
            };
            updateData({ portfolio: [...portfolio, newItem] });
            resetForm();
        } else if (editingId !== null) {
            const updated = portfolio.map(p =>
                p.id === editingId ? { ...p, ...formData, updatedAt: now } : p
            );
            updateData({ portfolio: updated });
            resetForm();
        }
    };

    const handleDelete = (id: number) => {
        if (!data) return;

        if (deleteConfirm === id) {
            updateData({ portfolio: portfolio.filter(p => p.id !== id) });
            setDeleteConfirm(null);
        } else {
            setDeleteConfirm(id);
            setTimeout(() => setDeleteConfirm(null), 3000);
        }
    };

    const handleToggleActive = (item: CMSPortfolioItem) => {
        if (!data) return;
        const updated = portfolio.map(p =>
            p.id === item.id ? { ...p, isActive: !p.isActive, updatedAt: new Date().toISOString() } : p
        );
        updateData({ portfolio: updated });
    };

    const handleToggleFeatured = (item: CMSPortfolioItem) => {
        if (!data) return;
        const updated = portfolio.map(p =>
            p.id === item.id ? { ...p, isFeatured: !p.isFeatured, updatedAt: new Date().toISOString() } : p
        );
        updateData({ portfolio: updated });
    };

    const getCategoryLabel = (category: CMSPortfolioCategory) =>
        CATEGORY_OPTIONS.find(c => c.value === category)?.label || category;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Referenzen verwalten</h1>
                    <p className="text-stone-500 mt-1">Verwalten Sie Ihre Projektgalerie</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Neues Projekt
                </button>
            </div>

            {/* Create/Edit Form */}
            {(isCreating || editingId !== null) && (
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-amber-200">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-stone-900">
                            {isCreating ? 'Neues Projekt erstellen' : 'Projekt bearbeiten'}
                        </h2>
                        <button onClick={resetForm} className="text-stone-400 hover:text-stone-600" aria-label="Schließen">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Titel *</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                placeholder="z.B. Wellness Dusche"
                            />
                        </div>

                        <div>
                            <label htmlFor="portfolio-category" className="block text-sm font-medium text-stone-700 mb-2">Kategorie</label>
                            <select
                                id="portfolio-category"
                                value={formData.category}
                                onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as CMSPortfolioCategory }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                            >
                                {CATEGORY_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="portfolio-size" className="block text-sm font-medium text-stone-700 mb-2">Größe</label>
                            <select
                                id="portfolio-size"
                                value={formData.size}
                                onChange={e => setFormData(prev => ({ ...prev, size: e.target.value as CMSPortfolioSize }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                            >
                                {SIZE_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-stone-700 mb-2">Beschreibung</label>
                            <textarea
                                value={formData.description}
                                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                rows={2}
                                placeholder="Optionale Projektbeschreibung..."
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-stone-700 mb-2">Bild-URL</label>
                            <input
                                type="text"
                                value={formData.imageUrl}
                                onChange={e => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                placeholder="/images/project.jpg"
                            />
                        </div>

                        <div className="flex gap-6">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isActive}
                                    onChange={e => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                                    className="w-5 h-5 text-amber-600 rounded"
                                />
                                <span className="text-sm text-stone-700">Aktiv</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isFeatured}
                                    onChange={e => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                                    className="w-5 h-5 text-amber-600 rounded"
                                />
                                <span className="text-sm text-stone-700">Hervorgehoben</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
                        <button onClick={resetForm} className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg">
                            Abbrechen
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!formData.title.trim()}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-stone-300"
                        >
                            <Save className="w-5 h-5" />
                            Speichern
                        </button>
                    </div>
                </div>
            )}

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.sort((a, b) => a.order - b.order).map(item => (
                    <div
                        key={item.id}
                        className={`bg-white rounded-xl shadow-sm overflow-hidden ${!item.isActive ? 'opacity-60' : ''}`}
                    >
                        <div className="aspect-video bg-stone-100 relative">
                            {item.imageUrl ? (
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-stone-400">
                                    Kein Bild
                                </div>
                            )}
                            {item.isFeatured && (
                                <div className="absolute top-2 left-2 px-2 py-1 bg-amber-500 text-white text-xs rounded flex items-center gap-1">
                                    <Star className="w-3 h-3" /> Featured
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium text-stone-900">{item.title}</h3>
                            <p className="text-sm text-stone-500">{getCategoryLabel(item.category)}</p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => handleToggleActive(item)}
                                        className={`p-1.5 rounded ${item.isActive ? 'text-green-600' : 'text-stone-400'}`}
                                    >
                                        {item.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={() => handleToggleFeatured(item)}
                                        className={`p-1.5 rounded ${item.isFeatured ? 'text-amber-500' : 'text-stone-400'}`}
                                    >
                                        {item.isFeatured ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
                                    </button>
                                </div>
                                <div className="flex gap-1">
                                    <button onClick={() => handleEdit(item)} className="p-1.5 text-stone-400 hover:text-amber-600" aria-label="Bearbeiten">
                                        <Pencil className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className={`p-1.5 ${deleteConfirm === item.id ? 'text-red-600' : 'text-stone-400 hover:text-red-600'}`}
                                        aria-label={deleteConfirm === item.id ? 'Bestätigen' : 'Löschen'}
                                    >
                                        {deleteConfirm === item.id ? <Check className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
