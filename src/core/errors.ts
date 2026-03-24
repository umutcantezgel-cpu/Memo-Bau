/**
 * Base class for all application-specific errors.
 * Ensures consistent error handling and logging structure.
 */
export class AppError extends Error {
    public readonly code: string;
    public readonly isOperational: boolean;

    constructor(message: string, code: string = 'UNKNOWN_ERROR', isOperational: boolean = true) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Thrown when an API call fails or returns an unexpected response.
 */
export class ApiError extends AppError {
    constructor(message: string, public readonly status?: number) {
        super(message, 'API_ERROR');
    }
}

/**
 * Thrown when input validation fails.
 */
export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 'VALIDATION_ERROR');
    }
}

/**
 * Thrown when a configuration value is missing or invalid.
 */
export class ConfigurationError extends AppError {
    constructor(message: string) {
        super(message, 'CONFIG_ERROR', false);
    }
}
