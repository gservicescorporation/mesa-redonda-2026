"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Camera } from "lucide-react";
import Link from "next/link";

export default function MainHero() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } } as const,
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 } as const,
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } } as const,
  };

  return (
    <div className="w-full relative">
      {/* Vídeo de fundo adaptável */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full min-h-screen h-215 object-cover"
      >
        <source src="/intro-teaser.mp4" type="video/mp4" />
      </video>

      {/* Camada de conteúdo principal */}
      <div
        className="flex absolute inset-0 flex-col items-center gap-10 px-24 py-44 h-full justify-center w-full bg-linear-to-b from-accent/85 to-accent/60 z-10
        max-lg:px-6
        max-lg:py-24
        max-lg:gap-8
      "
      >
        {/* Bloco de Mensagem Pós-Evento */}
        <motion.div
          className="text-center text-white flex flex-col items-center gap-4 max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="bg-white/20 border border-white text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase"
          >
            5ª Edição Concluída com Sucesso
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold font-plus-jakarta-sans tracking-tight 
            max-lg:text-3xl"
          >
            Obrigado a Todos que Fizeram História Connosco!
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg mt-2 
            max-w-2xl max-lg:text-sm"
          >
            A Mesa Redonda com CEO's 2026 reuniu os maiores líderes, decisores e
            especialistas do setor financeiro para debater o futuro do financiamento em Angola.
          </motion.p>
        </motion.div>

        {/* Informações de Data e Localização Históricas */}
        <motion.div
          className="flex gap-6 items-center text-base text-white/90 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full
          max-lg:flex-col
          max-lg:text-xs
          max-lg:gap-3
          max-lg:rounded-2xl
          max-lg:w-full
          max-lg:max-w-xs
          max-lg:px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <div className="flex gap-2 items-center justify-center text-center">
            <Calendar size={18} className="text-secondary shrink-0" />
            <span>Realizado a 07 e 08 de Julho de 2026</span>
          </div>
          
          {/* Divisor vertical escondido no mobile */}
          <div className="w-px h-4 bg-white/20 max-lg:hidden" />
          
          <div className="flex gap-2 items-center justify-center text-center">
            <MapPin size={18} className="text-secondary shrink-0" />
            <span>CC de Talatona, Luanda</span>
          </div>
        </motion.div>

        {/* Botões de Ação para Conteúdos Pós-Evento */}
        <motion.div
          className="flex gap-4 items-center w-full justify-center max-w-md
          max-lg:flex-col
          max-lg:w-full
          max-lg:px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          
          <Link
            href="/pictures"
            className="btn-primary w-full px-6 py-3.5 text-base font-medium flex items-center justify-center gap-2
            max-lg:w-full
            max-lg:text-sm
            max-lg:py-3"
          >
            <Camera size={16} />
            Ver Galeria de Fotos
          </Link>
        </motion.div>
      </div>
    </div>
  );
}