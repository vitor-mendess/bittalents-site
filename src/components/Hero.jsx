import { motion } from "framer-motion";
import heroImg from "../assets/hero-salesforce.jpg";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-darkblue text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Especialistas em seleção de profissionais{" "}
            <span className="text-accent font-extrabold">
              Salesforce
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-4">
            Encontramos arquitetos, desenvolvedores e consultores Salesforce
            prontos para atuar no seu projeto, com rapidez e precisão técnica.
          </p>

          {/* Novo texto menor */}
          <p className="text-base text-gray-300 mb-4">
            Atuamos apoiando consultorias, empresas e times internos na seleção de profissionais Salesforce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* BOTÃO PRINCIPAL */}
            <a
              href="https://wa.me/5511912326200"
              className="
                bg-accent text-white px-8 py-4 rounded-xl font-semibold
                shadow-lg hover:shadow-xl hover:-translate-y-0.5
                transition-all
              "
            >
              Solicitar profissional
            </a>

            {/* BOTÃO SECUNDÁRIO */}
            <a
              href="https://wa.me/5511912326200"
              className="
                border border-white/60 px-8 py-4 rounded-xl font-semibold
                text-center hover:bg-white hover:text-darkblue
                transition-all
              "
            >
              Falar com um especialista
            </a>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={heroImg}
            alt="Recrutamento Salesforce"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}






