"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { ArrowRight, MoveDown } from "lucide-react";

const slides = [
  {
    id: 3,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/35.jpg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 3",
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/35.jpg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 4",
  },
  {
    id: 5,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/18.jpg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 5",
  },
  {
    id: 6,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2023/22.jpg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 6",
  },
  {
    id: 7,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2024/20.jpeg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 7",
  },
  {
    id: 8,
    src: "https://ik.imagekit.io/globalsc/mr-nov-2024/18.jpeg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 7",
  },
  {
    id: 9,
    src: "/images/frente-do-bna.jpg",
    alt: "Mesa Redonda com CEOS 2026 - 5ª Edição - Slide 7",
  },
];

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="w-full h-full">
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority={slide.id === 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-10 inset-0 h-full w-full flex items-center justify-center bg-linear-to-b from-accent/55 to-accent/90">
        <div className="flex gap-24 items-center max-w-7xl w-full">
          <Image
            src={"/logo-white.png"}
            alt={""}
            width={500}
            height={500}
          />

          <div className="border-l-4 border-white h-80"></div>

          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-extrabold uppercase">Oradores</h1>
            <p className="text-4xl">Veja o perfil de cada um dos nossos especiais oradores.</p>
            <p className="text-4xl font-extrabold">07 e 08 de Julho de 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
