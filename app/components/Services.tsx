"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Instalação",
    description:
      "Instalação profissional de aparelhos Split, Multi-Split e sistemas de climatização. Execução limpa, organizada e dentro do prazo combinado.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: ["Split Hi-Wall", "Multi-Split", "Cassete", "Duto", "Piso-Teto"],
  },
  {
    title: "Manutenção",
    description:
      "Manutenção preventiva e corretiva para manter seu equipamento operando com eficiência, menor consumo e vida útil prolongada.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: ["Preventiva periódica", "Corretiva", "Recarga de gás", "Verificação elétrica"],
  },
  {
    title: "Higienização",
    description:
      "Limpeza profunda com produtos especializados para eliminar fungos, bactérias e ácaros acumulados no equipamento.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    items: ["Limpeza completa", "Eliminação de fungos", "Remoção de ácaros", "Desinfecção"],
  },
];

const WHATSAPP_NUMBER = "5511987189560";

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-14 text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9]">
            Nossos Serviços
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            Tudo que seu ar-condicionado precisa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Da instalação à higienização, cuidamos do seu equipamento com profissionalismo e agilidade.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <article className="group h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1966C9]/20 hover:shadow-navy-md sm:p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1966C9] transition-colors group-hover:bg-[#1966C9] group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-5 text-sm leading-7 text-slate-500">{service.description}</p>

                <ul className="mb-6 space-y-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1966C9]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento de ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-[#1966C9] transition-colors hover:text-[#124C97]"
                >
                  Solicitar orçamento
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
