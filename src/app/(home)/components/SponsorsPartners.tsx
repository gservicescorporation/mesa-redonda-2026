import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "AECIPA",
    logo: "/images/partners/aecipa.png",
  },
  {
    id: 2,
    name: "AEC",
    logo: "/images/partners/aec.png",
  },
  {
    id: 3,
    name: "AES",
    logo: "/images/partners/aes.png",
  },
];

export default function SponsorsPartners() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/6.jpeg)] bg-cover bg-center">
      <div
        className="text-white w-full p-24 flex justify-center 
        bg-linear-to-r from-primary/80 to-accent/80 backdrop-blur-xs

        max-lg:p-10
      "
      >
        <div
          className="flex gap-8 justify-around max-w-7xl w-full

          max-lg:flex-col
          max-lg:items-center
          max-lg:text-center
          max-lg:gap-10
        "
        >
          {/* Texto */}
          <div className="max-w-sm w-full flex flex-col gap-2 max-lg:items-center">
            <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
              Patrocinadores e Parceiros
            </h1>

            <p className="text-lg max-lg:text-base">
              Este evento será viabilizado pelo apoio estratégico dos nossos
              parceiros e patrocinadores.
            </p>
          </div>

          {/* Logos */}
          <ul
            className="flex flex-wrap w-full max-w-2xl justify-center gap-8

            max-lg:gap-6
          "
          >
            {partners.map((partner) => (
              <li
                key={partner.id}
                className="bg-clip-padding pb-4 border border-transparent 
                bg-linear-to-r from-primary to-secondary rounded-3xl

                max-lg:w-[45%]
              "
              >
                <div className="rounded-2xl p-4 bg-white max-lg:p-3 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={300}
                    height={300}
                    className="h-38 w-38 object-contain object-center

                    max-lg:h-24
                    max-lg:w-24
                  "
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}