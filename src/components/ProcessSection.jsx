import { motion } from "framer-motion";
import {
  MessageCircle,
  Handshake,
  FileSignature,
  Users,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Primeiro contato",
    description:
      "Entre em contato conosco para nos apresentar brevemente sua necessidade de seleção de profissionais Salesforce.",
    icon: MessageCircle,
  },
  {
    title: "Reunião de alinhamento da demanda",
    description:
      "Realizamos uma reunião para entender o contexto do projeto, o perfil técnico esperado, a senioridade necessária e o cenário da empresa ou consultoria.",
    icon: Handshake,
  },
  {
    title: "Definição de escopo e proposta",
    description:
      "Com base no alinhamento, definimos o escopo do serviço de seleção e apresentamos a proposta comercial adequada à demanda.",
    icon: FileSignature,
  },
  {
    title: "Formalização",
    description:
      "Após o aceite, seguimos com a formalização necessária para o início do trabalho, conforme o modelo adotado pelo cliente.",
    icon: Users,
  },
  {
    title: "Início do processo de seleção",
    description:
      "Iniciamos o processo de seleção e avaliação técnica dos profissionais Salesforce, realizando as indicações alinhadas ao escopo definido.",
    icon: CheckCircle,
  },
];

export default function ProcessSection() {
  return (
    <section id="recrutamento" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkblue">
            Como o processo funciona
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.slice(0, 4).map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  relative bg-white border border-gray-200
                  rounded-2xl p-8 pt-14
                  shadow-sm hover:shadow-md transition
                "
              >
                {/* Ícone */}
                <div
                  className="
                    absolute -top-8 left-8 w-16 h-16 rounded-full
                    bg-accent/10 flex items-center justify-center
                    shadow-md
                  "
                >
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-bold text-darkblue mb-3">
                  {step.title}
                </h3>

                <p className="text-bttext leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

          {/* 5º card centralizado */}
          {steps.slice(4, 5).map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i + 4}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="
                  relative bg-white border border-gray-200
                  rounded-2xl p-8 pt-14
                  shadow-sm hover:shadow-md transition
                  md:col-span-2 md:mx-auto
                  max-w-md
                "
              >
                {/* Ícone */}
                <div
                  className="
                    absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full
                    bg-accent/10 flex items-center justify-center
                    shadow-md
                  "
                >
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-bold text-darkblue mb-3 text-center">
                  {step.title}
                </h3>

                <p className="text-bttext leading-relaxed text-center">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
