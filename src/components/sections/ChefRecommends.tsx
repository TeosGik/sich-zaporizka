import Image from "next/image";
import { Phone, ChefHat } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { chefRecommends } from "@/content/chef";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

export function ChefRecommends() {
  return (
    <section
      id="chef"
      aria-labelledby="chef-title"
      className="bg-linen py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            <ChefHat aria-hidden="true" className="size-4" />
            Від шеф-кухаря
          </p>
          <h2
            id="chef-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Шеф рекомендує
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            Шість страв, на яких будується наша репутація. Кожна — окрема історія.
          </p>
        </header>

        <ul className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {chefRecommends.map((dish) => (
            <li
              key={dish.id}
              className="flex flex-col overflow-hidden rounded-lg bg-card shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Фото або gradient-fallback */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {dish.src ? (
                  <Image
                    src={dish.src}
                    alt={`${dish.name} — фірмова страва`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${dish.gradient.from} 0%, ${dish.gradient.via} 55%, ${dish.gradient.to} 100%)`,
                    }}
                    aria-hidden="true"
                  />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-sich-cream/95 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-sich-ink">
                  {dish.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl leading-tight sm:text-2xl">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 font-serif text-xl font-medium text-sich-wine sm:text-2xl">
                    {dish.price} ₴
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-sich-ink-soft sm:text-base">
                  {dish.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={contacts.phoneHref}
            aria-label="Замовити столик щоб скуштувати"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 px-8 text-base bg-sich-wine text-sich-cream hover:bg-sich-wine-deep",
            )}
          >
            <Phone aria-hidden="true" className="size-4" />
            Замовити столик
          </a>
        </div>
      </div>
    </section>
  );
}
