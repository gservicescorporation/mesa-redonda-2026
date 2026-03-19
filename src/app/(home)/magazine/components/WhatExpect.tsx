"use client";

import { Calendar, ChartBar, ScatterChart, Users2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatExpect() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    } as const,
  };

  const item = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    } as const,
  };

  return (
    <div className="flex w-full items-center justify-center min-h-145 bg-[url('/magazine/bg-revista.png')] bg-cover bg-center">
      <div
        className="
        p-24 flex items-center justify-center h-full text-white w-full
        bg-linear-to-r from-accent/95 via-accent/90 to-accent/90
        max-lg:p-10
      "
      >
        <div
          className="
          max-w-7xl w-full flex flex-col items-center justify-center gap-12
          max-lg:gap-8
        "
        >
          {/* HEADER */}
          <motion.div
            className="flex flex-col gap-2 items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="bg-primary/30 px-3 py-1 rounded-full w-fit">
              O que esperar?
            </span>

            <h1 className="text-3xl font-semibold max-lg:text-2xl">
              Principais destaques
            </h1>
          </motion.div>

          {/* CARDS */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              flex gap-6 justify-center flex-wrap
              max-lg:flex-col
              max-lg:gap-6
              max-lg:w-full
            "
          >
            {/* CARD 1 */}
            <motion.li
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col gap-4 rounded-xl bg-white/10 p-8 w-72 h-72 backdrop-blur-xs
              max-lg:w-full max-lg:h-auto transition-all duration-300"
            >
              <span className="bg-white/20 p-3 rounded-md w-fit">
                <Users2 />
              </span>

              <h2 className="text-lg font-semibold">
                Entrevistas com CEO's
              </h2>

              <p className="text-sm">
                Conversas exclusivas com os principais executivos que estão
                moldando o futuro do mercado local.
              </p>
            </motion.li>

            <motion.li
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col gap-4 rounded-xl bg-white/10 p-8 w-72 h-72 backdrop-blur-xs
              max-lg:w-full max-lg:h-auto transition-all duration-300"
            >
              <span className="bg-white/20 p-3 rounded-md w-fit">
                <ScatterChart />
              </span>

              <h2 className="text-lg font-semibold">
                Insights de liderança
              </h2>

              <p className="text-sm">
                Estratégias práticas e liderança de pensamento de pioneiros do
                sector.
              </p>
            </motion.li>

            <motion.li
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col gap-4 rounded-xl bg-white/10 p-8 w-72 h-72 backdrop-blur-xs
              max-lg:w-full max-lg:h-auto transition-all duration-300"
            >
              <span className="bg-white/20 p-3 rounded-md w-fit">
                <Calendar />
              </span>

              <h2 className="text-lg font-semibold">
                Destaques do evento
              </h2>

              <p className="text-sm">
                Cobertura completa dos principais encontros e fóruns corporativos
                da Global Services Corporation e parceiros.
              </p>
            </motion.li>

            <motion.li
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col gap-4 rounded-xl bg-white/10 p-8 w-72 h-72 backdrop-blur-xs
              max-lg:w-full max-lg:h-auto transition-all duration-300"
            >
              <span className="bg-white/20 p-3 rounded-md w-fit">
                <ChartBar />
              </span>

              <h2 className="text-lg font-semibold">
                Perspectivas Económicas
              </h2>

              <p className="text-sm">
                Análise aprofundada das tendências de mercado, políticas e
                oportunidades de negócios.
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}