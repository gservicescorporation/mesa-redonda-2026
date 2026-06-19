"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Handshake,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Hero from "@/app/ui/Hero";
import PartnersVision from "./components/PartnersVision";

export default function PatrocinadoresPage() {
  return (
    <div className="flex flex-col justify-center w-full text-white bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)]">
      <Hero
        title="Patrocinadores"
        subtitle="Veja cada um dos nossos especiais patrocinadores."
        date="07 e 08 de Julho de 2026"
      />

      <PartnersVision />
    </div>
  );
}
