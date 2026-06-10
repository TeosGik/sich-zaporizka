"use client";

import {
  Sandwich,
  Soup,
  Utensils,
  Flame,
  IceCream,
  Wine,
  Sparkles,
  Info,
  type LucideIcon,
} from "lucide-react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { menu, type Dish } from "@/content/menu";
import { cn } from "@/lib/utils";

/** Іконка + акцентний колір для кожної з 7 головних категорій */
const categoryMeta: Record<
  string,
  { Icon: LucideIcon; ringColor: string }
> = {
  appetizers: { Icon: Sandwich, ringColor: "ring-sich-gold/40" },
  "first-courses": { Icon: Soup, ringColor: "ring-sich-wine/40" },
  "main-courses": { Icon: Utensils, ringColor: "ring-sich-wine/40" },
  grill: { Icon: Flame, ringColor: "ring-orange-500/40" },
  desserts: { Icon: IceCream, ringColor: "ring-pink-400/40" },
  drinks: { Icon: Wine, ringColor: "ring-sich-grass/40" },
  banquet: { Icon: Sparkles, ringColor: "ring-sich-gold/40" },
};

function formatPrice(dish: Dish): string {
  if (dish.priceLarge !== undefined && dish.price !== null) {
    return `${dish.price} / ${dish.priceLarge} ₴`;
  }
  if (dish.priceBottle !== undefined) {
    if (dish.price === null) {
      return `пляшка ${dish.priceBottle} ₴`;
    }
    return `${dish.price} / ${dish.priceBottle} ₴`;
  }
  if (dish.price !== null) {
    return `${dish.price} ₴`;
  }
  return "за запитом";
}

export function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="bg-sich-cream-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sich-gold">
            Меню
          </p>
          <h2
            id="menu-title"
            className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Що подаємо
          </h2>
          <p className="mt-4 text-base text-sich-ink-soft sm:text-lg">
            Понад 300 позицій української кухні. На відкритому вогні, у глиняних
            печах, з продуктів від місцевих господарств.
          </p>
        </header>

        <Tabs defaultValue={menu[0].id} className="flex-col items-center">
          {/* ─── Tab list з краєвим градієнтом для mobile horizontal scroll ── */}
          <div className="relative -mx-4 mb-10 sm:mx-0 sm:mb-12">
            {/* Edge fade-маски (тільки на mobile) для індикації scroll */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-sich-cream-soft to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-sich-cream-soft to-transparent sm:hidden" />

            <div className="overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-0">
              <TabsList className="mx-auto inline-flex h-auto flex-nowrap gap-1 rounded-full border border-sich-gold/20 bg-background p-1.5 shadow-sm">
                {menu.map((cat) => {
                  const Icon = categoryMeta[cat.id]?.Icon;
                  return (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className={cn(
                        "h-11 gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all duration-200 sm:px-5 sm:text-base",
                        "data-active:!bg-sich-wine data-active:!text-sich-cream data-active:!shadow-md",
                      )}
                    >
                      {Icon && <Icon aria-hidden="true" className="size-4" />}
                      <span>{cat.name}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </div>

          {menu.map((cat) => {
            const Icon = categoryMeta[cat.id]?.Icon;
            return (
              <TabsContent key={cat.id} value={cat.id} className="w-full">
                <div className="space-y-6 sm:space-y-8">
                  {cat.subCategories.map((sub, subIndex) => (
                    <section
                      key={sub.id}
                      aria-labelledby={`sub-${sub.id}`}
                      className={cn(
                        "overflow-hidden rounded-xl border border-sich-gold/15 shadow-sm transition-shadow hover:shadow-md",
                        // Чергуємо тон фону для розділення
                        subIndex % 2 === 0
                          ? "bg-background"
                          : "bg-sich-cream/50",
                      )}
                    >
                      {/* ─── Заголовок підкатегорії ──────────────────── */}
                      <header className="flex items-center gap-3 border-b border-sich-gold/20 bg-gradient-to-r from-sich-gold/8 to-transparent px-5 py-4 sm:gap-4 sm:px-7 sm:py-5">
                        <span
                          aria-hidden="true"
                          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sich-wine/10 text-sich-wine sm:size-10"
                        >
                          {Icon && <Icon className="size-4 sm:size-5" />}
                        </span>
                        <h3
                          id={`sub-${sub.id}`}
                          className="font-serif text-xl leading-tight text-sich-ink sm:text-2xl"
                        >
                          {sub.title}
                        </h3>
                      </header>

                      {/* ─── Список страв ────────────────────────────── */}
                      <ul className="divide-y divide-sich-gold/10">
                        {sub.dishes.map((dish, i) => (
                          <li
                            key={`${sub.id}-${i}`}
                            className={cn(
                              "grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5 px-5 py-3.5 transition-colors hover:bg-sich-gold/[0.04] sm:px-7 sm:py-4",
                              dish.highlight && "bg-sich-gold/[0.06]",
                            )}
                          >
                            <h4 className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5 break-words font-serif text-base leading-tight text-sich-ink sm:text-lg">
                              <span>{dish.name}</span>
                              {dish.weight && (
                                <span className="text-xs font-normal text-muted-foreground sm:text-sm">
                                  · {dish.weight} г
                                </span>
                              )}
                              {dish.highlight && (
                                <span className="inline-flex items-center rounded-full bg-sich-wine/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-sich-wine">
                                  Хіт
                                </span>
                              )}
                            </h4>
                            <span className="self-start whitespace-nowrap font-serif text-base font-semibold text-sich-wine sm:text-lg">
                              {formatPrice(dish)}
                            </span>
                            {dish.desc && (
                              <p className="col-span-2 -mt-1 text-sm leading-snug text-sich-ink-soft">
                                {dish.desc}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* ─── Сервісний збір ────────────────────────────────────── */}
        <aside
          aria-labelledby="service-charge-title"
          className="mx-auto mt-12 max-w-3xl rounded-xl border border-sich-gold/30 bg-sich-cream/70 p-6 shadow-sm sm:mt-16 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sich-wine/10 text-sich-wine sm:size-12"
            >
              <Info className="size-5 sm:size-6" />
            </span>
            <div className="min-w-0">
              <h3
                id="service-charge-title"
                className="font-serif text-lg font-semibold text-sich-ink sm:text-xl"
              >
                Шановні гості!
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sich-ink-soft sm:text-base">
                До рахунку додається плата за обслуговування:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="shrink-0">🌿</span>
                  <span>
                    <strong className="font-semibold text-sich-wine">5%</strong>
                    {" "}— за обслуговування в будь-якій локації ресторану
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="shrink-0">🌿</span>
                  <span>
                    <strong className="font-semibold text-sich-wine">10%</strong>
                    {" "}— за обслуговування в альтанках
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic leading-relaxed text-sich-ink-soft sm:text-base">
                Плата за обслуговування спрямовується на підтримку команди,
                яка дбала про Ваш відпочинок і працювала над Вашим замовленням.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-sich-ink-soft sm:text-base">
                Дякуємо, що обираєте «Запорозьку Січ». Нам приємно бути
                гостинними для Вас! 🌲
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
