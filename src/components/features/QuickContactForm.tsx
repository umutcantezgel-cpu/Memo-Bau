import React, { useState, FormEvent, useEffect, useRef, useCallback } from 'react';
import { FormStatus } from '../../types';
import { Button } from '../common/Button';
import { LiveRegion } from '../common/LiveRegion';
import { ArrowRight, Check } from 'lucide-react';
import { useConversionTracking } from '../../hooks/useTrackingHooks';

interface QuickContactFormProps {
    prefillLocation?: string;
}

const AUTOSAVE_KEY = 'memo_form_autosave';

export const QuickContactForm: React.FC<QuickContactFormProps> = ({ prefillLocation }) => {
    const [formData, setFormData] = useState(() => {
        // Restore from sessionStorage on mount (autosave recovery)
        try {
            const saved = sessionStorage.getItem(AUTOSAVE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                return { name: parsed.name || '', phone: parsed.phone || '', email: parsed.email || '', message: parsed.message || '' };
            }
        } catch { /* ignore parse errors */ }
        return {
            name: '',
            phone: '',
            email: '',
            message: prefillLocation ? `Anfrage für Projekt in ${prefillLocation}:\n\n` : ''
        };
    });

    // Autosave to sessionStorage (debounced 3s)
    const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const saveToSession = useCallback(() => {
        try {
            sessionStorage.setItem(AUTOSAVE_KEY, JSON.stringify(formData));
        } catch { /* quota exceeded or unavailable */ }
    }, [formData]);

    useEffect(() => {
        if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
        autosaveTimer.current = setTimeout(saveToSession, 3000);
        return () => { if (autosaveTimer.current) clearTimeout(autosaveTimer.current); };
    }, [formData, saveToSession]);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [hasTrackedStart, setHasTrackedStart] = useState(false);
    const [hasTrackedProgress, setHasTrackedProgress] = useState(false);
    
    // CC-09: Time-based anti-spam — record mount time
    const mountTimeRef = useRef<number>(Date.now());
    // CC-09: Submit throttle — prevent rapid re-submissions
    const [isThrottled, setIsThrottled] = useState(false);
    
    const track = useConversionTracking();

    const checkProgress = () => {
        let filledCount = 0;
        if (formData.name) filledCount++;
        if (formData.phone) filledCount++;
        if (formData.email) filledCount++;
        if (formData.message) filledCount++;
        
        if (filledCount >= 2 && !hasTrackedProgress) {
            track('form_progress');
            setHasTrackedProgress(true);
        }
    };

    useEffect(() => {
        checkProgress();
    }, [formData]);

    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        // CC-09: Time-based bot detection — reject submissions < 3s after mount
        if (Date.now() - mountTimeRef.current < 3000) {
            return; // Silently reject (bots fill forms instantly)
        }
        
        // CC-09: Honeypot check (belt-and-suspenders with the hidden field)
        const honeypot = (e.target as HTMLFormElement).elements.namedItem('_gotcha') as HTMLInputElement | null;
        if (honeypot?.value) {
            return; // Bot filled the hidden field
        }
        
        // CC-09: Throttle — prevent rapid re-submissions
        if (isThrottled) return;
        
        setStatus('submitting');
        setErrorMsg('');
        track('form_submit');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    subject: `Neue Anfrage ${prefillLocation ? `aus ${prefillLocation}` : ''}`,
                    privacyConsentGiven: true,
                    privacyConsentTimestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
                track('form_success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                try { sessionStorage.removeItem(AUTOSAVE_KEY); } catch { /* ignore */ }
                // CC-09: 10s throttle after successful submission
                setIsThrottled(true);
                setTimeout(() => setIsThrottled(false), 10000);
            } else {
                setStatus('idle');
                track('form_error', { reason: 'api_error' });
                setErrorMsg('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
            }
        } catch {
            setStatus('idle');
            track('form_error', { reason: 'network_error' });
            setErrorMsg('Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.');
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!hasTrackedStart) {
            track('form_start');
            setHasTrackedStart(true);
        }
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === 'success') {
        return (
            <div className="bg-neutral-white p-space-8 rounded-[var(--radius-lg)] border border-neutral-lightgray shadow-elevation-2 text-center py-16 animate-fade-in-up">
                <div className="w-16 h-16 bg-accent-base/10 rounded-full flex items-center justify-center text-accent-base mx-auto mb-6">
                    <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkgray mb-2">Vielen Dank!</h4>
                <p className="text-sm text-neutral-midgray mb-6">Wir haben Ihre Anfrage erhalten und melden uns in Kürze.</p>
                <Button variant="outline" onClick={() => setStatus('idle')} className="w-full justify-center">
                    Weitere Anfrage senden
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-neutral-white p-space-8 rounded-[var(--radius-lg)] border border-neutral-lightgray shadow-elevation-2 space-y-space-6 relative">
            <h4 className="font-bold text-neutral-darkgray text-lg mb-space-6">Rückruf anfordern</h4>

            <div className="relative pt-4">
                <input required id="qc-name" name="name" type="text" placeholder=" " value={formData.name} onChange={handleInput}
                    aria-invalid={!!errorMsg} aria-describedby={errorMsg ? "qc-error" : undefined}
                    className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] text-sm font-normal text-neutral-darkgray" />
                <label htmlFor="qc-name" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                    Name
                </label>
            </div>

            <div className="relative pt-4">
                <input required id="qc-phone" name="phone" type="tel" placeholder=" " value={formData.phone} onChange={handleInput}
                    className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] text-sm font-normal text-neutral-darkgray" />
                <label htmlFor="qc-phone" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                    Telefonnummer
                </label>
            </div>

            <div className="relative pt-4">
                <textarea id="qc-message" name="message" rows={3} placeholder=" " value={formData.message} onChange={handleInput}
                    className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] resize-none text-sm font-normal text-neutral-darkgray" />
                <label htmlFor="qc-message" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                    Detaillierte Nachricht (Optional)
                </label>
            </div>

            {/* DSGVO Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-4 mt-0.5">
                    <input
                        id="privacyConsentQuick"
                        name="privacyConsent"
                        type="checkbox"
                        required
                        className="w-3.5 h-3.5 text-accent-base bg-neutral-offwhite border-neutral-lightgray rounded focus:ring-accent-base focus:ring-2 cursor-pointer transition-colors duration-[var(--default-transition-duration)]"
                    />
                </div>
                <label htmlFor="privacyConsentQuick" className="text-xs text-neutral-midgray font-normal leading-tight cursor-pointer select-none">
                    Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden. Weitere Infos in der <a href="/datenschutz" className="text-accent-base hover:text-primary-base underline underline-offset-2 transition-colors duration-[var(--default-transition-duration)]">Datenschutzerklärung</a>.
                </label>
            </div>

            {/* Honeypot field for anti-spam */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

            <LiveRegion politeness="assertive">
                {errorMsg && <p id="qc-error" role="alert" className="text-red-500 text-xs font-medium">{errorMsg}</p>}
            </LiveRegion>

            <Button type="submit" variant="primary" className="w-full justify-center mt-space-6 relative" disabled={status === 'submitting'}>
                <span className={`flex items-center gap-2 transition-opacity duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] ${status === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                    Jetzt Anfragen <ArrowRight className="w-4 h-4" />
                </span>
                {status === 'submitting' && (
                    <span className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin transform-gpu"></div>
                    </span>
                )}
            </Button>
        </form>
    );
};
