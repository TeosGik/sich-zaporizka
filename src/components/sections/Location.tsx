"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Car } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

const { lat, lng } = contacts.address.geo;
const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=uk&z=14&output=embed`;

export function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="bg-linen py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Адреса
          </p>
          <h2
            id="location-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Як доїхати
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            На острові Хортиця, у самому серці козацької історії.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          {/* Інфо-панель */}
          <div className="space-y-6">
            <dl className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-sich-gold"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Адреса
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={contacts.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-lg hover:text-sich-wine"
                    >
                      {contacts.address.full}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-sich-gold"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Телефон
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={contacts.phoneHref}
                      className="font-serif text-lg hover:text-sich-wine"
                    >
                      {contacts.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-sich-gold"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Графік роботи
                  </dt>
                  <dd className="mt-1 font-serif text-lg">
                    {contacts.hours.label}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-sich-gold"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Як добиратися
                  </dt>
                  <dd className="mt-1 space-y-1 text-base text-sich-ink-soft">
                    <p>· Автомобілем: 20 хв від центру Запоріжжя</p>
                    <p>· Таксі: ~150 ₴ від ж/д вокзалу</p>
                    <p>· Парковка для гостей — безкоштовна</p>
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={contacts.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full sm:w-auto bg-sich-wine text-sich-cream hover:bg-sich-wine-deep",
              )}
            >
              <MapPin aria-hidden="true" className="size-4" />
              Прокласти маршрут
            </a>
          </div>

          {/* Map (lazy iframe — рендериться тільки після кліку) */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:aspect-auto lg:min-h-[400px]">
            {mapLoaded ? (
              <iframe
                src={mapSrc}
                title="Карта розташування ресторану Запорозька Січ"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapLoaded(true)}
                className="group relative h-full w-full"
                aria-label="Завантажити інтерактивну мапу"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at 60% 40%, rgba(184, 137, 61, 0.35), transparent 55%),
                      linear-gradient(135deg, #3c4a2a 0%, #1f1a14 100%)
                    `,
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-3 rounded-lg bg-sich-cream/95 px-6 py-4 text-sich-ink shadow-lg transition-transform group-hover:scale-105">
                    <MapPin className="size-6 text-sich-wine" />
                    <span className="font-medium">Показати карту</span>
                    <span className="text-xs text-muted-foreground">
                      Завантажує Google Maps
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
