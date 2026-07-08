"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EVENT_PHOTOS } from "../data";



const PhotoGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % EVENT_PHOTOS.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + EVENT_PHOTOS.length) % EVENT_PHOTOS.length
      );
    }
  };

  return (
    <section className="bg-accent text-white py-16 max-lg:py-12 px-4 max-lg:px-5 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-lg:mb-8"
        >
          <h2 className="text-3xl max-lg:text-2xl font-bold tracking-tight mb-4">
            Galeria de Fotos
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto text-base max-lg:text-sm">
            Explore os registos fotográficos oficiais e recorde os momentos mais
            marcantes do nosso evento.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center gap-6 max-lg:gap-3 w-full py-4"
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            spaceBetween={40}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".button-next-gallery-cover",
              prevEl: ".button-prev-gallery-cover",
            }}
            className="photo-swiper pb-14! w-full"
          >
            {EVENT_PHOTOS.map((photo, index) => (
              <SwiperSlide
                key={photo.id}
                className="!w-[420px] max-lg:!w-[280px] aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl cursor-pointer"
                onClick={() => setActivePhotoIndex(index)}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-accent/90 via-accent/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 w-full p-6 max-lg:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-lg max-lg:text-base font-bold text-white">
                      {photo.alt}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Navegação */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="button-prev-gallery-cover z-20 cursor-pointer bg-secondary rounded-full h-12 w-12 flex justify-center items-center text-white hover:scale-105 transition-transform">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button className="button-next-gallery-cover z-20 cursor-pointer bg-secondary rounded-full h-12 w-12 flex justify-center items-center text-white hover:scale-105 transition-transform">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-10 max-lg:p-4 backdrop-blur-sm select-none"
          >
            {/* Fechar */}
            <button
              className="absolute top-6 right-6 text-white text-3xl font-light hover:text-secondary transition-colors cursor-pointer"
              onClick={() => setActivePhotoIndex(null)}
            >
              ✕
            </button>

            {/* Anterior */}
            <button
              className="absolute left-8 max-lg:left-4 text-white/50 hover:text-white text-4xl p-2 transition-colors cursor-pointer"
              onClick={handlePrevPhoto}
            >
              ‹
            </button>

            {/* Imagem */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[75vh] flex flex-col items-center"
            >
              <img
                src={EVENT_PHOTOS[activePhotoIndex].url}
                alt={EVENT_PHOTOS[activePhotoIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
              />

              <p className="mt-4 text-lg max-lg:text-base text-center font-medium text-white/90">
                {EVENT_PHOTOS[activePhotoIndex].alt}
              </p>
            </motion.div>

            {/* Próximo */}
            <button
              className="absolute right-8 max-lg:right-4 text-white/50 hover:text-white text-4xl p-2 transition-colors cursor-pointer"
              onClick={handleNextPhoto}
            >
              ›
            </button>

            {/* Contador */}
            <div className="absolute bottom-6 text-sm text-gray-400 font-mono">
              {activePhotoIndex + 1} / {EVENT_PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;