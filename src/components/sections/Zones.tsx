import { ZoneCard } from "@/components/shared/ZoneCard";
import { zones } from "@/content/zones";

export function Zones() {
  return (
    <section
      id="zones"
      aria-labelledby="zones-title"
      className="bg-linen py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Зони
          </p>
          <h2
            id="zones-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Оберіть свою світлицю
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            Чотири простори під чотири настрої.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {zones.map((zone) => (
            <ZoneCard key={zone.id} zone={zone} />
          ))}
        </div>
      </div>
    </section>
  );
}
