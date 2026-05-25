import { Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { TelegramIcon } from "@/components/icons/SocialIcons";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

export function CtaBlock() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-sich-wine text-sich-cream"
    >
      {/* Декоративний фон */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at top left, rgba(184, 137, 61, 0.25), transparent 55%),
            radial-gradient(ellipse at bottom right, rgba(31, 26, 20, 0.6), transparent 60%)
          `,
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-sich-cream/70">
          Бронювання
        </p>
        <h2
          id="cta-title"
          className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl"
        >
          Завітайте до Січі
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sich-cream/80 sm:text-lg">
          Оберіть зручний спосіб звʼязку — відповідаємо в робочі години
          щонайбільше за 15 хвилин.
        </p>

        <div className="mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
          <a
            href={contacts.phoneHref}
            aria-label="Подзвонити в ресторан"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-14 bg-sich-cream text-sich-wine text-base hover:bg-sich-cream/90",
            )}
          >
            <Phone aria-hidden="true" className="size-5" />
            Подзвонити
          </a>
          <a
            href={contacts.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написати в Telegram"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 border-sich-cream/40 bg-transparent text-base text-sich-cream hover:bg-sich-cream/10 hover:text-sich-cream",
            )}
          >
            <TelegramIcon className="size-5" />
            Telegram
          </a>
          <a
            href={contacts.viber.url}
            aria-label="Написати у Viber"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 border-sich-cream/40 bg-transparent text-base text-sich-cream hover:bg-sich-cream/10 hover:text-sich-cream",
            )}
          >
            Viber
          </a>
        </div>

        <p className="mt-8 text-sm text-sich-cream/60">
          {contacts.hours.label} · {contacts.address.short}
        </p>
      </div>
    </section>
  );
}
