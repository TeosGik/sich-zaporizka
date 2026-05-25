"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { menu } from "@/content/menu";
import { cn } from "@/lib/utils";

export function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="bg-sich-cream-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
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
            Чесні смаки української кухні. На відкритому вогні, у глиняних
            печах, з продуктів від місцевих господарств.
          </p>
        </header>

        <Tabs defaultValue={menu[0].id} className="flex-col items-center">
          {/* Скролимий ряд табів на mobile */}
          <div className="-mx-4 mb-10 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <TabsList className="mx-auto inline-flex h-auto flex-nowrap bg-background p-1.5">
              {menu.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="h-10 whitespace-nowrap px-4 text-sm sm:text-base"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menu.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="w-full">
              <ul className="grid divide-y divide-border/50 sm:divide-y-0 sm:gap-y-2">
                {cat.dishes.map((dish) => (
                  <li
                    key={dish.id}
                    className={cn(
                      "grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-5 sm:rounded-lg sm:px-5",
                      dish.highlight && "sm:bg-card sm:shadow-sm",
                    )}
                  >
                    <h3 className="font-serif text-xl leading-tight sm:text-2xl">
                      {dish.name}
                      {dish.highlight && (
                        <span className="ml-2 align-middle text-xs font-medium uppercase tracking-wider text-sich-gold">
                          · хіт
                        </span>
                      )}
                    </h3>
                    <span className="self-start font-serif text-lg font-medium text-sich-wine sm:text-xl">
                      {dish.price} ₴
                    </span>
                    <p className="col-span-2 text-sm leading-relaxed text-sich-ink-soft sm:text-base">
                      {dish.description}
                    </p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
