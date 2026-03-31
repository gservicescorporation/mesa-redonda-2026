"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

// Tipagem baseada no esquema
interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const formVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function Contact() {
  // 2. Inicialização do Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/52.jpeg)]">
      <ToastContainer />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-24 px-24 py-32 max-lg:px-0 max-lg:py-16 max-lg:gap-12 justify-center w-full bg-linear-to-b from-accent/90 to-accent/75 backdrop-blur-xs">
        <div className="max-w-7xl w-full flex items-center justify-around gap-16 max-lg:flex-col max-lg:gap-12">
          {/* ... Lista de contatos (seção esquerda) permanece igual ... */}
          <motion.ul
            variants={container}
            className="flex flex-col gap-12 w-full max-w-xl max-lg:px-8 max-lg:py-12">
            <motion.li
              variants={item}
              className="flex gap-8 max-lg:gap-4">
              <div className="min-w-20 w-20 h-20 max-lg:w-14 max-lg:h-14 max-lg:min-w-14 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                <MapPin
                  size={44}
                  className="max-lg:w-6 max-lg:h-6"
                />
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

            <motion.li
              variants={item}
              className="flex gap-8 max-lg:gap-4">
              <div className="min-w-20 w-20 h-20 max-lg:w-14 max-lg:h-14 max-lg:min-w-14 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                <PhoneCall
                  size={44}
                  className="max-lg:w-6 max-lg:h-6"
                />
              </div>

              <div className="flex flex-col gap-1 mt-4 max-lg:mt-1">
                <h1 className="text-2xl max-lg:text-lg font-bold text-white">
                  Contactos:
                </h1>

                <p className="text-white text-xl max-lg:text-sm">
                  +244 941 064 919 / +244 925 835 848
                </p>
              </div>
            </motion.li>

            <motion.li
              variants={item}
              className="flex gap-8 max-lg:gap-4">
              <div className="min-w-20 w-20 h-20 max-lg:w-14 max-lg:h-14 max-lg:min-w-14 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                <Mail
                  size={44}
                  className="max-lg:w-6 max-lg:h-6"
                />
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

          <motion.div
            variants={formVariant}
            className="max-w-xl w-full backdrop-blur-2xl flex flex-col gap-5 lg:rounded-3xl px-12 py-12 max-lg:px-6 max-lg:py-8 bg-linear-to-b from-primary/10 to-accent/5">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl max-lg:text-2xl font-bold text-white">
                Saiba mais
              </h1>
              <p className="text-white max-lg:text-sm">
                Para dúvidas, parcerias ou mais informações sobre o evento, não
                hesite em nos contatar.
              </p>
            </div>

            {/* 3. Aplicação do handleSubmit */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <input
                  {...register("fullName", {
                    required: "Nome é obrigatório",
                  })}
                  type="text"
                  className={`w-full px-4 py-2 rounded-2xl bg-primary/20 border ${errors.fullName ? "border-red-500" : "border-primary/50"} text-white outline-none`}
                  placeholder="Nome completo"
                />
                {errors.fullName && (
                  <span className="text-red-400 text-xs ml-2">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="flex gap-4 max-lg:flex-col">
                <div className="flex flex-col gap-1 w-full">
                  <input
                    {...register("email", {
                      required: "E-mail é obrigatório",
                    })}
                    type="email"
                    className={`w-full px-4 py-2 rounded-2xl bg-primary/20 border ${errors.email ? "border-red-500" : "border-primary/50"} text-white outline-none`}
                    placeholder="Endereço de email"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs ml-2">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <input
                    {...register("phone", {
                      required: "O contacto é obrigatório",
                    })}
                    type="tel"
                    className={`w-full px-4 py-2 rounded-2xl bg-primary/20 border ${errors.phone ? "border-red-500" : "border-primary/50"} text-white outline-none`}
                    placeholder="Contacto telefónico"
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-xs ml-2">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 max-lg:flex-col">
                <div className="flex flex-col gap-1 w-full">
                  <input
                    {...register("company")}
                    type="text"
                    className={`w-full px-4 py-2 rounded-2xl bg-primary/20 border ${errors.company ? "border-red-500" : "border-primary/50"} text-white outline-none`}
                    placeholder="Empresa (Opcional)"
                  />
                  {errors.company && (
                    <span className="text-red-400 text-xs ml-2">
                      {errors.company.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div
                    className={`w-full px-4 py-2 rounded-2xl bg-primary/20 border ${errors.subject ? "border-red-500" : "border-primary/50"}`}>
                    <select
                      {...register("subject", {
                        required: "O tema é obrigatório",
                      })}
                      className="w-full bg-transparent outline-none text-white cursor-pointer">
                      <option
                        value=""
                        className="text-black">
                        Selecione o assunto
                      </option>
                      <option
                        value="patrocinio"
                        className="text-black">
                        Patrocínio
                      </option>
                      <option
                        value="parceria"
                        className="text-black">
                        Parceria
                      </option>
                      <option
                        value="exposicao"
                        className="text-black">
                        Exposição
                      </option>
                      <option
                        value="outros"
                        className="text-black">
                        Outros
                      </option>
                    </select>
                  </div>
                  {errors.subject && (
                    <span className="text-red-400 text-xs ml-2">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <textarea
                  {...register("message", {
                    required: "A mensagem é obrigatória",
                  })}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-2xl bg-primary/20 border ${errors.message ? "border-red-500" : "border-primary/50"} text-white outline-none resize-none`}
                  placeholder="Deixa a sua mensagem aqui"
                />
                {errors.message && (
                  <span className="text-red-400 text-xs ml-2">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                disabled={isSubmitting}
                className="btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
