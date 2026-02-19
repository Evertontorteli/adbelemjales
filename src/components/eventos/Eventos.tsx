import { Calendar } from 'lucide-react';

/**
 * Seção Eventos - agenda e eventos da igreja.
 * Documento próprio para a aba "Eventos" do header.
 */
export function Eventos() {
  return (
    <section
      id="eventos"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#f9fafb] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#374151] tracking-widest uppercase text-sm">Agenda</span>
          <h2 className="text-[#374151] text-3xl md:text-5xl mt-2 mb-4">
            EVENTOS
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            Fique por dentro dos cultos, reuniões e atividades da igreja.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#6b7280]/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#374151]" />
            </div>
            <h3 className="text-[#374151] text-xl font-medium">Programação</h3>
          </div>
          <p className="text-[#374151] text-base leading-relaxed">
            Em breve você encontrará aqui a agenda de cultos, vigílias, congressos e demais eventos. Acompanhe também nossas redes sociais para não perder nada.
          </p>
        </div>
      </div>
    </section>
  );
}
