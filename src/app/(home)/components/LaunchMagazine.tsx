"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function LaunchMagazine() {
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
    <div className="w-full bg-[url(/bg-oficial.jpeg)] bg-cover bg-center">
      <motion.div
        className="
        flex min-h-screen items-center gap-24 p-24 justify-center w-full
        backdrop-blur-xs bg-linear-to-b from-primary/20 to-accent/75 z-10
flex-row-reverse
        max-lg:flex-col-reverse
        max-lg:gap-10
        max-lg:p-10
      "
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5 }}
        variants={containerVariants}>
        <motion.div
          className="
          max-w-lg w-full flex flex-col gap-6

          max-lg:text-center
          max-lg:items-center
        "
          variants={containerVariants}>
          <div>
            <motion.h1
              className="text-4xl font-bold text-white max-lg:text-2xl"
              variants={itemVariants}>
              Lançamento da Revista{" "}
            </motion.h1>
            <motion.p
              className="
              text-3xl font-extrabold
              bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f]
              bg-clip-text text-transparent

              max-lg:text-3xl
              "
              variants={itemVariants}>
              <span className="text-white">LOCAL CONTENT</span> MAGAZINE
            </motion.p>
          </div>

          <motion.p
            className="text-white text-lg max-lg:text-base"
            variants={itemVariants}>
            A Local Content Magazine é uma iniciativa editorial da Global Services Corporation, concebida
para afirmar o conteúdo local como um instrumento estratégico de soberania económica, industrialização e inclusão produtiva. A revista nasce da convicção de que o debate sobre conteúdo local deve evoluir do plano normativo para o da execução efectiva, com foco em competitividade, financiamento e criação de valor nacional.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="/magazine"
            className="bg-white text-black border border-white hover:bg-transparent hover:text-white cursor-pointer rounded-full font-semibold px-18 py-3 max-lg:px-6 max-lg:py-2 transition-all duration-300 ease-in-out w-fit">
            Ver mais
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5 }}
          variants={itemVariants}>
          <Image
            src={"/banner-revista.jpeg"}
            alt={"About Us"}
            width={1920}
            height={1080}
            className="w-full max-w-xl object-cover rounded-2xl "
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
