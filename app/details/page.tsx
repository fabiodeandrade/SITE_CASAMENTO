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
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Detalhes do Casamento
          </h2>
          <p className="text-gray-700 text-lg">
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
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Clock className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      18h30 - Início da Recepção
                    </h3>
                    <p className="text-gray-700">
                      Guests arrive and are seated for the ceremony
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      19h30 - Cerimônia
                    </h3>
                    <p className="text-gray-700">
                      Wedding ceremony in the garden pavilion
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Camera className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      4:30 PM - Photos & Cocktails
                    </h3>
                    <p className="text-gray-700">
                      Family photos while guests enjoy cocktail hour
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Utensils className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      6:00 PM - Reception Dinner
                    </h3>
                    <p className="text-gray-700">
                      Seated dinner with toasts and speeches
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Music className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      8:00 PM - Dancing
                    </h3>
                    <p className="text-gray-700">
                      First dance followed by open dancing
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      11:00 PM - Send-off
                    </h3>
                    <p className="text-gray-700">
                      Sparkler send-off for the newlyweds
                    </p>
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
              <CardTitle className="text-gray-800">Dress Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                <strong>Garden Party Attire</strong> - Semi-formal outdoor wear
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Cocktail dresses or dressy separates</li>
                <li>• Suits or dress shirts with slacks</li>
                <li>• Comfortable shoes recommended (grass/gravel)</li>
                <li>• Light jacket for evening (it can get cool)</li>
              </ul>
              <p className="text-red-600 text-sm italic">
                Please avoid white, ivory, or blush tones
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
