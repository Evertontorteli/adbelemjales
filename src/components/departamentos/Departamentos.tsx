import { Users } from 'lucide-react';

/**
 * Seção Departamentos - ministérios e setores da igreja.
 * Documento próprio para a aba "Departamentos" do header.
 */
export function Departamentos() {
  return (
    <section
      id="departamentos"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#F5F0E8] to-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#5C4033] tracking-widest uppercase text-sm">Ministérios</span>
          <h2 className="text-[#5C4033] text-3xl md:text-5xl mt-2 mb-4">
            DEPARTAMENTOS
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Conheça os setores e ministérios que compõem nossa igreja.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-[#E8E0D5] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8B7355]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#5C4033]" />
            </div>
            <h3 className="text-[#333333] text-xl font-medium">Nossos departamentos</h3>
          </div>
          <p className="text-[#666666] text-base leading-relaxed mb-6">
            A AD Belém Jales conta com diversos departamentos e ministérios para atender crianças, jovens, mulheres, homens, casais e toda a família. Em breve mais informações sobre cada um.
          </p>
        </div>
      </div>
    </section>
  );
}
