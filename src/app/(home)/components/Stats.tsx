"use client";

import CountUp from "react-countup";

export default function Statistics() {
  type Stat = {
    value: number;
    suffix?: string;
    label: string;
  };

  const stats: Stat[] = [
    { value: 50, suffix: "+", label: "Oradores" },
    { value: 200, suffix: "+", label: "Empresas" },
    { value: 1000, suffix: "+", label: "Participantes" },
    { value: 200, suffix: "+", label: "Empresas apoiadas" },
  ];

  return (
    <div className="w-full  bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/25.jpeg)] bg-cover">
      <div className="text-white w-full p-24 flex justify-center bg-linear-to-r from-primary/80 to-accent/80 z-10 backdrop-blur-xs">
        <div className="flex gap-8 justify-around max-w-7xl w-full">
          <div className="max-w-sm w-full flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">
              Estatísticas do Evento
            </h1>

            <p className="text-lg">
              Aqui estão algumas estatísticas impressionantes do nosso evento:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-lg:gap-6 max-lg:mt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center font-medium p-2 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer max-lg:p-1">
                <div className="text-3xl font-semibold text-main max-lg:text-xl">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={4}
                    prefix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-white text-lg text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
