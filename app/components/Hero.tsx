const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1B3A5C] overflow-hidden pt-16">
      {/* Padrão de fundo sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradiente decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#122844] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="text-white">
          <span className="inline-block bg-[#C8A96E]/20 text-[#C8A96E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            São Paulo Capital
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Climatização com{" "}
            <span className="text-[#C8A96E]">qualidade</span> e{" "}
            <span className="text-[#C8A96E]">pontualidade</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            Instalação, manutenção e higienização de ar-condicionado para
            residências e empresas em toda São Paulo capital. Atendimento ágil
            e prazo garantido.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C8A96E] hover:bg-[#b8965a] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              Ver Serviços
            </a>
          </div>

          {/* Selos de confiança */}
          <div className="mt-10 flex gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C8A96E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Atendimento rápido
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C8A96E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Prazo garantido
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C8A96E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Técnicos qualificados
            </div>
          </div>
        </div>

        {/* Placeholder de imagem hero */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-[#254d7a] flex items-center justify-center border border-white/10">
            <div className="text-center text-white/30 p-8">
              <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Foto hero (1:1)</p>
              <p className="text-xs mt-1">Ex: técnico instalando AC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
