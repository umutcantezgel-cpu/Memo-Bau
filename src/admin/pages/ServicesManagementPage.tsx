import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { updateService, createService, deleteService } from '../../services/cms.service';
import { CMSServiceItem } from '../../types/cms.types';
import {
    Plus,
    Pencil,
    Trash2,
    X,
    Save,
    GripVertical,
    Eye,
    EyeOff,
    Check,
} from 'lucide-react';

interface ServiceFormData {
    title: string;
    description: string;
    iconName: string;
    features: string[];
    imageUrl: string;
    isActive: boolean;
}

const ICON_OPTIONS = [
    { value: 'Grid', label: 'Gitter' },
    { value: 'Layers', label: 'Schichten' },
    { value: 'Star', label: 'Stern' },
    { value: 'Hammer', label: 'Hammer' },
    { value: 'Home', label: 'Haus' },
    { value: 'Building2', label: 'Gebäude' },
    { value: 'Sparkles', label: 'Funken' },
    { value: 'Wrench', label: 'Schraubenschlüssel' },
];

export const ServicesManagementPage: React.FC = () => {
    const { data, refreshData } = useCMS();
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState<ServiceFormData>({
        title: '',
        description: '',
        iconName: 'Grid',
        features: [''],
        imageUrl: '',
        isActive: true,
    });
    const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

    const services = data?.services || [];

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            iconName: 'Grid',
            features: [''],
            imageUrl: '',
            isActive: true,
        });
        setEditingId(null);
        setIsCreating(false);
    };

    const handleEdit = (service: CMSServiceItem) => {
        setFormData({
            title: service.title,
            description: service.description,
            iconName: service.iconName,
            features: service.features.length > 0 ? service.features : [''],
            imageUrl: service.imageUrl || '',
            isActive: service.isActive,
        });
        setEditingId(service.id);
        setIsCreating(false);
    };

    const handleCreate = () => {
        resetForm();
        setIsCreating(true);
    };

    const handleSave = () => {
        const cleanFeatures = formData.features.filter(f => f.trim() !== '');

        if (isCreating) {
            const result = createService({
                ...formData,
                features: cleanFeatures,
                order: services.length + 1,
            });
            if (result) {
                refreshData();
                resetForm();
            }
        } else if (editingId !== null) {
            const success = updateService(editingId, {
                ...formData,
                features: cleanFeatures,
            });
            if (success) {
                refreshData();
                resetForm();
            }
        }
    };

    const handleDelete = (id: number) => {
        if (deleteConfirm === id) {
            deleteService(id);
            refreshData();
            setDeleteConfirm(null);
        } else {
            setDeleteConfirm(id);
            setTimeout(() => setDeleteConfirm(null), 3000);
        }
    };

    const handleToggleActive = (service: CMSServiceItem) => {
        updateService(service.id, { isActive: !service.isActive });
        refreshData();
    };

    const addFeature = () => {
        setFormData(prev => ({
            ...prev,
            features: [...prev.features, ''],
        }));
    };

    const updateFeature = (index: number, value: string) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.map((f, i) => (i === index ? value : f)),
        }));
    };

    const removeFeature = (index: number) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Leistungen verwalten</h1>
                    <p className="text-stone-500 mt-1">
                        Verwalten Sie Ihre angebotenen Dienstleistungen
                    </p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Neue Leistung
                </button>
            </div>

            {/* Create/Edit Form */}
            {(isCreating || editingId !== null) && (
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-amber-200">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-stone-900">
                            {isCreating ? 'Neue Leistung erstellen' : 'Leistung bearbeiten'}
                        </h2>
                        <button
                            onClick={resetForm}
                            className="text-stone-400 hover:text-stone-600"
                            aria-label="Schließen"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">
                                Titel *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                placeholder="z.B. Großformatige Fliesen"
                            />
                        </div>

                        {/* Icon */}
                        <div>
                            <label htmlFor="service-icon" className="block text-sm font-medium text-stone-700 mb-2">
                                Symbol
                            </label>
                            <select
                                id="service-icon"
                                value={formData.iconName}
                                onChange={e => setFormData(prev => ({ ...prev, iconName: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            >
                                {ICON_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-stone-700 mb-2">
                                Beschreibung *
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                rows={3}
                                placeholder="Kurze Beschreibung der Leistung..."
                            />
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-stone-700 mb-2">
                                Bild-URL
                            </label>
                            <input
                                type="text"
                                value={formData.imageUrl}
                                onChange={e => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                placeholder="/images/service.jpg"
                            />
                        </div>

                        {/* Features */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-stone-700 mb-2">
                                Vorteile / Features
                            </label>
                            <div className="space-y-2">
                                {formData.features.map((feature, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={feature}
                                            onChange={e => updateFeature(index, e.target.value)}
                                            className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            placeholder="z.B. Weniger Fugen"
                                        />
                                        {formData.features.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                                aria-label="Feature entfernen"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addFeature}
                                    className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
                                >
                                    <Plus className="w-4 h-4" />
                                    Feature hinzufügen
                                </button>
                            </div>
                        </div>

                        {/* Active Toggle */}
                        <div className="md:col-span-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.isActive}
                                    onChange={e => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                                    className="w-5 h-5 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                                />
                                <span className="text-sm font-medium text-stone-700">Aktiv (auf Website sichtbar)</span>
                            </label>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-stone-200">
                        <button
                            onClick={resetForm}
                            className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
                        >
                            Abbrechen
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!formData.title.trim() || !formData.description.trim()}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors"
                        >
                            <Save className="w-5 h-5" />
                            Speichern
                        </button>
                    </div>
                </div>
            )}

            {/* Services List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-stone-50 border-b border-stone-200 text-sm font-medium text-stone-500">
                    <div className="col-span-1"></div>
                    <div className="col-span-4">Titel</div>
                    <div className="col-span-3">Features</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Aktionen</div>
                </div>

                {services.length === 0 ? (
                    <div className="px-6 py-12 text-center text-stone-500">
                        Keine Leistungen vorhanden. Erstellen Sie Ihre erste Leistung.
                    </div>
                ) : (
                    <div className="divide-y divide-stone-100">
                        {services
                            .sort((a, b) => a.order - b.order)
                            .map(service => (
                                <div
                                    key={service.id}
                                    className={`grid grid-cols-12 gap-4 px-6 py-4 items-center ${!service.isActive ? 'bg-stone-50 opacity-60' : ''
                                        }`}
                                >
                                    <div className="col-span-1">
                                        <GripVertical className="w-5 h-5 text-stone-300 cursor-grab" />
                                    </div>
                                    <div className="col-span-4">
                                        <p className="font-medium text-stone-900">{service.title}</p>
                                        <p className="text-sm text-stone-500 truncate">{service.description}</p>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="flex flex-wrap gap-1">
                                            {service.features.slice(0, 2).map((f, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                            {service.features.length > 2 && (
                                                <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs rounded">
                                                    +{service.features.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <button
                                            onClick={() => handleToggleActive(service)}
                                            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors ${service.isActive
                                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                                                }`}
                                        >
                                            {service.isActive ? (
                                                <>
                                                    <Eye className="w-3.5 h-3.5" />
                                                    Aktiv
                                                </>
                                            ) : (
                                                <>
                                                    <EyeOff className="w-3.5 h-3.5" />
                                                    Inaktiv
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <div className="col-span-2 flex justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(service)}
                                            className="p-2 text-stone-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                                            aria-label="Bearbeiten"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service.id)}
                                            className={`p-2 rounded-lg transition-colors ${deleteConfirm === service.id
                                                ? 'bg-red-100 text-red-600'
                                                : 'text-stone-400 hover:text-red-600 hover:bg-red-50'
                                                }`}
                                            aria-label={deleteConfirm === service.id ? 'Bestätigen' : 'Löschen'}
                                        >
                                            {deleteConfirm === service.id ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Trash2 className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};
