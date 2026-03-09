"use client";

import Hero from "@/app/ui/Hero";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    } as const,
  };

  const textItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    } as const,
  };

  const imageLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    } as const,
  };

  const imageRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    } as const,
  };

  return (
    <div className="flex flex-col justify-center w-full text-white bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)]">

      <Hero
        title="Sobre"
        subtitle="Veja um pouco mais sobre o que se trata o nosso evento."
      />

      {/* SECTION 1 */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-center bg-cover"
      >
        <div className="flex items-center max-lg:flex-col max-lg:gap-10 min-h-screen max-lg:min-h-fit gap-24 p-24 max-lg:p-6 justify-center w-full bg-linear-to-t from-accent/90 to-accent/75 backdrop-blur-xs">

          <motion.div
            variants={imageLeft}
            className="max-w-xl w-full flex items-center justify-center h-125 max-lg:h-auto rounded-2xl p-8 max-lg:p-6 bg-linear-to-b from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src={"/logo-white.png"}
                alt={"About Us"}
                width={1920}
                height={1080}
                className="w-100 max-lg:w-56 object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            className="max-w-xl w-full max-lg:text-center"
          >
            <motion.h1
              variants={textItem}
              className="text-3xl max-lg:text-2xl font-bold text-white"
            >
              O que é a Mesa Redonda com CEOS?
            </motion.h1>

            <motion.p
              variants={textItem}
              className="text-white text-lg max-lg:text-base mt-4"
            >
              O Mesa Redonda com CEOS 2026 - 5ª Edição sobre o Papel da Banca e
              de Outros Agentes do Sistema Financeiro na Mobilização de
              Financiamento é um espaço estratégico de reflexão, diálogo e
              partilha de experiências entre decisores públicos, instituições
              financeiras, investidores, reguladores e especialistas nacionais e
              internacionais. O evento tem como objetivo analisar o papel da
              banca comercial, bancos de desenvolvimento, fundos de
              investimento, seguradoras, fintechs e outros agentes do sistema
              financeiro na mobilização de recursos para o financiamento da
              economia real.
            </motion.p>
          </motion.div>

        </div>
      </motion.div>

      {/* SECTION 2 */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-center bg-cover"
      >
        <div className="flex flex-row-reverse max-lg:flex-col items-center max-lg:gap-10 min-h-screen max-lg:min-h-fit gap-24 p-24 max-lg:p-6 justify-center w-full bg-linear-to-t from-accent/90 to-accent/75 backdrop-blur-xs">

          <motion.div
            variants={imageRight}
            className="max-w-xl w-full flex items-center justify-center h-125 max-lg:h-auto rounded-2xl p-8 max-lg:p-6 bg-linear-to-b from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src={"/logo-white.png"}
                alt={"About Us"}
                width={1920}
                height={1080}
                className="w-100 max-lg:w-56 object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            className="max-w-xl w-full max-lg:text-center"
          >
            <motion.h1
              variants={textItem}
              className="text-3xl max-lg:text-2xl font-bold text-white"
            >
              O que é a Mesa Redonda com CEOS?
            </motion.h1>

            <motion.p
              variants={textItem}
              className="text-white text-lg max-lg:text-base mt-4"
            >
              O evento tem como objetivo analisar o papel da banca comercial,
              bancos de desenvolvimento, fundos de investimento, seguradoras,
              fintechs e outros agentes do sistema financeiro na mobilização de
              recursos para o financiamento da economia real, com enfoque no
              crescimento sustentável, inclusão financeira, inovação e
              fortalecimento do setor produtivo.
            </motion.p>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
}