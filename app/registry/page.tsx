"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ExternalLink, Check, Gift } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface GiftItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  purchased: boolean
  store: string
  storeUrl: string
  category: string
}

const giftItems: GiftItem[] = [
  {
    id: 1,
    name: "KitchenAid Stand Mixer",
    description: "Professional 5-quart stand mixer in rose gold",
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: false,
    store: "Williams Sonoma",
    storeUrl: "#",
    category: "Kitchen",
  },
  {
    id: 2,
    name: "Egyptian Cotton Sheet Set",
    description: "Luxury 800-thread count sheet set in ivory",
    price: 189.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: true,
    store: "Pottery Barn",
    storeUrl: "#",
    category: "Bedroom",
  },
  {
    id: 3,
    name: "Cast Iron Dutch Oven",
    description: "7-quart enameled cast iron Dutch oven",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: false,
    store: "Sur La Table",
    storeUrl: "#",
    category: "Kitchen",
  },
  {
    id: 4,
    name: "Wine Decanter Set",
    description: "Crystal wine decanter with 4 glasses",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: false,
    store: "Crate & Barrel",
    storeUrl: "#",
    category: "Dining",
  },
  {
    id: 5,
    name: "Bamboo Cutting Board Set",
    description: "Set of 3 bamboo cutting boards with juice grooves",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: true,
    store: "Williams Sonoma",
    storeUrl: "#",
    category: "Kitchen",
  },
  {
    id: 6,
    name: "Throw Pillow Set",
    description: "Set of 4 decorative throw pillows in neutral tones",
    price: 159.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: false,
    store: "West Elm",
    storeUrl: "#",
    category: "Living Room",
  },
  {
    id: 7,
    name: "Coffee Maker",
    description: "Programmable drip coffee maker with thermal carafe",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: false,
    store: "Target",
    storeUrl: "#",
    category: "Kitchen",
  },
  {
    id: 8,
    name: "Picture Frame Set",
    description: "Set of 5 matching picture frames in various sizes",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    purchased: false,
    store: "Pottery Barn",
    storeUrl: "#",
    category: "Decor",
  },
]

export default function RegistryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [items, setItems] = useState(giftItems)

  const categories = ["All", "Kitchen", "Bedroom", "Dining", "Living Room", "Decor"]

  const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

  const handleMarkPurchased = (id: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, purchased: true } : item)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-serif text-rose-900">Sarah & Michael</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-rose-700 hover:text-rose-900 transition-colors">
                Home
              </Link>
              <Link href="/rsvp" className="text-rose-700 hover:text-rose-900 transition-colors">
                RSVP
              </Link>
              <Link href="/registry" className="text-rose-700 hover:text-rose-900 transition-colors font-semibold">
                Registry
              </Link>
              <Link href="/details" className="text-rose-700 hover:text-rose-900 transition-colors">
                Details
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Gift className="h-8 w-8 text-rose-500" />
            <h1 className="text-4xl font-serif text-rose-900">Wedding Registry</h1>
          </div>
          <p className="text-rose-700 text-lg max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. If you'd like to honor us with a gift, we've
            created this registry to help us start our new life together.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-rose-600 hover:bg-rose-700"
                  : "border-rose-300 text-rose-700 hover:bg-rose-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Registry Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-rose-200 bg-white/70 backdrop-blur-sm relative overflow-hidden">
              {item.purchased && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <Check className="h-3 w-3 mr-1" />
                    Purchased
                  </Badge>
                </div>
              )}

              <div className="aspect-square relative overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs border-rose-200 text-rose-600">
                    {item.category}
                  </Badge>
                </div>

                <h3 className="font-semibold text-rose-900 mb-2 line-clamp-2">{item.name}</h3>

                <p className="text-sm text-rose-700 mb-3 line-clamp-2">{item.description}</p>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-rose-900">${item.price}</span>
                  <span className="text-sm text-rose-600">{item.store}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-rose-300 text-rose-700 hover:bg-rose-50"
                  >
                    <Link href={item.storeUrl} target="_blank">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Link>
                  </Button>

                  {!item.purchased && (
                    <Button
                      size="sm"
                      onClick={() => handleMarkPurchased(item.id)}
                      className="flex-1 bg-rose-600 hover:bg-rose-700"
                    >
                      Mark as Purchased
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-rose-600 text-lg">No items found in this category.</p>
          </div>
        )}

        {/* Registry Info */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900 text-center">Registry Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-rose-700">
                Items can be purchased directly from the retailers listed above. Many stores offer gift wrapping and
                direct shipping to the couple.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-rose-600">
                <div>
                  <strong>Shipping Address:</strong>
                  <br />
                  Sarah Johnson & Michael Chen
                  <br />
                  123 Oak Street
                  <br />
                  San Francisco, CA 94102
                </div>
                <div>
                  <strong>Wedding Date:</strong>
                  <br />
                  June 15, 2024
                  <br />
                  <strong>Registry ID:</strong>
                  <br />
                  SC-061524
                </div>
              </div>
              <p className="text-rose-700 italic">Thank you for helping us start our new journey together! ❤️</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
