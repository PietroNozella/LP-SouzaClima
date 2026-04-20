"use client";

import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoBlueFilter =
    "brightness(0) saturate(100%) invert(30%) sepia(88%) saturate(1528%) hue-rotate(199deg) brightness(93%) contrast(89%)";

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)] shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl" />

      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex flex-shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Souza Clima"
            width={280}
            height={96}
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            style={{ filter: logoBlueFilter }}
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#1966C9]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden flex-shrink-0 items-center gap-2 rounded-full bg-[#1966C9] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#124C97] lg:flex"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
          </svg>
          Solicitar orçamento
        </a>

        <button
          className="p-2 text-[#1966C9] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="relative max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200/80 bg-white/98 px-4 pb-4 shadow-[0_18px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#1966C9]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#1966C9] px-4 py-3 text-sm font-bold text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
            </svg>
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
