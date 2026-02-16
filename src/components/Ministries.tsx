import { useState } from 'react';
import { Heart, Users, BookOpen, Baby, Guitar, Globe, Handshake, Music, Cross, ChevronRight } from 'lucide-react';

const ministries = [
  {
    icon: Heart,
    title: "Ação Social",
    description: "Ação social é um trabalho crucial. Gólatas 6:10 diz: Portanto, enquanto temos oportunidade, façamos o bem a todos, principalmente aos da família da fé. Trata-se bem de ações que visam fornecer apoio e suporte necessário a quem está em dificuldades.",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Círculo de Oração",
    description: "O departamento UFADJA, visa trabalhar efetivamente com as mulheres da igreja, através de palestras, encontros, chás e reuniões semanais. O UFADJA tem como objetivo principal ajudar as mulheres a melhorar como mãe, esposa, filha e a pessoa tanto dentro da igreja como fora dela.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: Music,
    title: "Coral",
    description: "O Coral tem como objetivo exclusivo a adoração através do louvor. Trabalhamos incessantemente aprimorando os que se juntam, louvamos ao Senhor nos cultos e em datas comemorativas na igreja. O Coral apresenta ao público de músicas mais sacra e litúrgica.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BookOpen,
    title: "Curso Cupom",
    description: "O Curso Preparatório para Obreiros e Ministros, tem por finalidade, ajudar e preparar os futuros obreiros e missionários. Os participantes recebem orientações a respeito do método de Trabalho e ministério, cargos eclesiásticos e hierarquia.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Cross,
    title: "Curso Teológico",
    description: "O Curso de Teologia é muito e intuto de treinar o aluno através do estudo das principais questões teológicas da fé cristã. Possuindo o treinamento e sabedoria para adquirir e profunda e sistemática, para defender a sua fé e obter crescimento.",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Baby,
    title: "Departamento Infantil",
    description: "DIA, trabalha no cuidado das nossas crianças. Para isso, temos materiais específicos educativos e feito para cada faixa etária, professores capacitados para ensinar e estes mobilizados.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Discipulado",
    description: "A igreja do Senhor, vem sofrendo cada vez mais evasões de cristãos ou que se afastaram de Deus, porque não realizaram o discipulado. O curso de mentoria para novos convertidos foi criado justamente para suprir esta demanda.",
    color: "from-teal-500 to-cyan-600"
  },
  {
    icon: BookOpen,
    title: "Escola Bíblica Dominical",
    description: "Na vida somos eternos alunos. Passamos classes para crianças, jovens e adultas, sejam eles novos convertidos ou membros, para que todos tenham acesso ao ensino bíblico de qualidade.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: Music,
    title: "Equipe de Louvor",
    description: "A visão do Ministério é sermos achados por Deus como verdadeiros adoradores (João 4:24). Não se trata de apenas usar os talentos e habilidades concedidas por Deus sob a unção do Espírito Santo.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Grupo de Jovens",
    description: "UMADEJ, tem como objetivo auxiliar os jovens a desenvolver sua identidade em Cristo e promover uma vida de santidade, como a Congresso do UMADEJ, realizado uma vez por ano, buscamos assim dar a juventude.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Missões",
    description: "A Missão Graça para todos é um departamento que atua de forma direta e estratégica para ajudar a igreja. Além de acolhimento a imigrantes refugiados no Brasil e ao redor mundo.",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: Guitar,
    title: "Orquestra",
    description: "A Orquestra Louvores Celestes é um diferencial no nosso templo hoje com músicos voluntários e capacitados em aumentar a fé e nos proporcionar uma experiência única através das louvores apresentados.",
    color: "from-fuchsia-500 to-pink-600"
  },
  {
    icon: Handshake,
    title: "Unidos Para Sempre",
    description: "O Ministério de Casais, busca apoiar, aconselhar, incentivar e despertar nas famílias o interesse, pelo desenvolvimento do testemunho cristão. Os frutos deste trabalho podem ser vistos em diversos lares sendo transformados.",
    color: "from-emerald-500 to-teal-600"
  }
];

export function Ministries() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#206ba3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#5C4033] tracking-widest uppercase text-sm">Conheça nossos</span>
          </div>
          <h2 className="text-[#333333] text-4xl md:text-6xl lg:text-7xl mb-4">
            MINISTÉRIOS
          </h2>
          <p className="text-[#666666] text-xl md:text-2xl max-w-2xl mx-auto">
            Encontre seu lugar e use seus dons para servir
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${ministry.color} p-6 transform group-hover:scale-105 transition-transform duration-500`}>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  <h3 className="text-white text-xl mt-4">
                    {ministry.title}
                  </h3>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-96' : 'max-h-32'
                  }`}
                >
                  <p className={`text-[#555555] leading-relaxed p-6 ${
                    isExpanded ? '' : 'line-clamp-3'
                  }`}>
                    {ministry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-10 md:p-12">
          <h3 className="text-[#333333] text-2xl md:text-3xl mb-4">
            Quer fazer parte de um ministério?
          </h3>
          <p className="text-[#666666] text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como você pode servir e crescer em comunidade.
          </p>
          <a 
            href="#redes-sociais"
            className="inline-block bg-gradient-to-r from-[#206ba3] to-[#71d3cf] text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
