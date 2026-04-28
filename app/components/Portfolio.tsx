"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const slides = [
  {
    src: "/images/carrossel1.jpg",
    alt: "T\u00e9cnico realizando manuten\u00e7\u00e3o el\u00e9trica em ar-condicionado",
    label: "Manuten\u00e7\u00e3o",
  },
  {
    src: "/images/carrossel2.jpg",
    alt: "Higieniza\u00e7\u00e3o completa de condensadora",
    label: "Higieniza\u00e7\u00e3o",
  },
  {
    src: "/images/carrossel3.jpg",
    alt: "Instala\u00e7\u00e3o de sistema de duto em ambiente comercial",
    label: "Instala\u00e7\u00e3o de Duto",
  },
  {
    src: "/images/carrossel4.jpg",
    alt: "Instala\u00e7\u00e3o de m\u00faltiplas condensadoras",
    label: "Instala\u00e7\u00e3o",
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
          <h2 className="text-3xl font-bold leading-tight text-[#173B69] md:text-[2.5rem]">
            {"Servi\u00e7os realizados"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-500">
            {"Cada projeto entregue com aten\u00e7\u00e3o ao detalhe, prazo cumprido e qualidade comprovada."}
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
