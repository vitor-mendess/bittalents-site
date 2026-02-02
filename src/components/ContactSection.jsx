import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    linkedin: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors = {};

    if (!form.name) newErrors.name = "Informe seu nome";
    if (!form.email) newErrors.email = "Informe seu e-mail";
    if (!form.message) newErrors.message = "Digite uma mensagem";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        "service_nr57ogh",
        "template_kwukx8a",
        {
          name: form.name,
          linkedin: form.linkedin,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "dX3tkBb_5g-cXxJA3"
      )
      .then(() => {
        setSuccess(true);
        setForm({
          name: "",
          linkedin: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Erro ao enviar. Tente novamente.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-darkblue mb-6">
          Entre em contato
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-10 rounded-2xl border"
        >
          {success && (
            <div className="md:col-span-2 bg-green-100 text-green-700 p-4 rounded-lg">
              ✅ Mensagem enviada com sucesso! Entraremos em contato.
            </div>
          )}

          {[
            { label: "Nome", name: "name", placeholder: "Seu nome" },
            { label: "LinkedIn", name: "linkedin", placeholder: "https://linkedin.com/in/..." },
            { label: "E-mail", name: "email", placeholder: "seu@email.com", type: "email" },
            { label: "Telefone", name: "phone", placeholder: "(11) 99999-9999" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold mb-2">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Conte rapidamente sua necessidade"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Solicitar contato"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
