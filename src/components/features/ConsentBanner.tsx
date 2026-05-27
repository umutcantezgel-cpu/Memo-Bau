import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import { Button } from '../common/Button';

interface ConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const ConsentBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('sg-consent');
    if (!consent) {
      // Small delay for animation effect
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const newSettings = { necessary: true, analytics: true, marketing: true };
    saveConsent(newSettings);
  };

  const handleRejectAll = () => {
    const newSettings = { necessary: true, analytics: false, marketing: false };
    saveConsent(newSettings);
  };

  const handleSaveSelection = () => {
    saveConsent(settings);
  };

  const saveConsent = (preferences: ConsentSettings) => {
    localStorage.setItem('sg-consent', JSON.stringify(preferences));
    setIsOpen(false);
    // Here you would trigger actual analytics init based on preferences
    if (preferences.analytics) {
      console.log('Analytics initialized');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[600] p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-2xl transition-all duration-500 text-slate-200">
      <div className="max-w-7xl mx-auto">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-white font-serif font-bold text-lg mb-2 flex items-center">
                <Shield className="w-5 h-5 text-accent mr-2" />
                Datenschutz & Privatsphäre
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                Wir nutzen Cookies und ähnliche Technologien, um Ihnen ein optimales Web Erlebnis zu
                bieten. Dazu zählen technisch notwendige Dienste sowie Tools für Analyse und
                Marketing, die uns helfen, unsere Website für Sie zu verbessern.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Button
                variant="secondary"
                onClick={() => setShowDetails(true)}
                className="text-xs py-2 px-4 border-slate-600 text-white hover:bg-slate-800"
              >
                Einstellungen
              </Button>
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="text-xs py-2 px-4 border-slate-600 text-white hover:bg-slate-800"
              >
                Ablehnen
              </Button>
              <Button variant="gold" onClick={handleAcceptAll} className="text-xs py-2 px-6">
                Alles akzeptieren
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <h3 className="text-white font-serif font-bold text-lg">Cookie Einstellungen</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-white"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm" id="label-necessary">
                    Notwendig
                  </span>
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="accent-accent w-4 h-4 cursor-not-allowed opacity-50"
                    aria-labelledby="label-necessary"
                    aria-describedby="desc-necessary"
                  />
                </div>
                <p className="text-xs text-slate-500" id="desc-necessary">
                  Essenzielle Funktionen für den Betrieb der Seite (Sicherheit, Auswahl speichern).
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm" id="label-analytics">
                    Analyse
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                    className="accent-accent w-4 h-4 cursor-pointer"
                    aria-labelledby="label-analytics"
                    aria-describedby="desc-analytics"
                  />
                </div>
                <p className="text-xs text-slate-500" id="desc-analytics">
                  Hilft uns zu verstehen, wie Besucher mit der Website interagieren (anonymisiert).
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm" id="label-marketing">
                    Marketing
                  </span>
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                    className="accent-accent w-4 h-4 cursor-pointer"
                    aria-labelledby="label-marketing"
                    aria-describedby="desc-marketing"
                  />
                </div>
                <p className="text-xs text-slate-500" id="desc-marketing">
                  Ermöglicht personalisierte Inhalte und Anzeigen basierend auf Ihren Interessen.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="text-xs border-slate-600 hover:bg-slate-800"
              >
                Alle ablehnen
              </Button>
              <Button variant="gold" onClick={handleSaveSelection} className="text-xs">
                Auswahl speichern
              </Button>
            </div>

            <div className="mt-4 text-[10px] text-slate-600 flex gap-4">
              <a href="#" className="hover:text-slate-400 underline">
                Datenschutzerklärung
              </a>
              <a href="#" className="hover:text-slate-400 underline">
                Impressum
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
