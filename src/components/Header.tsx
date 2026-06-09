import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 bg-[#060605] border-b border-[#e3e3e3]/10 px-6 md:px-36 flex items-center justify-between">
      {/* Logo e Nome */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo/logo.png"
          alt="Logo da empresa"
          width={50}
          height={50}
          className="h-8 w-auto object-contain"
        />
        <h1 className="text-lg font-bold text-[#e3e3e3]">
          Livraria <span className="text-[#e4f714]">Recordação</span>
        </h1>
      </div>

      {/* Navegação */}
      <nav className="flex space-x-6">
        <Link 
          href="/" 
          className="text-sm font-medium text-[#e3e3e3] hover:text-[#e4f714] transition-colors duration-200"
        >
          Home
        </Link>
        <Link 
          href="/produto" 
          className="text-sm font-medium text-[#e3e3e3] hover:text-[#e4f714] transition-colors duration-200"
        >
          Produtos
        </Link>
        <Link 
          href="/contato" 
          className="text-sm font-medium text-[#060605] bg-[#c4d51a] hover:bg-[#e4f714] px-3 py-0.5 rounded-md font-semibold transition-colors duration-200"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}