"use client";

import Image from "next/image";

import { useParallax } from "@/lib/useParallax";
import type { AfishaItem } from "@/content/afisha";
import { cn } from "@/lib/utils";

type AfishaRowProps = {
  item: AfishaItem;
  reverse?: boolean;
};

export function AfishaRow({ item, reverse = false }: AfishaRowProps) {
  const ref = useParallax<HTMLDivElement>(0.25);

  return (
    <article
      ref={ref}
      className={cn(
        "grid items-center gap-8 md:grid-cols-2 md:gap-16",
        reverse && "md:[&>:first-child]:order-2",
      )}
    >
      {/* Фото з parallax (або gradient як fallback) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl">
        <div
          className="absolute -inset-y-8 inset-x-0 will-change-transform"
          style={{ transform: "translate3d(0, var(--parallax-y, 0), 0)" }}
          aria-hidden="true"
        >
          {item.src ? (
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(135deg, ${item.gradient.from} 0%, ${item.gradient.via} 55%, ${item.gradient.to} 100%)`,
              }}
            />
          )}
        </div>
        {!item.src && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-end justify-end p-6 font-serif text-6xl text-sich-cream/15 sm:text-7xl"
          >
            {item.day.slice(0, 2)}
          </div>
        )}
      </div>

      {/* Текстовий блок */}
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
          {item.day}
        </p>
        <h3 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
          {item.title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-sich-ink-soft sm:text-lg">
          {item.description}
        </p>
      </div>
    </article>
  );
}
