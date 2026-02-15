import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-24 py-8 fixed top-0 left-0 z-20 ">
      <h1 className="text-xl font-bold text-white">FÓRUM INTERNACIONAL</h1>

      <nav className="flex item-center text-white gap-24">
        <ul className="flex gap-14 items-center">
          <li className="hover:scale-105 transition-all cursor-pointer duration-200">
            Sobre
          </li>
          <li className="hover:scale-105 transition-all cursor-pointer duration-200">
            Oradores
          </li>
          <li className="hover:scale-105 transition-all cursor-pointer duration-200">
            Ingressos
          </li>
          <li className="hover:scale-105 transition-all cursor-pointer duration-200">
            Contactos
          </li>
        </ul>

        <Link
          href={"#"}
          className="px-6 py-3 btn-primary w-fit">
          Comprar Ingressos
        </Link>
      </nav>
    </header>
  );
}
