import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/53.jpeg)]">
      <div className="flex items-center gap-24 px-24 py-32 justify-center w-full bg-linear-to-b from-accent/70 to-accent/85 z-10 backdrop-blur-xs ">
        <div className="max-w-7xl w-full flex items-center justify-around gap-16">
          <ul className="flex flex-col gap-12 w-full max-w-xl">
            <li className="flex gap-8">
                <div className="min-w-20 w-20 h-20 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                    <MapPin size={44} />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <h1 className="text-2xl font-bold text-white">Localização:</h1>
                    <p className="text-white text-xl">Centro de Conferências de Talatona, Luanda, Angola</p>
                </div>
            </li>

              <li className="flex gap-8">
                <div className="min-w-20 w-20 h-20 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                    <PhoneCall size={44} />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <h1 className="text-2xl font-bold text-white">Ligue para nós:</h1>
                    <p className="text-white text-xl">+244 941 064 919 / +244 222 731 031</p>
                </div>
            </li>

            <li className="flex gap-8">
                <div className="min-w-20 w-20 h-20 rounded-full bg-linear-to-b from-primary to-secondary flex items-center justify-center text-white">
                    <Mail size={44} />
                </div>

                <div className="flex flex-col gap-1 mt-4">
                    <h1 className="text-2xl font-bold text-white">Email:</h1>
                    <p className="text-white text-xl">mesaredondacomceos@globalsc.ao</p>
                </div>
            </li>
          </ul>

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
                    type="email"
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

              <div className="flex gap-4">
                <label
                  htmlFor=""
                  className="flex flex-col gap-2 w-full">
                  <span className="text-white">Nome da empresa</span>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none"
                    placeholder="Nome da empresa"
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col gap-2 w-full">
                  <span className="text-white">Assunto</span>
                  <div className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 outline-none">
                    <select className="w-full bg-transparent outline-none text-white cursor-pointer rounded-lg">
                      <option value="" className="text-black">
                        Selecione o assunto
                      </option>
                      <option value="patrocinio" className="text-black">Patrocínio</option>
                      <option value="parceria" className="text-black">Parceria</option>
                      <option value="exposicao" className="text-black">Exposição</option>
                      <option value="outros" className="text-black">Outros</option>
                    </select>
                  </div>
                </label>
              </div>

              <label
                htmlFor=""
                className="flex flex-col gap-2">
                <span className="text-white">Mensagem</span>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-2xl bg-primary/20 border border-primary/50 text-white outline-none resize-none"
                  placeholder="Deixa a sua mensagem aqui"
                />
              </label>

              <button className="btn-primary py-3">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
