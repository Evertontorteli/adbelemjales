import { Share2 } from 'lucide-react';

export function RedesSociais() {
  return (
    <section
      id="redes-sociais"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#f9fafb] to-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#374151] tracking-widest uppercase text-sm">Conecte-se</span>
          <h2 className="text-[#374151] text-3xl md:text-5xl mt-2 mb-4">
            SIGA NOSSAS REDES SOCIAIS
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] overflow-hidden">
          <div className="bg-[#e5e7eb] border-b border-[#e5e7eb] p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#6b7280]/20 rounded-full mb-4">
              <Share2 className="w-7 h-7 text-[#374151]" />
            </div>
            <h3 className="text-[#374151] text-xl md:text-2xl font-medium">@adbelemjales</h3>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-[#374151] text-center mb-6">
              Acompanhe nossas publicações, cultos e novidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/adbelemjales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#374151] px-6 py-3 rounded-full transition-all border border-[#6b7280]/30"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/adbelemjales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#374151] px-6 py-3 rounded-full transition-all border border-[#6b7280]/30"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
