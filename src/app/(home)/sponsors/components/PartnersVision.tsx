import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const featuredSponsors = [
  {
    id: 1,
    name: "Banco Sol",
    tier: "Patrocinador Diamante",
    logoUrl: "/images/sponsors/banco-sol-logo.png",
    videoUrl: "/sponsors/banco-sol-institucional.mp4",
    description:
      "O Banco Sol apoia ativamente as iniciativas que impulsionam o empreendedorismo e o desenvolvimento económico em Angola, fortalecendo o ecossistema de negócios nacional.",
  },
  {
    id: 2,
    name: "Unitel",
    tier: "Patrocinador Platina",
    logoUrl: "/images/sponsors/unitel-logo.png",
    videoUrl: "/sponsors/unitel-institucional.mp4",
    description:
      "Líder em telecomunicações, a Unitel conecta o país ao futuro digital, apoiando a transformação tecnológica e a inovação nas grandes empresas angolanas.",
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

        <div className="relative flex max-lg:flex-col items-center gap-8 justify-center">
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
                    <div className="bg-clip-padding p-1 border-8 border-transparent bg-gradient-to-r from-primary to-secondary rounded-full bg-white">
                      <div className="bg-white rounded-full h-44 w-44 flex items-center justify-center p-4">
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
