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
    <div className="w-full bg-[url(/images/magazine.png)] bg-cover bg-center">
      <motion.div
        className="
        flex min-h-screen items-center gap-24 p-24 justify-center w-full
        backdrop-blur-xs bg-linear-to-b from-accent/50 to-accent/75 z-10

        max-lg:flex-col-reverse
        max-lg:gap-10
        max-lg:p-10
      "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="
          max-w-lg w-full flex flex-col gap-6

          max-lg:text-center
          max-lg:items-center
        "
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-bold text-white max-lg:text-2xl"
            variants={itemVariants}
          >
            Lançamento da Revista{" "}
            <span
              className="
              text-4xl font-extrabold
              bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f]
              bg-clip-text text-transparent

              max-lg:text-3xl
              "
            >
              LOCAL CONTENT MAGAZINE
            </span>
          </motion.h1>

          <motion.p className="text-white text-lg max-lg:text-base" variants={itemVariants}>
            A revista que destaca o valor, a inovação e o impacto do conteúdo
            local.
          </motion.p>

          <motion.p className="text-white text-lg max-lg:text-base" variants={itemVariants}>
            A LOCAL CONTENT MAGAZINE é uma revista criada para dar visibilidade
            a histórias, iniciativas e profissionais que contribuem para o
            fortalecimento do ecossistema local, promovendo conhecimento,
            identidade e desenvolvimento por meio de uma curadoria editorial
            criteriosa e atual.
          </motion.p>

          <motion.button className="bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f] rounded-full text-lg font-semibold cursor-pointer hover:bg-none hover:text-yellow-300 border hover:border-yellow-500 px-12 py-3 max-lg:px-6 max-lg:py-2 transition-all duration-300 ease-in-out u">
            Baixar revista
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }}>
           <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
            w-full h-125 max-w-xl object-contain rounded-2xl shadow-2xl shadow-white/20
            backdrop-blur-sm
            max-lg:h-auto
            max-lg:rounded-xl
          "
          >
            <source
              src="https://gjdpj9hrfaimvxeh.public.blob.vercel-storage.com/revista-teaser.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
}