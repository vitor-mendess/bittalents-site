import { motion } from "framer-motion";

const roles = [
  { title: "Desenvolvedor Salesforce", img: "/roles/dev.jpg" },
  { title: "Consultor Funcional Salesforce", img: "/roles/functional.png" },
  { title: "Arquiteto Salesforce", img: "/roles/architect.jpg" },
  { title: "Tech / Delivery Lead Salesforce", img: "/roles/lead.jpg" },
];

export default function RolesList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-darkblue mb-12">
          Perfis que atendemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={role.img}
                alt={role.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6 font-semibold">{role.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




