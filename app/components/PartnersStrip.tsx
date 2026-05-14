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

const specialistBrands = [
  {
    name: "Agratto",
    src: "/images/brands/agratto-logo.png",
  },
  {
    name: "Gree",
    src: "/images/brands/gree-logo.jpg",
  },
  {
    name: "LG",
    src: "/images/brands/lg-logo.webp",
  },
  {
    name: "Midea",
    src: "/images/brands/midea-logo.png",
  },
  {
    name: "Philco",
    src: "/images/brands/philco-logo.png",
  },
  {
    name: "TCL",
    src: "/images/brands/tcl-logo.png",
  },
];

type LogoItem = {
  name: string;
  src: string;
};

type LogoStripProps = {
  eyebrow: string;
  title: string;
  description: string;
  logos: LogoItem[];
  gridClassName?: string;
};

function LogoStrip({ eyebrow, title, description, logos, gridClassName = "md:grid-cols-2" }: LogoStripProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="text-center">
          <span className="inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[#173B69] md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        </AnimatedSection>

        <div className={`mt-8 grid gap-4 ${gridClassName}`}>
          {logos.map((logo, index) => (
            <AnimatedSection key={logo.name} delay={index * 120}>
              <div className="flex h-32 items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={`Logo da empresa ${logo.name}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
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

export function BrandSpecialistsStrip() {
  return (
    <LogoStrip
      eyebrow="Marcas"
      title="Especialistas nas Seguintes Marcas"
      description="Atendimento técnico especializado para as principais marcas de ar-condicionado do mercado."
      logos={specialistBrands}
      gridClassName="sm:grid-cols-2 lg:grid-cols-3"
    />
  );
}

export default function PartnersStrip() {
  return (
    <LogoStrip
      eyebrow="Parceiros"
      title="Empresas que confiam no nosso trabalho"
      description="Parcerias que reforçam nossa credibilidade em instalação, manutenção e atendimento profissional."
      logos={partners}
      gridClassName="md:grid-cols-2"
    />
  );
}
