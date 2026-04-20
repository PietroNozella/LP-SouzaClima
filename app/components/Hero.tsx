"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
const socialProof = ["Mariana R.", "Carlos S.", "Fernanda T."];

function AnimatedCounter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef}
      className="animate-on-scroll relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#eef5ff_42%,#ffffff_100%)] pt-28 md:pt-32"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(25,102,201,0.16), transparent 40%), radial-gradient(circle at bottom right, rgba(37,211,102,0.1), transparent 28%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-12">
          <div className="flex flex-col text-center lg:text-left">
            <span className="mb-5 inline-flex self-center rounded-full border border-[#1966C9]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1966C9] shadow-navy-sm lg:self-start">
              São Paulo capital
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-slate-900 sm:text-5xl xl:text-[3.5rem]">
              Instalação e manutenção de ar-condicionado com atendimento rápido e profissional
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Instalação, manutenção e higienização para residências e empresas. Orçamento ágil, serviço limpo e equipe
              preparada para atender com segurança.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(37,211,102,0.28)] transition-colors hover:bg-[#20bd5a] sm:w-auto"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
                Falar no WhatsApp
              </a>

              <a
                href="#servicos"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#1966C9]/20 bg-white px-6 py-4 text-sm font-bold text-[#1966C9] transition-colors hover:border-[#1966C9]/40 hover:bg-[#EAF3FF] sm:w-auto"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 lg:items-start">
              <div className="inline-flex w-full max-w-sm items-center justify-center gap-3 self-center rounded-[22px] border border-slate-200 bg-white px-4 py-3 shadow-navy-sm sm:w-auto sm:justify-start lg:self-start">
                <div className="flex -space-x-2">
                  {socialProof.map((person) => (
                    <span
                      key={person}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#EAF3FF] text-xs font-bold text-[#1966C9]"
                    >
                      {person.charAt(0)}
                    </span>
                  ))}
                </div>

                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">⭐ 4.9 no Google</p>
                  <p className="text-xs text-slate-500">Atendimento elogiado por clientes reais</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500 lg:justify-start">
                {["Atendimento rápido", "Prazo combinado", "Equipe qualificada"].map((seal) => (
                  <div key={seal} className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-shrink-0 text-[#1966C9]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {seal}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 inline-flex w-full max-w-[15rem] items-center justify-center gap-3 self-center rounded-[24px] border border-[#1966C9]/10 bg-white px-5 py-4 shadow-navy-sm sm:w-auto lg:self-start">
              <span className="text-3xl font-bold leading-none text-[#1966C9]">
                <AnimatedCounter target={500} />
              </span>
              <span className="text-left text-sm leading-tight text-slate-500">
                clientes
                <br />
                atendidos
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-[linear-gradient(145deg,rgba(25,102,201,0.14),rgba(255,255,255,0))] blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white p-3 shadow-navy-lg">
              <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f7fbff_0%,#dcecff_100%)] sm:h-[380px] lg:h-[460px] xl:h-[560px]">
                <Image
                  src="/images/hero.jpg"
                  alt="Técnico da Souza Clima"
                  fill
                  priority
                  className="object-cover object-center lg:object-[center_18%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
