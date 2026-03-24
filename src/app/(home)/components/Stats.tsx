"use client";

import CountUp from "react-countup";
import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Statistics() {
  type Stat = {
    value: number;
    percentage: number;
    suffix?: string;
    label: string;
  };

  const stats: Stat[] = [
    { value: 100, percentage: 75, suffix: "+", label: "Entidades" },
    { value: 500, percentage: 45, suffix: "+", label: "Empresas" },
    { value: 5000, percentage: 80, suffix: "+", label: "Participantes" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <div className="w-full bg-[url(/bg-oficial.jpeg)] bg-bottom bg-cover">
      <motion.div
        ref={ref}
        className="text-white w-full px-24 py-18 flex justify-center items-center bg-linear-to-r from-primary/50 to-accent/40 backdrop-blur-xs max-lg:p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.7 }}>
        <div className="flex gap-8 justify-around max-w-7xl w-full max-lg:flex-col items-center max-lg:text-center">
          <motion.div className="max-w-sm w-full flex flex-col gap-2 max-lg:items-center">
            <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
              Estatísticas do Evento
            </h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-14">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center justify-center">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex flex-col items-center justify-center rounded-full h-44 w-44"
                  style={{
                    background: `conic-gradient(#b48a2c ${stat.percentage}%, #e5e7eb 0)`,
                  }}>
                  <div className="absolute inset-2 bg-accent rounded-full flex flex-col items-center justify-center border-none">
                    <div className="text-4xl font-bold text-white max-lg:text-xl">
                      <CountUp
                        key={`${index}-${key}`}
                        autoAnimate
                        autoAnimateOnce={false}
                        start={0}
                        end={stat.value}
                        duration={3}
                        prefix={stat.suffix}
                      />
                    </div>
                  </div>
                </motion.div>
                <p className="text-white font-semibold text-3xl text-center px-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
