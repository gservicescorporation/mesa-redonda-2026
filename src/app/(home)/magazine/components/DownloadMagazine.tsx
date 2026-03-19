"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function DownloadMagazine() {
  return (
    <div className="min-h-125 flex items-center bg-[url('/magazine/bg-revista.png')] w-full">
      <div
        className="
        p-24 flex items-center justify-center h-full text-white w-full
        bg-linear-to-r from-primary/95 via-accent/90 to-primary/90
        max-lg:p-10
      ">
        <div className="flex flex-col gap-8 items-center max-lg:gap-6">
          <motion.div
            className="flex flex-col gap-2 items-center text-center justify-center max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}>
            <h1 className="text-3xl font-semibold max-lg:text-2xl">
              Descarregue a Local Content Magazine
            </h1>

            <p className="text-white text-lg max-lg:text-base">
              Faça o download da versão digital completa em alta resolução da
              Local Content Magazine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}>
            <Image
              src={"/magazine/front.png"}
              alt={"Capa da Revista"}
              width={300}
              height={500}
              className="
              shadow-2xl shadow-white/50
              transition-all duration-300
              
              hover:scale-105 hover:translate-x-3.5 hover:rotate-y-12 hover:rotate-x-12
              
              max-lg:w-48
              max-lg:h-auto
              max-lg:hover:translate-x-0
              max-lg:hover:rotate-0
            "
            />
          </motion.div>

          <motion.div
            className="text-center flex flex-col items-center justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}>
            <motion.a
              href="/magazine/local-content-magazine.pdf"
              download="LOCAL-CONTENT-MAGAZINE.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
              flex items-center gap-2 bg-white text-black border border-white
              hover:bg-transparent hover:text-white
              rounded-full font-semibold px-14 py-3
              transition-all duration-300 ease-in-out w-fit
              
              max-lg:w-full
              max-lg:justify-center
              max-lg:px-6 max-lg:py-2
            ">
              <Download size={18} /> Baixar Revista em PDF
            </motion.a>

            <p className="text-sm text-white/70 max-lg:text-xs">
              Formato PDF • 14 MB • 74 páginas
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
