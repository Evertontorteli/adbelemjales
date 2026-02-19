import { Church, MapPin } from 'lucide-react';

const ENDERECO = {
  rua: 'Avenida Francisco Jalles, N° 3575',
  bairro: 'Vila Maria',
  cidade: 'Jales/SP',
  referencia: 'Ao lado do Hospital de Amor',
};

const MAPS_QUERY = encodeURIComponent('Avenida Francisco Jalles 3575 Jales SP');

export function Igreja() {
  return (
    <section
      id="igreja"
      className="py-16 md:py-24 px-4 bg-[#f9fafb] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#374151] tracking-widest uppercase text-sm">Conheça</span>
          <h2 className="text-[#374151] text-3xl md:text-5xl mt-2 mb-4">
            IGREJA
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            Nossa história, nossa casa e como nos encontrar.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] overflow-hidden">
          <div className="bg-[#e5e7eb] p-6 text-center border-b border-[#e5e7eb]">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#6b7280]/20 rounded-full mb-4">
              <Church className="w-7 h-7 text-[#374151]" />
            </div>
            <h3 className="text-[#374151] text-xl md:text-2xl font-medium">AD Belém – Templo Central</h3>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-[#6b7280] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#374151] text-lg font-medium">{ENDERECO.rua}</p>
                <p className="text-[#374151]">{ENDERECO.bairro} – {ENDERECO.cidade}</p>
                <p className="text-[#374151] text-sm mt-1">{ENDERECO.referencia}</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#374151] px-6 py-3 rounded-full transition-all border border-[#6b7280]/30"
            >
              <MapPin className="w-5 h-5" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
