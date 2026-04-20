const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

export default function CTA() {
  return (
    <section className="bg-[#1966C9] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <span className="mb-6 inline-flex rounded-full bg-white/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
          Pronto para começar?
        </span>
        <h2 className="mb-4 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
          Fale agora e receba seu orçamento em minutos
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-white/80">
          Atendimento ágil para toda São Paulo capital, com retorno rápido, alinhamento claro e execução profissional.
        </p>

        <div className="mx-auto mb-8 flex max-w-2xl flex-col justify-center gap-4 text-sm sm:flex-row">
          <div className="flex items-center justify-center gap-2 text-white/85">
            <svg className="h-5 w-5 flex-shrink-0 text-[#9BF0B5]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Resposta no mesmo dia</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/85">
            <svg className="h-5 w-5 flex-shrink-0 text-[#9BF0B5]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Orçamento sem compromisso</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/85">
            <svg className="h-5 w-5 flex-shrink-0 text-[#9BF0B5]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Profissionais certificados</span>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[0_14px_34px_rgba(37,211,102,0.32)] transition-colors hover:bg-[#20bd5a]"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
          </svg>
          Falar no WhatsApp
        </a>

        <p className="mt-4 text-xs text-white/65">
          (11) 98718-9560 · Atendimento de segunda a sábado
        </p>
      </div>
    </section>
  );
}
