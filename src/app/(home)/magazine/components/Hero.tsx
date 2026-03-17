"use client";

import { motion } from "framer-motion";
import { Book, BookOpen, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full min-h-screen h-215 object-cover">
        <source
          src="https://gjdpj9hrfaimvxeh.public.blob.vercel-storage.com/intro-teaser.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="flex absolute inset-0 items-center gap-24 px-24 py-44 h-full justify-center w-full bg-linear-to-r from-primary/95 via-accent/90 to-accent/90 z-10
        max-lg:px-6
        max-lg:py-44
        max-lg:gap-8
      ">
        <div className="flex items-center gap-24 max-w-7xl w-full justify-center">
          <div className="max-w-lg w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-6xl font-extrabold text-white max-lg:text-3xl">
                LOCAL CONTENT <br />{" "}
                <span
                  className="bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f]
              bg-clip-text text-transparent text-8xl">
                  MAGAZINE
                </span>
              </h1>

              <p className="text-white text-xl font-semibold">
                Descubra as histórias, estratégias e inovações que fortalecem o
                ecossistema local.
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <Link
                href={"/magazine"}
                className="flex gap-2 items-center   bg-white text-black border border-white hover:bg-transparent hover:text-white cursor-pointer rounded-full font-semibold px-14 py-3 max-lg:px-6 max-lg:py-2 transition-all duration-300 ease-in-out">
                <Download size={18} /> Baixar Revista
              </Link>

              <Link
                href={"/magazine"}
                className="flex gap-2 items-center   hover:bg-white hover:text-black border-2 border-white bg-transparent text-white cursor-pointer rounded-full font-semibold px-14 py-3 max-lg:px-6 max-lg:py-2 transition-all duration-300 ease-in-out ">
                <BookOpen size={18} /> Ler Online
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center perspective-[2200px] max-w-lg w-full">
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 360] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-105 h-145"
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
              className="absolute -bottom-15 w-65 h-15 bg-black/50 blur-3xl rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
