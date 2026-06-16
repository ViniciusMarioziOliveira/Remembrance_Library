import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Nosso Catálogo
          </h1>
          <p className="text-slate-500 mt-2">
            Explore todos os títulos disponíveis na nossa livraria
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageSrc={produto.imageSrc}
              destaque={produto.destaque}
            />
          ))}
        </div>
      </div>
    </div>
  )
}