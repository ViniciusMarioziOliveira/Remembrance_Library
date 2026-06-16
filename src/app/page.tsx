// app/page.tsx

import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {

  const produtosEmDestaque = produtos.filter(
    (produto) => produto.destaque === true
  )

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="text-center my-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
          Livros em destaque
        </h1>
        <p className="text-slate-500 mt-2">
          Os livros mais procurados para você que é fã!
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {
          produtosEmDestaque.map(
            (produto) => (
              <CardProduto
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
              />
            )
          )
        }

      </div>
    </div>
  )
}