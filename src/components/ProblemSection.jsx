import { motion } from "framer-motion";

export default function ProblemSection() {
  const problems = [
    "Mercado Salesforce escasso e inflacionado, onde qualquer erro na contratação custa caro.",
    "Currículos “bonitos” não garantem experiência real em projetos Salesforce.",
    "Confundir Funcional, Dev e Arquiteto gera falhas de desenho, atraso e retrabalho.",
    "Um profissional mal alocado pode atrasar meses de projeto.",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-darkblue mb-10"
        >
          Contratar Salesforce exige mais do que recrutamento de TI genérico
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border rounded-xl shadow-sm"
            >
              <p className="text-lg text-darkblue">
                {item}
              </p>

              {/* Texto adicional abaixo do card específico */}
              {item ===
                "Currículos “bonitos” não garantem experiência real em projetos Salesforce." && (
                <p className="mt-3 text-base text-darkblue font-medium">

                  Por isso, selecionar profissionais Salesforce exige critério técnico,
                  experiência prática e entendimento real do papel certo para cada projeto.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
