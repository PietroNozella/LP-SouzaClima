"use client";

import AnimatedSection from "./AnimatedSection";

const differentials = [
  {
    number: "01",
    title: "Atendimento ágil",
    description:
      "Respondemos no mesmo dia e agendamos no menor prazo possível. Sem enrolação e sem espera desnecessária.",
  },
  {
    number: "02",
    title: "Prazo cumprido",
    description:
      "Chegamos na hora marcada e concluímos o serviço no tempo combinado. Seu tempo é valioso para nós.",
  },
  {
    number: "03",
    title: "Técnicos certificados",
    description:
      "Equipe qualificada e atualizada nas normas técnicas. Serviço feito certo da primeira vez.",
  },
  {
    number: "04",
    title: "São Paulo capital",
    description:
      "Atendemos toda a capital paulistana com estrutura e logística para chegar onde você precisa.",
  },
  {
    number: "05",
    title: "Garantia de serviço",
    description:
      "Todo serviço realizado tem garantia. Se houver qualquer problema, retornamos sem custo adicional.",
  },
  {
    number: "06",
    title: "Orçamento sem surpresa",
    description:
      "Preço claro antes de começar. Nada é cobrado além do que foi acordado, sem letras miúdas.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-[#F8FBFF] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-14 text-center">
          <span className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9] shadow-navy-sm">
            Por que nos escolher
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            O que faz a diferença na Souza Clima
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((diff, index) => (
            <AnimatedSection key={diff.number} delay={index * 100}>
              <article className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md">
                <span className="mb-3 block text-4xl font-bold text-[#1966C9]">{diff.number}</span>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{diff.title}</h3>
                <p className="text-sm leading-7 text-slate-500">{diff.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
