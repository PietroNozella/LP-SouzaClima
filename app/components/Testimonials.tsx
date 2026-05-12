"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

type Testimonial = {
  name: string;
  text: string;
  rating: number;
  avatarSrc?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Amanda Barros",
    text: "Super recomendo. Fizeram a higienização do meu ar e ficou perfeito. Equipe maravilhosa, organizada, cuidadosa e muito educada. Tiraram nossas dúvidas, deixaram tudo limpinho e fizeram um excelente trabalho.",
    rating: 5,
    avatarSrc: "/images/testimonials/amanda-barros.png",
  },
  {
    name: "Ivanir Madjarof",
    text: "Excelente. Informações corretas, esclarecimento de dúvidas, instalação cuidadosa e limpa, além de muita pontualidade. Nada a objetar. Recomendo.",
    rating: 5,
    avatarSrc: "/images/testimonials/ivanir-madjarof.png",
  },
  {
    name: "Nathália Alencar",
    text: "Excelente profissional. Sempre conserta o ar-condicionado da minha loja e do salão do meu pai com competência e responsabilidade. É difícil encontrar alguém tão confiável e dedicado. Super recomendo.",
    rating: 5,
    avatarSrc: "/images/testimonials/nathalia-alencar.png",
  },
  {
    name: "Tuca Santana",
    text: "Super recomendo a Souza Clima. Atende toda nossa expectativa, deixa o ambiente agradável e, após o serviço, entrega tudo limpinho, organizado, com muita educação e prestatividade.",
    rating: 5,
    avatarSrc: "/images/testimonials/tuca-santana.png",
  },
  {
    name: "Paula Medeiros",
    text: "Empresa super profissional, são atenciosos e atendem rápido. Recomendo.",
    rating: 5,
    avatarSrc: "/images/testimonials/paula-medeiros.png",
  },
  {
    name: "Raquel S.",
    text: "Super recomendo a Souza Clima, pois atende toda nossa expectativa. Além de deixar o ambiente agradável, após o serviço o local fica impecável, limpinho e organizado. Profissional excelente.",
    rating: 5,
    avatarSrc: "/images/testimonials/raquel-s.png",
  },
];

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-[#FDBA2D]" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialAvatar({ name, avatarSrc }: Pick<Testimonial, "name" | "avatarSrc">) {
  if (avatarSrc) {
    return (
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#EAF3FF]">
        <Image src={avatarSrc} alt={`Foto de perfil de ${name}`} fill className="object-cover" sizes="48px" />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-sm font-bold text-[#1966C9]">
      {name.charAt(0)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-[#F8FBFF] py-16 md:scroll-mt-28 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-14 text-center">
          <span className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9] shadow-navy-sm">
            Depoimentos
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-[#173B69] md:text-[2.5rem]">
            O que nossos clientes dizem
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={`${testimonial.name}-${index}`} delay={index * 90}>
              <article className="relative flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <StarIcon key={starIndex} />
                  ))}
                </div>

                <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">{testimonial.text}</p>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <TestimonialAvatar name={testimonial.name} avatarSrc={testimonial.avatarSrc} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  </div>
                </div>

                <span className="absolute bottom-5 right-5 text-4xl leading-none text-slate-100">{"\""}</span>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
