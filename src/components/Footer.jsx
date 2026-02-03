import {
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkblue text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Logo + frase */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Bittalents<span className="text-accent">Tech</span>
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em seleção de profissionais Salesforce para projetos
              críticos, com critério técnico e entendimento real do contexto.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/home" className="hover:text-accent transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/quem-somos" className="hover:text-accent transition">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="/recrutamento" className="hover:text-accent transition">
                  Recrutamento Salesforce
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-accent transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contato
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-accent" />
                (11) 91232-6200
              </li>
              <li>
                contato@bittalents.tech
              </li>
              <li>
                São Paulo – SP
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Redes sociais
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/bittalents-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-accent transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé final */}
        <div className="text-center text-sm text-gray-400 py-8">
          Bittalents Tech © 2025 | Todos os direitos reservados | Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/vitor-mendess/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-accent transition"
          >
            Vitor Mendes
          </a>
        </div>

      </div>
    </footer>
  );
}


