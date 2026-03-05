"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
    <div>
      <header
        className={`w-full fixed top-0 left-0 z-50 flex items-center justify-center transition-all duration-300
      `}>
        <div
          className={`flex items-center rounded-full px-8 mt-4 justify-between py-2 max-w-7xl w-full   ${
            scrolled
              ? "backdrop-blur-md bg-black/40 shadow-lg"
              : "bg-transparent"
          }`}>
          <Link href={"/"}>
            <Image
              src="/logo-white.png"
              alt="Logotipo MR"
              width={200}
              height={200}
              className="w-16 h-16 object-contain"
            />
          </Link>

          <nav className="flex items-center text-white gap-24">
            <ul className="flex gap-14 items-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`hover:scale-105 transition-all cursor-pointer duration-200 ${pathname === item.href || pathname.startsWith(item.href + "/") ? "text-white font-extrabold text-lg" : "text-white/80"}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <Link
              href="/tickets"
              className="px-6 py-3 btn-primary w-fit">
              Comprar Ingressos
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
