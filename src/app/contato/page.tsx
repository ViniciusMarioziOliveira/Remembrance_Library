"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const MapaContato = dynamic(() => import("@/components/MapaContato"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium rounded-lg">
      Carregando mapa...
    </div>
  ),
})

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-slate-500 mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou quer apenas dar um oi? 
            <br className="hidden sm:inline" />
            Estamos prontos para atender você.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-800">
                  Canais de Atendimento
                </CardTitle>
                <CardDescription>
                  Entre em contato através dos nossos canais oficiais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="p-2.5 bg-emerald-50 rounded-full flex-shrink-0">
                      <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">E-mail</p>
                      <p className="text-sm text-slate-800 font-medium">contato@livrariarecordacao.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="p-2.5 bg-emerald-50 rounded-full flex-shrink-0">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Telefone</p>
                      <p className="text-sm text-slate-800 font-medium">(11) 99999-9999</p>
                      <p className="text-sm text-slate-800 font-medium">(11) 98765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="p-2.5 bg-emerald-50 rounded-full flex-shrink-0">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Endereço</p>
                      <p className="text-sm text-slate-800 font-medium">Av. Amphoreus, 33550336</p>
                      <p className="text-sm text-slate-800 font-medium">São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <MapaContato />
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita - Formulário */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">
                Envie uma Mensagem
              </CardTitle>
              <CardDescription>
                Responderemos em até 24 horas úteis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-sm font-medium text-slate-700">
                    Nome Completo
                  </Label>
                  <Input 
                    id="nome" 
                    placeholder="Digite seu nome completo" 
                    required 
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    E-mail
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seuemail@exemplo.com" 
                    required 
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto" className="text-sm font-medium text-slate-700">
                    Assunto
                  </Label>
                  <Input 
                    id="assunto" 
                    placeholder="Ex: Dúvida sobre entrega" 
                    required 
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-sm font-medium text-slate-700">
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Digite sua mensagem com detalhes..."
                    className="min-h-[150px] resize-none border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full font-semibold bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                >
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}