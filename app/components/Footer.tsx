const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

export default function Footer() {
  return (
    <footer className="bg-[#124C97] text-white/72">
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-12 w-full md:h-16">
          <path d="M0,64 C240,12 480,12 720,48 C960,84 1200,84 1440,24 L1440,0 L0,0 Z" fill="#1966C9" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-2 text-lg font-bold text-white">Souza Clima</p>
            <p className="text-sm">Ar Condicionado e Refrigeração</p>
            <p className="mt-1 text-sm">São Paulo capital</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white">Serviços</p>
            <ul className="space-y-2 text-sm">
              <li>Instalação</li>
              <li>Manutenção</li>
              <li>Higienização</li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-white">Contato</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm transition-colors hover:text-white"
            >
              (11) 98718-9560
            </a>
            <p className="mt-1 text-sm">Segunda a sábado</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Souza Clima. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
