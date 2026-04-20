"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`
        fixed bottom-4 right-4 z-50
        h-12 w-12 rounded-full sm:bottom-6 sm:right-6 sm:h-14 sm:w-14
        bg-[#25D366] hover:bg-[#20bd5a]
        flex items-center justify-center
        shadow-navy-lg hover:scale-110
        transition-all duration-300
        ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}
      `}
    >
      <svg className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
      </svg>
    </a>
  );
}
