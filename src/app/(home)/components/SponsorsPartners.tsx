"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "AECIPA", logo: "/images/partners/aecipa.png" },
  { id: 2, name: "AEC", logo: "/images/partners/aec.png" },
  { id: 3, name: "AES", logo: "/images/partners/aes.png" },
];

export default function SponsorsPartners() {
  // Variants para container (staggered logos)
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  // Variants para cada item (logo)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  // Variants para o título e descrição
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/6.jpeg)] bg-cover bg-center">
      <motion.div
        className="text-white w-full p-24 flex justify-center 
        bg-linear-to-r from-primary/80 to-accent/80 backdrop-blur-xs
        max-lg:p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div
          className="flex gap-8 justify-around max-w-7xl w-full
          max-lg:flex-col
          max-lg:items-center
          max-lg:text-center
          max-lg:gap-10"
        >
          {/* Texto */}
          <motion.div
            className="max-w-sm w-full flex flex-col gap-2 max-lg:items-center"
            variants={fadeUpVariants}
          >
            <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
              Patrocinadores e Parceiros
            </h1>
            <p className="text-lg max-lg:text-base">
              Este evento será viabilizado pelo apoio estratégico dos nossos
              parceiros e patrocinadores.
            </p>
          </motion.div>

          {/* Logos */}
          <motion.ul
            className="flex flex-wrap w-full max-w-2xl justify-center gap-8
            max-lg:gap-6"
            variants={containerVariants}
          >
            {partners.map((partner) => (
              <motion.li
                key={partner.id}
                className="bg-clip-padding pb-4 border border-transparent 
                bg-linear-to-r from-primary to-secondary rounded-3xl
                max-lg:w-[45%]"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="rounded-2xl p-4 bg-white max-lg:p-3 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={300}
                    height={300}
                    className="h-38 w-38 object-contain object-center
                    max-lg:h-24
                    max-lg:w-24"
                  />
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}