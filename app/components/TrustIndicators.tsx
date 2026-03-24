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
    label: "Resposta garantida",
    description: "Atendimento ágil e eficiente",
  },
  {
    number: "100%",
    label: "Satisfação garantida",
    description: "Com garantia em todos os serviços",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 md:py-20 bg-[#1B3A5C]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block bg-[#1B3A5C]/10 text-[#1B3A5C] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Por que confiar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B3A5C]">
            Números que falam por si
          </h2>
        </AnimatedSection>

        {/* Grid de indicadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, idx) => (
            <AnimatedSection
              key={idx}
              delay={idx * 100}
              className="text-center p-6 bg-white rounded-lg shadow-navy-sm hover:shadow-navy-md transition-shadow duration-300"
            >
              <p className="text-4xl md:text-5xl font-bold text-[#C8A96E] mb-2">
                {indicator.number}
              </p>
              <p className="font-semibold text-[#1B3A5C] mb-2">{indicator.label}</p>
              <p className="text-sm text-gray-500">{indicator.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
