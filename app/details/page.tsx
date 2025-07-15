import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  MapPin,
  Clock,
  Camera,
  Music,
  Utensils,
  Plane,
} from "lucide-react";

export default function DetailsPage() {
  return (
    <div className="p-12 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Detalhes do Casamento
          </h2>
          <p className="text-gray-700 text-sm">
            Aqui você vai ficar sabendo de tudo para o nosso dia especial
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Horários do Casamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-800 rounded-full p-2 mt-1">
                    <Clock className="h-4 w-4 text-red-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      19h30 - Início da Recepção
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-800 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-red-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      20h - Cerimônia
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-800 rounded-full p-2 mt-1">
                    <Utensils className="h-4 w-4 text-red-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      20h45 - Buffet
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-800 rounded-full p-2 mt-1">
                    <Music className="h-4 w-4 text-red-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      21h30 - Festa
                    </h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Trajes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Salão de Festas Residencial</strong> - Sport - Fino
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Madrinhas irão vestir vestidos cor de vinho.</li>
                <li>• Padrinhos irão usar gravatas cor de vinho.</li>
              </ul>
              <p className="text-red-600 text-sm italic">
                O estilo de roupas é esporte-fino, mas venha do jeito que você
                se sentir melhor e mais confortável.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-800">Informações Extra</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Este convite é individual?
                </h4>
                <p className="text-gray-700 text-sm">
                  Sim, como é um espaço mais íntimos, estamos garantindo que
                  venham as pessoas mais especiais para nós dois.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Posso levar meus filhos?
                </h4>
                <p className="text-gray-700 text-sm">
                  Nós adoramos crianças, mas essa festa será apenas para
                  adultos. Esperamos que você possa aproveitar a noite sem
                  preocupações!
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  No Buffet terá opções vegetarianas e veganas?
                </h4>
                <p className="text-gray-700 text-sm">
                  Infelizmente não, se você tiver alguma restrição alimentar,
                  por favor, nos avise com antecedência.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Posso tirar fotos?
                </h4>
                <p className="text-gray-700 text-sm">
                  Claro! Nós adoramos fotos. Sinta-se à vontade para capturar
                  momentos especiais, mas pedimos que evite usar flash durante a
                  cerimônia para não atrapalhar os fotógrafos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
