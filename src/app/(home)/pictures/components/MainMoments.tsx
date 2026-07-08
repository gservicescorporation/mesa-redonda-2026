"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EVENT_PHOTOS } from "../data";


export default function MainMoments() {
 

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    } as const,
  };

  const textItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    } as const,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
      variants={container}
      className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-top bg-cover"
    >
      <div className="flex flex-col items-center min-h-screen max-lg:min-h-fit gap-12 p-24 max-lg:p-6 justify-center w-full bg-linear-to-t from-accent/90 to-accent/75 backdrop-blur-xs">

        {/* Cabeçalho */}
        <motion.div
          variants={container}
          className="max-w-xl w-full text-center"
        >
          <motion.h1
            variants={textItem}
            className="text-3xl max-lg:text-2xl font-bold text-white"
          >
            Principais Momentos do Evento
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-white/80 text-lg max-lg:text-base mt-4"
          >
            Explore os registos fotográficos oficiais e recorde os momentos mais
            marcantes do nosso evento.
          </motion.p>
        </motion.div>


        {/* Slider */}
        <motion.div
          variants={textItem}
          className="relative flex items-center gap-8 max-lg:gap-4 justify-center w-full"
        >

          {/* Botão Desktop */}
          <button
            className="button-prev-gallery z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white hover:scale-105 transition-transform max-lg:hidden"
          >
            <ChevronLeft className="w-5" />
          </button>


          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".button-next-gallery",
              prevEl: ".button-prev-gallery",
            }}
            className="photo-swiper pb-14 w-full max-w-4xl"
          >

            {EVENT_PHOTOS.map((photo) => (
              <SwiperSlide
                key={photo.id}
                className="w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-accent"
              >

                <div className="relative w-full h-full">

                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />


                  <div className="absolute inset-0 bg-linear-to-t from-accent/80 via-transparent to-transparent opacity-90" />


                  <div className="absolute bottom-0 left-0 p-6 max-lg:p-4 w-full">
                    <h4 className="text-xl max-lg:text-lg font-bold text-white">
                      {photo.alt}
                    </h4>
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>


          {/* Botão Desktop */}
          <button
            className="button-next-gallery z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white hover:scale-105 transition-transform max-lg:hidden"
          >
            <ChevronRight className="w-5" />
          </button>

        </motion.div>



        {/* Botões Mobile */}
        <div className="hidden max-lg:flex justify-center gap-4 -mt-4">

          <button
            className="button-prev-gallery z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white"
          >
            <ChevronLeft className="w-5" />
          </button>


          <button
            className="button-next-gallery z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white"
          >
            <ChevronRight className="w-5" />
          </button>

        </div>


      </div>
    </motion.div>
  );
}