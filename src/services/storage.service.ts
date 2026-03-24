/**
 * Centralized storage service for managing localStorage interactions.
 * Provides type-safe get/set/remove operations with error handling.
 */

const STORAGE_KEYS = {
    CONSENT_SETTINGS: 'consent-settings',
} as const;

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * Safely retrieves and parses a JSON value from localStorage.
 */
export const getStorageItem = <T>(key: StorageKey): T | null => {
    try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        return null;
    }
};

/**
 * Safely stringifies and stores a value in localStorage.
 */
export const setStorageItem = <T>(key: StorageKey, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error writing localStorage key "${key}":`, error);
    }
};

/**
 * Removes an item from localStorage.
 */
export const removeStorageItem = (key: StorageKey): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
    }
};

export { STORAGE_KEYS };
