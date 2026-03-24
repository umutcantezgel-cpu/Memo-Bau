/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { getCMSData, saveCMSData } from '../../services/cms.service';
import { CMSData } from '../../types/cms.types';

interface CMSContextType {
    data: CMSData | null;
    isLoading: boolean;
    error: string | null;
    refreshData: () => void;
    updateData: (updates: Partial<CMSData>) => boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

interface CMSProviderProps {
    children: ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
    const [data, setData] = useState<CMSData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadData = useCallback(() => {
        setIsLoading(true);
        setError(null);
        try {
            const cmsData = getCMSData();
            setData(cmsData);
        } catch (err) {
            setError('Fehler beim Laden der Daten');
            console.error('CMS data load error:', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const refreshData = useCallback(() => {
        loadData();
    }, [loadData]);

    const updateData = useCallback((updates: Partial<CMSData>): boolean => {
        if (!data) return false;

        try {
            const newData = { ...data, ...updates };
            const success = saveCMSData(newData);
            if (success) {
                setData(newData);
            }
            return success;
        } catch (err) {
            setError('Fehler beim Speichern der Daten');
            console.error('CMS data save error:', err);
            return false;
        }
    }, [data]);

    return (
        <CMSContext.Provider
            value={{
                data,
                isLoading,
                error,
                refreshData,
                updateData,
            }}
        >
            {children}
        </CMSContext.Provider>
    );
};

export const useCMS = (): CMSContextType => {
    const context = useContext(CMSContext);
    if (!context) {
        throw new Error('useCMS must be used within a CMSProvider');
    }
    return context;
};
