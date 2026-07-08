"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Fotos e Vídeos", href: "/pictures" },
    { label: "Oradores", href: "/speakers" },
    { label: "Patrocinadores", href: "/sponsors" },
/*     { label: "Ingressos", href: "/tickets" }, */
    { label: "Revista", href: "/magazine" },
    /*     { label: "Contactos", href: "/contact" }, */
  ];

  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-center transition-all duration-300">
        <div
          className={`flex items-center rounded-full px-8 mt-4 justify-between py-2 max-w-7xl w-full
        max-lg:px-4
        ${scrolled ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent"}
        `}>
          <Link href={"/"}>
            <Image
              src="/logo-white.png"
              alt="Logotipo MR"
              width={200}
              height={200}
              className="w-16 h-16 object-contain max-lg:w-12 max-lg:h-12"
            />
          </Link>

          <nav className="flex items-center text-white gap-24 max-lg:hidden">
            <ul className="flex gap-14 items-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`hover:scale-105 transition-all cursor-pointer duration-200 ${
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/")
                      ? "text-white font-extrabold text-lg"
                      : "text-white/80"
                  }`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 btn-primary w-fit">
                Comprar Ticket
              </button> */}

              <Link
                href="https://api.whatsapp.com/send?phone=244941064919"
                className="text-white hover:text-green-500 hover:scale-125 transition-all duration-200">
                <FaWhatsapp size="32" />
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden max-lg:flex text-white">
            <Menu size={28} />
          </button>
        </div>

        {mobileOpen && (
          <div className="hidden max-lg:flex fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex-col items-center justify-center gap-10 text-white text-xl z-40">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="absolute top-12 right-8 max-lg:flex text-white cursor-pointer hover:scale-105 transition-all duration-200">
              <X size={28} />
            </button>

            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="hover:opacity-70">
                {item.label}
              </Link>
            ))}

            <Link
              href="https://api.whatsapp.com/send?phone=244941064919"
              className="text-white hover:text-green-500 hover:scale-125 transition-all duration-200">
              <FaWhatsapp size="32" />
            </Link>
           {/*  <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 btn-primary w-fit">
              Comprar Ticket
            </button> */}
          </div>
        )}
      </header>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="
      h-screen w-full fixed top-0 left-0 z-50
      bg-primary/50 backdrop-blur-xs
      flex items-center justify-center px-4
    "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="
        rounded-2xl
        bg-linear-to-r from-primary via-blue-900 to-primary
        max-w-2xl w-full
        py-8 px-16 text-white
        
        max-lg:px-6
        max-lg:py-6
      "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}>
              <h2 className="text-xl font-bold text-center mb-6 max-lg:text-lg max-lg:mb-4">
                Escolha onde quer comprar
              </h2>

              <div
                className="
          flex justify-center items-center gap-4
          max-lg:flex-col
          max-lg:gap-4
        ">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setMobileOpen(false);
                    router.push("/tickets");
                  }}
                  className="
            flex flex-col items-center justify-center gap-2
            border rounded-xl p-2 bg-white cursor-pointer
            transition-all duration-300 hover:scale-105
            max-lg:w-full
          ">
                  <Image
                    src="/logo.jpeg"
                    alt="Mesa Redonda"
                    width={600}
                    height={600}
                    className="
              object-cover w-42 h-42
              
              max-lg:w-28 max-lg:h-28
            "
                  />
                </button>

                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setMobileOpen(false);
                    router.push(
                      "https://ticket.ao/event/mesa-redonda-dos-ceos-5a-edicao/",
                    );
                  }}
                  className="
            flex flex-col items-center justify-center gap-2
            border rounded-xl p-2 bg-white cursor-pointer
            transition-all duration-300 hover:scale-105
            
            max-lg:w-full
          ">
                  <Image
                    src="/images/ticketao.png"
                    alt="Ticket.ao"
                    width={600}
                    height={600}
                    className="object-cover w-42 h-42 max-lg:w-28 max-lg:h-28"
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
