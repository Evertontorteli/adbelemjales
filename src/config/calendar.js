/**
 * Configuração da API do Google Calendar (página Eventos).
 * Parcel substitui process.env.VAR pelo valor do .env em build time (referência direta).
 */
export const GOOGLE_CALENDAR_API_KEY = process.env.VITE_GOOGLE_CALENDAR_API_KEY || '';
export const GOOGLE_CALENDAR_ID = process.env.VITE_GOOGLE_CALENDAR_ID || '';
export const isCalendarConfigured = Boolean(GOOGLE_CALENDAR_API_KEY && GOOGLE_CALENDAR_ID);
