import Image from "next/image";

import { facts } from "@/content/facts";

export function Facts() {
  return (
    <section
      id="facts"
      aria-labelledby="facts-title"
      className="relative isolate bg-sich-ink text-sich-cream"
    >
      {/* ─── Декоративний верх: сосни Хортиці ─────────────────────── */}
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[3/1] md:aspect-[5/2]">
        <Image
          src="/images/facts/pines.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-sich-ink/30 via-sich-ink/30 to-sich-ink"
        />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 text-center sm:pb-14 lg:pb-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Бувальщини
          </p>
          <h2
            id="facts-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Маленькі історії Січі
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sich-cream/80 sm:text-lg">
            Шість історичних кадрів, які роблять цей стіл особливим.
          </p>
        </div>
      </div>

      {/* ─── Сітка фактів ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <ul className="grid gap-px overflow-hidden rounded-lg bg-sich-cream/15 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <li
              key={fact.id}
              className="flex flex-col gap-3 bg-sich-ink p-7 transition-colors hover:bg-sich-ink-soft sm:p-8"
            >
              <span className="font-serif text-3xl text-sich-gold sm:text-4xl">
                {fact.badge}
              </span>
              <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                {fact.title}
              </h3>
              <p className="text-sm leading-relaxed text-sich-cream/75 sm:text-base">
                {fact.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
