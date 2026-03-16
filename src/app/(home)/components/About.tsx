"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
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
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-center bg-cover">
      <motion.div
        className="flex items-center min-h-screen gap-24 p-24 justify-center w-full 
        bg-linear-to-t from-accent/60 to-accent/75 backdrop-blur-xs
        max-lg:flex-col
        max-lg:gap-10
        max-lg:p-10
        max-lg:text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={containerVariants}>
        <motion.div
          className="max-w-xl w-full flex items-center justify-center h-125 rounded-2xl p-8 
          bg-linear-to-b from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm
          max-lg:h-80
          max-lg:p-6"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 1 }}>
          <Image
            src={"/logo-white.png"}
            alt={"About Us"}
            width={1920}
            height={1080}
            className="w-100 object-contain max-lg:w-56"
          />
        </motion.div>

        <motion.div
          className="max-w-xl w-full"
          variants={itemVariants}>
          <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
            Sobre a Mesa Redonda com CEO's
          </h1>

          <p className="text-white text-lg mt-4 max-lg:text-base">
            A Mesa Redonda com CEO's - 5ª Edição com o tema: o{" "}
            <b>
              Papel da Banca e de Outros Agentes do Sistema Financeiro na
              Mobilização de Financiamento
            </b>{" "}
            é um espaço estratégico de reflexão, diálogo e partilha de
            experiências entre decisores públicos, instituições financeiras,
            investidores, reguladores e especialistas nacionais e
            internacionais. O evento tem como objetivo analisar o papel da banca
            comercial, bancos de desenvolvimento, fundos de investimento,
            seguradoras, fintechs e outros agentes do sistema financeiro na
            mobilização de recursos para o financiamento da economia real, com
            enfoque no crescimento sustentável, inclusão financeira, inovação e
            fortalecimento do setor produtivo.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
