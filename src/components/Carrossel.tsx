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
    <section className="w-full flex justify-center overflow-hidden">
        <Carousel 
          plugins={[plugin.current]} 
          className="w-full relative group" 
          onMouseEnter={() => plugin.current.stop()} 
          onMouseLeave={() => plugin.current.play()}
        >
            <CarouselContent>
                {carrosselImagens.map((imagem,index)=>(
                    <CarouselItem key={index}>
                        {/* Mudamos para aspect-video ou aspect-[21/9] no celular para espremer a imagem inteira sem cortes laterais */}
                        <div className="relative w-full aspect-video md:aspect-[21/9] md:h-[450px] overflow-hidden">
                            <Image
                            src={imagem.src}
                            alt={imagem.alt}
                            fill
                            className="object-contain md:object-cover bg-slate-50" // object-contain impede cortes artificiais
                            priority={index===0}
                            sizes="100vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            
            {/* Setas Ajustadas para Responsividade:
              - No telemóvel: ficam menores (h-7 w-7), com margem interna segura (left-2 / right-2)
              - No computador (md:): voltam ao tamanho normal e margem padrão (md:left-4 / md:h-8)
              - Adicionada a classe 'z-10' para garantir que não ficam atrás da imagem
            */}
            <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-7 w-7 md:h-8 md:w-8 bg-white/80 hover:bg-white text-slate-800 border-slate-200 z-10" />
            <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-7 w-7 md:h-8 md:w-8 bg-white/80 hover:bg-white text-slate-800 border-slate-200 z-10" />
        </Carousel>
    </section>
  )
}