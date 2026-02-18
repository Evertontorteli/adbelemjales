import { useState, useEffect, useCallback } from 'react';
import { Calendar as CalendarIcon, MapPin, Loader2, AlertCircle, ArrowUpRight } from 'lucide-react';

const API_KEY = import.meta.env?.VITE_GOOGLE_CALENDAR_API_KEY ?? '';
const CALENDAR_ID = import.meta.env?.VITE_GOOGLE_CALENDAR_ID ?? '';

type GoogleCalendarEvent = {
  id: string;
  summary?: string | null;
  description?: string | null;
  location?: string | null;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
  status?: string;
  attachments?: Array<{ fileUrl?: string; mimeType?: string }>;
};

/** Extrai a primeira URL de imagem da descrição (markdown ou HTML) ou dos anexos da API. */
function getEventImageUrl(event: GoogleCalendarEvent): string | null {
  if (event.description) {
    const imgMatch = event.description.match(/!\[[^\]]*\]\((https?:\/\/[^)]+)\)|<img[^>]+src=["'](https?:\/\/[^"']+)["']/i);
    if (imgMatch) return imgMatch[1] ?? null;
    const urlMatch = event.description.match(/(https?:\/\/[^\s<>"]+\.(?:jpg|jpeg|png|gif|webp))/i);
    if (urlMatch) return urlMatch[1];
  }
  const att = event.attachments?.[0];
  if (att?.fileUrl && att?.mimeType?.startsWith('image/')) return att.fileUrl;
  return null;
}

function getDayMonth(dateStr: string | undefined): { day: string; month: string } {
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

function formatEventDate(dateStr: string | undefined, isAllDay: boolean): string {
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

function getMonthBounds(month: number, year: number) {
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

const CARD_BG_COLORS = [
  'bg-[#FEF7E6]',   // amarelo suave
  'bg-[#E8F0E8]',   // verde muito claro
  'bg-[#F0E8F5]',   // lavanda suave
  'bg-[#E8EEF5]',   // azul muito claro
];

function EventCard({
  event,
  start,
  isAllDay,
  day,
  month,
  imageUrl,
  formatEventDate,
  colorIndex = 0,
}: {
  event: GoogleCalendarEvent;
  start: string | undefined;
  isAllDay: boolean;
  day: string;
  month: string;
  imageUrl: string | null;
  formatEventDate: (dateStr: string | undefined, isAllDay: boolean) => string;
  colorIndex?: number;
}) {
  const [imgError, setImgError] = useState(false);
  const showImage = imageUrl != null && !imgError;
  const bgClass = CARD_BG_COLORS[colorIndex % CARD_BG_COLORS.length];

  return (
    <article className={`group flex overflow-hidden rounded-2xl border border-[#E8E0D5]/60 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${bgClass}`}>
      {/* Canto esquerdo: quadro com a imagem do evento */}
      <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 p-3 flex items-center justify-center">
        <div className="w-full h-full overflow-hidden rounded-xl border border-white/50 shadow-md bg-white/50">
          {showImage ? (
            <img
              src={imageUrl!}
              alt=""
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#8B7355]/30 to-[#5C4033]/20">
              <CalendarIcon className="h-10 w-10 text-[#8B7355]/60" aria-hidden />
            </div>
          )}
        </div>
      </div>
      {/* Lado direito: nome do evento e, embaixo, dia e data */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-4 pr-4 pl-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base sm:text-lg font-semibold leading-snug text-[#333333]">
            {event.summary || 'Sem título'}
          </h2>
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/70 flex items-center justify-center border border-[#E8E0D5]/80">
            <ArrowUpRight className="h-4 w-4 text-[#5C4033]" aria-hidden />
          </span>
        </div>
        <p className="mt-2 flex items-center gap-2 text-sm text-[#555555]">
          <span className="font-semibold text-[#5C4033]">{day} de {month}</span>
          <span className="text-[#8B7355]/80">·</span>
          {formatEventDate(start, isAllDay)}
          {!isAllDay && event.end?.dateTime && (
            <span> – {new Date(event.end.dateTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
          )}
        </p>
        {event.location && (
          <p className="mt-1 flex items-center gap-2 text-sm text-[#555555]">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#8B7355]" />
            <span className="truncate">{event.location}</span>
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
  const [events, setEvents] = useState<GoogleCalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    if (!API_KEY || !CALENDAR_ID) {
      setError('Calendário ainda não configurado. Em breve você poderá ver os eventos aqui.');
      setEvents([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { timeMin, timeMax } = getMonthBounds(month, year);
      const calendarId = encodeURIComponent(CALENDAR_ID);
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?` +
        `key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=50`;
      const res = await fetch(url);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error?.message || `Erro ${res.status}`);
      }
      const data = await res.json();
      const items = (data.items || []).filter((e: GoogleCalendarEvent) => e.status !== 'cancelled');
      setEvents(items);
    } catch (err) {
      setEvents([]);
      setError(err instanceof Error ? err.message : 'Falha ao carregar eventos.');
    } finally {
      setLoading(false);
    }
  }, [month, year]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const years = Array.from({ length: 5 }, (_, i) => now.getFullYear() - 2 + i);

  return (
    <div className="min-h-screen bg-[#F5F0E8] pt-24 pb-40 md:pt-28 md:pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#5C4033] tracking-tight">
            Eventos
          </h1>
          <p className="mt-2 text-[#666666] text-sm md:text-base">
            Confira a programação da igreja
          </p>
        </header>

        {/* Filtro: mês e ano — card de controle */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-[#E8E0D5] bg-white px-6 py-4 shadow-sm">
          <span className="text-sm font-medium text-[#5C4033]">Filtrar por:</span>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="month" className="sr-only">Mês</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="rounded-xl border border-[#E8E0D5] bg-[#F5F0E8]/50 px-4 py-2.5 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:ring-offset-2"
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="year" className="sr-only">Ano</label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="rounded-xl border border-[#E8E0D5] bg-[#F5F0E8]/50 px-4 py-2.5 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:ring-offset-2"
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
            <Loader2 className="h-8 w-8 animate-spin text-[#8B7355]" aria-hidden />
            <p className="text-sm text-[#666666]">Carregando eventos...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 mb-6">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-center text-[#666666] py-12">
            Nenhum evento encontrado para {MONTHS[month]} de {year}.
          </p>
        )}

        {!loading && events.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {events.map((event, index) => {
              const start = event.start?.dateTime || event.start?.date;
              const isAllDay = !!event.start?.date;
              const imageUrl = getEventImageUrl(event);
              const { day, month } = getDayMonth(start);
              return (
                <EventCard
                  key={event.id}
                  event={event}
                  start={start}
                  isAllDay={isAllDay}
                  day={day}
                  month={month}
                  imageUrl={imageUrl}
                  formatEventDate={formatEventDate}
                  colorIndex={index}
                />
              );
            })}
          </div>
        )}

        {/* Espaço no final: no mobile a rolagem desce até a barra de botões */}
        <div className="h-40 md:h-24 w-full flex-shrink-0" aria-hidden />
      </div>
    </div>
  );
}
