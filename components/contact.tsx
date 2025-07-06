"use client"

import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ContactProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Ready to start your Costa Rican adventure?",
    contact: {
      phone: "+506 8668-8651",
      email: "travelserviceam@gmail.com",
      whatsapp: "WhatsApp",
    },
  },
  es: {
    title: "Contáctanos",
    subtitle: "¿Listo para comenzar tu aventura costarricense?",
    contact: {
      phone: "+506 8668-8651",
      email: "travelserviceam@gmail.com",
      whatsapp: "WhatsApp",
    },
  },
}

export function Contact({ locale = "es" }: ContactProps) {
  const t = translations[locale]

  return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <Card className="border border-border bg-muted text-card-foreground shadow-lg">
            <CardContent className="flex flex-col items-center space-y-10 p-10">
              {/* Contact Info */}
              <div className="flex flex-col items-start space-y-8 w-full max-w-md">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <a
                      href={`tel:${t.contact.phone}`}
                      className="text-lg font-medium text-card-foreground hover:underline"
                  >
                    {t.contact.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <a
                      href={`mailto:${t.contact.email}`}
                      className="text-lg font-medium text-card-foreground hover:underline"
                  >
                    {t.contact.email}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <a
                      href="https://wa.me/50686688651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-card-foreground hover:underline"
                  >
                    +506 8668-8651
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-8">
                <a
                    href="https://facebook.com/tuempresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:bg-emerald-600 hover:text-white transition"
                    aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                    href="https://instagram.com/tuempresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:bg-emerald-600 hover:text-white transition"
                    aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
  )
}
