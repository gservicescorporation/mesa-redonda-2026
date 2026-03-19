"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  } as const,
};

const videoVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  } as const,
};

export default function TeaserPresentation() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/39.jpg)] bg-center bg-cover">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="
        flex items-center min-h-screen gap-14 p-24 justify-center w-full
        bg-linear-to-b from-accent/85 to-accent/95 backdrop-blur-xs
        text-white flex-col
        
        max-lg:gap-8
        max-lg:p-8
        max-lg:min-h-auto
        max-lg:py-16
      ">
        <motion.div
          variants={container}
          className="flex flex-col gap-4 items-center max-w-7xl w-full">
          <motion.span
            variants={item}
            className="
            text-center bg-white/20 px-4 py-2 border-2 backdrop-blur-sm
            border-primary rounded-full uppercase flex items-center gap-2
            
            max-lg:text-xs
            max-lg:px-3
            max-lg:py-1.5
          ">
            <Play className="max-lg:w-4 max-lg:h-4" /> Assista ao Teaser Oficial
          </motion.span>

          <motion.h1
            variants={item}
            className="
            text-4xl font-extrabold text-center
            
            max-lg:text-2xl
            max-lg:leading-tight
          ">
            Papel da Banca e de Outros Agentes do Sistema Financeiro na
            Mobilização de Financiamento
          </motion.h1>

          <motion.p
            variants={item}
            className="
            text-xl text-center max-w-4xl
            
            max-lg:text-sm
            max-lg:max-w-xl
          ">
            Confira as atracções dessa edição.
          </motion.p>
        </motion.div>

        <motion.div
          variants={videoVariant}
          className="max-w-300 w-full max-lg:max-w-full">
          <video
            preload="metadata"
            controls
            className="w-full h-150 object-cover rounded-2xl shadow-2xl shadow-white/20 max-lg:h-auto max-lg:rounded-xl">
            <source
              src="https://gjdpj9hrfaimvxeh.public.blob.vercel-storage.com/teaser.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
}
