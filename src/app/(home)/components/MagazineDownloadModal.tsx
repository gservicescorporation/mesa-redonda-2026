"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { useState } from "react";

export default function MagazineDownloadModal() {
  const [isOpen, setModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    try {
      await fetch("/api/send-magazine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setModalOpen(!isOpen)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
/* 
      const link = document.createElement("a");
      link.href = "/magazine/local-content-magazine.pdf";
      link.download = "LOCAL-CONTENT-MAGAZINE.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); */
    }

  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="h-screen w-full fixed top-0 left-0 z-50 bg-primary/50 backdrop-blur-xs flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
              flex rounded-2xl
              bg-linear-to-r from-primary via-blue-900 to-primary
              max-w-2xl w-full h-80
relative
              max-lg:flex-col
              max-lg:h-auto
              max-lg:max-h-[90vh]
              max-lg:overflow-hidden
            ">
            <Image
              src={"/images/magazine.png"}
              alt={"Revista LCM"}
              width={600}
              height={600}
              className="
                w-5/11 h-full object-cover rounded-l-2xl
                
                max-lg:w-full
                max-lg:h-44
                max-lg:rounded-t-2xl
                max-lg:rounded-l-none
              "
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-3 top-3 p-2 rounded-sm hover:bg-white/10 cursor-pointer transition-all duration-300">
              <X className="text-white max-lg:w-5 max-lg:h-5" />
            </button>
            <div
              className="
                 h-full w-full flex items-center justify-center p-8
                
                max-lg:p-6
              ">
              <div className="flex flex-col gap-4 w-full">
                <div className="gap-2 flex flex-col text-white">
                  <h1 className="text-2xl font-extrabold max-lg:text-lg">
                    Obtenha a revista LOCAL CONTENT MAGAZINE
                  </h1>

                  <p className="text-sm max-lg:text-xs">
                    Tenha acesso à nossa revista num instante, basta inserir o
                    seu e-mail e verificar a sua caixa de entrada.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="w-full flex">
                    <input
                      type="email"
                      placeholder="Endereço de e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-l-md bg-white px-4 py-2 outline-none text-sm"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-3 py-2 rounded-r-md bg-secondary hover:bg-secondary/50 cursor-pointer text-white duration-300 transition-all">
                      {loading ? (
                        <div className="text-white h-4 w-4 border border-l-2 rounded-full animate-spin"></div>
                      ) : (
                        <Send size={18} />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
