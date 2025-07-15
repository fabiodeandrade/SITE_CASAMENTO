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
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 flex items-center justify-center p-4">
        <Card className="border-rose-200 bg-white/70 backdrop-blur-sm max-w-sm w-full">
          <CardHeader className="flex flex-col items-center pb-3">
            <Check className="text-green-600 mb-1" size={32} />
            <CardTitle className="text-rose-900 text-center text-lg">
              RSVP enviado!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <p className="text-rose-700 mb-3 text-sm">
              Recebemos sua confirmação. Obrigado!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-rose-700 hover:underline text-sm"
              onClick={() => setIsSubmitted(false)}
            >
              <ArrowLeft size={16} />
              Voltar para o início
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-12 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-serif text-rose-900 mb-1">
            Confirmação de Presença
          </h2>
          <p className="text-red-800 text-sm leading-relaxed">
            Por favor, nos avise se você estará conosco em nosso dia especial!
          </p>
        </div>

        <Card className="border-red-800 bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-red-800 text-lg">
              Confirme Sua Presença
            </CardTitle>
          </CardHeader>{" "}
          <CardContent className="pt-0">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-rose-800 text-sm">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="border-rose-200 focus:border-rose-400 h-9"
                />
              </div>

              <div>
                <Label className="text-rose-800 text-sm font-medium">
                  Você vai ao casamento? *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) =>
                    handleInputChange("attendance", value)
                  }
                  className="mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="text-rose-700 text-sm">
                      {"Claro, estarei lá!"}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-rose-700 text-sm">
                      {"Infelizmente não poderei ir"}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-700 py-2 mt-4"
                disabled={!formData.name || !formData.attendance}
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
