import CardProduto from "@/components/CardProduto";
import produtos from "../../../produtos.json";

export default function ProdutosPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Título da Seção */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Nosso Catálogo Completo
        </h1>
        <p className="text-slate-500 mt-2">
          Explore todos os títulos disponíveis na nossa livraria!
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
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
  );
}