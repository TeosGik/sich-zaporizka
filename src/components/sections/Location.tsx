"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Car } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

const { lat, lng } = contacts.address.geo;
const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=uk&z=14&output=embed`;

/** Декоративна роза-вітрів у козацькому стилі (Пн/Пд/Сх/Зх) */
function CompassRose() {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="size-16 sm:size-20 text-sich-wine drop-shadow-sm"
    >
      <circle cx="50" cy="50" r="42" fill="rgba(245,239,227,0.85)" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 2" />
      {/* 4 промені (North up) */}
      <polygon points="50,12 53,48 50,50 47,48" fill="currentColor" />
      <polygon points="50,88 53,52 50,50 47,52" fill="rgba(122,31,31,0.4)" />
      <polygon points="88,50 52,53 50,50 52,47" fill="rgba(122,31,31,0.4)" />
      <polygon points="12,50 48,53 50,50 48,47" fill="rgba(122,31,31,0.4)" />
      {/* діагональні короткі промені */}
      <polygon points="74,26 52,48 50,50 48,48" fill="rgba(184,137,61,0.7)" />
      <polygon points="26,74 48,52 50,50 52,52" fill="rgba(184,137,61,0.5)" />
      <polygon points="26,26 48,48 50,50 48,52" fill="rgba(184,137,61,0.5)" />
      <polygon points="74,74 52,48 50,50 52,52" fill="rgba(184,137,61,0.5)" />
      {/* Букви напрямків */}
      <text x="50" y="9" textAnchor="middle" fontSize="9" fontFamily="serif" fill="currentColor" fontWeight="600">Пн</text>
      <text x="50" y="98" textAnchor="middle" fontSize="9" fontFamily="serif" fill="currentColor">Пд</text>
      <text x="96" y="53" textAnchor="middle" fontSize="9" fontFamily="serif" fill="currentColor">Сх</text>
      <text x="4" y="53" textAnchor="middle" fontSize="9" fontFamily="serif" fill="currentColor">Зх</text>
    </svg>
  );
}

/** Орнаментальний кут (виглядає як завиток зі старої карти) */
function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("size-8 text-sich-gold", className)}
    >
      <path
        d="M2 2 L38 2 M2 2 L2 38 M2 2 Q15 5 18 18 M18 18 Q5 15 2 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
  );
}

export function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        backgroundColor: "#ede4d2",
        backgroundImage: `
          radial-gradient(ellipse at 20% 15%, rgba(184, 137, 61, 0.12) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 85%, rgba(122, 31, 31, 0.08) 0%, transparent 55%),
          radial-gradient(circle at 50% 50%, rgba(245, 239, 227, 0.4) 0%, transparent 60%)
        `,
      }}
    >
      {/* Декоративні крапки-зернинки фону (пергамент) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(60, 40, 20, 0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Заголовок з типографічними виноградами ─── */}
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-wine">
            ‹ Мапа Січі ›
          </p>
          <h2
            id="location-title"
            className="font-serif text-4xl leading-tight tracking-tight text-sich-ink sm:text-5xl md:text-6xl"
          >
            Як дістатися
          </h2>
          <div className="mx-auto mt-4 flex max-w-md items-center gap-3">
            <span className="h-px flex-1 bg-sich-gold/40" />
            <svg viewBox="0 0 24 24" className="size-3 text-sich-gold" aria-hidden="true">
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
            </svg>
            <span className="h-px flex-1 bg-sich-gold/40" />
          </div>
          <p className="mt-5 text-base italic text-sich-ink-soft sm:text-lg">
            На острові Хортиця, у самому серці козацької історії.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          {/* ─── Інфо-панель (теж стилізована під пергамент) ─── */}
          <div className="relative">
            <div className="space-y-6 rounded-lg border-2 border-double border-sich-gold/40 bg-sich-cream/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <dl className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-sich-wine"
                  />
                  <div className="min-w-0">
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Адреса
                    </dt>
                    <dd className="mt-1 break-words">
                      <a
                        href={contacts.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-base leading-snug hover:text-sich-wine sm:text-lg"
                      >
                        {contacts.address.full}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-sich-wine"
                  />
                  <div className="min-w-0">
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
                    className="mt-1 size-5 shrink-0 text-sich-wine"
                  />
                  <div className="min-w-0">
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
                    className="mt-1 size-5 shrink-0 text-sich-wine"
                  />
                  <div className="min-w-0">
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
                  "w-full bg-sich-wine text-sich-cream hover:bg-sich-wine-deep sm:w-auto",
                )}
              >
                <MapPin aria-hidden="true" className="size-4" />
                Прокласти маршрут
              </a>
            </div>
          </div>

          {/* ─── Стилізована «козацька карта» ─── */}
          <div className="relative">
            {/* Зовнішня декоративна рамка-подвійний кант */}
            <div className="relative aspect-[4/3] rounded-lg border-2 border-double border-sich-gold/50 bg-sich-cream p-2 shadow-xl lg:aspect-auto lg:min-h-[450px]">
              {/* Внутрішня рамка з картою */}
              <div className="relative h-full w-full overflow-hidden rounded-md border border-sich-gold/30">
                {mapLoaded ? (
                  <iframe
                    src={mapSrc}
                    title="Карта розташування ресторану Запорозька Січ"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    style={{
                      // М'який sepia щоб виглядало як стара мапа
                      filter: "sepia(0.35) saturate(0.85) contrast(0.95)",
                    }}
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
                          radial-gradient(ellipse at 60% 40%, rgba(184, 137, 61, 0.45), transparent 55%),
                          radial-gradient(circle at 30% 70%, rgba(60, 74, 42, 0.3), transparent 50%),
                          linear-gradient(135deg, #ede4d2 0%, #c9b58a 100%)
                        `,
                      }}
                    />
                    {/* Декоративний "острів" — стилізовано Хортицю */}
                    <svg
                      viewBox="0 0 200 150"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full opacity-50"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M40 65 Q60 50 90 55 Q130 60 150 75 Q160 95 140 105 Q110 110 75 100 Q45 90 40 65 Z"
                        fill="rgba(60, 74, 42, 0.4)"
                        stroke="rgba(122, 31, 31, 0.6)"
                        strokeWidth="0.8"
                      />
                      <text x="95" y="83" fontSize="6" fontFamily="serif" fill="rgba(31,26,20,0.8)" textAnchor="middle">
                        о. Хортиця
                      </text>
                      <circle cx="98" cy="78" r="2" fill="#7a1f1f" />
                      {/* Дніпро */}
                      <path
                        d="M0 75 Q40 70 80 75 T160 80 T200 75"
                        fill="none"
                        stroke="rgba(60, 80, 130, 0.45)"
                        strokeWidth="3"
                      />
                      <text x="20" y="68" fontSize="5" fontFamily="serif" fontStyle="italic" fill="rgba(60,80,130,0.7)">Дніпро</text>
                    </svg>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex flex-col items-center gap-3 rounded-md border border-sich-gold/30 bg-sich-cream/95 px-6 py-4 text-sich-ink shadow-md transition-transform group-hover:scale-105">
                        <MapPin className="size-6 text-sich-wine" />
                        <span className="font-serif text-base font-medium sm:text-lg">Показати мапу</span>
                        <span className="text-xs text-muted-foreground">
                          Інтерактивна Google Maps
                        </span>
                      </div>
                    </div>
                  </button>
                )}

                {/* Орнаменти у 4 кутах рамки */}
                <CornerOrnament className="absolute left-1 top-1 z-10" />
                <CornerOrnament className="absolute right-1 top-1 z-10 rotate-90" />
                <CornerOrnament className="absolute bottom-1 right-1 z-10 rotate-180" />
                <CornerOrnament className="absolute bottom-1 left-1 z-10 -rotate-90" />

                {/* Роза-вітрів у правому верхньому куті */}
                <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
                  <CompassRose />
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs italic text-sich-ink-soft sm:text-sm">
              Карта стилізована під старовинні козацькі мапи Запорозької Січі
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
