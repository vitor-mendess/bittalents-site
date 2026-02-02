import { Routes, Route } from "react-router-dom";

/* Layout fixo */
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

/* Home */
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ValueSection from "./components/ValueSection";
import RolesList from "./components/RolesList";
import ProcessSection from "./components/ProcessSection";
import TargetCredibilitySection from "./components/TargetCredibilitySection";
import ContactSection from "./components/ContactSection";
import FinalCTA from "./components/FinalCTA";
import ScrollToTop from "./components/ScrollToTop";

/* Pages */
import QuemSomos from "./pages/QuemSomos";
import RecrutamentoSalesforce from "./pages/RecrutamentoSalesforce";
import Contato from "./pages/Contato";

function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ValueSection />
      <RolesList />
      <ProcessSection />
      <TargetCredibilitySection />
      <ContactSection /> {/* 👈 FORMULÁRIO COM EMAILJS */}
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/recrutamento" element={<RecrutamentoSalesforce />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

