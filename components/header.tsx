"use client"

import {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import {Globe, Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    language: "Language",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    language: "Idioma",
  },
}

export function Header({locale = "es"}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[locale]
  const basePath = locale === "en" ? "/en" : ""

  const navItems = [
    { href: `${basePath}#home`, label: t.home },
    { href: `${basePath}#services`, label: t.services },
    { href: `${basePath}#about`, label: t.about },
    { href: `${basePath}#contact`, label: t.contact },
  ]

  return (
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Logo (izquierda) */}
            <div className="flex justify-start items-center">
              <Link href={basePath || "/"} className="flex items-center space-x-2">
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
                <span
                    className="font-bold text-lg text-foreground leading-tight whitespace-nowrap md:max-w-[140px] md:break-words md:whitespace-normal lg:max-w-none lg:whitespace-nowrap">
                  A&M Travel Service
                </span>
              </Link>
            </div>

            {/* Navegación centrada */}
            <nav className="hidden md:flex justify-center space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item.href}
                      href={item.href}
                      className="text-foreground hover:text-emerald-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
              ))}
            </nav>

            {/* Controles: idioma + menú (en desktop) */}
            <div className="hidden md:flex justify-end items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Globe className="w-4 h-4 mr-2" />
                    {locale.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/en">English</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/">Español</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Botón menú móvil (fuera del grid, pegado a la derecha) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden z-50">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent">
                  <Menu className="h-6 w-6"/>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                      <Link
                          key={item.href}
                          href={item.href}
                          className="text-lg font-medium text-foreground hover:text-emerald-600 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Link
                        href="/en"
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                    >
                      English
                    </Link>
                    <Link
                        href="/"
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                    >
                      Español
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  )
}
