interface MapSectionProps {
  locale?: "es" | "en"
}

const translations = {
  en: {
    title: "Find Us in La Cruz",
    subtitle: "Located in the heart of Guanacaste province",
  },
  es: {
    title: "Encuéntranos en La Cruz",
    subtitle: "Ubicados en el corazón de la provincia de Guanacaste",
  },
}

export function MapSection({ locale = "es" }: MapSectionProps) {
  const t = translations[locale]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4§ sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15695.395539646748!2d-85.6100839!3d11.0699976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f75988e8b3cc1d3%3A0x83c0f2a3f427579b!2sLa%20Cruz%2C%20Guanacaste%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1720200000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter dark:invert dark:hue-rotate-180 dark:brightness-95 dark:contrast-90"
              title="Mapa de La Cruz, Guanacaste, Costa Rica"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
