"use client";

import AnimatedSection from "./AnimatedSection";

const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Ol\u00e1! Quero conhecer o Permock.");

const benefits = [
  {
    title: "Visita Programada",
    description:
      "As manuten\u00e7\u00f5es s\u00e3o agendadas com anteced\u00eancia. Voc\u00ea n\u00e3o precisa se preocupar com datas - a gente avisa no momento certo.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4M16 2v4M3.5 9.5h17M5 5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 5 5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h3M8 16h6" />
      </svg>
    ),
  },
  {
    title: "Relat\u00f3rio de cada visita",
    description:
      "Ap\u00f3s cada atendimento, voc\u00ea recebe um resumo do servi\u00e7o realizado, o estado do equipamento e os pontos de aten\u00e7\u00e3o.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4.5h8l3 3V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V6A1.5 1.5 0 0 1 6.5 4.5H8Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6M9 14h6M9 18h4" />
      </svg>
    ),
  },
  {
    title: "Prioridade no inverno",
    description:
      "Clientes Permock t\u00eam prioridade nos per\u00edodos de maior demanda, com atendimento mais \u00e1gil quando voc\u00ea mais precisa.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M4.22 7.5 19.8 16.5M4.22 16.5 19.8 7.5" />
        <circle cx="12" cy="12" r="2.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function PermockSection() {
  return (
    <section className="bg-[#F8FBFF] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="text-center">
          <span className="inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            {"Permock"}
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-[#173B69] md:text-[2.5rem]">
            {"Seu ar-condicionado "}
            <span className="font-extrabold">{"funcionando o ano inteiro"}</span>
            {". Sem surpresas."}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            {"O Permock \u00e9 o plano de "}
            <strong className="font-semibold text-slate-700">{"manuten\u00e7\u00e3o peri\u00f3dica"}</strong>
            {" da Souza Clima. Voc\u00ea organiza uma vez, e a gente acompanha os cuidados necess\u00e1rios para evitar imprevistos e manter seu equipamento em dia."}
          </p>
        </AnimatedSection>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 120}>
              <article className="flex h-full gap-4 rounded-[24px] border border-[#173B69]/12 bg-white p-6 shadow-navy-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1966C9]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#173B69]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center" delay={360}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1966C9] px-8 py-3.5 font-bold text-white transition-colors hover:bg-[#124C97]"
          >
            Quero conhecer o Permock
            <span aria-hidden="true">-&gt;</span>
          </a>
          <p className="mt-4 text-sm text-slate-500">
            {"Plano sob consulta - fale com a gente e montamos a frequ\u00eancia ideal para os seus equipamentos."}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
