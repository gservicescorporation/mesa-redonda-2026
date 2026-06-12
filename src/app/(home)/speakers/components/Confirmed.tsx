import Image from 'next/image';

// Array com os dados dos oradores
const speakers = [
  {
    id: 1,
    name: "Nome do Orador",
    role: "CEO & Founder / Keynote Speaker",
    bio: "Especialista internacional com mais de 10 anos de experiência, partilhando insights exclusivos nesta edição.",
    imageUrl: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Link de incorporação (embed)
  }
];

export default function SpeakerConfirmation() {
  return (
    <section className="bg-accent text-white py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Orador Confirmado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Presença Garantida
          </h2>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contentor Principal - Mapeamento do Array */}
        <div className="space-y-12">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              
              {/* Lado Esquerdo: Card do Orador */}
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-primary/10 p-6 rounded-2xl border border-primary/20 backdrop-blur-sm h-full">
                
                {/* Foto do Orador */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-secondary shrink-0 shadow-lg relative">
                  <Image 
                    src={speaker.imageUrl} 
                    alt={`Foto de ${speaker.name}`} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                    priority
                  />
                </div>
                
                {/* Detalhes do Orador */}
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm md:text-base mb-2">
                    {speaker.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Lado Direito: Vídeo de Confirmação */}
              <div className="relative group aspect-video w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
                <iframe 
                  className="w-full h-full absolute inset-0" 
                  src={speaker.videoUrl} 
                  title={`Vídeo de confirmação de ${speaker.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                
                {/* Efeito visual no Hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-secondary/50 pointer-events-none transition-all duration-300"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}