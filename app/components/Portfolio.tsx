"use client";

import { useState, useEffect, useCallback } from "react";
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

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), []);

  // Autoplay a cada 4s, pausa ao hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white">
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

        <AnimatedSection delay={150}>
          <div
            className="relative overflow-hidden rounded-2xl shadow-navy-lg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Slides */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#1B3A5C]">
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* Overlay gradiente + label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122844]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#C8A96E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {slide.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Setas */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-2 bg-[#C8A96E]"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
