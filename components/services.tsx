import { Car, Users, MapPin, Route } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServicesProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    title: "Our Services",
    subtitle: "Professional transportation solutions for every adventure",
    services: [
      {
        title: "Airport Shuttles",
        description: "Comfortable and reliable transfers between La Cruz Airport and your destination.",
        icon: Car,
      },
      {
        title: "Private Tours",
        description: "Personalized tours to discover the hidden gems of Guanacaste province.",
        icon: MapPin,
      },
      {
        title: "Group Transportation",
        description: "Safe and spacious vehicles for large groups and family adventures.",
        icon: Users,
      },
      {
        title: "Custom Routes",
        description: "Flexible itineraries tailored to your specific travel needs and preferences.",
        icon: Route,
      },
    ],
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones de transporte profesional para cada aventura",
    services: [
      {
        title: "Traslados al Aeropuerto",
        description: "Traslados cómodos y confiables entre el Aeropuerto de La Cruz y su destino.",
        icon: Car,
      },
      {
        title: "Tours Privados",
        description: "Tours personalizados para descubrir las joyas ocultas de la provincia de Guanacaste.",
        icon: MapPin,
      },
      {
        title: "Transporte Grupal",
        description: "Vehículos seguros y espaciosos para grupos grandes y aventuras familiares.",
        icon: Users,
      },
      {
        title: "Rutas Personalizadas",
        description: "Itinerarios flexibles adaptados a sus necesidades y preferencias específicas de viaje.",
        icon: Route,
      },
    ],
  },
}

export function Services({ locale = "es" }: ServicesProps) {
  const t = translations[locale]

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
