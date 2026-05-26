import Image from "next/image";
import { Users } from "lucide-react";

import type { Zone } from "@/content/zones";

type ZoneCardProps = {
  zone: Zone;
};

export function ZoneCard({ zone }: ZoneCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg bg-card shadow-md transition-shadow hover:shadow-xl">
      {/* Фото або gradient-fallback */}
      <div className="relative aspect-[3/2] overflow-hidden">
        {zone.src ? (
          <Image
            src={zone.src}
            alt={`${zone.name} — ресторан Запорозька Січ`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${zone.gradient.from} 0%, ${zone.gradient.via} 55%, ${zone.gradient.to} 100%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sich-ink/70 to-transparent"
        />
        <h3 className="absolute bottom-5 left-6 right-6 font-serif text-3xl text-sich-cream drop-shadow-sm sm:text-4xl">
          {zone.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-sm leading-relaxed text-sich-ink-soft sm:text-base">
          {zone.description}
        </p>
        <dl className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-border/50 pt-4 text-sm">
          <div className="flex items-center gap-2">
            <Users aria-hidden="true" className="size-4 text-sich-gold" />
            <span className="font-medium">{zone.capacity}</span>
          </div>
          <div className="text-muted-foreground">{zone.bestFor}</div>
        </dl>
      </div>
    </article>
  );
}
