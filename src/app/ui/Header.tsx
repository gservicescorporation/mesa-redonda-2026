"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    { label: "Sobre", href: "/about" },
    { label: "Oradores", href: "/speakers" },
    { label: "Ingressos", href: "/tickets" },
    { label: "Contactos", href: "/contact" },
  ];

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 flex items-center justify-center transition-all duration-300"
    >
      <div
        className={`flex items-center rounded-full px-8 mt-4 justify-between py-2 max-w-7xl w-full
        max-lg:px-4
        ${scrolled ? "backdrop-blur-md bg-black/40 shadow-lg" : "bg-transparent"}
        `}
      >
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
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/tickets" className="px-6 py-3 btn-primary w-fit">
            Comprar Ingressos
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden max-lg:flex text-white"
        >
         <Menu size={28} />
        </button>
      </div>

      {mobileOpen && (
        <div className="hidden max-lg:flex fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex-col items-center justify-center gap-10 text-white text-xl z-40">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="absolute top-12 right-8 max-lg:flex text-white cursor-pointer hover:scale-105 transition-all duration-200"
        >
         <X size={28} />
        </button>
          
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/tickets"
            className="btn-primary px-8 py-3"
            onClick={() => setMobileOpen(false)}
          >
            Comprar Ingressos
          </Link>
        </div>
      )}
    </header>
  );
}