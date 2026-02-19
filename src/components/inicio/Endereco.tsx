import { MapPin, Navigation as NavIcon } from 'lucide-react';

const ENDERECO = {
  nome: 'AD Belém - Templo Central',
  rua: 'Avenida Francisco Jalles, N° 3575',
  bairro: 'Vila Maria',
  cidade: 'Jales/SP',
  referencia: 'Ao lado do Hospital de Amor',
};

const MAPS_QUERY = encodeURIComponent('Avenida Francisco Jalles 3575 Jales SP');

export function Endereco() {
  return (
    <section
      id="endereco"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#F8F8F8] to-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#484440] tracking-widest uppercase text-sm">Venha nos visitar</span>
          <h2 className="text-[#484440] text-3xl md:text-5xl mt-2 mb-4">
            ENDEREÇO DA IGREJA
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#E8E0D5] overflow-hidden">
          <div className="bg-gradient-to-r from-[#8B7355] to-[#5C4033] p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white text-xl md:text-2xl font-medium">{ENDERECO.nome}</h3>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-[#8B7355] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#484440] text-lg md:text-xl font-medium">{ENDERECO.rua}</p>
                <p className="text-[#484440]">{ENDERECO.bairro} - {ENDERECO.cidade}</p>
                <p className="text-[#484440] text-sm mt-1">{ENDERECO.referencia}</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B7355] to-[#5C4033] text-white px-6 py-3 rounded-full hover:opacity-90 transition-all"
            >
              <NavIcon className="w-5 h-5" />
              <span>Como chegar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
