"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const partners = [
  {
    name: "DPV",
    src: "/images/partners/dpv.jpeg",
  },
  {
    name: "Modelo Contábil",
    src: "/images/partners/modelo-contabil.jpeg",
  },
];

export default function PartnersStrip() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="text-center">
          <span className="inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            Parceiros
          </span>
          <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[#173B69] md:text-3xl">
            Empresas que confiam no nosso trabalho
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Parcerias que reforçam nossa credibilidade em instalação, manutenção e atendimento profissional.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {partners.map((partner, index) => (
            <AnimatedSection key={partner.name} delay={index * 120}>
              <div className="flex h-32 items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-full w-full">
                  <Image
                    src={partner.src}
                    alt={`Logo da empresa ${partner.name}`}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
