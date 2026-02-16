import svgPaths from "../imports/svg-cuvo98uzqz";
import { ExternalLink } from 'lucide-react';
import pastorPhoto from "../assets/pr local.png";

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
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Nossa liderança</span>
          </div>
          <h2 className="text-[#333333] text-4xl md:text-6xl lg:text-7xl mb-4">
            PASTOR LOCAL
          </h2>
          <p className="text-[#666666] text-xl md:text-3xl max-w-2xl mx-auto">
            Conheça quem pastoreia a nossa igreja
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col sm:flex-row items-center gap-8">
            <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-[#8B7355]/30 shadow-xl">
              <img
                src={pastorPhoto}
                alt="Pastor local"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="h-1 w-12 bg-gradient-to-r from-[#8B7355] to-[#5C4033] rounded-full mx-auto sm:mx-0 mb-4" />
              <h3 className="text-[#333333] text-2xl md:text-3xl mb-2">
                Pastor local
              </h3>
              <p className="text-[#737479] text-lg mb-6">
                Nosso pastor local está à disposição para oração, aconselhamento e comunhão. Acompanhe as novidades e mensagens pelo Instagram.
              </p>
              <a
                href="https://instagram.com/pc_oliveira1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8E0D5] hover:bg-[#D4C4B0] text-[#1a1a1a] px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-[#8B7355]/30"
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
