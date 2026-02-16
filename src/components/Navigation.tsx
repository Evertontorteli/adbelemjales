import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Home, Calendar, Heart, Church, Users, X } from 'lucide-react';
import svgPaths from "../imports/svg-cuvo98uzqz";

function LogoSmall() {
  return (
    <div className="relative size-10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g id="Camada_x0020_1">
          <path d={svgPaths.p46b8840} id="Vector" stroke="#373435" strokeMiterlimit="22.9256" strokeWidth="0.0762" />
          <path d={svgPaths.p35076280} fill="url(#paint0_linear_nav)" id="Vector_2" />
          <g id="_1866541660560">
            <path clipRule="evenodd" d={svgPaths.p1775cb00} fill="#F5F0E8" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p4837400} fill="#F5F0E8" fillRule="evenodd" id="Vector_4" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_nav" x1="0" x2="139.759" y1="69.8796" y2="69.8796">
            <stop stopColor="#8B7355" />
            <stop offset="1" stopColor="#5C4033" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Desktop: Início, Eventos, Igreja, Doação, Departamentos */
const menuItemsDesktop = [
  { label: 'Início', to: '/' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Igreja', to: '/igreja' },
  { label: 'Doação', to: '/doacao' },
  { label: 'Departamentos', to: '/departamentos' }
];

/** Mobile: Início, Eventos, Doação, Mais (expande: Igreja, Departamentos) */
const menuItemsMobileMain = [
  { label: 'Início', to: '/', Icon: Home },
  { label: 'Eventos', to: '/eventos', Icon: Calendar },
  { label: 'Doação', to: '/doacao', Icon: Heart }
];

const menuItemsMobileMais = [
  { label: 'Igreja', to: '/igreja', Icon: Church },
  { label: 'Departamentos', to: '/departamentos', Icon: Users }
];

const DESKTOP_BREAKPOINT_PX = 1024;

export function Navigation() {
  const [isMaisOpen, setIsMaisOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BREAKPOINT_PX
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT_PX}px)`);
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const handleLinkClick = () => {
    setIsMaisOpen(false);
  };

  const headerScrolledClass = isScrolled
    ? 'bg-white shadow-lg'
    : 'bg-white/95 backdrop-blur-sm shadow-md';

  return (
    <>
      {/* DESKTOP (≥1024px): só o header de cima */}
      {isDesktop && (
        <header
          aria-label="Navegação principal"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerScrolledClass}`}
        >
          <nav className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-between h-20">
<Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <LogoSmall />
              </div>
              <span className="text-[#5C4033] tracking-wide">AD BELÉM JALES</span>
            </Link>
            <div className="flex items-center gap-1">
              {menuItemsDesktop.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-2 text-[#333333] hover:text-[#5C4033] transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-[#E8E0D5]/60 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              ))}
              </div>
            </div>
          </nav>
        </header>
      )}

      {/* Modal "Mais": overlay + caixa centralizada (controlado por isMaisOpen) */}
      {isMaisOpen && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 99999 }}
          aria-modal="true"
          role="dialog"
          aria-label="Mais opções"
        >
          {/* Fundo escuro — clicar fecha */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Fechar"
            onClick={() => setIsMaisOpen(false)}
          />
          {/* Caixa no meio da tela */}
          <div
            className="absolute w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-[#E8E0D5] bg-white p-6 shadow-xl"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 100000 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-medium text-[#5C4033]">Mais opções</h2>
              <button
                type="button"
                className="rounded-lg p-2 text-[#333333] hover:bg-[#E8E0D5]/50"
                aria-label="Fechar"
                onClick={() => setIsMaisOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {menuItemsMobileMais.map((item) => {
                const Icon = item.Icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={handleLinkClick}
                    className="flex items-center gap-4 rounded-xl border border-[#E8E0D5] bg-[#F5F0E8]/50 py-4 px-5 text-[#333333] transition-colors hover:bg-[#E8E0D5]/70 active:bg-[#E8E0D5]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B7355]/20">
                      <Icon className="h-6 w-6 text-[#5C4033]" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE (<1024px): só a barra de botões */}
      {!isDesktop && (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8E0D5] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-pb pt-3 pb-4 px-3">
        <div className="flex items-stretch max-w-lg mx-auto">
          {menuItemsMobileMain.map((item) => {
            const Icon = item.Icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleLinkClick}
                className="flex-1 py-3 px-2 flex flex-col items-center gap-1.5 text-sm font-medium text-[#333333] hover:text-[#5C4033] active:bg-[#E8E0D5]/30 transition-colors"
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <button
            type="button"
            aria-label="Abrir mais opções"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMaisOpen(true);
            }}
            className="flex-1 py-3 px-2 flex flex-col items-center gap-1.5 text-sm font-medium text-[#333333] hover:text-[#5C4033] active:bg-[#E8E0D5]/30 transition-colors touch-manipulation"
          >
            <ChevronUp className="w-5 h-5 shrink-0" />
            <span>Mais</span>
          </button>
        </div>
      </div>
      )}
    </>
  );
}
