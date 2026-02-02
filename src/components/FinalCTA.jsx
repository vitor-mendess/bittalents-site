export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="py-24 bg-white text-center border-t border-gray-200"
    >
      {/* Primeiro parágrafo */}
      <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto leading-relaxed">
        <span className="font-bold">
          Contratar Salesforce errado custa tempo, dinheiro e credibilidade.
        </span>
      </p>

      {/* Segundo parágrafo */}
      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
        Nossa especialização está focada em{" "}
        <span className="font-bold">
          selecionar profissionais com critério técnico e aderência ao contexto do projeto.
        </span>
      </p>

      <h2 className="text-3xl font-bold text-darkblue mb-6">
        Precisa de um profissional Salesforce agora?
      </h2>

      <a
        href="https://wa.me/5511912326200"
        target="_blank"
        className="
          inline-block bg-accent text-white
          px-10 py-4 rounded-xl font-semibold
          shadow-lg hover:shadow-xl hover:-translate-y-0.5
          hover:opacity-90 transition-all
        "
      >
        Falar com especialista
      </a>
    </section>
  );
}







