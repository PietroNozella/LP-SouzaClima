"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário residencial",
    text: "Serviço impecável! Chegaram no horário combinado, fizeram a instalação de forma organizada e o preço foi exatamente o que havia sido orçado. Recomendo sem hesitar.",
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
    <svg className="w-4 h-4 fill-[#C8A96E]" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-16 md:py-20 overflow-hidden">
      {/* Imagem de fundo desfocada */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-depoimentos.jpg"
          alt=""
          fill
          className="object-cover object-center blur-sm scale-105"
          aria-hidden
        />
        {/* Overlay gradiente para melhor contraste de texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A5C]/40 via-[#1B3A5C]/25 to-[#1B3A5C]/40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block bg-[#1B3A5C]/10 text-[#1B3A5C] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif heading-serif text-3xl md:text-4xl font-bold text-[#1B3A5C]">
            O que nossos clientes dizem
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 150}>
              {/* Cards com fundo branco sólido para contrastar com o fundo */}
              <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-navy-md transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#1B3A5C]/10 flex items-center justify-center text-[#1B3A5C] font-semibold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A5C]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
