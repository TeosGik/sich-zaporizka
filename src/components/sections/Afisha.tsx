import { AfishaRow } from "@/components/shared/AfishaRow";
import { afisha } from "@/content/afisha";

export function Afisha() {
  return (
    <section
      id="afisha"
      aria-labelledby="afisha-title"
      className="bg-sich-cream-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-2xl text-center sm:mb-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Афіша
          </p>
          <h2
            id="afisha-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Тиждень у Січі
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            Кожен день має свій настрій. Оберіть свій привід приїхати.
          </p>
        </header>

        <div className="space-y-20 sm:space-y-32">
          {afisha.map((item, i) => (
            <AfishaRow key={item.id} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
