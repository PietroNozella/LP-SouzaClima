"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Ol\u00e1! Gostaria de solicitar um or\u00e7amento.");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Servi\u00e7os", href: "#servicos" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Termos de uso", href: "#footer" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-slate-200/80 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)]" />

      <div className="relative mx-auto flex h-[4.75rem] max-w-[1240px] items-center justify-center px-4 sm:px-6 lg:h-20 lg:gap-10 xl:gap-14">
        <nav className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-[#1966C9] ${
                link.label === "Home" ? "text-[#1966C9]" : "text-slate-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#" className="flex min-w-0 shrink-0 items-center justify-center">
          <Image
            src="/images/logo-ar.png"
            alt="Souza Clima Ar Condicionado e Refrigera\u00e7\u00e3o"
            width={641}
            height={130}
            priority
            className="h-auto w-[min(62vw,18rem)] object-contain sm:w-[20rem] lg:w-[20.5rem] xl:w-[22rem]"
          />
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center rounded-[18px] bg-[#2689cf] px-7 py-4 text-lg font-normal leading-none text-white transition-colors hover:bg-[#1966C9] lg:flex"
        >
          Contato
        </a>

        <button
          className="absolute right-4 p-2 text-[#1966C9] sm:right-6 lg:hidden"
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
        <div className="relative max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200/80 bg-white px-4 pb-4 shadow-[0_18px_30px_rgba(15,23,42,0.08)] sm:px-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#1966C9]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center rounded-md bg-[#1966C9] px-4 py-3 text-sm font-semibold text-white"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
