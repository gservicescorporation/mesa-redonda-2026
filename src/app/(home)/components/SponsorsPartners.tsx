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
    <div className="w-full  bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/6.jpeg)] bg-cover">
      <div className="text-white w-full p-24 flex justify-center bg-linear-to-r from-primary/80 to-accent/80 z-10 backdrop-blur-xs">
        <div className="flex gap-8 justify-around max-w-7xl w-full">
          
          <div className="max-w-sm w-full flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">
              Patrocinadores e Parceiros
            </h1>

            <p className="text-lg">
              Este evento será viabilizado pelo apoio estratégico dos nossos
              parceiros e patrocinadores.
            </p>
          </div>

          <ul className="flex flex-wrap w-full max-w-2xl justify-center gap-8">
            {partners.map((partner) => (
              <li
                key={partner.id}
                className="bg-clip-padding pb-4 border border-transparent bg-linear-to-r from-primary to-secondary rounded-3xl"
              >
               <div className="rounded-2xl p-4 bg-white">
                 <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={300}
                  height={300}
                  className=" h-38 w-38 object-contain object-center "
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