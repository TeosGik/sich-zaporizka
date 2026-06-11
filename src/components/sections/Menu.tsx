"use client";

import {
  Sandwich,
  Soup,
  Utensils,
  Flame,
  IceCream,
  Wine,
  Sparkles,
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
            Понад 300 позицій української кухні. На відкритому вогні,
            з продуктів від місцевих господарств.
          </p>
        </header>

        <Tabs defaultValue={menu[0].id} className="flex-col items-center">
          {/* ─── Tab list: 2-3 рядки на mobile, single row pill на desktop ── */}
          <div className="mb-10 sm:mb-12 sm:flex sm:justify-center">
            <TabsList className="flex h-auto w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-sich-gold/20 bg-background p-2 shadow-sm sm:w-max sm:flex-nowrap sm:gap-1 sm:rounded-full sm:p-1.5">
                {menu.map((cat) => {
                  const Icon = categoryMeta[cat.id]?.Icon;
                  return (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className={cn(
                        "h-9 gap-1.5 whitespace-nowrap rounded-full px-3 text-xs font-medium transition-all duration-200 sm:h-11 sm:gap-2 sm:px-5 sm:text-base",
                        "data-active:!bg-sich-wine data-active:!text-sich-cream data-active:!shadow-md",
                      )}
                    >
                      {Icon && <Icon aria-hidden="true" className="size-3.5 sm:size-4" />}
                      <span>{cat.name}</span>
                    </TabsTrigger>
                  );
                })}
            </TabsList>
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

        {/* ─── Плата за обслуговування (делікатна примітка) ──────── */}
        <aside
          aria-labelledby="service-note-title"
          className="mx-auto mt-10 max-w-2xl rounded-lg border border-sich-gold/20 bg-sich-cream/40 p-5 sm:mt-14 sm:p-6"
        >
          <p
            id="service-note-title"
            className="text-xs font-medium uppercase tracking-[0.2em] text-sich-gold"
          >
            До відома гостей
          </p>
          <p className="mt-2 text-sm leading-relaxed text-sich-ink-soft sm:text-base">
            До рахунку додається плата за обслуговування —{" "}
            <strong className="font-semibold text-sich-wine">5%</strong> у
            будь-якій локації ресторану, або{" "}
            <strong className="font-semibold text-sich-wine">10%</strong> в
            альтанках. Кошти йдуть нашій команді, яка дбала про Ваш відпочинок.
          </p>
          <p className="mt-3 text-sm italic leading-relaxed text-sich-ink-soft sm:text-base">
            Дякуємо, що обираєте «Запорозьку Січ». 🌲
          </p>
        </aside>
      </div>
    </section>
  );
}
