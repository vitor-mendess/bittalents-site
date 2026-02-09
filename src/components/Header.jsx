import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", to: "/" },
    { label: "Quem somos", to: "/quem-somos" },
    { label: "Recrutamento Salesforce", to: "/recrutamento" },
    { label: "Contato", to: "/contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-primary"
          onClick={() => setOpen(false)}
        >
          Bittalents<span className="text-accent italic">Tech</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {menu.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <Link
                to={item.to}
                className="text-sm font-semibold text-primary"
              >
                {item.label}
              </Link>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </nav>

        {/* CTA Desktop */}
        <Link
          to="/contato"
          className="
            hidden md:inline-flex bg-accent text-white px-6 py-3 rounded-xl
            font-semibold shadow-md hover:bg-primary hover:-translate-y-0.5
            transition-all
          "
        >
          Contato
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {menu.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-primary hover:text-accent transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

