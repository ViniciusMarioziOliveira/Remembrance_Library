import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#060605] border-t border-[#e3e3e3]/10 text-[#e3e3e3] pt-12 pb-6 px-6 md:px-36">
      {/* Container Principal */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Coluna 1: Logo e Sobre */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="Logo da empresa"
              width={40}
              height={40}
              className="h-7 w-auto object-contain"
            />
            <h2 className="text-base font-bold">
              Livraria <span className="text-[#e4f714]">Recordação</span>
            </h2>
          </div>
          <p className="text-xs text-[#e3e3e3]/60 leading-relaxed mt-2">
            Eternizando histórias e conectando você aos melhores momentos através da leitura.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h3 className="text-sm font-semibold text-[#e4f714] mb-4 uppercase tracking-wider">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-[#e3e3e3]/80 hover:text-[#e4f714] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/produtos" className="text-[#e3e3e3]/80 hover:text-[#e4f714] transition-colors duration-200">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-[#e3e3e3]/80 hover:text-[#e4f714] transition-colors duration-200">
                Sobre Nós
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Categorias Populares */}
        <div>
          <h3 className="text-sm font-semibold text-[#e4f714] mb-4 uppercase tracking-wider">
            Categorias
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/produtos?cat=romance" className="text-[#e3e3e3]/80 hover:text-[#e4f714] transition-colors duration-200">
                Romances
              </Link>
            </li>
            <li>
              <Link href="/produtos?cat=ficcao" className="text-[#e3e3e3]/80 hover:text-[#e4f714] transition-colors duration-200">
                Ficção Científica
              </Link>
            </li>
            <li>
              <Link href="/produtos?cat=biografias" className="text-[#e3e3e3]/80 hover:text-[#e4f714] transition-colors duration-200">
                Biografias
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Contato e Endereço */}
        <div>
          <h3 className="text-sm font-semibold text-[#e4f714] mb-4 uppercase tracking-wider">
            Contato
          </h3>
          <ul className="space-y-3 text-xs text-[#e3e3e3]/80">
            <li className="flex flex-col">
              <span className="font-semibold text-[#e3e3e3]">Telefone:</span>
              <a href="tel:+5511999999999" className="hover:text-[#c4d51a] transition-colors">
                (11) 99999-9999
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-[#e3e3e3]">E-mail:</span>
              <a href="mailto:contato@livrariarecordacao.com.br" className="hover:text-[#c4d51a] transition-colors">
                contato@livrariarecordacao.com.br
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-[#e3e3e3]">Endereço:</span>
              <span>Av. Das Histórias, 123 - Centro</span>
              <span>São Paulo - SP | CEP: 01000-000</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Linha Divisória Inferior */}
      <div className="border-t border-[#e3e3e3]/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#e3e3e3]/40 gap-4">
        <p>
          &copy; {new Date().getFullYear()} Livraria Recordação. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/termos" className="hover:text-[#c4d51a] transition-colors">
            Termos de Uso
          </Link>
          <Link href="/privacidade" className="hover:text-[#c4d51a] transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}