"use client";

import AnimatedSection from "./AnimatedSection";

const differentials = [
  {
    number: "01",
    title: "Atendimento ágil",
    description:
      "Respondemos no mesmo dia e agendamos no menor prazo possível. Sem enrolação, sem espera desnecessária.",
  },
  {
    number: "02",
    title: "Prazo cumprido",
    description:
      "Chegamos na hora marcada. Concluímos o serviço no tempo combinado. Seu tempo é valioso para nós.",
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
      "Preço claro antes de começar. Nada é cobrado além do que foi acordado. Sem letras miúdas.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 md:py-20 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block bg-[#1B3A5C]/10 text-[#1B3A5C] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Por que nos escolher
          </span>
          <h2 className="font-serif heading-serif text-3xl md:text-4xl font-bold text-[#1B3A5C]">
            O que faz a diferença na Souza Clima
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, i) => (
            <AnimatedSection key={diff.number} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-navy-md transition-all duration-300 h-full">
                <span className="font-serif text-4xl font-bold text-[#C8A96E]/30 block mb-3">
                  {diff.number}
                </span>
                <h3 className="font-semibold text-[#1B3A5C] text-lg mb-2">
                  {diff.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
