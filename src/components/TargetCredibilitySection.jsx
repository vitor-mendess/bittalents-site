import { motion } from "framer-motion";
import credibilityImg from "../assets/credibility-salesforce.jpg";

export default function TargetCredibilitySection() {
  return (
    <section className="py-24 bg-darkblue text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={credibilityImg}
            alt="Projetos Salesforce Enterprise"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Atuação em projetos{" "}
            <span className="text-accent font-extrabold">
              Salesforce enterprise
            </span>
          </h2>

          <p className="text-lg text-gray-200 mb-4">
            Atuamos ao lado de  <span className="font-bold">consultorias e empresas</span> que precisam selecionar profissionais Salesforce para contextos enterprise, ambientes complexos e iniciativas que exigem alto nível técnico, governança e responsabilidade.
          </p>

          <p className="text-lg text-gray-200 mb-8">
            Nossa atuação é orientada por <strong>entendimento de cenário</strong>, clareza de papéis e alinhamento técnico, respeitando as particularidades de projetos Salesforce em ambientes corporativos.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            Onde atuamos
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl">✔</span>
              Consultorias e integradores Salesforce
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl">✔</span>
              Empresas com times internos de tecnologia
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl">✔</span>
              Projetos enterprise e ambientes complexos
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl">✔</span>
              Demandas que exigem arquitetura, governança e delivery
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
