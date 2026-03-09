"use client";

import { motion, Variants } from "framer-motion";

export default function CallToAction() {
  // Variants para container (stagger)
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  // Variants para cada item (fade + slide)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 14 },
    },
  };

  return (
    <div className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/21.png)] bg-cover bg-center">
      <motion.div
        className="
        text-white min-h-96 w-full h-full 
        bg-linear-to-r from-primary/80 to-accent/80 
        flex justify-center p-24 backdrop-blur-xs

        max-lg:p-10
      "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="
          max-w-7xl w-full flex justify-around items-center gap-16

          max-lg:flex-col
          max-lg:text-center
          max-lg:gap-8
        "
          variants={containerVariants}
        >
          {/* Título */}
          <motion.h1
            className="
            uppercase text-4xl font-semibold max-w-md

            max-lg:text-2xl
            max-lg:max-w-none
          "
            variants={itemVariants}
          >
            Posicione sua marca em um ambiente exclusivo!
          </motion.h1>

          {/* Texto e botão */}
          <motion.div
            className="
            flex flex-col gap-6 max-w-lg

            max-lg:items-center
          "
            variants={itemVariants}
          >
            <motion.p
              className="
              text-white italic text-xl

              max-lg:text-base
            "
              variants={itemVariants}
            >
              Patrocine o Mesa Redonda com CEOS 2026 - 5ª Edição sobre o Papel
              da Banca e de Outros Agentes do Sistema Financeiro na Mobilização
              de Financiamento e seja destaque no evento.
            </motion.p>

            <motion.button
              className="px-8 py-3 btn-primary w-fit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
              variants={itemVariants}
            >
              Entrar em contacto
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}