import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RecrutamentoSalesforce() {
  return (
    <section id="recrutamento" className="bg-white">

      {/* HERO DA PÁGINA */}
      <section className="pt-32 pb-24 bg-darkblue text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Seleção especializada de profissionais{" "}
            <span className="text-accent">Salesforce</span>
          </motion.h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            Atuamos apoiando consultorias, empresas e times internos na seleção
            de profissionais Salesforce, com foco em critério técnico e
            aderência ao contexto do projeto.
          </p>

          {/* Novo texto menor */}
          <p className="text-base text-gray-300 mb-10">
            Seleção estruturada com critério técnico e alinhamento real ao projeto
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5511912326200"
              className="bg-accent px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
            >
              Solicitar profissional
            </a>

            <a
              href="https://wa.me/5511912326200"
              className="border border-white/60 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-darkblue transition"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-darkblue mb-6">
              O que fazemos
            </h2>

            <p className="text-lg text-bttext mb-6">
              Selecionamos profissionais Salesforce de acordo com a necessidade
              apresentada pelo cliente, considerando o papel técnico, o contexto
              do projeto e o nível de senioridade esperado.
            </p>

            <p className="text-lg text-bttext mb-6">
              Realizamos avaliação técnica alinhada à função e indicamos
              profissionais que fazem sentido para a demanda apresentada.
            </p>

            <p className="text-lg text-bttext">
              Atuamos exclusivamente na seleção e indicação de profissionais
              Salesforce, sem alocação de mão de obra ou execução de projetos.
            </p>
          </div>

          <div className="bg-accent/5 p-10 rounded-2xl">
            <ul className="space-y-4 text-lg text-bttext">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✔</span>
                Avaliação técnica alinhada ao papel Salesforce
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✔</span>
                Análise do contexto real do projeto
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✔</span>
                Indicação criteriosa, não baseada em volume
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">✔</span>
                Foco exclusivo no ecossistema Salesforce
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">
            Como funciona nosso processo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Entendimento da necessidade do cliente e do contexto do projeto",
              "Avaliação técnica alinhada ao papel Salesforce requerido",
              "Validação de aderência ao cenário apresentado",
              "Indicação de profissionais Salesforce ao cliente",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm text-bttext"
              >
                <span className="text-accent font-bold text-xl block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFIS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">
            Perfis Salesforce que atendemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Arquiteto Salesforce",
                text: "Perfil normalmente selecionado para projetos que demandam definição de arquitetura, desenho de soluções e decisões técnicas em Salesforce.",
              },
              {
                title: "Desenvolvedor Salesforce",
                text: "Perfil normalmente selecionado para projetos que demandam desenvolvimento, customizações e integrações em Salesforce.",
              },
              {
                title: "Consultor / Funcional Salesforce",
                text: "Perfil normalmente selecionado para projetos que demandam levantamento de requisitos, desenho funcional e apoio à definição de processos em Salesforce.",
              },
            ].map((item, i) => (
              <div key={i} className="border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">
                  {item.title}
                </h3>
                <p className="text-bttext">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-darkblue text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Por que nossa seleção é diferente
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">✔</span> Atuação focada exclusivamente em Salesforce
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">✔</span> Entendimento claro dos diferentes papéis técnicos
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">✔</span> Avaliação alinhada ao contexto real do cliente
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">✔</span> Processo orientado a critério técnico, não a volume
            </li>
          </ul>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-darkblue mb-6">
            Para quem é este serviço
          </h2>

          <p className="text-lg text-bttext">
            Este serviço é direcionado a consultorias, empresas e times internos
            que necessitam selecionar profissionais Salesforce para seus projetos.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-darkblue mb-6">
            Entre em contato
          </h2>

          <p className="text-lg text-bttext mb-10">
            Descreva sua necessidade de contratação de profissionais Salesforce
            e entraremos em contato para entender o cenário e orientar o próximo passo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
         <Link
  to="/#contato"
  className="bg-accent px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:opacity-90 transition"
>
  Formulário de contato
</Link>



            <a
              href="https://wa.me/5511912326200"
              className="border border-darkblue px-8 py-4 rounded-xl font-semibold text-darkblue hover:bg-darkblue hover:text-white transition"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}
