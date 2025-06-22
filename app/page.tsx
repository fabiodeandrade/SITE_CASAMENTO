import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar, MapPin, Gift, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import DetailsPage from "./details/page"
import RSVPPage from "./rsvp/page"

export default function HomePage() {
  return (
    // <div className="min-h-screen bg-[#8B5A5E]">
    <div className="min-h-screen bg-gradient-to-br from-[#262222] via-[#7B454A] to-[#3d0d11]">
     
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-serif text-[#262222]">Bruna & Fábio</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-rose-700 hover:text-rose-900 transition-colors">
                Home
              </Link>
              <Link href="/rsvp" className="text-rose-700 hover:text-rose-900 transition-colors">
                RSVP
              </Link>
              <Link href="/registry" className="text-rose-700 hover:text-rose-900 transition-colors">
                Registry
              </Link>
              <Link href="/details" className="text-rose-700 hover:text-rose-900 transition-colors">
                Details
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Sarah and Michael"
              width={400}
              height={300}
              className="mx-auto rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#262222] mb-4">Bruna & Fábio</h1>
          <p className="text-xl text-[#3b3535] mb-8">We're getting married and we'd love for you to join us!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-white">
              <Calendar className="h-5 w-5" />
              <span className="text-lg">19 de Setembro, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Residencial</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/rsvp">
                <Users className="mr-2 h-4 w-4" />
                RSVP Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-rose-300 text-rose-700 hover:bg-rose-50">
              <Link href="/registry">
                <Gift className="mr-2 h-4 w-4" />
                View Registry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-rose-900 mb-2">Quando</h3>
                <p className="text-rose-700">Sexta, 19 de Setembro de 2025</p>
                <p className="text-rose-600">19:00 Recepção</p>
                <p className="text-rose-600">20:00 Cerimônia</p>
              </CardContent>
            </Card>

            <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-rose-900 mb-2">Onde</h3>
                <p className="text-rose-700">Bourbon Residence</p>
                <p className="text-rose-600">123 Scenic Drive</p>
                <p className="text-rose-600">Napa Valley, CA 94558</p>
              </CardContent>
            </Card>

            <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-rose-900 mb-2">Dress Code</h3>
                <p className="text-rose-700">Sport Fino</p>
                <p className="text-rose-600">Venha do jeito que se sentir confortável</p>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-rose-900 mb-8">Nossa História</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Our story"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-rose-800 text-lg leading-relaxed mb-4">
                We met in college during our sophomore year in a literature class. What started as study sessions turned
                into long conversations about books, dreams, and life.
              </p>
              <p className="text-rose-800 text-lg leading-relaxed mb-4">
                After five wonderful years together, Michael proposed during a sunset hike at our favorite trail. We
                can't wait to start this new chapter of our lives together.
              </p>
              <p className="text-rose-800 text-lg leading-relaxed">
                Thank you for being part of our journey. We're so excited to celebrate with all of you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <RSVPPage />

      <DetailsPage />

      {/* Footer */}
      <footer className="bg-rose-900 text-rose-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="h-5 w-5" />
            <span className="font-serif text-lg">Bruna & Fábio</span>
            <Heart className="h-5 w-5" />
          </div>
          <p className="text-rose-300">19 de Setembro, 2025 • Residencial Bourbon</p>
          <p className="text-rose-400 text-sm mt-2">Feito com muito amor e carinho por Bruna e Fábio</p>
        </div>
      </footer>
    </div>
  )
}
