"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    title: "Tourist Transport from La Cruz, Guanacaste",
    subtitle:
      "Discover the natural beauty of Costa Rica with our reliable and eco-friendly transportation services. From pristine beaches to majestic volcanoes.",
    cta: "Book Now",
  },
  es: {
    title: "Transporte turístico desde La Cruz, Guanacaste",
    subtitle:
      "Descubre la belleza natural de Costa Rica con nuestros servicios de transporte confiables y ecológicos. Desde playas vírgenes hasta volcanes majestuosos.",
    cta: "Reserva ahora",
  },
}

export function Hero({ locale = "es" }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const t = translations[locale]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('buseta-horizontal.jpeg?height=1080&width=1920')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        {/* Foreground Elements */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-900/20 to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{t.title}</h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">{t.subtitle}</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
