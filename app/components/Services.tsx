"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Projetos",
    description:
      "Projetos em sistemas de ar-condicionado, climatiza\u00e7\u00e3o, ventila\u00e7\u00e3o mec\u00e2nica e refrigera\u00e7\u00e3o para ambientes residenciais, comerciais e industriais.",
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M7 4v16M17 4v16M4 17h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Instala\u00e7\u00e3o",
    description:
      "Instala\u00e7\u00e3o de sistemas de ar-condicionado seguindo boas pr\u00e1ticas, normas t\u00e9cnicas e acabamento organizado.",
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16v7H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18h10M8 11h8M18 15l2 3M6 15l-2 3" />
      </svg>
    ),
  },
  {
    title: "Manuten\u00e7\u00e3o",
    description:
      "Manuten\u00e7\u00e3o preventiva e corretiva para manter os equipamentos funcionando com efici\u00eancia, seguran\u00e7a e maior vida \u00fatil.",
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.7 6.3 3 3M5 19l6.4-6.4M13 5l6 6-7.5 7.5a4.24 4.24 0 0 1-6 0 4.24 4.24 0 0 1 0-6L13 5Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-8 text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#173B69] md:text-[2.5rem]">
            {"Servi\u00e7os principais"}
          </h2>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 120}>
              <article className="h-full rounded-md border border-[#173B69]/35 bg-white px-6 py-7 text-center transition-colors hover:border-[#2689cf]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center text-[#2689cf]">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#173B69]">{service.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
