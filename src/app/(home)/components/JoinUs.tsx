"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

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
      const eventTime = new Date("2026-07-07").getTime();
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
    <div className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/18.jpg)] bg-cover bg-center">
      <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="w-full h-full object-cover"
  >
    <source
      src="https://ik.imagekit.io/globalsc/mr-nov-2024/mr-2024.mp4"
      type="video/mp4"
    />
  </video>

      <div className="flex min-h-screen absolute inset-0 flex-col items-center gap-12 px-24 py-44 justify-center w-full h-full bg-linear-to-b from-accent/75 to-accent/50 z-10">
        <div className="text-center items-center flex flex-col gap-2 max-w-225 w-full">
        
          <h1 className="text-3xl text-white text-center font-semibold">
            <span className="text-4xl font-bold">MESA REDONDA COM CEOS 2026 - 5ª Edição:</span>
            <br />O Papel da Banca e de Outros Agentes do Sistema Financeiro na
            Mobilização de Financiamento
          </h1>
        </div>

        <ul className="flex gap-18 items-center">
          {eventTime.map((item, index) => (
            <motion.li
              key={index}
              className="text-white text-center bg-white/20 px-6 py-5 border-2 backdrop-blur-xs border-primary rounded-md"
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
            <Calendar size={24} />
            08 e 09 de Julho de 2026
          </div>
          <div className="flex gap-2  items-center">
            <MapPin size={24} />
            Centro de Conferências de Talatona
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
