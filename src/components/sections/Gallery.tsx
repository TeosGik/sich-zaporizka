"use client";

import { useState } from "react";
import Image from "next/image";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { gallery } from "@/content/gallery";
import { cn } from "@/lib/utils";

const aspectClasses: Record<string, string> = {
  square: "aspect-square",
  tall: "row-span-2 aspect-[3/5]",
  wide: "col-span-2 aspect-[16/9]",
};

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? gallery[openIndex] : null;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-linen py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Атмосфера
          </p>
          <h2
            id="gallery-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Як це виглядає
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            Дев&apos;ять кадрів з вечорів, які повторюються тільки тут.
          </p>
        </header>

        {/* Masonry-сітка через CSS Grid: різні span-и створюють природній ритм */}
        <ul className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:auto-rows-[180px] lg:auto-rows-[200px]">
          {gallery.map((item, i) => (
            <li key={item.id} className={aspectClasses[item.aspect]}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Відкрити: ${item.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${item.gradient.from} 0%, ${item.gradient.via} 55%, ${item.gradient.to} 100%)`,
                    }}
                  />
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-sich-ink/0 transition-colors duration-300 group-hover:bg-sich-ink/20"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <DialogContent
          className={cn(
            "max-w-4xl w-full p-0 overflow-hidden bg-sich-ink ring-0 sm:max-w-4xl",
          )}
        >
          {active && (
            <div className="relative aspect-[3/2] w-full">
              {active.src ? (
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${active.gradient.from} 0%, ${active.gradient.via} 55%, ${active.gradient.to} 100%)`,
                  }}
                />
              )}
              <p className="absolute bottom-0 inset-x-0 bg-sich-ink/70 px-6 py-3 text-center text-sm text-sich-cream/80">
                {active.alt}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
