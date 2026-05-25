"use client";

import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

interface SponsorVideo {
  id: number;
  sponsorName: string;
  videoUrl: string;
}

const sponsorVideos: SponsorVideo[] = [
  { id: 1, sponsorName: "ABANC", videoUrl: "/videos/partners/abanc-promo.mp4" },
  { id: 2, sponsorName: "ANPG", videoUrl: "/videos/partners/anpg-promo.mp4" },
  { id: 3, sponsorName: "BODIVA", videoUrl: "/videos/partners/bodiva-promo.mp4" },
];

export default function SponsorsVideos() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-[url(/bg-oficial.jpeg)] bg-center bg-cover">
      <motion.div
        className="text-white w-full p-24 flex flex-col items-center gap-12
        bg-linear-to-b from-accent/90 to-primary/40 backdrop-blur-xs
        max-lg:p-10 max-lg:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center flex flex-col gap-2" variants={fadeUpVariants}>
          <h2 className=" text-4xl font-bold text-center
            max-lg:text-2xl
            max-lg:leading-tight">
            Painel de Patrocinadores
          </h2>
          <p className="text-white text-lg max-lg:text-base">
            Conheça as iniciativas e visões dos nossos parceiros estratégicos.
          </p>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-5xl flex items-center justify-center gap-4"
          variants={fadeUpVariants}
        >
          <button className="video-prev z-20 cursor-pointer bg-secondary/80 hover:bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white transition-all shadow-lg max-md:hidden">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            loop
            speed={1000}
            navigation={{
              nextEl: ".video-next",
              prevEl: ".video-prev",
            }}
           
            spaceBetween={30}
            slidesPerView={1} 
            className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {sponsorVideos.map((video) => (
              <SwiperSlide key={video.id} className="w-full aspect-video bg-black/40 relative">
               
                <div className="absolute top-4 left-4 z-10 bg-black/60 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20 flex items-center gap-2 backdrop-blur-md">
                  <Volume2 className="w-3.5 h-3.5 text-primary" />
                  {video.sponsorName}
                </div>
                
                <video
                  preload="metadata"
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  src={video.videoUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="video-next z-20 cursor-pointer bg-secondary/80 hover:bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white transition-all shadow-lg max-md:hidden">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}