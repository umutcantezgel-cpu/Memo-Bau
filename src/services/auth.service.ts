/**
 * Admin Authentication Service
 * Handles login, logout, and session management for the admin panel.
 * 
 * Credentials: Arslan / umut123
 * Session: JWT stored in localStorage, 24h expiry
 */

// Simple hash function for password verification (not cryptographically secure, but sufficient for client-side demo)
const hashPassword = (password: string): string => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
};

// Pre-computed hash for 'umut123'
const VALID_CREDENTIALS = {
    username: 'Arslan',
    passwordHash: hashPassword('umut123'),
};

interface AuthSession {
    username: string;
    loginTime: number;
    expiresAt: number;
}

interface AuthResult {
    success: boolean;
    message: string;
    session?: AuthSession;
}

const SESSION_KEY = 'kft_admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Attempt to authenticate with the provided credentials
 */
export const login = (username: string, password: string): AuthResult => {
    // Validate credentials
    if (username !== VALID_CREDENTIALS.username) {
        return {
            success: false,
            message: 'Ungültiger Benutzername',
        };
    }

    if (hashPassword(password) !== VALID_CREDENTIALS.passwordHash) {
        return {
            success: false,
            message: 'Ungültiges Passwort',
        };
    }

    // Create session
    const now = Date.now();
    const session: AuthSession = {
        username,
        loginTime: now,
        expiresAt: now + SESSION_DURATION,
    };

    // Store session in localStorage
    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch {
        return {
            success: false,
            message: 'Sitzung konnte nicht gespeichert werden',
        };
    }

    return {
        success: true,
        message: 'Erfolgreich angemeldet',
        session,
    };
};

/**
 * Log out the current user
 */
export const logout = (): void => {
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch {
        console.error('Failed to remove session');
    }
};

/**
 * Check if the current session is valid
 */
export const isAuthenticated = (): boolean => {
    const session = getSession();
    if (!session) return false;

    // Check if session has expired
    if (Date.now() > session.expiresAt) {
        logout();
        return false;
    }

    return true;
};

/**
 * Get the current session data
 */
export const getSession = (): AuthSession | null => {
    try {
        const stored = localStorage.getItem(SESSION_KEY);
        if (!stored) return null;

        const session: AuthSession = JSON.parse(stored);
        return session;
    } catch {
        return null;
    }
};

/**
 * Extend the current session
 */
export const extendSession = (): boolean => {
    const session = getSession();
    if (!session) return false;

    const now = Date.now();
    const extendedSession: AuthSession = {
        ...session,
        expiresAt: now + SESSION_DURATION,
    };

    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(extendedSession));
        return true;
    } catch {
        return false;
    }
};

/**
 * Get time remaining in session (in milliseconds)
 */
export const getSessionTimeRemaining = (): number => {
    const session = getSession();
    if (!session) return 0;

    const remaining = session.expiresAt - Date.now();
    return remaining > 0 ? remaining : 0;
};
