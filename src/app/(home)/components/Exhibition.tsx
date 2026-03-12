"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Exhibition() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
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
    <div className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/6.jpeg)]">
      <motion.div
        className="flex flex-col items-center gap-14 p-24 max-lg:p-12 justify-center w-full h-full bg-linear-to-b from-accent/65 to-accent/95 z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-white text-center max-lg:px-4" variants={itemVariants}>
          <h1 className="text-3xl font-bold max-lg:text-2xl">Assegure Seu Acesso ao Evento</h1>
          <p className="text-lg max-lg:text-base mt-2">
            Ingressos limitados para uma experiência de alto valor e networking qualificado.
          </p>
        </motion.div>

        <motion.ul className="flex gap-12 max-lg:flex-col max-lg:gap-6 w-full items-center justify-center" variants={containerVariants}>
          {[
            {
              title: "EXPOSITOR",
              image: "https://ik.imagekit.io/globalsc/mr-nova-era-da-lideranca/20.jpg",
              description:
                "Mostre sua marca! Escolha entre categorias: Startups, Empresas ou Instituições.",
              price: "Sob consulta",
              button: "Explorar modalidade",
            },
            {
              title: "PATROCINADOR",
              image: "https://ik.imagekit.io/globalsc/responsabilidade-social-viana/36.jpg",
              description:
                "Aumente a visibilidade da sua marca e associe-se a um evento de impacto nacional.",
              price: "Sob consulta",
              button: "Explorar modalidade",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="text-lg text-white px-8 py-8 max-lg:px-6 max-lg:py-6 rounded-2xl w-full max-w-md flex flex-col gap-6 items-center bg-white/20 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full flex flex-col gap-6 max-lg:gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={250}
                  className="rounded-2xl object-cover w-full h-60 max-lg:h-48"
                />

                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold max-lg:text-2xl">{item.title}</h1>
                  <p className="text-sm text-white/90 max-lg:text-xs">{item.description}</p>
                </div>

                <p className="text-2xl font-bold flex items-center max-lg:text-xl">
                  <span className="text-xs font-light mr-2 max-lg:text-[10px]">
                    {item.title === "EXPOSITOR" ? "valor" : "valor"}
                  </span>
                  {item.price}
                </p>
              </div>

              <button className="btn-primary px-12 py-3 max-lg:px-6 max-lg:py-2 w-full text-base max-lg:text-sm flex justify-center items-center gap-2">
                {item.button} <ArrowRight size={18} />
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}