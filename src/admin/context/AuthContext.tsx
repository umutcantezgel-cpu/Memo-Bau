/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { isAuthenticated, getSession, login, logout as authLogout, extendSession } from '../../services/auth.service';

interface AuthContextType {
    isLoggedIn: boolean;
    username: string | null;
    login: (username: string, password: string) => { success: boolean; message: string };
    logout: () => void;
    extendSession: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        // Check authentication status on mount
        const authenticated = isAuthenticated();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoggedIn(authenticated);

        if (authenticated) {
            const session = getSession();
             
            setUsername(session?.username || null);
        }
    }, []);

    const handleLogin = (user: string, password: string) => {
        const result = login(user, password);
        if (result.success) {
            setIsLoggedIn(true);
            setUsername(user);
        }
        return { success: result.success, message: result.message };
    };

    const handleLogout = () => {
        authLogout();
        setIsLoggedIn(false);
        setUsername(null);
    };

    const handleExtendSession = () => {
        extendSession();
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                username,
                login: handleLogin,
                logout: handleLogout,
                extendSession: handleExtendSession,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
