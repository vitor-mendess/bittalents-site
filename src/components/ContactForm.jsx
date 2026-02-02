export default function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl font-bold text-darkblue mb-4">
            Entre em contato conosco
          </h2>

          <div className="w-20 h-1 bg-accent mb-6 rounded-full" />

          <p className="text-bttext text-lg">
            Preencha o formulário ao lado e um especialista entrará em contato
            para entender sua necessidade.
          </p>
        </div>

        {/* Formulário */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-10 rounded-2xl border border-gray-200">

          {/* Nome */}
          <div>
            <label className="block text-sm font-semibold text-darkblue mb-2">
              Nome
            </label>
            <input
              type="text"
              required
              placeholder="Seu nome completo"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-semibold text-darkblue mb-2">
              Perfil no LinkedIn
            </label>
            <input
              type="text"
              placeholder="https://linkedin.com/in/..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-darkblue mb-2">
              E-mail
            </label>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-semibold text-darkblue mb-2">
              Telefone de contato
            </label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Mensagem */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-darkblue mb-2">
              Mensagem
            </label>
            <textarea
              rows="5"
              placeholder="Conte rapidamente sobre sua necessidade"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Botão */}
          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              className="bg-accent text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Solicitar contato
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

