import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7a6858 0%, #6b5d52 50%, #5e5349 100%)',
      }}
    >
      <div className="relative z-10 py-8 md:py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm md:text-base text-center sm:text-left order-2 sm:order-1">
            Desenvolvido por Everton Torteli • © {new Date().getFullYear()} Todos os direitos reservados
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/20 shrink-0 order-1 sm:order-2"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
