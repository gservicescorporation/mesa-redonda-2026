"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual é o objetivo do evento?",
      answer:
        "O evento visa reunir decisores públicos, banca, operadores petrolíferos e empresas nacionais para discutir o papel da banca e de outros agentes do sistema financeiro na mobilização de financiamento, acelerando a industrialização e consolidando cadeias de valor nacionais.",
    },
    {
      question: "Quem são os palestrantes?",
      answer:
        "O evento contará com um painel de oradores renomados, incluindo CEOs, líderes do setor financeiro, representantes governamentais e especialistas em desenvolvimento econômico.",
    },
    {
      question: "Onde e quando será realizado o evento?",
      answer:
        "O evento será realizado no Hotel Epic Sana, em Luanda, Angola, no dia 29 de Janeiro de 2026.",
    },
    {
      question: "Como posso participar do evento?",
      answer:
        "Você pode participar do evento adquirindo ingressos através do nosso site oficial. Oferecemos diferentes pacotes de ingressos, incluindo opções VIP e premium, para atender às suas necessidades.",
    },
    {
      question: "Haverá oportunidades de networking?",
      answer:
        "Sim, o evento proporcionará amplas oportunidades de networking, permitindo que os participantes se conectem com líderes do setor, decisores públicos e outros profissionais influentes.",
    },
    {
      question: "O evento é presencial ou virtual?",
      answer:
        "O evento será realizado presencialmente no Hotel Epic Sana, em Luanda, Angola. No entanto, também ofereceremos opções de participação virtual para aqueles que não puderem comparecer pessoalmente.",
    },
    {
      question: "Haverá tradução simultânea disponível?",
      answer:
        "Sim, para garantir que todos os participantes possam acompanhar as discussões, haverá tradução simultânea disponível durante o evento.",
    },
    {
      question: "Posso obter um certificado de participação?",
      answer:
        "Sim, os participantes que comparecerem ao evento receberão um certificado de participação como reconhecimento de sua presença e envolvimento.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.3 },
        },
      }}
      className="w-full bg-cover items-center max-lg:px-6 bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/33.jpg)]">
      <div className="flex justify-center gap-14 p-24 w-full bg-linear-to-b from-accent/75 to-accent/95 z-10">
        <div className="max-w-7xl w-full h-full flex gap-12">
          <div className="text-white flex flex-col gap-4 w-full max-w-lg max-lg:text-center max-lg:items-center">
            <p className="px-4 py-2 rounded-md text-white w-fit max-lg:text-sm">
              Tudo que precisa saber sobre o evento
            </p>

            <h1 className="text-4xl font-semibold text-white max-lg:text-2xl">
              Perguntas frequentes
            </h1>
          </div>

          <motion.div className="w-full max-lg:w-full">
            <div className="flex flex-col gap-6">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-b border-white/20 pb-3">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex justify-between items-center cursor-pointer w-full text-left max-lg:gap-4">
                      <span
                        className={`text-lg font-medium transition-colors text-white max-lg:text-base`}>
                        {faq.question.toUpperCase()}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 0 : 180 }}
                        transition={{ duration: 0.4 }}>
                        <ChevronUp className="w-5 h-5 max-lg:w-4 max-lg:h-4 text-white" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          className="text-white/70 max-lg:text-sm"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}>
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
