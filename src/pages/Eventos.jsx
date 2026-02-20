import { useState, useEffect, useCallback } from 'react';
import { Calendar as CalendarIcon, Loader2, AlertCircle } from 'lucide-react';
import { GOOGLE_CALENDAR_API_KEY as API_KEY, GOOGLE_CALENDAR_ID as CALENDAR_ID } from '../config/calendar.js';

function isImageAttachment(att) {
  if (att.mimeType?.startsWith('image/')) return true;
  if (!att.fileUrl) return false;
  const path = att.fileUrl.split('?')[0].toLowerCase();
  return /\.(jpg|jpeg|png|gif|webp|bmp)(\?|$)/i.test(path);
}

function toDirectImageUrl(att) {
  const fileId = att.fileId ?? (att.fileUrl?.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1] ?? att.fileUrl?.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1]);
  if (fileId) return `https://drive.google.com/uc?export=view&id=${fileId}`;
  if (att.fileUrl && !att.fileUrl.includes('drive.google.com')) return att.fileUrl;
  return null;
}

function getEventImageUrl(event) {
  const attachments = event.attachments ?? [];
  for (const att of attachments) {
    if (!att.fileUrl && !att.fileId) continue;
    if (!isImageAttachment(att)) continue;
    const direct = toDirectImageUrl(att);
    if (direct) return direct;
    if (att.fileUrl && !att.fileUrl.includes('drive.google.com')) return att.fileUrl;
  }
  if (event.description) {
    const imgMatch = event.description.match(/!\[[^\]]*\]\((https?:\/\/[^)]+)\)|<img[^>]+src=["'](https?:\/\/[^"']+)["']/i);
    if (imgMatch) return imgMatch[1] ?? null;
    const urlMatch = event.description.match(/(https?:\/\/[^\s<>"]+\.(?:jpg|jpeg|png|gif|webp))/i);
    if (urlMatch) return urlMatch[1];
  }
  return null;
}

function getDayMonth(dateStr) {
  if (!dateStr) return { day: '—', month: '' };
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return { day: '—', month: '' };
    return {
      day: d.getDate().toString(),
      month: d.toLocaleDateString('pt-BR', { month: 'long' }),
    };
  } catch {
    return { day: '—', month: '' };
  }
}

function formatEventDateLong(dateStr) {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return '—';
    const weekday = d.toLocaleDateString('pt-BR', { weekday: 'long' });
    const day = d.getDate();
    const month = d.toLocaleDateString('pt-BR', { month: 'long' });
    return `${weekday}, ${day} de ${month}`;
  } catch {
    return '—';
  }
}

function formatTimeRange(start, end, isAllDay) {
  if (isAllDay || !start) return '';
  try {
    const startStr = new Date(start).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });
    if (!end) return startStr;
    const endStr = new Date(end).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${startStr} - ${endStr}`;
  } catch {
    return '';
  }
}

function formatEventDate(dateStr, isAllDay) {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return '—';
    if (isAllDay) {
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    }
    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '—';
  }
}

function getMonthBounds(month, year) {
  const timeMin = new Date(year, month, 1);
  const timeMax = new Date(year, month + 1, 0, 23, 59, 59);
  return {
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
  };
}

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

function EventCard({ event, start, isAllDay, imageUrl, formatEventDateLong, formatTimeRange }) {
  const [imgError, setImgError] = useState(false);
  const showImage = imageUrl != null && !imgError;
  const timeLabel = formatTimeRange(start, event.end?.dateTime ?? event.end?.date, isAllDay);

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl bg-white p-4 w-full min-h-0 transition-all duration-300 hover:shadow-xl shadow-lg border border-[#e5e7eb]/80"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <h2 className="text-[26px] font-bold text-[#374151] leading-tight mt-0">
            {event.summary || 'Sem título'}
          </h2>
          {event.location && (
            <p className="mt-[24px] text-[#374151] text-sm leading-snug line-clamp-2">
              {event.location}
            </p>
          )}
        </div>
        {showImage ? (
          <div className="w-[100px] h-[100px] shrink-0 rounded-xl overflow-hidden bg-[#f3f4f6]">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="w-[100px] h-[100px] shrink-0 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
            <CalendarIcon className="h-10 w-10 text-[#6b7280]/60" aria-hidden />
          </div>
        )}
      </div>
      <div className="mt-3 pt-2 flex items-center justify-between gap-2 border-t border-[#e5e7eb]">
        <p className="text-sm font-semibold text-[#374151]">
          {formatEventDateLong(start)}
        </p>
        {timeLabel && (
          <p className="text-sm font-semibold text-[#374151] shrink-0 ml-auto">
            {timeLabel}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Eventos() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = useCallback(async () => {
    if (!API_KEY || !CALENDAR_ID) {
      setError('Calendário ainda não configurado. Em breve você poderá ver os eventos aqui.');
      setEvents([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { timeMin, timeMax } = getMonthBounds(month, year);
      const calendarId = encodeURIComponent(CALENDAR_ID);
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?` +
        `key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=50`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error?.message || `Erro ${res.status}`);
      }
      const data = await res.json();
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const startOfTodayMs = startOfToday.getTime();
      const items = (data.items || []).filter((e) => {
        if (e.status === 'cancelled') return false;
        const start = e.start?.dateTime || e.start?.date;
        if (!start) return false;
        const d = new Date(start);
        const eventStartMs = e.start?.date
          ? new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
          : d.getTime();
        return eventStartMs >= startOfTodayMs;
      });
      setEvents(items);
    } catch (err) {
      setEvents([]);
      if (err?.name === 'AbortError') {
        setError('A requisição demorou demais. Tente novamente.');
      } else {
        setError(err instanceof Error ? err.message : 'Falha ao carregar eventos.');
      }
    } finally {
      setLoading(false);
    }
  }, [month, year]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const years = Array.from({ length: 5 }, (_, i) => now.getFullYear() - 2 + i);

  return (
    <div className="min-h-screen bg-white pt-24 pb-40 md:pt-28 md:pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#374151] tracking-tight">
            Eventos
          </h1>
          <p className="mt-2 text-[#374151] text-sm md:text-base">
            Confira a programação da igreja
          </p>
        </header>

        <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-4">
          <span className="text-sm font-semibold text-[#374151] tracking-wide shrink-0">Filtrar por:</span>
          <div className="flex flex-nowrap items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center gap-2">
              <label htmlFor="month" className="text-sm font-medium text-[#374151] shrink-0">Mês</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="rounded-full border border-[#6b7280]/30 bg-white hover:bg-gray-50 text-[#374151] text-sm pl-4 pr-9 py-3 min-h-[2.75rem] min-w-[10rem] w-auto leading-normal transition-all shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#374151]/30 focus:ring-offset-2 appearance-none"
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="year" className="text-sm font-medium text-[#374151] shrink-0">Ano</label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="rounded-full border border-[#6b7280]/30 bg-white hover:bg-gray-50 text-[#374151] text-sm pl-4 pr-9 py-3 min-h-[2.75rem] min-w-[5.5rem] w-auto leading-normal transition-all shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#374151]/30 focus:ring-offset-2 appearance-none"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#6b7280]" aria-hidden />
            <p className="text-sm text-[#374151]">Carregando eventos...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 mb-6">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-center text-[#374151] py-12">
            Nenhum evento encontrado para {MONTHS[month]} de {year}.
          </p>
        )}

        {!loading && events.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => {
              const start = event.start?.dateTime || event.start?.date;
              const isAllDay = !!event.start?.date;
              const imageUrl = getEventImageUrl(event);
              return (
                <EventCard
                  key={event.id}
                  event={event}
                  start={start}
                  isAllDay={isAllDay}
                  imageUrl={imageUrl}
                  formatEventDateLong={formatEventDateLong}
                  formatTimeRange={formatTimeRange}
                />
              );
            })}
          </div>
        )}

        <div className="h-40 md:h-24 w-full flex-shrink-0" aria-hidden />
      </div>
    </div>
  );
}
