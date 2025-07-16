import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin, Gift, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DetailsPage from "./details/page";
import RSVPPage from "./rsvp/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/roses.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <nav className="bg-white/60 backdrop-blur-sm border-b border-white-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-serif text-[#262222]">
                Casamento Bruna & Fábio
              </span>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-12">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/momojao.jpg?height=300&width=400"
              alt="Fabio e Bruna"
              width={400}
              height={400}
              className="mx-auto rounded-full border-2 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
            Bruna & Fábio
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Nós vamos casar e queríamos que você fizesse parte desse momento
            especial!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-white">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">Sexta, 19 de Setembro, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Residencial Bourbon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sexta, 19 de Setembro
                </h3>
                <p className="text-sm text-gray-800">19h30 Recepção</p>
                <p className="text-sm text-gray-800">20h00 Cerimônia</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bourbon Residence
                </h3>
                <p className="text-sm text-gray-800">
                  Tv. Dom Romualdo de Seixas, 795{" "}
                </p>
                <p className="text-sm text-gray-800">Umarizal 66055-20</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sport Fino
                </h3>
                <p className="text-sm text-gray-800">
                  Venha do jeito que se sentir confortável
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <RSVPPage />
      {/* Our Story Section */}
      <section className="p-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">
            Nossa História
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/mojao.jpeg?height=400&width=400"
                alt="Our story"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-700 font-serif text-lg leading-relaxed mb-4">
                Tudo começou no portão 2, onde eu perguntei a ela se podia
                ajudar em um procedimento no trabalho. Sim, nos conhecemos no
                Aeroporto de Belém, essa foto é na frente do aeroporto, em um
                dia dificil em meio a uma pandemia.
              </p>
              <p className="text-gray-700 font-serif text-lg leading-relaxed mb-4">
                Essa foto diz muito sobre nós, mesmo em situações difíceis, o
                que mais importa é nos mantermos juntos com gentileza e muito
                amor um pelo outro.
              </p>
              <p className="text-gray-700 font-serif text-lg leading-relaxed mb-4">
                Agora queremos que você faça parte de mais um pedaço da nossa
                história de carinho, amor e muita felicidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="p-12 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">
            Lista de Presentes
          </h2>
          <p className="text-gray-700 font-serif text-lg leading-relaxed mb-8">
            Sua presença é o nosso maior presente! Mas se quiser nos presentear,
            criamos uma forma prática e segura através do PIX.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Gift className="h-16 w-16 text-red-800 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contribua via PIX
                </h3>
                <p className="text-gray-700 font-serif text-base leading-relaxed mb-6">
                  Escaneie o QR Code ao lado ou use a chave PIX para nos ajudar
                  a começar nossa nova jornada juntos.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-2">Chave PIX:</p>
                  <p className="font-mono text-red-800 font-semibold break-all">
                    brunab.lopes@hotmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  QR Code PIX
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-inner mb-4 mx-auto max-w-xs">
                  {/* Placeholder for QR Code - você pode substituir por um QR code real */}
                    <div className="w-48 h-48 mx-auto bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <Image 
                      src="/qrcode.png" 
                      alt="QR Code PIX" 
                      width={192}
                      height={192}
                      className="mx-auto"
                    />
                    </div>
                </div>
                <p className="text-xs text-gray-600">
                  Escaneie com seu app do banco
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <p className="text-gray-600 font-serif text-sm italic">
              "O amor não se compra, mas sua generosidade nos ajuda a construir
              nossa vida com muito carinho."
            </p>
          </div>
        </div>
      </section>

      <DetailsPage />

      <footer className="bg-[url('/roses.jpg')] bg-cover bg-center bg-no-repeat bg-fixed py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-2xl md:text-2xl font-serif text-white mb-4">
            19 de Setembro, 2025 • Residencial Bourbon
          </p>
          <p className="text-xs text-gray-400">
            Feito com muito amor e carinho por Bruna e Fábio
          </p>
        </div>
      </footer>
    </div>
  );
}
