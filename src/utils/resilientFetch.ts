/**
 * Result<T> — Typed outcome container for all async operations.
 *
 * Enforces explicit error handling at the call site.
 * Never returns untyped `any`. Every fetch function should return Result<T>.
 */
export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; code?: number };

/**
 * resilientFetch — Fetch wrapper with retry, timeout, and typed Result<T>.
 *
 * @param url - The URL to fetch
 * @param options - Standard RequestInit options
 * @param config - Retry and timeout configuration
 * @returns Result<T> — typed success or failure
 */
export async function resilientFetch<T>(
  url: string,
  options: RequestInit = {},
  config: { retries?: number; backoffMs?: number; timeoutMs?: number } = {}
): Promise<Result<T>> {
  const { retries = 3, backoffMs = 1000, timeoutMs = 10000 } = config;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        // Don't retry 4xx client errors (except 429)
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          return { ok: false, error: `HTTP ${response.status}`, code: response.status };
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const data = (await response.json()) as T;
      return { ok: true, data };
    } catch (err) {
      const isLastAttempt = attempt === retries - 1;

      if (isLastAttempt) {
        const message =
          err instanceof DOMException && err.name === 'AbortError'
            ? 'Zeitüberschreitung der Anfrage'
            : err instanceof TypeError
              ? 'Netzwerkfehler. Prüfen Sie Ihre Verbindung.'
              : err instanceof Error
                ? err.message
                : 'Unbekannter Fehler';

        return { ok: false, error: message };
      }

      // Exponential backoff: 1s, 2s, 4s
      await new Promise((r) => setTimeout(r, backoffMs * Math.pow(2, attempt)));
    }
  }

  // TypeScript exhaustiveness — should never reach here
  return { ok: false, error: 'Maximale Versuche überschritten' };
}
