"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const installationImages = [
  {
    src: "/images/instalacoes/ar-9.png",
    alt: "Ar-condicionado split instalado em parede clara",
  },
  {
    src: "/images/instalacoes/ar-8.png",
    alt: "Ar-condicionado Samsung instalado em ambiente interno",
  },
  {
    src: "/images/instalacoes/ar-7.png",
    alt: "Ar-condicionado cassete instalado em sala comercial",
  },
  {
    src: "/images/instalacoes/ar-6.png",
    alt: "Ambiente comercial com aparelhos cassete instalados",
  },
  {
    src: "/images/instalacoes/ar-5.png",
    alt: "Ar-condicionado split instalado em parede azul",
  },
  {
    src: "/images/instalacoes/ar-4.png",
    alt: "Ar-condicionado split instalado em parede terracota",
  },
  {
    src: "/images/instalacoes/ar-3.png",
    alt: "Condensadora instalada em \u00e1rea externa",
  },
  {
    src: "/images/instalacoes/ar-2.png",
    alt: "Condensadora Samsung instalada em parede externa",
  },
  {
    src: "/images/instalacoes/ar-1.png",
    alt: "Manuten\u00e7\u00e3o em condensadora de ar-condicionado",
  },
];

export default function InstallationsGallery() {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-8 text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#173B69] md:text-[2.5rem]">
            {"Nossos servi\u00e7os"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            {"Instala\u00e7\u00f5es realizadas em ambientes residenciais e comerciais."}
          </p>
        </AnimatedSection>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {installationImages.map((image, index) => (
            <AnimatedSection key={image.src} delay={index * 60}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
