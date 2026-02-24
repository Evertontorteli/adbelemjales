/**
 * Configuração Web Push (lembretes 1h antes dos eventos).
 * VITE_VAPID_PUBLIC_KEY é injetada em build time.
 */
export const VAPID_PUBLIC_KEY = process.env.VITE_VAPID_PUBLIC_KEY || '';

/** Retorna true se o push está configurado (backend + chave pública). */
export const isPushConfigured = Boolean(VAPID_PUBLIC_KEY);
