import svgPaths from "../imports/svg-cuvo98uzqz";
import { Clock } from 'lucide-react';

function BookWithChurch() {
  return (
    <div className="relative size-32 md:size-36 group-hover:scale-110 transition-transform duration-500">
      <svg className="block size-full drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g clipPath="url(#clip0_book_church)">
          <path d={svgPaths.p2bd5f000} fill="#206BA3" />
          <path d={svgPaths.p2f306f00} fill="#273B7A" />
          <g clipPath="url(#clip1_book_church)">
            <path d={svgPaths.p38030c00} fill="#BCBEC0" />
            <path d={svgPaths.pf15e200} fill="#FFD983" />
            <path d={svgPaths.p26727800} fill="#662113" />
            <path d={svgPaths.p23718072} fill="#FFD983" />
            <path d={svgPaths.pb4f4a00} fill="#DD2E44" />
            <path d={svgPaths.p28f44b00} fill="#662113" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_book_church">
            <rect fill="white" height="150" width="150" />
          </clipPath>
          <clipPath id="clip1_book_church">
            <rect fill="white" height="100" transform="translate(25 25)" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BookWithBible() {
  return (
    <div className="relative size-32 md:size-36 group-hover:scale-110 transition-transform duration-500">
      <svg className="block size-full drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g clipPath="url(#clip0_book_bible)">
          <path d={svgPaths.p2bd5f000} fill="#206BA3" />
          <path d={svgPaths.p220d2d80} fill="#273B7A" />
          <g>
            <path d={svgPaths.pebef280} fill="#FFC61B" />
            <path d={svgPaths.p18725000} fill="#FFC61B" />
          </g>
          <path d={svgPaths.p3156c000} fill="#E2A610" />
          <path d={svgPaths.p27276e00} fill="#FEE187" />
          <path d={svgPaths.p97afc00} fill="#FFEDB5" />
          <path d={svgPaths.p19107f00} fill="#FEE187" />
        </g>
        <defs>
          <clipPath id="clip0_book_bible">
            <rect fill="white" height="150" width="150" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

const scheduleItems = [
  {
    icon: BookWithChurch,
    title: "Culto de Quinta",
    day: "Quinta-Feira",
    time: "20:00h",
    description: "Noite de adoração e palavra",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: BookWithBible,
    title: "Escola Bíblica",
    day: "Domingo",
    time: "09:00h",
    description: "Estudo da palavra de Deus",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: BookWithChurch,
    title: "Culto Dominical",
    day: "Domingo",
    time: "18:30h",
    description: "Celebração e comunhão",
    gradient: "from-red-500 to-red-600"
  }
];

export function Schedule() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#206ba3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Agenda</span>
          </div>
          <h2 className="text-[#333333] text-4xl md:text-6xl lg:text-7xl mb-4">
            PROGRAMAÇÃO
          </h2>
          <p className="text-[#666666] text-xl md:text-2xl max-w-2xl mx-auto">
            Venha participar dos nossos encontros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <Icon />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-[#333333] text-2xl md:text-3xl mb-2">
                      {item.day}
                    </h3>
                    <p className="text-[#666666] text-sm md:text-base mb-4">
                      {item.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-3 rounded-full">
                      <Clock className="w-5 h-5 text-[#206ba3]" />
                      <span className="text-[#333333] text-xl md:text-2xl">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-[#666666] text-lg md:text-xl mb-6">
            Todos são bem-vindos! Venha nos visitar.
          </p>
          <a 
            href="#localizacao"
            className="inline-block bg-gradient-to-r from-[#8B7355] to-[#5C4033] text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Ver Localização
          </a>
        </div>
      </div>
    </section>
  );
}
