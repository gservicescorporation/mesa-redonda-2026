import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/39.jpg)]">
      <div className="flex items-center gap-24 p-24 justify-center w-full bg-linear-to-b from-accent/90 to-accent/75 z-10 backdrop-blur-xs ">
        <div className="max-w-7xl w-full flex items-center justify-around gap-12">
          <Image
            src={"/logo-white.png"}
            alt={"About Us"}
            width={1920}
            height={1080}
            className="w-100 object-contain"
          />

           <div className="max-w-xl w-full backdrop-blur-2xl flex flex-col gap-5 rounded-3xl px-12 py-12 bg-linear-to-b from-primary/10  to-accent/5">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-bold text-white">
                    Entre em contato connosco
                  </h1>
                  <p className="text-white">
                    Para dúvidas, parcerias ou mais informações sobre o evento, não
                    hesite em nos contatar.
                  </p>
                </div>
    
                <form className="flex flex-col gap-4">
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2">
                    <span className="text-white">Nome completo</span>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none"
                      placeholder="Insira o seu nome completo"
                    />
                  </label>
    
                <div className="flex gap-4">
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2 w-full">
                    <span className="text-white">E-mail</span>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none"
                      placeholder="Insira o seu email"
                    />
                  </label>
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2 w-full">
                    <span className="text-white">Contacto telefónico</span>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none"
                      placeholder="Insira o seu contacto telefónico"
                    />
                  </label>
    
                </div>
    
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2">
                    <span className="text-white">Assunto</span>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none resize-none"
                      placeholder="Deixa a sua mensagem aqui"
                    />
                  </label>
    
                  <button className="btn-primary py-3">
                    Enviar mensagem
                  </button>
                </form>
              </div>
        </div>
      </div>
    </div>
  );
}
