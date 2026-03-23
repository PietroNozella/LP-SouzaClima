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
    alt: "Instalação de múltiplas condensadoras Midea",
    label: "Instalação",
  },
];

// Duplica para loop infinito contínuo
const track = [...slides, ...slides];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block bg-[#1B3A5C]/10 text-[#1B3A5C] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Nossos Trabalhos
          </span>
          <h2 className="font-serif heading-serif text-3xl md:text-4xl font-bold text-[#1B3A5C]">
            Serviços realizados
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm">
            Cada projeto entregue com atenção ao detalhe, prazo cumprido e qualidade comprovada.
          </p>
        </AnimatedSection>
      </div>

      {/* Faixa full-width para o marquee */}
      <AnimatedSection delay={150}>
        <div className="relative w-full">
          {/* Fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Track animado — pausa no hover */}
          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {track.map((slide, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-72 h-52 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-navy-md group"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122844]/60 via-transparent to-transparent" />
                {/* Label */}
                <span className="absolute bottom-3 left-3 bg-[#C8A96E] text-white text-xs font-semibold px-3 py-1 rounded-full">
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
