import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CMSFaqItem } from '../../types/cms.types';
import { Plus, Pencil, Trash2, X, Save, Eye, EyeOff, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqFormData {
    question: string;
    answer: string;
    category: string;
    isActive: boolean;
}

export const FaqManagementPage: React.FC = () => {
    const { data, updateData } = useCMS();
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [formData, setFormData] = useState<FaqFormData>({
        question: '',
        answer: '',
        category: '',
        isActive: true,
    });
    const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

    const faqs = data?.faqs || [];

    const resetForm = () => {
        setFormData({ question: '', answer: '', category: '', isActive: true });
        setEditingId(null);
        setIsCreating(false);
    };

    const handleEdit = (item: CMSFaqItem) => {
        setFormData({
            question: item.question,
            answer: item.answer,
            category: item.category || '',
            isActive: item.isActive,
        });
        setEditingId(item.id);
        setIsCreating(false);
    };

    const handleSave = () => {
        if (!data) return;
        const now = new Date().toISOString();

        if (isCreating) {
            const newId = Math.max(0, ...faqs.map(f => f.id)) + 1;
            const newItem: CMSFaqItem = {
                id: newId,
                ...formData,
                order: faqs.length + 1,
                createdAt: now,
                updatedAt: now,
            };
            updateData({ faqs: [...faqs, newItem] });
            resetForm();
        } else if (editingId !== null) {
            const updated = faqs.map(f =>
                f.id === editingId ? { ...f, ...formData, updatedAt: now } : f
            );
            updateData({ faqs: updated });
            resetForm();
        }
    };

    const handleDelete = (id: number) => {
        if (!data) return;
        if (deleteConfirm === id) {
            updateData({ faqs: faqs.filter(f => f.id !== id) });
            setDeleteConfirm(null);
        } else {
            setDeleteConfirm(id);
            setTimeout(() => setDeleteConfirm(null), 3000);
        }
    };

    const handleToggleActive = (item: CMSFaqItem) => {
        if (!data) return;
        const updated = faqs.map(f =>
            f.id === item.id ? { ...f, isActive: !f.isActive, updatedAt: new Date().toISOString() } : f
        );
        updateData({ faqs: updated });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">FAQ verwalten</h1>
                    <p className="text-stone-500 mt-1">Häufig gestellte Fragen</p>
                </div>
                <button
                    onClick={() => { resetForm(); setIsCreating(true); }}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                >
                    <Plus className="w-5 h-5" />
                    Neue Frage
                </button>
            </div>

            {(isCreating || editingId !== null) && (
                <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-amber-200">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">
                            {isCreating ? 'Neue FAQ erstellen' : 'FAQ bearbeiten'}
                        </h2>
                        <button onClick={resetForm} className="text-stone-400 hover:text-stone-600" aria-label="Abbrechen">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Frage *</label>
                            <input
                                type="text"
                                value={formData.question}
                                onChange={e => setFormData(prev => ({ ...prev, question: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                placeholder="z.B. Wie lange dauert eine Badsanierung?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Antwort *</label>
                            <textarea
                                value={formData.answer}
                                onChange={e => setFormData(prev => ({ ...prev, answer: e.target.value }))}
                                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                rows={4}
                                placeholder="Die ausführliche Antwort auf die Frage..."
                            />
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-stone-700 mb-2">Kategorie (optional)</label>
                                <input
                                    type="text"
                                    value={formData.category}
                                    onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                                    placeholder="z.B. Allgemein, Preise, Ablauf"
                                />
                            </div>
                            <div className="flex items-end pb-2">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.isActive}
                                        onChange={e => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                                        className="w-5 h-5 text-amber-600 rounded"
                                    />
                                    <span className="text-sm text-stone-700">Aktiv</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
                        <button onClick={resetForm} className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg">
                            Abbrechen
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!formData.question.trim() || !formData.answer.trim()}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-stone-300"
                        >
                            <Save className="w-5 h-5" />
                            Speichern
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-stone-100">
                {faqs.sort((a, b) => a.order - b.order).map(item => (
                    <div key={item.id} className={`${!item.isActive ? 'opacity-60 bg-stone-50' : ''}`}>
                        <div
                            className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-stone-50"
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                            <div className="flex items-center gap-3 flex-1">
                                {expandedId === item.id ? (
                                    <ChevronUp className="w-5 h-5 text-stone-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-stone-400" />
                                )}
                                <span className="font-medium text-stone-900">{item.question}</span>
                            </div>
                            <div className="flex gap-2" onClick={e => e.stopPropagation()}>
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
                                    onClick={() => handleDelete(item.id)}
                                    className={`p-2 ${deleteConfirm === item.id ? 'text-red-600' : 'text-stone-400 hover:text-red-600'}`}
                                    aria-label="Löschen"
                                >
                                    {deleteConfirm === item.id ? <Check className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        {expandedId === item.id && (
                            <div className="px-6 pb-4 pl-14 text-stone-600">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
