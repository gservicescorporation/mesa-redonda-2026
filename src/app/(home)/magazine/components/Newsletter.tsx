"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <div
      className="
      bg-primary w-full flex flex-col items-center justify-center p-12 h-96
      max-lg:h-auto
      max-lg:p-8
    "
    >
      <div
        className="
        text-center max-w-2xl flex flex-col items-center justify-center gap-12
        max-lg:gap-8
      "
      >
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h1 className="text-white text-3xl font-semibold max-lg:text-2xl">
            Mantenha-se actualizado.
          </h1>

          <p className="text-white text-lg max-lg:text-base">
            Assine para receber notificações sobre edições futuras, artigos
            exclusivos online e eventos de liderança que estão por vir.
          </p>
        </motion.div>

        <motion.form
          className="max-w-xl w-full"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="
            flex items-center w-full bg-white rounded-2xl overflow-hidden
            max-lg:flex-col
          "
          >
            <motion.input
              type="email"
              placeholder="Insira o seu endereço de e-mail"
              className="
              outline-none w-full px-6 py-3
              max-lg:text-sm
            "
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.button
              className="
              text-white bg-tertiary hover:bg-tertiary/50
              transition-all duration-300
              px-6 py-3 cursor-pointer
              max-lg:w-full
              max-lg:rounded-none
              max-lg:rounded-b-2xl
            "
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscreva
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}