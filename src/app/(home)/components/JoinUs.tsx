"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

export default function JoinUs() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const eventTime = new Date("2026-03-25").getTime();
      const diff = eventTime - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const eventTime = [
    { title: "Dias", number: timeLeft.days },
    { title: "Horas", number: timeLeft.hours },
    { title: "Minutos", number: timeLeft.minutes },
    { title: "Segundos", number: timeLeft.seconds },
  ];

  return (
    <div className="w-full min-h-screen relative bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/21.png)]">
      <div className="flex flex-col items-center gap-18 p-24 justify-center w-full h-full bg-linear-to-b from-accent/45 to-accent/95 z-10">
        <div className="text-center flex flex-col gap-2 max-w-280 w-full">
          <h2 className="text-lg uppercase text-white/80">
            Junte-se a nós para este grande fórum!
          </h2>
          <h1 className="text-3xl text-white text-center font-bold">
            <span>FÓRUM INTERNACIONAL:</span>
            <br />O Papel da Banca e de Outros Agentes do Sistema Financeiro na
            Mobilização de Financiamento
          </h1>
        </div>

        <ul className="flex gap-18 items-center">
          {eventTime.map((item, index) => (
            <motion.li
              key={index}
              className="text-white text-center"
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}>
              <h1 className="text-7xl font-semibold max-lg:text-xl">
                <CountUp
                  end={item.number}
                  duration={0.8}
                  preserveValue
                />
              </h1>
              <p className="text-3xl max-lg:text-sm">{item.title}</p>
            </motion.li>
          ))}
        </ul>

        <div className="flex gap-4 items-center text-xl text-white font-bold">
          <div className="flex gap-2  items-center">
            <BiCalendar size={24} />
            29 de Junho de 2026
          </div>
          <div className="flex gap-2  items-center">
            <CiLocationOn size={24} />
            Hotel Epic Sana, Luanda, Angola
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <Link
            href={"#"}
            className="btn-secondary px-8 py-3 text-lg">
            Ver Agenda
          </Link> 

          <button className="btn-primary px-8 py-3 text-lg">
            Obter Ingressos
          </button>
        </div>
      </div>
    </div>
  );
}
