"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function RSVPPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta do Google Sheets:", data);
        setIsSubmitted(true);
      })
      .catch((err) => {
        alert("Erro ao enviar RSVP. Tente novamente.");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (isSubmitted) {
      setFormData({ name: "", attendance: "" });
    }
  }, [isSubmitted]);

  if (isLoading) {
    return <LoadingSpinner text="Enviando confirmação..." />;
  }

  if (isSubmitted) {
    // Exibe mensagem de sucesso ao submeter
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 flex items-center justify-center">
        <Card className="border-rose-200 bg-white/70 backdrop-blur-sm max-w-md w-full">
          <CardHeader className="flex flex-col items-center">
            <Check className="text-green-600 mb-2" size={40} />
            <CardTitle className="text-rose-900 text-center">
              RSVP enviado!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-rose-700 mb-6">
              Recebemos sua confirmação. Obrigado!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-rose-700 hover:underline"
              onClick={() => setIsSubmitted(false)}
            >
              <ArrowLeft size={18} />
              Voltar para o início
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif text-rose-900 mb-4">
              Confirmação de Presença
            </h1>
            <p className="text-rose-700 text-lg">
              Por favor, nos avise se você estará conosco em nosso dia especial!
            </p>
          </div>

          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900">
                Confirme Sua Presença
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-rose-800">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                      className="border-rose-200 focus:border-rose-400"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-rose-800 text-base font-medium">
                    Você vai ao casamento? *
                  </Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) =>
                      handleInputChange("attendance", value)
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-rose-700">
                        {"Claro, estarei lá!"}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-rose-700">
                        {"Infelizmente não poderei ir"}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-lg py-3"
                  disabled={!formData.name || !formData.attendance}
                >
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
