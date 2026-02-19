export default function Igreja() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-12 text-center md:mb-16">
          <h1 className="text-3xl font-semibold tracking-tight text-[#484440] md:text-4xl">
            Nossa História
          </h1>
          <p className="mt-3 text-base text-[#484440] md:text-lg">
            AD Belém – Ministério do Belém em Jales/SP
          </p>
        </header>

        <article className="flex flex-col gap-8 md:gap-12 mb-16 md:mb-24">
          <section className="rounded-2xl border border-[#E8E0D5] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-lg bg-[#8B7355]/10 px-3 py-1 text-sm font-medium text-[#484440]">
                1948
              </span>
              <h2 className="text-xl font-semibold text-[#484440] md:text-2xl">
                Origem
              </h2>
            </div>
            <p className="leading-relaxed text-[#484440] [text-wrap:balance]">
              A Assembleia de Deus – Ministério do Belém em Jales/SP nasceu no final de 1948, quando o <strong className="text-[#484440]">Pr. Florentino Zacarias</strong> chegou à região com sua família. Após dois anos de trabalho missionário, iniciou os cultos em Jales — primeiro debaixo de uma mangueira, depois nas casas dos irmãos.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E0D5] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-[#8B7355]/10 px-3 py-1 text-sm font-medium text-[#484440]">
                1970
              </span>
              <h2 className="text-xl font-semibold text-[#484440] md:text-2xl">
                Crescimento
              </h2>
            </div>
            <p className="leading-relaxed text-[#484440] [text-wrap:balance]">
              Com o crescimento da igreja, foi necessário alugar um salão na Rua Oito. Em <strong className="text-[#484440]">30 de agosto de 1970</strong>, foi inaugurado o templo próprio no Jardim América.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E0D5] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-[#8B7355]/10 px-3 py-1 text-sm font-medium text-[#484440]">
                Décadas seguintes
              </span>
              <h2 className="text-xl font-semibold text-[#484440] md:text-2xl">
                Expansão
              </h2>
            </div>
            <p className="leading-relaxed text-[#484440] [text-wrap:balance]">
              Durante <strong className="text-[#484440]">34 anos</strong> de liderança, o Pr. Florentino expandiu a obra por toda a região, alcançando inclusive o Mato Grosso do Sul e o Triângulo Mineiro. Em seguida, o <strong className="text-[#484440]">Pr. Sebastião Umbelino de Oliveira</strong> assumiu a presidência, conduzindo um período de grande crescimento e construindo o Centro de Eventos na Avenida Francisco Jales — hoje conhecido como o <strong className="text-[#484440]">Templo Central</strong> das Assembleias de Deus Ministério Belém de Jales e região.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E0D5] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-[#8B7355]/10 px-3 py-1 text-sm font-medium text-[#484440]">
                2007
              </span>
              <h2 className="text-xl font-semibold text-[#484440] md:text-2xl">
                Continuidade
              </h2>
            </div>
            <p className="leading-relaxed text-[#484440] [text-wrap:balance]">
              Em dezembro de 2007, a presidência foi transferida ao <strong className="text-[#484440]">Pr. Claudio de Oliveira</strong>, que segue dando continuidade ao legado com dedicação e visão.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E0D5] bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-semibold text-[#484440] md:text-2xl">
              Hoje
            </h2>
            <p className="leading-relaxed text-[#484440] [text-wrap:balance]">
              Atualmente, a igreja conta com milhares de membros, diversas congregações na cidade e região, além de missionários, atuando no Brasil e no exterior.
            </p>
          </section>

          <section
            className="rounded-2xl border-2 border-[#8B7355]/30 bg-gradient-to-br from-[#E8E0D5]/50 to-[#F8F8F8] p-8 text-center md:p-10"
            aria-label="Mensagem de boas-vindas"
          >
            <p className="text-lg font-medium leading-relaxed text-[#484440] md:text-xl">
              Seja bem-vindo à AD Belém de Jales — lugar de cura e recomeços.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
