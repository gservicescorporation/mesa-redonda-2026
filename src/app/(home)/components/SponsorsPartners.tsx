"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "abanc", logo: "/images/partners/abanc.png" },
  { id: 2, name: "anpg", logo: "/images/partners/anpg.png" },
  { id: 3, name: "arseg", logo: "/images/partners/arseg.png" },
  { id: 4, name: "bna", logo: "/images/partners/bna.png" },
  { id: 5, name: "bodiva", logo: "/images/partners/bodiva.png" },
  { id: 6, name: "cmc", logo: "/images/partners/cmc.png" },
  { id: 7, name: "mindcom", logo: "/images/partners/mindcom.png" },
];

export default function SponsorsPartners() {
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
        bg-linear-to-r from-primary/50 to-accent/40 backdrop-blur-xs
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
          <motion.div
            className="max-w-lg w-full flex flex-col gap-2 max-lg:items-center"
            variants={fadeUpVariants}>
            <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
              Patrocinadores e Parceiros
            </h1>
          </motion.div>

          <motion.ul
            className="flex w-full max-w-3xl items-center justify-center gap-8
            max-lg:gap-6 relative"
            variants={containerVariants}>
            <button className="custom-prev z-20 cursor-pointer bg-secondary! rounded-full min-h-12 min-w-12 flex justify-center items-center text-white!">
              <ChevronLeft className="w-5" />
            </button>

            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              speed={800}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1048: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
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

            <button className="custom-next z-20 cursor-pointer bg-secondary!  rounded-full min-h-12 min-w-12 flex justify-center items-center text-white!">
              <ChevronRight className="w-5" />
            </button>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}
