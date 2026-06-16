'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="relative w-full h-16 bg-[#060605] border-b border-[#e3e3e3]/10 px-6 md:px-36 flex items-center justify-between">
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
      <nav className="hidden md:flex space-x-6">
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

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none" aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
        { isOpen ? <X className="h-6 w-6" /> : <Menu className="h6 w-6" /> }
      </button>

      { isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produto"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contato
          </Link>
        </nav>
      ) }

    </header>
  );
}