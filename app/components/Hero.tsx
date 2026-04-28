"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Ol\u00e1! Gostaria de solicitar um or\u00e7amento.");
const HERO_IMAGE = "/images/hero-antigo.png";

export default function Hero() {
  const sectionRef = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef}
      className="animate-on-scroll relative overflow-hidden bg-slate-100 pt-[4.75rem] lg:pt-20"
    >
      <div className="relative min-h-[430px] w-full md:min-h-[540px] lg:min-h-[590px]">
        <Image
          src={HERO_IMAGE}
          alt="Servi\u00e7o de ar-condicionado Souza Clima"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.42)_0%,rgba(15,23,42,0.16)_42%,rgba(15,23,42,0)_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.92)_100%)]" />

        <div className="relative mx-auto flex min-h-[430px] max-w-6xl items-end px-4 pb-12 sm:px-6 md:min-h-[540px] md:pb-16 lg:min-h-[590px]">
          <div className="max-w-xl text-white drop-shadow-[0_2px_12px_rgba(15,23,42,0.35)]">
            <h1 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
              {"Instala\u00e7\u00e3o e manuten\u00e7\u00e3o de ar-condicionado"}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/92 sm:text-base">
              {"Atendimento residencial e comercial em S\u00e3o Paulo, com servi\u00e7o t\u00e9cnico, organizado e seguro."}
            </p>
            <div className="mt-6 flex">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#2689cf] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1966C9]"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
