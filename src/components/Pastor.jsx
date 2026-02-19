import svgPaths from "../imports/svg-cuvo98uzqz";
import { ExternalLink } from 'lucide-react';

function InstagramIcon() {
  return (
    <div className="relative size-12 md:size-14">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_pastor_instagram)">
          <path d={svgPaths.p1afd3500} fill="#E1306C" />
        </g>
        <defs>
          <clipPath id="clip0_pastor_instagram">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Pastor() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white" id="pastor">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#484440] tracking-widest uppercase text-sm">Nossa liderança</span>
          </div>
          <h2 className="text-[#484440] text-4xl md:text-6xl lg:text-7xl">
            PASTOR LOCAL
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 pt-28 sm:pt-8 sm:pl-40 md:pl-48 md:pr-12 md:py-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-visible">
            {/* Foto: cabeça fora do círculo (acima), círculo mostra tórax */}
            <div
              className="absolute left-1/2 sm:left-0 top-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 -translate-y-1/2 z-10 shrink-0 overflow-visible w-40 sm:w-48 md:w-56"
              style={{ height: '11.5rem' }}
            >
              <img
                src="/pastor.png"
                alt="Pastor local"
                className="absolute inset-0 w-full h-full object-cover object-[50%_28%]"
                style={{ height: '14rem', top: '-2.5rem' }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 bg-white"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at 50% 100%, black 50%, white 50%)',
                  maskImage: 'radial-gradient(circle at 50% 100%, black 50%, white 50%)',
                }}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full ring-4 ring-white shadow-2xl pointer-events-none" style={{ boxShadow: '0 0 0 4px white, 0 25px 50px -12px rgba(0,0,0,0.25)' }} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="h-1 w-12 bg-gradient-to-r from-[#8B7355] to-[#5C4033] rounded-full mx-auto sm:mx-0 mb-4" />
              <h3 className="text-[#484440] text-2xl md:text-3xl mb-4">
                Palavra do Pastor
              </h3>
              <div className="text-[#484440] leading-relaxed space-y-4 text-base md:text-lg mb-6">
                <p>
                  Estar à frente da Assembleia de Deus, Ministério do Belém, é um chamado que carrego no coração com profunda honra e gratidão. Mais do que uma responsabilidade, é uma missão de amor: servir, acolher e interceder por cada vida que chega em busca de consolo, direção ou simplesmente de um abraço que traga paz à alma. Nosso compromisso é caminhar lado a lado, oferecendo cuidado, escuta e esperança.
                </p>
                <p>
                  Trabalhamos com zelo e dedicação para construir um ambiente que seja verdadeiramente familiar, onde a graça de Deus se manifesta em cada detalhe e onde você possa fortalecer sua comunhão com o Senhor de forma leve, profunda e transformadora.
                </p>
                <p>
                  Nosso templo foi preparado para acolher toda a sua família. Aqui, cada pessoa — da criança ao adulto — encontra seu lugar, seu propósito e o sentimento de pertencimento. Com muito carinho, desenvolvemos iniciativas como a musicalização para crianças, adolescentes, jovens e adultos, porque acreditamos que o louvor também é uma forma de expressar amor e fé.
                </p>
                <p>
                  Acima de tudo, desejamos ser instrumentos de paz e transformação, refletindo os ensinamentos e o amor de Jesus em cada atitude. Convido você a caminhar conosco e a viver a experiência do poder restaurador do amor de Deus. Conte comigo. Juntos, seguiremos firmes nessa jornada de fé.
                </p>
                <p className="font-medium">
                  Com carinho,<br />
                  Pr. Claudio Oliveira
                </p>
              </div>
              <a
                href="https://instagram.com/pc_oliveira1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8E0D5] hover:bg-[#D4C4B0] text-[#484440] px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-[#8B7355]/30"
              >
                <InstagramIcon />
                <span>@pc_oliveira1</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
