import { Heart, Send } from 'lucide-react';

export function MuralOracoes() {
  return (
    <section
      id="mural-oracoes"
      className="py-16 md:py-24 px-4 bg-[#F8F8F8] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#484440] tracking-widest uppercase text-sm">Comunidade</span>
          <h2 className="text-[#484440] text-3xl md:text-5xl mt-2 mb-4">
            MURAL DE ORAÇÕES
          </h2>
          <p className="text-[#484440] text-lg max-w-2xl mx-auto">
            Envie seu pedido de oração. Nossa igreja ora por você e sua família.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E8E0D5] mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8B7355]/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#484440]" />
            </div>
            <div>
              <h3 className="text-[#484440] text-xl font-medium">Pedidos de oração</h3>
              <p className="text-[#484440] text-sm">Seus pedidos são acolhidos com carinho</p>
            </div>
          </div>
          <p className="text-[#484440] text-base leading-relaxed mb-8">
            Se você tem um pedido de oração, um motivo de gratidão ou deseja que a igreja ore por você ou por alguém, utilize o botão abaixo para enviar. Nossa equipe e intercessores levam cada pedido em oração.
          </p>

          <a
            href="https://wa.me/5517999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20oração"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8E0D5] hover:bg-[#D4C4B0] text-[#484440] px-6 py-3 rounded-full transition-all shadow-lg border border-[#8B7355]/30"
          >
            <Send className="w-5 h-5" />
            <span>Fazer pedido de oração</span>
          </a>
          <p className="text-[#484440] text-sm mt-4">
            Você será direcionado ao WhatsApp para enviar seu pedido.
          </p>
        </div>
      </div>
    </section>
  );
}
