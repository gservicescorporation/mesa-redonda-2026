"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WhyParticipate() {
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
    <div className="w-full bg-[url(/banner-participate.png)] bg-center bg-cover">
      <motion.div
        className="
        flex items-center min-h-screen gap-24 p-24 justify-center w-full
        bg-linear-to-t from-accent/60 to-accent/75 backdrop-blur-xs

        max-lg:flex-col
        max-lg:gap-10
        max-lg:p-10
        max-lg:min-h-auto
      "
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
        variants={containerVariants}>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}>
          <Image
            src={"/banner-participate.png"}
            alt={"About Us"}
            width={1920}
            height={1080}
            className="
            max-w-xl w-full h-125 rounded-2xl object-cover
            max-lg:h-72
          "
          />
        </motion.div>

        <motion.div
          className="max-w-xl w-full"
          variants={itemVariants}>
          <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
            Por que participar da Mesa Redonda?
          </h1>

          <p className="text-white text-lg mt-4 max-lg:text-base">
            A Mesa Redonda com CEO's é uma oportunidade única para os
            participantes se envolverem em discussões estratégicas sobre o papel
            da banca e de outros agentes do sistema financeiro na mobilização de
            financiamento. Os participantes terão a chance de:
          </p>

          <motion.ul
            className="list-disc ml-6 mt-4 text-white text-lg max-lg:text-base flex flex-col gap-2"
            variants={itemVariants}>
            <li>
              Engajar-se com líderes e especialistas do setor financeiro
              nacional e internacional.
            </li>

            <li>
              Compartilhar experiências e melhores práticas para mobilizar
              recursos para o financiamento da economia real.
            </li>

            <li>
              Explorar oportunidades de colaboração e parcerias estratégicas.
            </li>

            <li>
              Contribuir para a construção de um sistema financeiro mais
              sustentável, inclusivo e inovador.
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
