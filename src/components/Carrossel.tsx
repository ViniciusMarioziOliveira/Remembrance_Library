"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
    {src:"/carrossel/01.png",alt:"Banner introdução"},
    {src:"/carrossel/02.png",alt:"Semana do livro"},
    {src:"/carrossel/03.png",alt:"Banner cupom"},
]

export default function Carrossel() {
    const plugin = React.useRef(
    Autoplay({ delay: 2700, stopOnInteraction: true })
  )

  return (
    <section className="w-full flex justify-center">
        <Carousel plugins={[plugin.current]} className="w-full relative" onMouseEnter={() => plugin.current.stop()} onMouseLeave={() => plugin.current.play()}>
            <CarouselContent>
                {carrosselImagens.map((imagem,index)=>(
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
                            <Image
                            src={imagem.src}
                            alt={imagem.alt}
                            fill
                            className="object-cover"
                            priority={index===0}

                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
        </Carousel>
    </section>
  )
}
