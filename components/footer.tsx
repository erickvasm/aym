import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image";

interface FooterProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    company: "A&M Travel Service",
    description: "Your trusted partner for sustainable tourism transportation in Guanacaste, Costa Rica.",
    quickLinks: "Quick Links",
    contact: "Contact Info",
    followUs: "Follow Us",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    links: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
  },
  es: {
    company: "A&M Travel Service",
    description: "Su socio de confianza para el transporte turístico sostenible en Guanacaste, Costa Rica.",
    quickLinks: "Enlaces Rápidos",
    contact: "Información de Contacto",
    followUs: "Síguenos",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    links: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
  },
}

export function Footer({ locale = "es" }: FooterProps) {
  const t = translations[locale]
  const basePath = locale === "es" ? "/es" : ""

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br flex items-center justify-center">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                      src="/logo-negro.png"
                      alt="Logo claro"
                      fill
                      className="rounded-full object-contain block dark:hidden"
                  />
                  <Image
                      src="/logo.png"
                      alt="Logo oscuro"
                      fill
                      className="rounded-full object-contain hidden dark:block"
                  />
                </div>

              </div>
              <span className="font-bold text-xl text-foreground">{t.company}</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">{t.description}</p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+506 8668-8651</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>travelserviceam@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${basePath}#home`}
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                >
                  {t.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}#services`}
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                >
                  {t.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}#about`}
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                >
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}#contact`}
                  className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                >
                  {t.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.followUs}</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.company}. {t.rights}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
            >
              {t.privacy}
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
            >
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
