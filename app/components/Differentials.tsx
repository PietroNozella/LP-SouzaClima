"use client";

import AnimatedSection from "./AnimatedSection";

const commitments = [
  {
    title: "Responsabilidade",
    description:
      "Compromisso com cada atendimento, da avalia\u00e7\u00e3o inicial at\u00e9 a entrega final do servi\u00e7o.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Suporte ao cliente",
    description:
      "Atendimento pr\u00f3ximo para orientar, tirar d\u00favidas e acompanhar a necessidade de cada projeto.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h3v6H5zM16 11h3v6h-3zM11 19h4" />
      </svg>
    ),
  },
  {
    title: "Transpar\u00eancia",
    description:
      "Comunica\u00e7\u00e3o clara sobre etapas, prazos e caracter\u00edsticas dos servi\u00e7os executados.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m17 17 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-[#173B69] py-14 text-white md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-9 text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-[2.5rem]">Nosso compromisso</h2>
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl gap-8">
          {commitments.map((commitment, index) => (
            <AnimatedSection key={commitment.title} delay={index * 120}>
              <article className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center text-white">
                  {commitment.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white md:text-lg">{commitment.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/78">{commitment.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
