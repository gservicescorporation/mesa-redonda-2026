"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 14 },
    },
  };

  return (
    <div className="w-full relative bg-[url(/bg-oficial.jpeg)] bg-cover bg-center">
      <motion.div
        className="
        text-white min-h-96 w-full h-full 
        bg-linear-to-r from-primary/80 to-accent/80 
        flex justify-center p-24 backdrop-blur-xs
        max-lg:p-10
      "
        initial="hidden"
        whileInView="show"
        viewport={{ once:true, amount: 0.5 }}
        variants={containerVariants}>
        <motion.div
          className="
          max-w-7xl w-full flex justify-around items-center gap-16

          max-lg:flex-col
          max-lg:text-center
          max-lg:gap-8
        "
          variants={containerVariants}>
          {/* Título */}
          <motion.h1
            className="
            uppercase text-4xl font-semibold max-w-md

            max-lg:text-2xl
            max-lg:max-w-none
          "
            variants={itemVariants}>
            Posicione sua marca em um ambiente exclusivo!
          </motion.h1>

          <motion.div
            className="
            flex flex-col gap-6 max-w-lg

            max-lg:items-center
          "
            variants={itemVariants}>
            <motion.p
              className="
              text-white italic text-xl

              max-lg:text-base
            "
              variants={itemVariants}>
              Patrocine o Mesa Redonda com CEO's - 5ª Edição sobre o Papel da
              Banca e de Outros Agentes do Sistema Financeiro na Mobilização de
              Financiamento e seja destaque no evento.
            </motion.p>

            <Link href={"/contact"}
              className="px-8 py-3 btn-primary w-fit"
              >
              Entrar em contacto
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
