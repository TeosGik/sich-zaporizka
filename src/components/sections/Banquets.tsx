import Image from "next/image";
import { Phone, Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { banquets } from "@/content/banquets";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

export function Banquets() {
  return (
    <section
      id="banquets"
      aria-labelledby="banquets-title"
      className="bg-sich-cream-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Свята і події
          </p>
          <h2
            id="banquets-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Банкети у Січі
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            Від камерного ювілею до весілля на 120 осіб. Меню й сценарій — під вас.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {banquets.map((b) => (
            <article
              key={b.id}
              className="flex flex-col overflow-hidden rounded-lg bg-card shadow-md"
            >
              {/* Фото або gradient-fallback */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {b.src ? (
                  <>
                    <Image
                      src={b.src}
                      alt={`${b.name} у ресторані Запорозька Січ`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-sich-ink/70 to-transparent"
                    />
                  </>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${b.gradient.from} 0%, ${b.gradient.via} 55%, ${b.gradient.to} 100%)`,
                    }}
                    aria-hidden="true"
                  />
                )}
                <h3 className="absolute bottom-5 left-6 right-6 font-serif text-3xl text-sich-cream sm:text-4xl">
                  {b.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <p className="text-sm leading-relaxed text-sich-ink-soft sm:text-base">
                  {b.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {b.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-sich-gold"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={contacts.phoneHref}
                  aria-label={`Запит на банкет: ${b.name}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "mt-auto h-11 border-sich-wine text-sich-wine hover:bg-sich-wine hover:text-sich-cream",
                  )}
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Дізнатись деталі
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
