import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { MapSection } from "@/components/map-section"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header locale="en"/>
      <main>
        <Hero locale="en"/>
        <Services locale="en" />
        <About locale="en"/>
        <MapSection locale="en"/>
        <Contact locale="en"/>
      </main>
      <Footer locale="en"/>
    </div>
  )
}
