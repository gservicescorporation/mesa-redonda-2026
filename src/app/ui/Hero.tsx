"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

type HeroProps = {
  title: string;
  subtitle: string;
  date?: string;
};

const slides = [
  { id: 1, src: "https://ik.imagekit.io/globalsc/mr-nov-2023/35.jpg" },
  { id: 2, src: "https://ik.imagekit.io/globalsc/mr-nov-2023/18.jpg" },
  { id: 3, src: "https://ik.imagekit.io/globalsc/mr-nov-2023/22.jpg" },
  { id: 4, src: "https://ik.imagekit.io/globalsc/mr-nov-2024/20.jpeg" },
  { id: 5, src: "/images/frente-do-bna.jpg" },
];

export default function Hero({ title, subtitle, date }: HeroProps) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="w-full h-screen max-lg:h-[85vh] relative">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="w-full h-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt="Slide"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-accent/55 to-accent/90 z-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-24 max-lg:flex-col max-lg:text-center max-lg:gap-8 items-center max-w-7xl w-full px-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}>
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={500}
                height={500}
                className="max-lg:w-44"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            className="border-l-4 border-white h-80 origin-top 
            max-lg:border-l-0 max-lg:border-t-4 max-lg:h-0 max-lg:w-24"
          />

          <motion.div
            variants={container}
            className="flex flex-col gap-4 max-lg:items-center text-white">
            <motion.h1
              variants={item}
              className="text-6xl max-lg:text-3xl font-extrabold uppercase">
              {title}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-4xl max-lg:text-lg">
              {subtitle}
            </motion.p>

            {date && (
              <motion.p
                variants={item}
                className="text-4xl max-lg:text-xl font-extrabold">
                {date}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
