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

  const [imgSrc, setImgSrc] = useState(
    imageSrc || "/produtos/rmbplaceholder.png"
  )

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden flex flex-col h-full">

      {destaque && (
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 z-3 shadow-sm"
        >
          Destaque
        </Badge>
      )}

      <div className="relative w-full aspect-video mt-4">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 384px"
          onError={() => {
            setImgSrc("/produtos/rmbplaceholder.png")
          }}
        />
      </div>

      <CardHeader className="flex-grow">
        <CardTitle className="text-xl font-bold">
          {title}
        </CardTitle>

        <CardDescription className="text-sm text-slate-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto">
        <Button className="w-full font-semibold">
          {formattedPrice}
        </Button>
      </CardFooter>

    </Card>
  )
}