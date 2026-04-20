"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário residencial",
    text: "Serviço impecável. Chegaram no horário combinado, fizeram a instalação de forma organizada e o preço foi exatamente o que havia sido orçado.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Gerente comercial",
    text: "Contratamos para higienização dos aparelhos do escritório. A diferença na qualidade do ar foi imediata. Equipe educada e profissional.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Administrador de condomínio",
    text: "Já utilizamos para manutenção de vários equipamentos. Sempre pontuais, explicam tudo que foi feito e o atendimento pelo WhatsApp é muito ágil.",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-[#FDBA2D]" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#F8FBFF] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-14 text-center">
          <span className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9] shadow-navy-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            O que nossos clientes dizem
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 150}>
              <article className="relative h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <StarIcon key={starIndex} />
                  ))}
                </div>

                <p className="mb-5 text-sm leading-7 text-slate-600">{testimonial.text}</p>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-sm font-bold text-[#1966C9]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>

                <span className="absolute bottom-5 right-5 text-4xl leading-none text-slate-100">”</span>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
