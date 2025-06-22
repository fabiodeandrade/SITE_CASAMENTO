import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MapPin, Clock, Camera, Music, Utensils, Plane } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-rose-900 mb-4">Wedding Details</h1>
          <p className="text-rose-700 text-lg">Everything you need to know about our special day</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900 flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Wedding Day Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Clock className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900">3:30 PM - Guest Arrival</h3>
                    <p className="text-rose-700">Guests arrive and are seated for the ceremony</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900">4:00 PM - Ceremony</h3>
                    <p className="text-rose-700">Wedding ceremony in the garden pavilion</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Camera className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900">4:30 PM - Photos & Cocktails</h3>
                    <p className="text-rose-700">Family photos while guests enjoy cocktail hour</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Utensils className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900">6:00 PM - Reception Dinner</h3>
                    <p className="text-rose-700">Seated dinner with toasts and speeches</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Music className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900">8:00 PM - Dancing</h3>
                    <p className="text-rose-700">First dance followed by open dancing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Heart className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-900">11:00 PM - Send-off</h3>
                    <p className="text-rose-700">Sparkler send-off for the newlyweds</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location & Travel */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Venue Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-rose-900 mb-2">Garden Valley Resort</h3>
                <p className="text-rose-700">
                  123 Scenic Drive
                  <br />
                  Napa Valley, CA 94558
                  <br />
                  (707) 555-0123
                </p>
              </div>

              <div>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Garden Valley Resort"
                  width={400}
                  height={200}
                  className="rounded-lg w-full object-cover"
                />
              </div>

              <p className="text-rose-700 text-sm">
                A beautiful outdoor venue nestled in the heart of Napa Valley, featuring stunning garden views and
                elegant facilities for our celebration.
              </p>

              <Button asChild variant="outline" className="w-full border-rose-300 text-rose-700 hover:bg-rose-50">
                <Link href="https://maps.google.com" target="_blank">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900 flex items-center">
                <Plane className="mr-2 h-5 w-5" />
                Travel & Accommodations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-rose-900 mb-2">Recommended Hotels</h3>
                <div className="space-y-2 text-sm text-rose-700">
                  <div>
                    <strong>Napa Valley Lodge</strong>
                    <br />2 miles from venue • (707) 555-0100
                    <br />
                    <span className="text-rose-600">Group rate: $189/night</span>
                  </div>
                  <div>
                    <strong>Valley Inn & Spa</strong>
                    <br />5 miles from venue • (707) 555-0200
                    <br />
                    <span className="text-rose-600">Group rate: $159/night</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-rose-900 mb-2">Transportation</h3>
                <p className="text-rose-700 text-sm">
                  Complimentary shuttle service will be provided from both recommended hotels to the venue. Shuttles
                  depart at 3:15 PM and return at 11:30 PM.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-rose-900 mb-2">Airport</h3>
                <p className="text-rose-700 text-sm">
                  San Francisco International (SFO) - 1.5 hours drive
                  <br />
                  Oakland International (OAK) - 1 hour drive
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900">Dress Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-rose-700">
                <strong>Garden Party Attire</strong> - Semi-formal outdoor wear
              </p>
              <ul className="text-rose-700 text-sm space-y-1">
                <li>• Cocktail dresses or dressy separates</li>
                <li>• Suits or dress shirts with slacks</li>
                <li>• Comfortable shoes recommended (grass/gravel)</li>
                <li>• Light jacket for evening (it can get cool)</li>
              </ul>
              <p className="text-rose-600 text-sm italic">Please avoid white, ivory, or blush tones</p>
            </CardContent>
          </Card>

          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-rose-900">FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-rose-900 text-sm">Is the ceremony outdoors?</h4>
                <p className="text-rose-700 text-sm">Yes, weather permitting. There's a covered backup location.</p>
              </div>
              <div>
                <h4 className="font-semibold text-rose-900 text-sm">Can I bring my children?</h4>
                <p className="text-rose-700 text-sm">
                  We love your little ones, but this will be an adults-only celebration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-rose-900 text-sm">Will there be vegetarian options?</h4>
                <p className="text-rose-700 text-sm">Yes! Please indicate dietary restrictions in your RSVP.</p>
              </div>
              <div>
                <h4 className="font-semibold text-rose-900 text-sm">Can I take photos?</h4>
                <p className="text-rose-700 text-sm">
                  We ask for an unplugged ceremony, but photos are welcome at the reception!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="mt-16 text-center">
          <Card className="border-rose-200 bg-white/70 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-rose-900 font-semibold mb-2">Questions?</h3>
              <p className="text-rose-700 text-sm mb-4">
                If you have any questions about the wedding, please don't hesitate to reach out!
              </p>
              <div className="text-rose-700 text-sm">
                <p>Email: hello@sarahandmichael.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
