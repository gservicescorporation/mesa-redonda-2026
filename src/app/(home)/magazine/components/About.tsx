"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex w-full items-center justify-center min-h-145 bg-[url('/magazine/bg-revista.png')] bg-cover bg-center">
      <div
        className="
        p-24 flex items-center justify-center h-full w-full
        bg-linear-to-l from-primary/95 via-accent/90 to-accent/90
        max-lg:p-10
      ">
        <div
          className="
          max-w-7xl w-full flex flex-row-reverse gap-24 items-center justify-center
          max-lg:flex-col-reverse
          max-lg:gap-10
        ">
          {/* TEXTO */}
          <motion.div
            className="
              max-w-xl w-full flex flex-col gap-2 text-white
              max-lg:items-center
              max-lg:text-center
            "
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>
            <span className="bg-primary/30 px-3 py-1 rounded-full w-fit">
              Sobre a revista
            </span>

            <h1 className="text-3xl font-semibold max-lg:text-2xl">
              Nossa Missão Editorial
            </h1>

            <p className="text-white text-lg mt-4 max-lg:text-base">
              A Local Content Magazine é uma publicação editorial de alta
              qualidade dedicada a apresentar os líderes, empresas e iniciativas
              que impulsionam o crescimento econômico e fortalecem o ecossistema
              local. Com curadoria da Global Services Corporation, ela serve
              como uma plataforma vital para troca de conhecimento e insights
              estratégicos.
            </p>

            <p className="text-white text-lg mt-4 max-lg:text-base">
              Por meio de análises especializadas, entrevistas exclusivas e
              relatórios de dados abrangentes, fornecemos a executivos e
              formuladores de políticas as informações necessárias para
              construir economias locais sustentáveis, resilientes e prósperas.
            </p>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            className="max-w-lg w-full max-lg:max-w-md"
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>
            <Image
              src={"/magazine/banner-2.jpeg"}
              alt="Banner da revista"
              width={1920}
              height={1080}
              className="w-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
