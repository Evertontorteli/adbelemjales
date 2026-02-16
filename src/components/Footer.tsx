import { ArrowUp, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #8B7355 0%, #6B5344 50%, #5C4033 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white text-xl md:text-2xl mb-2">
                AD BELÉM JALES
              </p>
              <p className="text-white/80 text-sm md:text-base flex items-center justify-center md:justify-start gap-1.5 mt-1">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Avenida Francisco Jalles, 3575 – Vila Maria, Jales/SP</span>
              </p>
              <p className="text-white/70 text-sm md:text-base mt-4">
                Desenvolvido por Everton Torteli • © {new Date().getFullYear()} Todos os direitos reservados
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/20"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
