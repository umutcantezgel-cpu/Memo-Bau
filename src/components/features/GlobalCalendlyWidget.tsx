import React, { useState, useEffect } from 'react';
import { PopupWidget } from 'react-calendly';
import { useLocation } from 'react-router-dom';

const LEGAL_PATHS = ['/impressum', '/datenschutz', '/agb', '/cookie-richtlinie', '/barrierefreiheit'];

export const GlobalCalendlyWidget: React.FC = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/placeholder'; // Update with actual URL

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRootElement(document.getElementById('root'));
        }
    }, []);

    const location = useLocation();
    const isLegalPage = LEGAL_PATHS.some(p => location.pathname.startsWith(p));

    if (!rootElement || isLegalPage) return null;

    return (
        <div className="hidden md:block" style={{ zIndex: 40 }}>
            <PopupWidget
                url={calendlyUrl}
                rootElement={rootElement}
                text="Kostenlose Beratung buchen"
                textColor="#ffffff"
                color="#b38b59"
            />
        </div>
    );
};
