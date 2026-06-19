"use client"

import { useState, useMemo } from "react"
import { Search, RotateCcw } from "lucide-react"
import CardProduto from "@/components/CardProduto"
import products from "../../../produtos.json"

// Definição da tipagem das propriedades dos produtos alinhada ao produtos.json
interface ProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque: boolean;
  category?: string; // Mapeado como opcional para evitar quebras se algum item não tiver
}

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("relevante")

  // Função para limpar todos os campos e restaurar os estados iniciais
  const limparFiltros = () => {
    setSearchTerm("")
    setCategoriaSelecionada("Todos")
    setOrdenacaoPreco("relevante")
  }

  // Mapeia as categorias existentes no JSON dinamicamente para não precisar digitar uma por uma
  const listaCategorias = useMemo(() => {
    const categoriasValidas = (products as ProdutoProps[])
      .map((p) => p.category)
      .filter((cat): cat is string => !!cat) // Remove valores nulos ou indefinidos

    // Remove duplicatas usando Set e adiciona "Todos" no início
    return ["Todos", ...Array.from(new Set(categoriasValidas))]
  }, [])

  // Filtragem combinada por busca textual e categoria
  const produtosFiltrados = useMemo(() => {
    return (products as ProdutoProps[]).filter((produto) => {
      const correspondeTexto =
        produto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.description.toLowerCase().includes(searchTerm.toLowerCase())

      // Adaptado de 'produto.categoria' para 'produto.category' refletindo o JSON
      const correspondeCategoria =
        categoriaSelecionada === "Todos" || produto.category === categoriaSelecionada

      return correspondeTexto && correspondeCategoria
    })
  }, [searchTerm, categoriaSelecionada])

  // Ordenação dos dados filtrados com base no preço ou relevância (destaques primeiro)
  const produtosOrdenados = useMemo(() => {
    const resultado = [...produtosFiltrados]

    if (ordenacaoPreco === "menor-preco") {
      return resultado.sort((a, b) => a.price - b.price)
    }
    if (ordenacaoPreco === "maior-preco") {
      return resultado.sort((a, b) => b.price - a.price)
    }
    if (ordenacaoPreco === "relevante") {
      // Ordena colocando os itens marcados com destaque: true no topo
      return resultado.sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0))
    }
    return resultado
  }, [produtosFiltrados, ordenacaoPreco])

  // Função para obter o total de produtos cadastrados em cada categoria
  const obterTotalCategoria = (categoria: string) => {
    if (categoria === "Todos") {
      return products.length
    }
    return (products as ProdutoProps[]).filter((p) => p.category === categoria).length
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-36">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da página atualizado */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Catálogo de Livros
          </h1>
          <p className="max-w-2xl text-slate-600 mx-auto md:mx-0">
            Encontre todos os títulos disponíveis na nossa loja, filtrando por suas categorias preferidas.
          </p>
        </header>

        {/* Bloco de controles e filtros */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* Campo de pesquisa de texto */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar livros..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:bg-white transition-all text-sm"
              />
            </div>

            {/* Controles de ordenação e ação de limpeza */}
            <div className="flex items-center gap-4 flex-wrap">
              <label htmlFor="ordenar-preco" className="text-sm font-medium text-slate-700">
                Ordenar por:
              </label>
              <select
                id="ordenar-preco"
                value={ordenacaoPreco}
                onChange={(e) => setOrdenacaoPreco(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-950 text-sm rounded-lg focus:ring-slate-400 focus:border-slate-400 p-2 focus:outline-hidden"
              >
                <option value="relevante">Mais relevantes (Destaques)</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>

              {/* Botão de redefinir seleções */}
              {(searchTerm !== "" || categoriaSelecionada !== "Todos" || ordenacaoPreco !== "relevante") && (
                <button
                  onClick={limparFiltros}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 rounded-lg transition-all cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Limpar filtros
                </button>
              )}
            </div>

          </div>

          {/* Filtros rápidos de categoria com badges de contagem gerados dinamicamente */}
          <div className="flex gap-2 flex-wrap mt-6 pt-6 border-t border-slate-100">
            {listaCategorias.map((categoria) => {
              const isActive = categoriaSelecionada === categoria
              const totalItens = obterTotalCategoria(categoria)
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>{categoria}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full transition-all ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {totalItens}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Seção indicadora do número de resultados */}
        <div className="mb-6 flex justify-between items-center text-sm text-slate-500">
          <span>
            {produtosOrdenados.length === 1
              ? "1 livro encontrado"
              : `${produtosOrdenados.length} livros encontrados`}
          </span>
        </div>

        {/* Grade de exibição dos livros */}
        <section className="w-full">
          {produtosOrdenados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {produtosOrdenados.map((product) => (
                <CardProduto
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  destaque={product.destaque}
                />
              ))}
            </div>
          ) : (
            // Exibição amigável para quando o filtro não encontrar resultados
            <div className="w-full bg-white border border-slate-200 rounded-xl p-12 text-center shadow-xs">
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Nenhum livro foi encontrado
              </h3>
              <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
                Não localizamos livros com o termo "{searchTerm}" na categoria "{categoriaSelecionada}".
              </p>
              <button
                onClick={limparFiltros}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all cursor-pointer"
              >
                Ver todos os livros
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  )
}