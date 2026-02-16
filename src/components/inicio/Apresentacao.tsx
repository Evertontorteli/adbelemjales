import svgPaths from "../../imports/svg-cuvo98uzqz";
import imgVector from "figma:asset/ced135a2e408f0118777b4699f067e032dbe27fe.png";
import { ChevronDown } from 'lucide-react';

function CamadaX2() {
  return (
    <div className="relative size-[140px] md:size-[180px] animate-float">
      <svg className="block size-full drop-shadow-2xl" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g>
          <path d={svgPaths.p46b8840} stroke="#373435" strokeMiterlimit="22.9256" strokeWidth="0.0762" fill="none" />
          <path d={svgPaths.p35076280} fill="url(#paint0_linear_apresentacao)" />
          <path clipRule="evenodd" d={svgPaths.p1775cb00} fill="#F5F0E8" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p4837400} fill="#F5F0E8" fillRule="evenodd" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_apresentacao" x1="0" x2="139.759" y1="69.8796" y2="69.8796">
            <stop stopColor="#8B7355" />
            <stop offset="1" stopColor="#5C4033" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Apresentacao() {
  return (
    <section
      id="apresentacao"
      className="relative min-h-screen bg-gradient-to-br from-[#E8E0D5] via-[#D4C4B0] to-[#8B7355] overflow-hidden flex items-center justify-center px-4 py-12 pt-24 md:pt-32"
    >
      <div className="absolute inset-0">
        <img alt="" className="absolute w-full h-full object-cover opacity-10" src={imgVector} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-10 md:mb-12">
          <CamadaX2 />
        </div>
        <div className="mb-8 md:mb-10">
          <svg className="w-full max-w-4xl mx-auto drop-shadow-2xl" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1051 148">
            <g>
              <path d={svgPaths.p304b7c80} fill="#5C4033" />
              <path d={svgPaths.p8170a80} fill="#5C4033" />
              <path d={svgPaths.p38f2ec80} fill="#5C4033" />
              <path d={svgPaths.p341ae700} fill="#5C4033" />
              <path d={svgPaths.p3cf14940} fill="#5C4033" />
              <path d={svgPaths.p35520d80} fill="#5C4033" />
              <path d={svgPaths.p26eb7b80} fill="#5C4033" />
              <path d={svgPaths.p35290080} fill="#5C4033" />
              <path d={svgPaths.p2835e770} fill="#5C4033" />
              <path d={svgPaths.p28724580} fill="#5C4033" />
              <path d={svgPaths.p222b9c20} fill="#5C4033" />
              <path d={svgPaths.pf2e6e00} fill="#5C4033" />
            </g>
          </svg>
        </div>
        <h1 className="text-[#5C4033] text-3xl md:text-5xl lg:text-6xl tracking-wide mb-6 drop-shadow-lg">
          LUGAR DE CURA E RECOMEÇOS
        </h1>
        <p className="text-[#5C4033]/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Seja bem-vindo à AD Belém Jales. Uma igreja de portas abertas para sua família.
        </p>
        <div className="h-1 w-32 bg-[#5C4033]/40 mx-auto rounded-full" />
      </div>

      <a
        href="#pastor"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5C4033]/80 hover:text-[#5C4033] transition-all duration-300 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
