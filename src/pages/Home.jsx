import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactSection from "./ContactForm"; // 👈 IMPORTA

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>

          <div className="hero-actions">
            <a href="https://wa.me/5511999999999" className="btn-primary">
              {t("hero.cta")}
            </a>
            <a href="https://wa.me/5511999999999" className="btn-secondary">
              {t("hero.cta2")}
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROBLEMA */}
      <section className="section">
        <h2>{t("problem.title")}</h2>
        <ul>
          <li>{t("problem.1")}</li>
          <li>{t("problem.2")}</li>
          <li>{t("problem.3")}</li>
          <li>{t("problem.4")}</li>
        </ul>
      </section>

      {/* PERFIS */}
      <section className="section gray">
        <h2>{t("profiles.title")}</h2>
        <div className="cards">
          <div>Salesforce Developer</div>
          <div>Salesforce Functional Consultant</div>
          <div>Salesforce Architect</div>
          <div>Tech Lead Salesforce</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>{t("cta.title")}</h2>
        <a href="#contactform" className="btn-primary">
          {t("cta.button")}
        </a>
      </section>

      {/* 👇 AGORA O FORMULÁRIO EXISTE NA HOME */}
      <ContactSection />
    </>
  );
}




