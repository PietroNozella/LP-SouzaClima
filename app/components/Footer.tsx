const WHATSAPP_NUMBER = "5511987189560";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

export default function Footer() {
  return (
    <footer className="bg-[#122844] text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div>
            <p className="font-serif text-white text-lg font-bold mb-2">Souza Clima</p>
            <p className="text-sm">Ar Condicionado e Refrigeração</p>
            <p className="text-sm mt-1">São Paulo Capital</p>
          </div>

          {/* Serviços */}
          <div>
            <p className="text-white text-sm font-semibold mb-3">Serviços</p>
            <ul className="space-y-1 text-sm">
              <li>Instalação</li>
              <li>Manutenção</li>
              <li>Higienização</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-white text-sm font-semibold mb-3">Contato</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#C8A96E] transition-colors block"
            >
              (11) 98718-9560
            </a>
            <p className="text-sm mt-1">Segunda a sábado</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Souza Clima. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
