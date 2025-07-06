"use client"

import { Leaf, Shield, Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

interface AboutProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    title: "About A&M Travel Service",
    subtitle: "Your trusted partner for sustainable tourism in Costa Rica",
    description:
        "With over 12 years of experience in Costa Rica's tourism industry, we are committed to providing exceptional transportation services while preserving the natural beauty that makes our country unique. Our eco-friendly fleet and knowledgeable local drivers ensure you experience the authentic Costa Rica safely and responsibly.",
    features: [
      {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Committed to sustainable tourism practices",
      },
      {
        icon: Shield,
        title: "Safe & Reliable",
        description: "Licensed drivers and well-maintained vehicles",
      },
      {
        icon: Star,
        title: "Local Expertise",
        description: "Deep knowledge of Guanacaste's hidden gems",
      },
    ],
  },
  es: {
    title: "Acerca de A&M Travel Service",
    subtitle: "Su socio de confianza para el turismo sostenible en Costa Rica",
    description:
        "Con más de 12 años de experiencia en la industria turística de Costa Rica, estamos comprometidos a brindar servicios de transporte excepcionales mientras preservamos la belleza natural que hace único a nuestro país. Nuestra flota ecológica y conductores locales conocedores aseguran que experimente la auténtica Costa Rica de manera segura y responsable.",
    features: [
      {
        icon: Leaf,
        title: "Eco-Amigable",
        description: "Comprometidos con prácticas de turismo sostenible",
      },
      {
        icon: Shield,
        title: "Seguro y Confiable",
        description: "Conductores licenciados y vehículos bien mantenidos",
      },
      {
        icon: Star,
        title: "Experiencia Local",
        description: "Conocimiento profundo de las joyas ocultas de Guanacaste",
      },
    ],
  },
}

const busImages = [
  "/buseta1.jpeg",
  "/buseta2.jpeg",
    "/buseta3.jpeg",
    "/buseta4.jpeg",
    "/buseta5.jpeg",
    "/buseta6.jpeg",
    "/buseta7.jpeg",
    "/buseta8.jpeg",
]

export function About({ locale = "es" }: AboutProps) {
  const t = translations[locale]

  return (
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Texto */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
              <p className="text-xl text-muted-foreground mb-6">{t.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                      <div key={index} className="text-center group">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                  )
                })}
              </div>
            </div>

            {/* Carrusel */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="h-full w-full"
                >
                  {busImages.map((src, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-full">
                          <Image
                              src={src}
                              alt={`Bus image ${i + 1}`}
                              fill
                              className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Decoraciones */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-teal-500 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>
  )
}
