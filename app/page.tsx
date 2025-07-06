import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { MapSection } from "@/components/map-section"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SpanishHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header locale="es" />
      <main>
        <Hero locale="es" />
        <Services locale="es" />
        <About locale="es" />
        <MapSection locale="es" />
        <Contact locale="es" />
      </main>
      <Footer locale="es" />
    </div>
  )
}
