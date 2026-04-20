"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const slides = [
  {
    src: "/images/carrossel1.jpg",
    alt: "Técnico realizando manutenção elétrica em ar-condicionado",
    label: "Manutenção",
  },
  {
    src: "/images/carrossel2.jpg",
    alt: "Higienização completa de condensadora",
    label: "Higienização",
  },
  {
    src: "/images/carrossel3.jpg",
    alt: "Instalação de sistema de duto em ambiente comercial",
    label: "Instalação de Duto",
  },
  {
    src: "/images/carrossel4.jpg",
    alt: "Instalação de múltiplas condensadoras",
    label: "Instalação",
  },
];

const track = [...slides, ...slides];

export default function Portfolio() {
  return (
    <section id="portfolio" className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            Nossos Trabalhos
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            Serviços realizados
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-500">
            Cada projeto entregue com atenção ao detalhe, prazo cumprido e qualidade comprovada.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={150}>
        <div className="relative w-full">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
            {track.map((slide, index) => (
              <div
                key={`${slide.src}-${index}`}
                className="group relative h-52 w-[82vw] max-w-[20rem] flex-shrink-0 overflow-hidden rounded-[28px] shadow-navy-md sm:w-80 md:h-64 lg:w-96"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/55 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1966C9]">
                  {slide.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
