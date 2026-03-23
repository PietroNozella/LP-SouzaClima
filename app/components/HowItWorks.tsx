const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

const steps = [
  {
    step: "1",
    title: "Fale com a gente",
    description:
      "Envie uma mensagem pelo WhatsApp descrevendo o que você precisa. Respondemos no mesmo dia.",
  },
  {
    step: "2",
    title: "Receba o orçamento",
    description:
      "Enviamos um orçamento claro e detalhado, sem surpresas. Você aprova antes de qualquer coisa.",
  },
  {
    step: "3",
    title: "Serviço realizado",
    description:
      "Nossa equipe vai até você no horário agendado e entrega o serviço com qualidade e pontualidade.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-[#1B3A5C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Processo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Como funciona
          </h2>
          <p className="mt-4 text-white/60 max-w-md mx-auto text-sm sm:text-base">
            Três passos simples para ter seu ar-condicionado funcionando perfeitamente.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Linha conectora desktop — percorre os 3 círculos */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-[#C8A96E]/30" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center md:items-center">
                {/* Número */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C8A96E] text-white font-serif text-2xl font-bold mb-5 relative z-10 flex-shrink-0">
                  {step.step}
                </div>

                <h3 className="font-semibold text-white text-lg sm:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A96E] hover:bg-[#b8965a] text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.428a.5.5 0 0 0 .609.637l5.703-1.496A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.37l-.359-.213-3.723.977.994-3.634-.233-.374A9.818 9.818 0 1 1 12 21.818z" />
            </svg>
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
