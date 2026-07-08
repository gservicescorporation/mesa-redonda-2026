"use client";

import MainMoments from "./components/MainMoments";
import PhotoGallery from "./components/PhotoGallery";
import Hero from "@/app/ui/Hero";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FotosVideos() {
  return (
    <div className="flex flex-col justify-center w-full text-white bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)]">
      <Hero
        title="Fotos & Vídeos"
        subtitle="Reveja as fotos e os vídeos que marcaram a 5ª Edição da Mesa Redonda."
      />

      <MainMoments />

      <PhotoGallery />
    </div>
  );
}
