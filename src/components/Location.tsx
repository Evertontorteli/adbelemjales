import { MapPin, Navigation as NavigationIcon, Phone } from 'lucide-react';

export function Location() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#206ba3]/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Venha nos visitar</span>
          </div>
          <h2 className="text-[#333333] text-4xl md:text-6xl lg:text-7xl mb-4">
            LOCALIZAÇÃO
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#206ba3] to-[#71d3cf] p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-white text-3xl md:text-4xl mb-2">
              TEMPLO CENTRAL
            </h3>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center">
              <div className="flex items-start justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#206ba3] mt-1 shrink-0" />
                <div>
                  <p className="text-[#333333] text-2xl md:text-3xl mb-1">
                    Avenida Francisco Jalles, N° 3575
                  </p>
                  <p className="text-[#666666] text-lg md:text-xl">
                    Vila Maria - Jales/SP
                  </p>
                  <p className="text-[#999999] text-base md:text-lg mt-2">
                    (Ao lado do Hospital de Amor)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Francisco+Jalles+3575+Jales+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#206ba3] to-[#71d3cf] text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <NavigationIcon className="w-5 h-5" />
                <span>Como Chegar</span>
              </a>
              
              <a
                href="#redes-sociais"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#206ba3] text-[#206ba3] px-8 py-4 rounded-full hover:bg-[#206ba3] hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Entre em Contato</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-[#666666] text-lg md:text-xl">
            Estamos de portas abertas para receber você e sua família!
          </p>
        </div>
      </div>
    </section>
  );
}
