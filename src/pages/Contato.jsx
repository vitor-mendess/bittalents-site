import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Contato() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* HERO / INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
         <h1 className="text-4xl lg:text-5xl font-bold text-darkblue mb-4">
            Contato
          </h1>

          {/* Linha azul abaixo */}
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          
          <p className="text-xl text-bttext leading-relaxed">
            Se você representa uma <strong>consultoria, empresa ou time interno</strong> e
            precisa selecionar profissionais Salesforce com critério técnico e
            alinhamento ao contexto do projeto, descreva sua necessidade abaixo.
          </p>
        </motion.div>

        {/* SOBRE A NECESSIDADE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold text-darkblue mb-6">
              Sobre sua necessidade
            </h2>

            <p className="text-lg text-bttext mb-6">
              Utilize o formulário para nos informar:
            </p>

            <ul className="space-y-4 text-lg text-bttext">
              <li>✔ Tipo de perfil Salesforce buscado</li>
              <li>✔ Contexto do projeto ou iniciativa</li>
              <li>✔ Senioridade esperada</li>
              <li>✔ Prazo desejado para início da conversa</li>
            </ul>

            <p className="text-lg text-bttext mt-6">
              Essas informações nos ajudam a entender o cenário e orientar o
              próximo passo.
            </p>
          </div>

          {/* IMPORTANTE */}
          <div className="bg-accent/5 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-darkblue mb-4">
              Importante
            </h3>

            <div className="w-14 h-1 bg-accent mb-6 rounded-full" />

            <p className="text-lg text-bttext mb-4">
              Este canal é destinado <strong>exclusivamente a empresas e consultorias</strong>{" "}
              que buscam seleção de profissionais Salesforce.
            </p>

            <p className="text-lg text-bttext font-semibold text-darkblue">
              Não realizamos processos de recolocação, candidatura ou recebimento
              de currículos.
            </p>
          </div>
        </motion.div>

        {/* FALE CONOSCO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center border-t border-gray-200 pt-16"
        >
          <h2 className="text-3xl font-bold text-darkblue mb-6">
            Fale conosco
          </h2>

          <p className="text-lg text-bttext max-w-3xl mx-auto mb-10">
            Descreva sua necessidade de contratação de profissionais Salesforce
            e entraremos em contato para entender o cenário e orientar o próximo
            passo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* FORMULÁRIO */}
            <Link
  to="/#contato"
  className="
    inline-flex items-center justify-center
    bg-accent px-8 py-4
    rounded-xl font-semibold text-white
    shadow-lg hover:opacity-90 transition
  "
>
  Formulário de contato
</Link>



            {/* WHATSAPP */}
            <a
              href="https://wa.me/5511912326200"
              target="_blank"
              className="
                inline-block border border-darkblue text-darkblue
                px-10 py-5 rounded-xl font-semibold
                hover:bg-darkblue hover:text-white
                transition-all
              "
            >
              Falar com um especialista
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
