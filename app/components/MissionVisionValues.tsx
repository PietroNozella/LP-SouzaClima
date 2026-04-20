"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Missão",
    description:
      "Entregar climatização com agilidade, cuidado técnico e atendimento que transmite segurança desde o primeiro contato.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Visão",
    description:
      "Ser referência em São Paulo pela combinação entre resposta rápida, execução limpa e serviço bem feito na primeira visita.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    ),
  },
  {
    title: "Valores",
    description:
      "Pontualidade, transparência no orçamento, respeito ao ambiente do cliente e compromisso real com o pós-serviço.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21 3.75 16.5V7.5L12 3l8.25 4.5v9L12 21Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5 12 12.75l3.75-2.25" />
      </svg>
    ),
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            Missão, visão e valores
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            Estrutura por trás de um atendimento confiável
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Um serviço técnico transmite mais confiança quando a empresa deixa claro como trabalha e o que sustenta essa entrega.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 120}>
              <article className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-navy-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-navy-md">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1966C9]">
                  {pillar.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-sm leading-7 text-slate-500">{pillar.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
