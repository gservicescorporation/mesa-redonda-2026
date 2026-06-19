
// Listagem Geral de Patrocinadores (Grid por Categorias)
const allSponsors = {
  diamante: [
    { name: "Banco Sol", logo: "/images/sponsors/banco-sol-logo.png" },
    { name: "Empresa Exemplo 1", logo: "/images/sponsors/exemplo1.png" },
  ],
  platina: [
    { name: "Unitel", logo: "/images/sponsors/unitel-logo.png" },
    { name: "Empresa Exemplo 2", logo: "/images/sponsors/exemplo2.png" },
  ],
  ouro: [
    { name: "Sonangol", logo: "/images/sponsors/sonangol-logo.png" },
    { name: "Empresa Exemplo 3", logo: "/images/sponsors/exemplo3.png" },
    { name: "Empresa Exemplo 4", logo: "/images/sponsors/exemplo4.png" },
  ],
};


export default function SponsorRanking() {


    return (
      <section
        id="marcas"
        className="py-24 bg-accent/50 border-t border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Alinhamento de Marcas
            </h2>
            <p className="text-gray-400 mt-2">
              Empresas de excelência comprometidas com o desenvolvimento
              executivo.
            </p>
          </div>

          {/* Categoria Diamante */}
          <div className="flex flex-col gap-6 items-center">
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1 rounded-full">
              Categoria Diamante
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-2xl justify-center">
              {allSponsors.diamante.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-center h-32 hover:border-primary/50 transition-colors">
                  <span className="text-gray-400 font-medium">{s.name}</span>{" "}
                  {/* Substituir por <Image /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Categoria Platina */}
          <div className="flex flex-col gap-6 items-center mt-6">
            <h4 className="text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-4 py-1 rounded-full">
              Categoria Platina
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-2xl justify-center">
              {allSponsors.platina.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center h-28 hover:border-secondary/50 transition-colors">
                  <span className="text-gray-400 font-medium">{s.name}</span>{" "}
                  {/* Substituir por <Image /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Categoria Ouro */}
          <div className="flex flex-col gap-6 items-center mt-6">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase bg-white/5 px-4 py-1 rounded-full">
              Categoria Ouro
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {allSponsors.ouro.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center h-24 hover:bg-white/10 transition-colors">
                  <span className="text-gray-400 text-sm font-medium">
                    {s.name}
                  </span>{" "}
                  {/* Substituir por <Image /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}