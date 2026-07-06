"use client";

import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";

export default function BAW() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-[url(/bg-oficial.jpeg)] bg-center bg-cover">
      <motion.div
        className="text-white w-full p-24 flex flex-col items-center gap-12
        bg-linear-to-b from-accent/90 to-primary/40 backdrop-blur-xs
        max-lg:p-10 max-lg:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}>
        <motion.div
          className="text-center flex flex-col gap-2"
          variants={fadeUpVariants}>
          <h2
            className=" text-4xl font-bold text-center
            max-lg:text-2xl
            max-lg:leading-tight">
           Business After Work - Edição 2026 | OPEN DAY
          </h2>
          <p className="text-white text-2xl max-lg:text-base">
           07 de Julho às 17h30 no HCTA
          </p>
        </motion.div>

        <motion.div
          className="relative w-full max-w-5xl flex items-center justify-center gap-4"
          variants={fadeUpVariants}>
          <div className="w-full aspect-video bg-black/40 relative">
            <video
              preload="metadata"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
              src={"/baw.mp4"}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
