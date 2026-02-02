import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="quem-somos" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-28">

        {/* HERO / INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-darkblue mb-4">
            Quem somos
          </h1>

          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />

          <p className="text-xl text-bttext leading-relaxed">
            Somos a <strong className="text-darkblue">BittalentsTech</strong>, uma
            empresa focada na seleção especializada de profissionais Salesforce,
            atuando com critério técnico, entendimento claro dos papéis e
            aderência ao contexto de cada demanda.
          </p>

          <p className="text-lg text-bttext mt-6">
            Apoiamos consultorias, empresas e times internos que precisam
            selecionar profissionais Salesforce de forma estruturada, sem
            tratar essa contratação como TI genérico.
          </p>
        </motion.div>

        {/* COMO TRABALHAMOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold text-darkblue mb-4">
              Como trabalhamos
            </h2>

            <div className="w-16 h-1 bg-accent mb-6 rounded-full" />

            <p className="text-lg text-bttext mb-6">
              Nossa atuação parte do entendimento da necessidade real do cliente,
              do cenário do projeto e do papel técnico esperado antes de qualquer
              indicação.
            </p>

            <p className="text-lg text-bttext">
              Atuamos exclusivamente na seleção e indicação de profissionais
              Salesforce, sem alocação de mão de obra ou execução de projetos.
            </p>
          </div>

          <ul className="space-y-4 text-lg text-bttext">
            <li className="flex gap-3">
              <span className="text-accent font-bold">✔</span>
              Entendimento claro dos diferentes papéis no ecossistema Salesforce
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✔</span>
              Avaliação técnica alinhada à função requerida
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✔</span>
              Análise de aderência ao contexto apresentado pelo cliente
            </li>
          </ul>
        </motion.div>

       {/* POR QUE SALESFORCE EXIGE ESPECIALIZAÇÃO */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-darkblue rounded-2xl p-14 text-white"
>
  <h2 className="text-3xl font-bold mb-4">
    Por que Salesforce exige{" "}
    <span className="text-accent">especialização</span>
  </h2>

  <div className="w-16 h-1 bg-accent mb-6 rounded-full" />

  <p className="text-lg text-gray-300 mb-6">
    Salesforce é um ecossistema específico, com papéis bem definidos e
    níveis distintos de atuação. Contratar sem esse entendimento costuma
    gerar desalinhamentos, retrabalho e impacto em prazos e custos.
  </p>

  <p className="text-lg text-gray-300">
    Nosso foco exclusivo em Salesforce permite conduzir processos de
    seleção com mais clareza, critério e alinhamento ao que o cliente
    realmente precisa.
  </p>
</motion.div>


        {/* PARA QUEM ATUAMOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold text-darkblue mb-4">
              Para quem atuamos
            </h2>

            <div className="w-16 h-1 bg-accent mb-6 rounded-full" />

            <p className="text-lg text-bttext">
              Atuamos apoiando organizações que utilizam Salesforce como parte
              crítica de seus projetos e operações.
            </p>
          </div>

          <ul className="space-y-4 text-lg text-bttext">
            <li className="flex gap-3">
              <span className="text-accent font-bold">✔</span>
              Consultorias Salesforce
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✔</span>
              Empresas com times internos Salesforce
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✔</span>
              Estruturas corporativas que utilizam Salesforce em seus projetos
            </li>
            <li className="flex gap-3 font-semibold text-darkblue">
              <span className="text-accent font-bold">✔</span>
              Atuação exclusiva no contexto B2B
            </li>
          </ul>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center border-t border-gray-200 pt-20"
        >
          <h2 className="text-3xl font-bold text-darkblue mb-6">
            Entre em contato
          </h2>

          <p className="text-lg text-bttext max-w-3xl mx-auto mb-10">
            Se precisar selecionar profissionais Salesforce com critério técnico
            e entendimento real do contexto do projeto, fale com a gente.
          </p>

          <a
            href="https://wa.me/5511912326200"
            className="
              inline-block bg-accent text-white
              px-12 py-5 rounded-xl font-semibold
              shadow-lg hover:shadow-xl hover:-translate-y-0.5
              hover:opacity-90 transition-all
            "
          >
            Falar com um especialista
          </a>
        </motion.div>

      </div>
    </section>
  );
}
