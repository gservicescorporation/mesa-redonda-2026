import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const featuredSponsors = [
  {
    id: 1,
    name: "Etu Energies",
    tier: "standard",
    logoUrl: "/images/partners/etu-energias.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 2,
    name: "Banco Sol",
    tier: "standard",
    logoUrl: "/images/partners/banco-sol.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 3,
    name: "Teleservice",
    tier: "standard",
    logoUrl: "/images/partners/teleservice.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 4,
    name: "Inovicom",
    tier: "standard",
    logoUrl: "/images/partners/inovicom.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 5,
    name: "Sistec",
    tier: "standard",
    logoUrl: "/images/partners/sistec.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 6,
    name: "Fabrimetal",
    tier: "standard",
    logoUrl: "/images/partners/fabrimental.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 7,
    name: "Copia Group",
    tier: "standard",
    logoUrl: "/images/partners/copia-group.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 8,
    name: "Deloitte",
    tier: "standard",
    logoUrl: "/images/partners/deloitte.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 9,
    name: "Hemera Capital",
    tier: "standard",
    logoUrl: "/images/partners/hemera-capital.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 10,
    name: "Grandes Moagens",
    tier: "standard",
    logoUrl: "/images/partners/grandes-moagens.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 11,
    name: "Wiliete FC",
    tier: "standard",
    logoUrl: "/images/partners/wiliete-fc.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 12,
    name: "Nossa Seguros",
    tier: "standard",
    logoUrl: "/images/partners/nossa-seguros.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 13,
    name: "CABSHIP",
    tier: "standard",
    logoUrl: "/images/partners/cabship.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 14,
    name: "Banco Yetu",
    tier: "standard",
    logoUrl: "/images/partners/banco-yetu.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 15,
    name: "VECAUTO",
    tier: "standard",
    logoUrl: "/images/partners/vecauto.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 16,
    name: "Apermotor",
    tier: "standard",
    logoUrl: "/images/partners/apermotor.png",
    videoUrl: "",
    description: "",
  },
  {
    id: 17,
    name: "HOSSIPOWER",
    tier: "standard",
    logoUrl: "/images/partners/hossipower.png",
    videoUrl: "",
    description: "",
  },
];

export default function PartnersVision() {
  return (
    <section
      id="destaques"
      className="py-24 bg-accent border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
        <div className="text-center max-w-3xl w-full mx-auto">
          <h2 className="text-3xl font-bold max-lg:text-2xl text-white">
            Visão dos Nossos Parceiros
          </h2>
          <p className="text-lg max-lg:text-base text-gray-400 mt-2">
            Assista aos depoimentos e vídeos institucionais dos patrocinadores
            que lideram a transformação do mercado nesta edição.
          </p>
        </div>

        <div className="relative flex max-lg:flex-col items-center gap-8 justify-center w-full">
          <button className="button-prev-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white max-lg:order-2 hover:scale-105 transition-transform">
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
            className="pb-14 w-full max-lg:order-1">
            {featuredSponsors.map((sponsor) => (
              <SwiperSlide
                key={sponsor.id}
                className="pb-4">
                <div className="flex justify-center gap-12 items-center h-full w-full max-lg:flex-col max-lg:gap-8">
                  {/* Infos do Patrocinador */}
                  <div className="flex flex-col max-w-md w-full items-center gap-6 bg-primary/5 px-6 py-8 rounded-2xl border border-white/10 backdrop-blur-sm min-h-135 max-lg:min-h-0 justify-center">
                    <div className="bg-clip-padding p-2 border-8 border-transparent bg-linear-to-r from-primary to-secondary rounded-3xl bg-white">
                      <div className="bg-white rounded-2xl h-44 w-44 flex items-center justify-center p-4">
                        <Image
                          src={sponsor.logoUrl}
                          alt={sponsor.name}
                          width={160}
                          height={160}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="text-center flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-white max-lg:text-xl">
                        {sponsor.name}
                      </h3>
                      <p className="text-secondary font-semibold text-sm tracking-widest uppercase">
                        {sponsor.tier}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed mt-2">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>

                  {/* Vídeo */}
                  <video
                    className="w-full object-contain h-135 max-w-sm rounded-2xl border border-white/10 backdrop-blur-sm max-lg:h-auto max-lg:max-w-md shadow-2xl"
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
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="button-next-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white max-lg:order-3 hover:scale-105 transition-transform">
            <ChevronRight className="w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
