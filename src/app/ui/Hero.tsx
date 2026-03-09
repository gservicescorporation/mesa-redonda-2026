"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

type HeroProps = {
  title: string;
  subtitle: string;
  date?: string;
};

const slides = [
  {
    id: 1,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/35.jpg",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/18.jpg",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/22.jpg",
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2024/20.jpeg",
  },
  {
    id: 5,
    src: "/images/frente-do-bna.jpg",
  },
];

export default function Hero({ title, subtitle, date }: HeroProps) {
  return (
    <div className="w-full h-screen max-lg:h-[85vh] relative">

      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt="Slide"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-accent/55 to-accent/90 z-20">

        <div className="flex gap-24 max-lg:flex-col max-lg:text-center max-lg:gap-8 items-center max-w-7xl w-full px-6">

          <Image
            src="/logo-white.png"
            alt="Logo"
            width={500}
            height={500}
            className="max-lg:w-44"
          />

          <div className="border-l-4 border-white h-80 max-lg:border-l-0 max-lg:border-t-4 max-lg:h-0 max-lg:w-24"></div>

          <div className="flex flex-col gap-4 max-lg:items-center text-white">
            <h1 className="text-6xl max-lg:text-3xl font-extrabold uppercase">
              {title}
            </h1>

            <p className="text-4xl max-lg:text-lg">
              {subtitle}
            </p>

            {date && (
              <p className="text-4xl max-lg:text-xl font-extrabold">
                {date}
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}