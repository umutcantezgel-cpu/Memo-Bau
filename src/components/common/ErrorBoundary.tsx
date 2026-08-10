import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';
import { COMPANY_INFO } from '../../core/constants';
import { RefreshCw, Home, Phone } from 'lucide-react';

interface Props {
    children: ReactNode;
    /** Optional contextual fallback message (e.g., for blog vs. service sections) */
    fallbackMessage?: string;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * ErrorBoundary — Branded resilience component.
 *
 * Captures rendering errors in child components and displays a branded
 * fallback UI with retry, home, and contact CTAs. In production, the
 * stack trace is hidden. In development, it's shown for debugging.
 */
export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        // Handle Vite/Webpack ChunkLoadError for seamless updates
        if (
            error.name === 'ChunkLoadError' ||
            error.message.includes('Failed to fetch dynamically imported module') ||
            error.message.includes('Importing a module script failed')
        ) {
            window.location.reload();
            return { hasError: false, error: null };
        }
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Local-only logging — no external SaaS (per pipeline rules)
        console.error('[ErrorBoundary]', {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            path: window.location.pathname,
            timestamp: new Date().toISOString(),
        });
    }

    private handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    private handleGoHome = () => {
        window.location.href = '/';
    };

    public render() {
        if (this.state.hasError) {
            const isDev = import.meta.env.DEV;
            const message = this.props.fallbackMessage
                || 'Etwas ist schiefgelaufen. Wir arbeiten daran.';

            return (
                <div className="min-h-screen flex items-center justify-center bg-neutral-offwhite p-6">
                    <div className="bg-neutral-white p-space-8 rounded-[var(--radius-lg)] shadow-elevation-3 max-w-lg text-center border border-neutral-lightgray">
                        {/* Brand trust element */}
                        <div className="w-16 h-16 bg-primary-base/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <RefreshCw className="w-8 h-8 text-primary-base" />
                        </div>

                        <h2 className="text-2xl font-bold text-neutral-darkgray mb-3">
                            {message}
                        </h2>
                        <p className="text-sm text-neutral-midgray mb-8 leading-relaxed">
                            In der Zwischenzeit können Sie es erneut versuchen, zur Startseite zurückkehren
                            oder uns direkt kontaktieren.
                        </p>

                        {/* Dev-only: error details */}
                        {isDev && this.state.error && (
                            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-6 text-xs text-left overflow-auto max-h-40 font-mono">
                                <strong>{this.state.error.name}:</strong> {this.state.error.message}
                                {this.state.error.stack && (
                                    <pre className="mt-2 whitespace-pre-wrap text-[10px] opacity-70">
                                        {this.state.error.stack}
                                    </pre>
                                )}
                            </div>
                        )}

                        {/* 3 recovery actions */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button variant="primary" onClick={this.handleRetry} className="justify-center">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Erneut versuchen
                            </Button>
                            <Button variant="outline" onClick={this.handleGoHome} className="justify-center">
                                <Home className="w-4 h-4 mr-2" />
                                Startseite
                            </Button>
                        </div>

                        {/* Trust: direct contact */}
                        <p className="mt-6 text-xs text-neutral-midgray">
                            Wenn das Problem bestehen bleibt:{' '}
                            <a
                                href={`tel:${COMPANY_INFO.phone}`}
                                className="text-accent-base hover:text-primary-base underline underline-offset-2 transition-colors"
                            >
                                <Phone className="w-3 h-3 inline mr-1" />
                                {COMPANY_INFO.phone}
                            </a>
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
