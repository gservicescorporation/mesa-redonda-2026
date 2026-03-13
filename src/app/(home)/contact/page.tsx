"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  } as const,
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  } as const,
};

const formVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  } as const,
};

export default function Contact() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/53.jpeg)]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-24 px-24 py-32 max-lg:px-0 max-lg:py-16 max-lg:gap-12 justify-center w-full bg-linear-to-b from-accent/90 to-accent/75 backdrop-blur-xs"
      >
        <div className="max-w-7xl w-full flex items-center justify-around gap-16 max-lg:flex-col max-lg:gap-12">
          
          {/* CONTACT INFO */}
          <motion.ul
            variants={container}
            className="flex flex-col gap-12 w-full max-w-xl max-lg:px-8 max-lg:py-12"
          >
            <motion.li variants={item} className="flex gap-8 max-lg:gap-4">
              <div className="min-w-20 w-20 h-20 max-lg:w-14 max-lg:h-14 max-lg:min-w-14 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                <MapPin size={44} className="max-lg:w-6 max-lg:h-6" />
              </div>

              <div className="flex flex-col gap-1 mt-4 max-lg:mt-1">
                <h1 className="text-2xl max-lg:text-lg font-bold text-white">
                  Localização:
                </h1>
                <p className="text-white text-xl max-lg:text-sm">
                  Centro de Conferências de Talatona, Luanda, Angola
                </p>
              </div>
            </motion.li>

            <motion.li variants={item} className="flex gap-8 max-lg:gap-4">
              <div className="min-w-20 w-20 h-20 max-lg:w-14 max-lg:h-14 max-lg:min-w-14 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                <PhoneCall size={44} className="max-lg:w-6 max-lg:h-6" />
              </div>

              <div className="flex flex-col gap-1 mt-4 max-lg:mt-1">
                <h1 className="text-2xl max-lg:text-lg font-bold text-white">
                  Ligue para nós:
                </h1>
                <p className="text-white text-xl max-lg:text-sm">
                  +244 941 064 919 / +244 925 835 848
                </p>
              </div>
            </motion.li>

            <motion.li variants={item} className="flex gap-8 max-lg:gap-4">
              <div className="min-w-20 w-20 h-20 max-lg:w-14 max-lg:h-14 max-lg:min-w-14 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                <Mail size={44} className="max-lg:w-6 max-lg:h-6" />
              </div>

              <div className="flex flex-col gap-1 mt-4 max-lg:mt-1">
                <h1 className="text-2xl max-lg:text-lg font-bold text-white">
                  Email:
                </h1>
                <p className="text-white text-xl max-lg:text-sm">
                  mesaredondacomceos@globalsc.ao
                </p>
              </div>
            </motion.li>
          </motion.ul>

          {/* FORM */}
          <motion.div
            variants={formVariant}
            className="max-w-xl w-full backdrop-blur-2xl flex flex-col gap-5 lg:rounded-3xl px-12 py-12 max-lg:px-6 max-lg:py-8 bg-linear-to-b from-primary/10 to-accent/5"
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl max-lg:text-2xl font-bold text-white">
                Entre em contato connosco
              </h1>
              <p className="text-white max-lg:text-sm">
                Para dúvidas, parcerias ou mais informações sobre o evento,
                não hesite em nos contatar.
              </p>
            </div>

            <form className="flex flex-col gap-4"> <label className="flex flex-col gap-2"> <span className="text-white">Nome completo</span> <input type="text" className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none" placeholder="Insira o seu nome completo" /> </label> <div className="flex gap-4 max-lg:flex-col"> <label className="flex flex-col gap-2 w-full"> <span className="text-white">E-mail</span> <input type="email" className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none" placeholder="Insira o seu email" /> </label> <label className="flex flex-col gap-2 w-full"> <span className="text-white">Contacto telefónico</span> <input type="tel" className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none" placeholder="Insira o seu contacto telefónico" /> </label> </div> <div className="flex gap-4 max-lg:flex-col"> <label className="flex flex-col gap-2 w-full"> <span className="text-white">Nome da empresa</span> <input type="text" className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none" placeholder="Nome da empresa" /> </label> <label className="flex flex-col gap-2 w-full"> <span className="text-white">Assunto</span> <div className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50"> <select className="w-full bg-transparent outline-none text-white cursor-pointer"> <option value="" className="text-black"> Selecione o assunto </option> <option value="patrocinio" className="text-black"> Patrocínio </option> <option value="parceria" className="text-black"> Parceria </option> <option value="exposicao" className="text-black"> Exposição </option> <option value="outros" className="text-black"> Outros </option> </select> </div> </label> </div> <label className="flex flex-col gap-2"> <span className="text-white">Mensagem</span> <textarea rows={4} className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none resize-none" placeholder="Deixa a sua mensagem aqui" /> </label> <button className="btn-primary py-3">Enviar mensagem</button> </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}