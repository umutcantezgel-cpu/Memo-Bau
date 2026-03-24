import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * Captures rendering errors in child components and displays a fallback UI.
 */
export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
        // Ideally, log to an error reporting service here (e.g., Sentry)
    }

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center border border-stone-100">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                            Upps, da ist etwas schiefgelaufen.
                        </h2>
                        <p className="text-slate-600 mb-8">
                            Ein unerwarteter Fehler ist aufgetreten. Wir wurden benachrichtigt und arbeiten
                            daran.
                        </p>
                        <div className="bg-red-50 text-red-700 p-3 rounded mb-6 text-sm text-left overflow-auto max-h-32">
                            {this.state.error?.message}
                        </div>
                        <Button variant="primary" onClick={this.handleReload}>
                            Seite neu laden
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
