import React, { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Check, Hammer, Fence, Droplets, Leaf, PenTool, ArrowRight } from 'lucide-react';
import { ContactFormData, FormStatus } from '../types';
import { COMPANY_INFO } from '../core/constants';
import { Button } from '../components/common/Button';
import { PageHero } from '../components/common/PageHero';
import { InteractiveMap } from '../components/features/InteractiveMap';
import { SEO } from '../components/common/SEO';
import { Section } from '../components/layout/Section';
import { Reveal } from '../components/common/Reveal';

import { InlineWidget } from 'react-calendly';
import { CookieBlocker } from '../components/common/CookieBlocker';

const PROJECT_TYPES = [
    { id: 'garden-design', label: 'Gartengestaltung', icon: PenTool },
    { id: 'landscaping', label: 'Landschaftsbau', icon: Hammer },
    { id: 'paving', label: 'Pflasterarbeiten', icon: Fence },
    { id: 'irrigation', label: 'Bewässerung', icon: Droplets },
    { id: 'maintenance', label: 'Pflege', icon: Leaf },
];

interface ExtendedContactFormData extends ContactFormData {
    projectType: string;
    propertySize: string;
    timeline: string;
}

export const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<ExtendedContactFormData>({
        name: '', email: '', phone: '', message: '', projectType: '', propertySize: '', timeline: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMsg('');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    subject: 'Neue Haupt-Anfrage über Website',
                    ...formData,
                    privacyConsentGiven: true,
                    privacyConsentTimestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('idle');
                setErrorMsg('Ein Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Eingaben.');
            }
        } catch {
            setStatus('idle');
            setErrorMsg('Netzwerkfehler. Bitte versuchen Sie es später erneut.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main className="bg-neutral-white min-h-screen">
            <SEO
                title="Kontakt aufnehmen | Memo-BauT Garten- & Landschaftsbau"
                description="Starten Sie Ihre Garten-Transformation. Kontaktieren Sie Memo-BauT in Wetzlar für eine unverbindliche Erstberatung und Exzellenz im Landschaftsbau."

                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Kontakt', url: '/kontakt' }
                ]}
            />


            <PageHero
                title="Kontakt aufnehmen"
                subtitle="Starten Sie Ihre Transformation"
                description="Wir freuen uns darauf, von Ihrer Vision zu hören. Vereinbaren Sie ein unverbindliches Erstgespräch."
                backgroundImage="/images/final/contact-hero.webp"
                centered={true}
            />

            <Section bgVariant="white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-24">

                    {/* LEFT COLUMN: Context & Info */}
                    <Reveal animation="fade-in">
                        <div className="mb-space-16">
                            <h2 className="text-h2 font-sans font-bold text-neutral-darkgray mb-space-6 tracking-h2 text-balance">Ihr Weg zum Traumgarten</h2>
                            <p className="text-body text-neutral-midgray font-normal leading-body">
                                Jedes Projekt im Bereich Garten- und Landschaftsbau beginnt mit einem Dialog. Wir nehmen uns Zeit, Ihre Wünsche zu verstehen und die Gegebenheiten vor Ort zu analysieren – sei es für aufwendige Pflasterarbeiten, exklusive Terrassen oder die komplette Neugestaltung Ihrer Außenanlagen.
                            </p>
                        </div>

                        <div className="bg-neutral-white p-space-10 rounded-[var(--radius-lg)] border border-neutral-lightgray shadow-elevation-1 mb-space-12">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-base mb-space-8">Kontaktdaten</h3>
                            <div className="space-y-space-8">
                                <div className="flex gap-6 items-start">
                                    <MapPin className="w-6 h-6 text-neutral-darkgray shrink-0" />
                                    <div>
                                        <p className="font-sans font-bold text-lg text-neutral-darkgray mb-1">Hauptsitz</p>
                                        <p className="text-neutral-midgray font-normal text-sm">{COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <Phone className="w-6 h-6 text-neutral-darkgray shrink-0" />
                                    <div>
                                        <p className="font-sans font-bold text-lg text-neutral-darkgray mb-1">Telefon</p>
                                        <p className="text-neutral-midgray font-normal text-sm">{COMPANY_INFO.phone}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <Mail className="w-6 h-6 text-neutral-darkgray shrink-0" />
                                    <div>
                                        <p className="font-sans font-bold text-lg text-neutral-darkgray mb-1">E Mail</p>
                                        <p className="text-neutral-midgray font-normal text-sm">{COMPANY_INFO.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Reveal>

                    {/* RIGHT COLUMN: The Luxury Form */}
                    <Reveal animation="fade-in-up" delay={100} className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-neutral-offwhite to-accent-base/5 rounded-[var(--radius-xl)] -z-10"></div>
                        <div className="bg-neutral-white p-space-10 rounded-[var(--radius-lg)] shadow-elevation-4 border-t-4 border-accent-base">
                            {status === 'success' ? (
                                <div className="text-center py-24 animate-fade-in-up">
                                    <div className="w-24 h-24 bg-accent-base/10 rounded-full flex items-center justify-center text-accent-base mx-auto mb-8">
                                        <Check size={48} />
                                    </div>
                                    <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-4 text-balance">Anfrage erhalten</h3>
                                    <p className="text-neutral-midgray text-body mb-space-12 max-w-sm mx-auto font-normal">
                                        Vielen Dank. Wir haben Ihre Details erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                                    </p>
                                    <Button onClick={() => setStatus('idle')} variant="outline" className="border-neutral-lightgray text-neutral-darkgray">
                                        Zurück zum Formular
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-space-8">
                                    <div>
                                        <h3 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-2 text-balance">Projektanfrage</h3>
                                        <p className="text-sm text-neutral-midgray font-normal">Füllen Sie das Formular aus für eine kostenlose Ersteinschätzung.</p>
                                    </div>

                                    {/* Interest Grid */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-midgray mb-space-4">Woran sind Sie interessiert?</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {PROJECT_TYPES.map((type) => (
                                                <button
                                                    key={type.id}
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                                                    className={`p-3 sm:p-space-4 rounded-[var(--radius-md)] border text-left transition-all duration-[var(--default-transition-duration)] flex items-center gap-3 ${formData.projectType === type.id
                                                        ? 'border-accent-base bg-accent-base text-neutral-white shadow-elevation-1'
                                                        : 'border-neutral-lightgray bg-neutral-white text-neutral-darkgray hover:border-accent-base/50'
                                                        }`}
                                                >
                                                    <type.icon className="w-5 h-5 shrink-0" />
                                                    <span className="text-sm font-bold break-words hyphens-auto leading-tight">{type.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Personal Info */}
                                    <div className="space-y-space-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-6">
                                            <div className="relative pt-5">
                                                <input required id="name" name="name" type="text" placeholder=" " value={formData.name} onChange={handleInputChange}
                                                    className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] font-normal text-neutral-darkgray" />
                                                <label htmlFor="name" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative pt-5">
                                                <input required id="email" name="email" type="email" placeholder=" " value={formData.email} onChange={handleInputChange}
                                                    className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] font-normal text-neutral-darkgray" />
                                                <label htmlFor="email" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                                                    E Mail
                                                </label>
                                            </div>
                                        </div>
                                        <div className="relative pt-5">
                                            <input id="phone" name="phone" type="tel" placeholder=" " value={formData.phone} onChange={handleInputChange}
                                                className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] font-normal text-neutral-darkgray" />
                                            <label htmlFor="phone" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                                                Telefon (Optional)
                                            </label>
                                        </div>
                                    </div>

                                    {/* Message Area */}
                                    <div className="relative pt-5">
                                        <textarea id="message" rows={4} name="message" value={formData.message} onChange={handleInputChange} placeholder=" "
                                            className="peer w-full bg-transparent border-b-2 border-neutral-lightgray focus:border-accent-base py-2 outline-none transition-[border-color,box-shadow] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] focus:shadow-[0_1px_0_0_var(--color-accent-base)] resize-none font-normal text-neutral-darkgray"
                                        />
                                        <label htmlFor="message" className="absolute left-0 top-0 text-xs font-bold uppercase tracking-widest text-neutral-midgray transition-all duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-base peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest cursor-text pointer-events-none">
                                            Details zum Projekt
                                        </label>
                                    </div>

                                    {/* DSGVO Consent Checkbox */}
                                    <div className="flex items-start gap-3 pt-2">
                                        <div className="flex items-center h-5 mt-1">
                                            <input
                                                id="privacyConsent"
                                                name="privacyConsent"
                                                type="checkbox"
                                                required
                                                className="w-4 h-4 text-accent-base bg-neutral-offwhite border-neutral-lightgray rounded focus:ring-accent-base focus:ring-2 cursor-pointer transition-colors duration-[var(--default-transition-duration)]"
                                            />
                                        </div>
                                        <label htmlFor="privacyConsent" className="text-sm text-neutral-midgray font-normal leading-tight cursor-pointer select-none">
                                            Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <a href="/datenschutz" className="text-accent-base hover:text-primary-base underline underline-offset-2 transition-colors duration-[var(--default-transition-duration)]">Datenschutzerklärung</a>.
                                        </label>
                                    </div>

                                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                                    {errorMsg && <p className="text-red-500 text-sm font-semibold">{errorMsg}</p>}

                                    <Button type="submit" variant="primary" className={`w-full justify-center py-4 text-base mt-space-8 relative transition-[transform,opacity] duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] ${status === 'submitting' ? 'scale-[0.98] opacity-90' : 'hover:scale-[1.02]'}`} disabled={status === 'submitting'}>
                                        <span className={`flex items-center gap-2 transition-opacity duration-[var(--motion-micro-duration)] ease-[var(--motion-micro-easing)] ${status === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                                            Anfrage Absenden <ArrowRight className="w-4 h-4" />
                                        </span>
                                        {status === 'submitting' && (
                                            <span className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin transform-gpu"></div>
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* Calendly Inline Widget */}
                <Reveal animation="fade-in-up">
                    <div className="mt-space-32 border-t border-neutral-lightgray pt-space-24">
                        <div className="text-center mb-space-12">
                            <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-4 text-balance">Direkt Termin vereinbaren</h2>
                            <p className="text-neutral-midgray font-normal leading-body max-w-2xl mx-auto">
                                Wählen Sie einfach einen passenden Zeitslot für ein 15 minütiges Erstgespräch – telefonisch oder via Video Call.
                            </p>
                        </div>
                        <div className="bg-neutral-white shadow-elevation-2 rounded-[var(--radius-lg)] overflow-hidden border border-neutral-lightgray p-4 md:p-8">
                            <CookieBlocker
                                type="marketing"
                                title="Terminbuchung aktivieren"
                                description="Wir nutzen Calendly für eine einfache Terminbuchung. Bitte akzeptieren Sie die Marketing-Cookies, um das Buchungsformular zu laden."
                            >
                                <InlineWidget url={import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/mehmet68-tezgel/30min'} styles={{ height: '700px', width: '100%' }} />
                            </CookieBlocker>
                        </div>
                    </div>
                </Reveal>

                {/* Map Section */}
                <Reveal animation="fade-in">
                    <div className="mt-space-32">
                        <h2 className="text-h3 font-sans font-bold text-neutral-darkgray mb-space-8 text-center text-balance">Unser Wirkungskreis</h2>
                        <div className="h-[400px] w-full rounded-[var(--radius-lg)] overflow-hidden shadow-inner bg-neutral-offwhite border border-neutral-lightgray">
                            <InteractiveMap />
                        </div>
                    </div>
                </Reveal>
            </Section>
        </main>
    );
};
