"use client";

import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    } as const,
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    } as const,
  };

  const magazineEntrance = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 } as const,
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 1, ease: "easeOut" },
    } as const,
  };
  return (
    <div className="w-full relative lg:min-h-125 max-lg:min-h-215">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full min-h-screen h-215 object-cover max-lg:h-screen">
        <source
          src="/intro-teaser.mp4"
          type="video/mp4"
        />
      </video>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
        className="
        flex absolute inset-0 items-center justify-center w-full h-full z-10
        gap-24 px-24 py-44
        bg-linear-to-r from-primary/95 via-accent/90 to-accent/90
        
        max-lg:flex-col
        max-lg:gap-10
        max-lg:px-6
        max-lg:py-20
      ">
        <div className="flex items-center gap-24 max-w-7xl w-full justify-center max-lg:flex-col-reverse max-lg:gap-12">
          <motion.div
            variants={container}
            className="max-w-lg w-full flex flex-col gap-8 max-lg:items-center max-lg:text-center">
            <motion.div
              variants={item}
              className="w-full flex flex-col gap-2">
              <h1 className="text-6xl font-extrabold text-white max-lg:text-3xl">
                LOCAL CONTENT <br />
                <span className="bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f] bg-clip-text text-transparent text-8xl max-lg:text-5xl">
                  MAGAZINE
                </span>
              </h1>

              <p className="text-white text-xl font-semibold max-lg:text-base">
                Descubra as histórias, estratégias e inovações que fortalecem o
                ecossistema local.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex gap-3 items-center max-lg:flex-col max-lg:w-full">
              <motion.a
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="/magazine/local-content-magazine.pdf"
                download="LOCAL-CONTENT-MAGAZINE.pdf"
                className="
                flex items-center gap-2 bg-white text-black border border-white
                hover:bg-transparent hover:text-white
                rounded-full font-semibold px-14 py-3
                transition-all duration-300 ease-in-out w-fit
                
                max-lg:w-full
                max-lg:justify-center
                max-lg:px-6 max-lg:py-2
              ">
                <Download size={18} /> Baixar Revista
              </motion.a>

              <Link
                href="/magazine/local-content-magazine.pdf"
                target="_blank"
                className="
                flex items-center gap-2 border-2 border-white bg-transparent text-white
                hover:bg-white hover:text-black
                rounded-full font-semibold px-14 py-3
                transition-all duration-300 ease-in-out
                
                max-lg:w-full
                max-lg:justify-center
                max-lg:px-6 max-lg:py-2
              ">
                <BookOpen size={18} /> Ler Online
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={magazineEntrance}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
            className="flex items-center justify-center perspective-[2200px] max-w-lg w-full">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-105 h-145 max-lg:w-64 max-lg:h-96"
              style={{ transformStyle: "preserve-3d" }}>
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  transform: "translateZ(4px)",
                  backfaceVisibility: "hidden",
                }}>
                <Image
                  src="/magazine/front.png"
                  alt="Capa da revista"
                  width={1080}
                  height={1920}
                  className="w-full h-full object-cover bg-white"
                />

                <motion.div
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </div>
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  transform: "rotateY(180deg) translateZ(4px)",
                  backfaceVisibility: "hidden",
                }}>
                <Image
                  src="/magazine/back.png"
                  alt="Verso da revista"
                  width={1080}
                  height={1920}
                  className="w-full h-full object-cover"
                />
              </div>
              =
              <div
                className="absolute left-0 top-0 h-full w-2 bg-white"
                style={{
                  transform: "rotateY(-90deg) translateZ(4px)",
                  transformOrigin: "left",
                }}
              />
              <div
                className="absolute right-0 top-0 h-full w-2 bg-gray-400"
                style={{
                  transform: "rotateY(90deg) translateZ(4px)",
                  transformOrigin: "right",
                }}
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              absolute -bottom-15 w-65 h-15 bg-black/50 blur-3xl rounded-full
              max-lg:w-40 max-lg:h-10 max-lg:-bottom-10
            "
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
