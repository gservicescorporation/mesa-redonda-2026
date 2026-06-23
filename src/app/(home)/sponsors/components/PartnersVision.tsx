"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const featuredSponsors = [
  
  {
    id: 2,
    name: "Banco Sol",
    tier: "standard",
    logoUrl: "/images/partners/banco-sol.png",
    videoUrl: "/videos/sponsors/banco-sol.mp4",
    description: "",
  },
  {
    id: 3,
    name: "Teleservice",
    tier: "standard",
    logoUrl: "/images/partners/teleservice.png",
    videoUrl: "/videos/sponsors/teleservice.mp4",
    description: "",
  },
  
  
  {
    id: 6,
    name: "Fabrimetal",
    tier: "standard",
    logoUrl: "/images/partners/fabrimental.png",
    videoUrl: "/videos/sponsors/fabrimetal.mp4",
    description: "",
  },
  {
    id: 7,
    name: "Copia Group Of Companies",
    tier: "standard",
    logoUrl: "/images/partners/copia-group.png",
    videoUrl: "/videos/sponsors/copia-group.mp4",
    description: "",
  },
  
  
  {
    id: 10,
    name: "Grandes Moagens",
    tier: "standard",
    logoUrl: "/images/partners/grandes-moagens.png",
    videoUrl: "/videos/sponsors/grandes-moagens.mp4",
    description: "",
  },
  
  {
    id: 12,
    name: "Nossa Seguros",
    tier: "standard",
    logoUrl: "/images/partners/nossa-seguros.png",
    videoUrl: "/videos/sponsors/nossa-seguros.mp4",
    description: "",
  },
  
  
  
  
  {
    id: 17,
    name: "HOSSIPOWER",
    tier: "standard",
    logoUrl: "/images/partners/hossipower.png",
    videoUrl: "/videos/sponsors/hossi-power.mp4",
    description: "",
  },
];

export default function PartnersVision() {
  return (
    <section
      id="destaques"
      className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-jul-2026/main-banner.png)] bg-center bg-cover">
        <div className="flex flex-col items-center min-h-screen gap-24 p-24 justify-center w-full 
        bg-linear-to-t from-accent/60 to-accent/75 backdrop-blur-xs">
  <div className="max-w-7xl w-full flex flex-col gap-14">
        <div className="text-center max-w-3xl w-full mx-auto">
          <h2 className="text-3xl font-bold max-lg:text-2xl text-white">
            Visão dos Nossos Patrocinadores
          </h2>
          <p className="text-lg max-lg:text-base text-white mt-2">
            Assista aos depoimentos e vídeos institucionais dos patrocinadores
            que lideram a transformação do mercado nesta edição.
          </p>
        </div>

        <div className="relative flex  items-center gap-8 justify-center w-full">

          <button className="button-prev-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white hover:scale-105 transition-transform max-md:hidden">
            <ChevronLeft className="w-5" />
          </button>

          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            navigation={{
              nextEl: ".button-next-sponsor",
              prevEl: ".button-prev-sponsor",
            }}
            className="pb-6 w-full max-w-5xl">
            {featuredSponsors.map((sponsor) => (
              <SwiperSlide
                key={sponsor.id}
                className="pb-4">
                <div className="flex flex-col items-center gap-8 h-full w-full">
                  <div className="flex w-fit items-center justify-center gap-6 bg-primary/5 px-8 py-6 rounded-2xl border border-white/10 backdrop-blur-sm max-w-2xl max-md:flex-col max-md:text-center">
                    <div className="bg-clip-padding p-1 border-4 border-transparent bg-linear-to-r from-primary to-secondary rounded-2xl bg-white shrink-0">
                      <div className="bg-white rounded-xl h-32 w-32 flex items-center justify-center p-2">
                        <Image
                          src={sponsor.logoUrl}
                          alt={sponsor.name}
                          width={150}
                          height={150}
                          className="max-h-full h-44 w-44  max-w-full object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="text-6xl font-bold text-white max-lg:text-xl">
                      {sponsor.name}
                    </h3>
                  </div>

                  <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      playsInline>
                      <source
                        src={sponsor.videoUrl}
                        type="video/mp4"
                      />
                      O seu navegador não suporta a reprodução de vídeos.
                    </video>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="button-next-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white hover:scale-105 transition-transform max-md:hidden">
            <ChevronRight className="w-5" />
          </button>
        </div>

        <div className="lg:hidden flex justify-center gap-4 -mt-4">
          <button className="button-prev-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white">
            <ChevronLeft className="w-5" />
          </button>
          <button className="button-next-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white">
            <ChevronRight className="w-5" />
          </button>
        </div>
      </div>
        </div>
    
    </section>
  );
}
