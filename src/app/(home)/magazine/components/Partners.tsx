"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "bfa", logo: "/images/partners/bfa.png" },
  { id: 2, name: "aes", logo: "/images/partners/aes.png" },
  { id: 3, name: "catoca", logo: "/images/partners/catoca.png" },
  { id: 4, name: "fabrimental", logo: "/images/partners/fabrimental.png" },
  { id: 5, name: "sistec", logo: "/images/partners/sistec.png" },
  { id: 6, name: "teleservice", logo: "/images/partners/teleservice.png" },
  { id: 7, name: "banco-sol", logo: "/images/partners/banco-sol.png" },
  { id: 8, name: "deloitte", logo: "/images/partners/deloitte.png" },
  { id: 9, name: "taag", logo: "/images/partners/taag.png" },
  { id: 10, name: "viva-seguros", logo: "/images/partners/viva-seguros.png" },
  { id: 11, name: "epic-sana", logo: "/images/partners/epic-sana.png" },
  { id: 12, name: "etu-energias", logo: "/images/partners/etu-energias.png" },
  { id: 13, name: "anpg", logo: "/images/partners/anpg.png" },
  {
    id: 14,
    name: "global-academy",
    logo: "/images/partners/global-academy.png",
  },
  { id: 15, name: "grupo-simples", logo: "/images/partners/grupo-simples.png" },
  { id: 16, name: "vecauto", logo: "/images/partners/vecauto.png" },
  { id: 17, name: "antosc", logo: "/images/partners/antosc.png" },
  { id: 18, name: "jika", logo: "/images/partners/jika.png" },
  { id: 19, name: "multiafrica", logo: "/images/partners/multiafrica.png" },
  { id: 20, name: "unisaude", logo: "/images/partners/unisaude.png" },
  { id: 21, name: "tda", logo: "/images/partners/tda.png" },
];

export default function Partners() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full bg-[url(/bg-oficial.jpeg)] bg-bottom bg-cover">
      <motion.div
        className="text-white w-full p-24 flex justify-center 
        bg-primary/50 backdrop-blur-xs
        max-lg:p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}>
        <div
          className="flex gap-8 justify-around max-w-7xl w-full
          max-lg:flex-col 
          items-center
          max-lg:text-center
          max-lg:gap-10">
          {/* <motion.div
            className="max-w-lg w-full flex flex-col gap-2 max-lg:items-center"
            variants={fadeUpVariants}>
            <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
              Patrocinadores e Parceiros
            </h1>
          </motion.div> */}

          <motion.ul
            className="flex flex-wrap w-full justify-center gap-8
            max-lg:gap-6"
            variants={containerVariants}>
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              speed={800}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1048: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
              className="w-full">
              {partners.map((partner, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full">
                  <motion.li
                    className="bg-clip-padding pb-4 border border-transparent 
                bg-linear-to-r from-primary to-secondary rounded-3xl
                "
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: 1 }}>
                    <div className="rounded-2xl  bg-white max-lg:p-3 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        width={300}
                        height={300}
                        className="h-48 w-48 object-contain object-center
                    max-lg:h-32
                    max-lg:w-32"
                      />
                    </div>
                  </motion.li>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}
