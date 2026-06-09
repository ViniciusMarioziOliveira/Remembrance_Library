import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contato() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Título da Seção */}
      <div className="text-center pt-16 mb-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Fale Conosco
        </h1>
        <p className="text-slate-500 mt-2 max-w-md mx-auto px-4">
          Tem alguma dúvida, sugestão ou precisa de ajuda com o seu pedido? Estamos aqui para ajudar!
        </p>
      </div>

      {/* Conteúdo Principal: Grid que se divide em 2 colunas em telas maiores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">
        
        {/* Coluna 1: Informações de Contato */}
        <div className="flex flex-col justify-center space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Informações de Contato
          </h2>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-700">E-mail</h3>
              <p className="text-slate-500 text-sm">suporte@seusite.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-700">Telefone / WhatsApp</h3>
              <p className="text-slate-500 text-sm">(11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-700">Endereço</h3>
              <p className="text-slate-500 text-sm">Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Coluna 2: Formulário de Contato */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Envie uma mensagem
          </h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                placeholder="Seu nome aqui"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 resize-none"
                placeholder="Como podemos te ajudar?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md shadow-indigo-100"
            >
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}