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
            <span className="text-[#374151] tracking-widest uppercase text-sm">Nossa liderança</span>
          </div>
          <h2 className="text-[#374151] text-4xl md:text-6xl lg:text-7xl">
            PASTOR LOCAL
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
              {/* Círculo: foto com enquadramento que mantém a cabeça inteira visível */}
              <div className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white shadow-xl bg-gray-100">
                <img
                  src="/pastor.png"
                  alt="Pastor local"
                  className="w-full h-full object-cover object-[50%_35%]"
                />
              </div>
            <div className="flex-1 text-center sm:text-left min-w-0">
              <h3 className="text-[#374151] text-2xl md:text-3xl mb-4">
                Palavra do Pastor
              </h3>
              <div className="text-[#374151] leading-relaxed space-y-4 text-base md:text-lg mb-6">
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
                className="inline-flex items-center gap-2 bg-[#e5e7eb] hover:bg-[#d1d5db] text-[#374151] px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-[#6b7280]/30"
              >
                <InstagramIcon />
                <span>@pc_oliveira1</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
