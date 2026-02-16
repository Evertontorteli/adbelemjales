import { BookOpen, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { useState } from 'react';

const beliefs = [
  {
    title: 'Deus',
    content: 'Cremos em um só Deus, eternamente subsistente em três pessoas: o Pai, o Filho e o Espírito Santo (Dt 6.4; Mt 28.19; Mc 12.29).',
  },
  {
    title: 'Jesus Cristo',
    content: 'Cremos na divindade do Senhor Jesus Cristo, no seu nascimento virginal, na sua vida sem pecado, nos seus milagres, na sua morte vicária e expiatória, na sua ressurreição corporal e na sua ascensão ao céu (Is 7.14; Mt 1.23; Hb 7.26; 1Pe 2.22; 1Co 15.4; At 1.9-11).',
  },
  {
    title: 'Espírito Santo',
    content: 'Cremos na divindade e na personalidade do Espírito Santo, que convence o mundo do pecado, da justiça e do juízo; que regenera, santifica, guia e fortalece o crente (Jo 16.8-11; Rm 8.9; 1Co 6.11; Gl 5.22-23).',
  },
  {
    title: 'Bíblia',
    content: 'Cremos na inspiração verbal e plenária da Bíblia Sagrada, única regra infalível de fé e prática para a vida e o caráter cristão (2Tm 3.14-17; 2Pe 1.21).',
  },
  {
    title: 'Salvação',
    content: 'Cremos que a salvação é obtida somente através do arrependimento e da fé no sacrifício de Jesus Cristo na cruz. É dom de Deus, não de obras (Ef 2.8-9; Rm 10.9-10; At 4.12).',
  },
  {
    title: 'Igreja',
    content: 'Cremos na Igreja como corpo de Cristo, formada por todos os verdadeiros crentes em Jesus, tendo como missão pregar o Evangelho e fazer discípulos (Mt 28.19-20; Ef 1.22-23; 1Co 12.12-13).',
  },
  {
    title: 'Batismo e Santa Ceia',
    content: 'Cremos no batismo em águas por imersão e na Santa Ceia como ordenanças do Senhor, em memória da sua morte e ressurreição (Mt 28.19; Rm 6.4; 1Co 11.23-26).',
  },
  {
    title: 'Volta de Cristo',
    content: 'Cremos na segunda vinda pré-milenial de Cristo, no arrebatamento da Igreja, no juízo final e na vida eterna (1Ts 4.16-17; Ap 20.1-6; Jo 5.28-29).',
  },
];

export function Beliefs() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden" id="cremos">
      {/* Background decoration */}
<div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D4C4B0]/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Nossa fé</span>
          </div>
          <h2 className="text-[#333333] text-4xl md:text-6xl lg:text-7xl mb-4">
            EM QUEM CREMOS
          </h2>
          <p className="text-[#666666] text-xl md:text-3xl max-w-2xl mx-auto">
            A base da nossa fé e doutrina
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B7355] to-[#5C4033] text-white shadow-lg">
            <BookOpen className="w-10 h-10" />
          </div>
        </div>

        <div className="space-y-3">
          {beliefs.map((item, index) => (
            <Collapsible
              key={index}
              open={openItems[index] ?? false}
              onOpenChange={() => toggle(index)}
            >
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-[#8B7355]/30 transition-colors">
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-100/80 transition-colors">
                  <span className="text-[#333333] font-semibold text-lg md:text-xl">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5C4033] shrink-0 transition-transform duration-300 ${
                      openItems[index] ? 'rotate-180' : ''
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-[#666666] text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4">
                      {item.content}
                    </p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
