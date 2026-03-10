"use client";

import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";

export default function Statistics() {
  type Stat = {
    value: number;
    suffix?: string;
    label: string;
  };

  const stats: Stat[] = [
    { value: 100, suffix: "+", label: "Entidades" },
    { value: 500, suffix: "+", label: "Empresas" },
    { value: 5000, suffix: "+", label: "Participantes" },
    { value: 200, suffix: "+", label: "Empresas apoiadas" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
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
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-cover bg-center">
      <motion.div
        className="text-white w-full p-24 flex justify-center bg-linear-to-r from-primary/80 to-accent/80 backdrop-blur-xs
        max-lg:p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div
          className="flex gap-8 justify-around max-w-7xl w-full
          max-lg:flex-col
          max-lg:items-center
          max-lg:text-center"
        >
          <motion.div
            className="max-w-sm w-full flex flex-col gap-2 max-lg:items-center"
            variants={fadeUpVariants}
          >
            <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
              Estatísticas do Evento
            </h1>

            <p className="text-lg max-lg:text-base">
              Aqui estão algumas estatísticas impressionantes do nosso evento:
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8
            max-lg:gap-6
            max-lg:mt-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center font-medium p-2 rounded-md cursor-pointer
                max-lg:p-1
                max-lg:w-[45%]"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-semibold text-main max-lg:text-xl">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={4}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <p className="text-white text-lg text-center max-lg:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}