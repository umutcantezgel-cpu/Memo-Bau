import { CookieConsentConfig } from 'vanilla-cookieconsent';
import { syncConsentFromLibrary } from '../services/userProfile.service';

export const cookieConsentConfig: CookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true,
            enabled: true
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/
                    },
                    {
                        name: '_gid'
                    }
                ]
            }
        },
        marketing: {},
        personalization: {}
    },
    language: {
        default: 'de',
        translations: {
            de: {
                consentModal: {
                    title: 'Wir verwenden Cookies',
                    description: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    showPreferencesBtn: 'Einstellungen verwalten',
                    footer: '<a href="/datenschutz">Datenschutz</a>\n<a href="/cookie-richtlinie">Cookie-Richtlinie</a>'
                },
                preferencesModal: {
                    title: 'Cookie-Einstellungen',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Alle ablehnen',
                    savePreferencesBtn: 'Einstellungen speichern',
                    closeIconLabel: 'Modal schließen',
                    sections: [
                        {
                            title: 'Verwendung von Cookies',
                            description: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Sie können Ihre Präferenzen unten anpassen.'
                        },
                        {
                            title: 'Streng notwendige Cookies',
                            description: 'Diese Cookies sind für das Funktionieren der Website unerlässlich und können in unseren Systemen nicht ausgeschaltet werden.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Analyse-Cookies',
                            description: 'Diese Cookies helfen uns, das Nutzerverhalten zu verstehen und die Leistung der Website zu verbessern. Beispielsweise verwenden wir Google Analytics.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Marketing-Cookies',
                            description: 'Diese Cookies werden verwendet, um Marketing-Tools wie das Calendly-Buchungswidget bereitzustellen.',
                            linkedCategory: 'marketing'
                        },
                        {
                            title: 'Personalisierungs-Cookies',
                            description: 'Diese Cookies ermöglichen es der Website, sich an Ihre Präferenzen und Profileinstellungen zu erinnern.',
                            linkedCategory: 'personalization'
                        },
                        {
                            title: 'Weitere Informationen',
                            description: 'Für weitere Informationen lesen Sie bitte unsere <a href="/datenschutz">Datenschutzerklärung</a> und <a href="/cookie-richtlinie">Cookie-Richtlinie</a>.'
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: false,
    autoShow: true,
    hideFromBots: true,
    revision: 1, // Start revision version
    
    onConsent: () => {
        syncConsentFromLibrary();
    },
    onChange: () => {
        syncConsentFromLibrary();
    }
};
