"use client";

import AnimatedSection from "./AnimatedSection";

const indicators = [
  {
    number: "10+",
    label: "Anos de experiência",
    description: "Conhecimento acumulado em climatização",
  },
  {
    number: "500+",
    label: "Clientes satisfeitos",
    description: "Residências e empresas em São Paulo",
  },
  {
    number: "24h",
    label: "Resposta rápida",
    description: "Atendimento ágil e eficiente",
  },
  {
    number: "100%",
    label: "Compromisso no serviço",
    description: "Garantia em todos os atendimentos",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-10 text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            Autoridade
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            Números que falam por si
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {indicators.map((indicator, idx) => (
            <AnimatedSection
              key={indicator.label}
              delay={idx * 100}
              className="rounded-[24px] border border-slate-200 bg-[#F8FBFF] p-6 text-center shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md"
            >
              <p className="mb-2 text-3xl font-bold text-[#1966C9] md:text-4xl">
                {indicator.number}
              </p>
              <p className="mb-2 text-sm font-semibold text-slate-900 md:text-base">{indicator.label}</p>
              <p className="text-xs leading-6 text-slate-500 md:text-sm">{indicator.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
