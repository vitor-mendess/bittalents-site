import { motion } from "framer-motion";

export default function ValueSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Texto explicativo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold text-darkblue mb-6">
            Por que nossa seleção de profissionais Salesforce é mais assertiva?
          </h2>

          <p className="text-lg text-bttext">
           Na <span className="font-bold"> BittalentsTech</span>, somos focados exclusivamente em Salesforce. Validamos tecnicamente os profissionais e indicamos apenas quem realmente faz sentido para o seu projeto.
          </p>
        </motion.div>

        {/* Checklist + botão */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <ul className="space-y-2 text-lg">
            <li>✔ Experiência real em projetos Salesforce</li>
            <li>✔ Papel correto para cada necessidade (Funcional, Dev ou Arquiteto)</li>
            <li>✔ Avaliação técnica feita por especialistas Salesforce</li>
            <li>✔ Aderência ao cenário do cliente (cloud, senioridade e contexto)</li>
          </ul>

          {/* Botão azul maior */}
          <a
            href="https://wa.me/5511912326200"
            className="
              inline-block w-full text-center
              bg-accent text-white px-8 py-5
              rounded-xl font-semibold shadow-lg
              hover:shadow-xl hover:-translate-y-0.5
              hover:opacity-90 transition-all
            "
          >
            Falar com a BittalentsTech
          </a>
        </motion.div>

      </div>
    </section>
  );
}

