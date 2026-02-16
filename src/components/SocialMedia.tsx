import svgPaths from "../imports/svg-cuvo98uzqz";
import { ExternalLink } from 'lucide-react';

function FacebookIcon() {
  return (
    <div className="relative size-12 md:size-14 group cursor-pointer">
      <svg className="block size-full transition-transform duration-300 group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_facebook)">
          <path clipRule="evenodd" d={svgPaths.p2e7e5080} fill="#206BA3" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip0_facebook">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="relative size-12 md:size-14 group cursor-pointer">
      <svg className="block size-full transition-transform duration-300 group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_instagram)">
          <path d={svgPaths.p1afd3500} fill="#206BA3" />
        </g>
        <defs>
          <clipPath id="clip0_instagram">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function SocialMedia() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Conecte-se</span>
          </div>
          <h2 className="text-[#333333] text-4xl md:text-6xl lg:text-7xl mb-4">
            SIGA-NOS!
          </h2>
          <p className="text-[#666666] text-xl md:text-3xl max-w-2xl mx-auto">
            Fique por dentro de tudo que acontece
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Instagram & Facebook Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-[#71d3cf] to-[#206ba3] rounded-full" />
              <h3 className="text-[#71d3cf] text-2xl md:text-3xl">
                REDES SOCIAIS
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex gap-4">
                <FacebookIcon />
                <InstagramIcon />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[#737479] text-2xl md:text-3xl mb-2">@adbelemjales</p>
                <a 
                  href="https://instagram.com/adbelemjales" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#206ba3] hover:text-[#71d3cf] transition-colors text-sm"
                >
                  <span>Visitar perfil</span>
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
