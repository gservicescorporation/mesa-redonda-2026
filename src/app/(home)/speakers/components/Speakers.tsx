"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

export default function SpeakersList() {
  const speakers = [
    {
      name: "Dr. Armando Manuel",
      title: "Presidente do Fundo Soberano de Angola",
      image: "/images/speakers/armando_manuel.jpeg",
    },
    {
      name: "Dr. Aguinaldo Jaime",
      title:
        "PCA da UNITEL, Economista e antigo Ministro das Finanças de Angola",
      image: "/images/speakers/aguinaldo-jaime.png",
    },
    {
      name: "Hariana Verás",
      title:
        "Jornalista, Apresentadora de TV, Produtora/Correspondente Permanente da Casa Branca, Senado dos EUA, Pentágono e Departamento de Estado para a África",
      image: "/images/speakers/hariana-veras.png",
    },
    {
      name: "Dr. NJ Ayuk",
      title:
        "Presidente Executivo da African Energy Chamber, Advogado e Autor de Best-Sellers",
      image: "/images/speakers/nj-ayuk.png",
    },
    {
      name: "Dr. José Figueiredo",
      title: "PCA da TELESERVICES",
      image: "/images/speakers/jose-figueiredo.png",
    },
    {
      name: "H.E. Gabriel Mbaga Obiang Lima",
      title:
        " H.E Former Minister of Mines and Hydrocarbons of the Republic of Equatorial Guinea",
      image: "/images/speakers/gabriel_mbaga.jpeg",
    },
    {
      name: "Dr. Elmer Serrão",
      title: "PCA da Comissão do Mercado de Capitais",
      image: "/images/speakers/elmer-serrao.png",
    },
    {
      name: "Dr. James Shindi",
      title:
        "Lawyer, Businessman, Advisor and Serial Entrepreneur of British/Nigerian Heritage",
      image: "/images/speakers/james_shindi.jpeg",
    },
    {
      name: "Dr. Vasco Januário",
      title: "Administrador Executivo da Comissão do Mercado de Capitais",
      image: "/images/speakers/vasco-januario.png",
    },
    {
      name: "Noorali Manji",
      title:
        "Presidente MMD Steel Group, Fundador Furniture Palace e Fundador Reliance Hotels",
      image: "/images/speakers/noorali-manji.png",
    },
    {
      name: "S.E. Dr. Pedro Passos Coelho",
      title: "Ex-Primeiro-Ministro de Portugal",
      image: "/images/speakers/pedro_coelho.png",
    },
    {
      name: "S.E. Dr. Paulo Portas",
      title: "Ex-Vice-Primeiro-Ministro de Portugal",
      image: "/images/speakers/paulo_portas.jpg",
    },
    {
      name: "Dr. Edson dos Santos",
      title: "PCA da Etu Energias",
      image: "/images/speakers/edson-dos-santos.png",
    },
    {
      name: "Osvaldo Macaia",
      title: "CEO do Banco Sol",
      image: "/images/speakers/osvaldo-macaia.png",
    },
    {
      name: "Carlos Rosado",
      title: "Economista, Docente Universitário",
      image: "/images/speakers/carlos-rosado.png",
    },
    {
      name: "Berta Rodrigues Issa",
      title: "Presidente da ASSEA, Fundadora e CEO da Inga Rose",
      image: "/images/speakers/berta-rodrigues.jpeg",
    },
    {
      name: "José Serra Van-Dúnem",
      title: "Professor Catedrático, Pesquisador na Faculdade de Direito da Universidade Agostinho Neto",
      image: "/images/speakers/jose-serra.jpeg",
    },
     {
      name: "Sanção Manuel",
      title: "Director Geral Adjunto da CABSHIP",
      image: "/images/speakers/sancao-manuel.png",
    },
    {
      name: "Adilson Nelumba",
      title: "PCA na Cópia Group Of",
      image: "/images/speakers/adilson-nelumba.png",
    },
    {
      name: "Adilson Dala",
      title: "Coordenador do Planeamento e Finanças",
      image: "/images/speakers/adilson-dala.jpeg",
    },
    {
      name: "Edvânia do Carmo",
      title: "Apresentadora de TV",
      image: "/images/speakers/edvania-do-carmo.png",
    },
    {
      name: "Filipe de Almeida",
      title: "Presidente do Conselho de Administração da Vecauto",
      image: "/images/speakers/filipe-de-almeida.png",
    },
    /* {
      name: "José de Nascimento",
      title: "Administrador BFA",
      image: "/images/speakers/jose-nascimento.png",
    }, */
    {
      name: "Jorge Morais",
      title: "Director Geral Kaeso Energy Services",
      image: "/images/speakers/jorge-morais.png",
    },
    {
      name: "Luís Diogo",
      title: "Director Geral Fabrimental",
      image: "/images/speakers/luis-diogo.png",
    },
    {
      name: "Ulanga Martins",
      title: "PCA Poliedro Energy",
      image: "/images/speakers/ulanga-martins.png",
    },
    {
      name: "José Faria",
      title:
        "Advogado, Patrono da Sociedade de Advogados Fundador da JFaria-Advogado",
      image: "/images/speakers/jose-faria.png",
    },
    /* {
      name: "Nardos Bekele Thomas",
      title: "Directora Executiva do AUDA-NEPAD",
      image: "/images/speakers/nardo-bekele.jpg",
    },
    {
      name: "Sidi Ould Tah",
      title:
        "Presidente do Banco Árabe para o Desenvolvimento Económico em África",
      image: "/images/speakers/sidi_tah.png",
    },
    {
      name: "George Elombi",
      title: "Presidente do Afreximbank",
      image: "/images/speakers/george-elombi.jpg",
    },
    
    {
      name: "Rui Miguêns de Oliveira",
      title: "Ministro da Indústria e Comércio",
      image: "/images/speakers/rui_miguens.jpg",
    },
    {
      name: "Vera Daves de Sousa",
      title: "Ministra Angolana das Finanças",
      image: "/images/speakers/vera_daves.jpeg",
    }, */
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 14 },
    },
  };

  return (
    <div className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/mr-jul-2026/main-banner.png)]">
      <div className="flex flex-col min-h-screen items-center gap-14 px-24 py-24 max-lg:px-6 max-lg:py-16 justify-center backdrop-blur-xs w-full h-full bg-linear-to-b from-accent/75 to-accent/55 z-10">
        <div className="max-w-7xl w-full flex flex-col gap-14">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold max-lg:text-2xl">
              Oradores e Convidados
            </h1>

            <p className="text-lg max-lg:text-base">
              Veja quem fará parte do nosso painel de oradores e grande parte
              dos nossos convidados.
            </p>
          </div>

          <motion.ul
            className="flex flex-wrap w-full gap-12 items-center justify-center max-lg:hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}>
            {speakers.map((speaker, index) => (
              <motion.li
                key={index}
                className="flex flex-col items-center gap-4 max-w-sm w-full"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}>
                <div className="bg-clip-padding p-2 border-8 border-transparent bg-linear-to-r from-primary to-secondary rounded-full">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="rounded-full h-72 w-72 object-cover object-top m-4  bg-linear-to-r from-gray-400 to-white"
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white">
                    {speaker.name}
                  </h2>
                  <p className="text-lg text-white">{speaker.title}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="hidden max-lg:block w-full">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              speed={800}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
              modules={[Autoplay]}
              className="w-full">
              {speakers.map((speaker, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 14,
                    }}>
                    <div className="bg-clip-padding p-2 border-8 border-transparent bg-linear-to-r from-primary to-secondary rounded-full">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={300}
                        height={300}
                        className="rounded-full h-56 w-56 object-cover object-top"
                      />
                    </div>

                    <div className="text-center px-4">
                      <h2 className="text-lg font-semibold text-white">
                        {speaker.name}
                      </h2>
                      <p className="text-sm text-white">{speaker.title}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
