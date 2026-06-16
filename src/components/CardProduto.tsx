"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface CardProdutoProps {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque,
}: CardProdutoProps) {
  const [imgSrc, setImgSrc] = useState(imageSrc || "/produtos/rmbplaceholder.png")

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)

  return (
    <Card className="group relative mx-auto w-full max-w-sm overflow-hidden border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-slate-300/80 flex flex-col h-full">
      {destaque && (
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 z-10 bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-md px-3 py-1 text-xs font-medium tracking-wide"
        >
          Destaque
        </Badge>
      )}

      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => {
            setImgSrc("/produtos/rmbplaceholder.png")
          }}
        />
      </div>

      <CardHeader className="flex-grow px-4 pt-4 pb-2">
        <CardTitle className="text-lg font-semibold text-slate-800 line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-slate-500 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="px-4 pb-4 pt-2 mt-auto">
        <Button className="w-full font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 group-hover:bg-emerald-600 gap-2">
          <ShoppingCart className="h-4 w-4" />
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}