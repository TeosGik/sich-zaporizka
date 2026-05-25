import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden text-sich-cream"
    >
      {/* ─── Фонове фото з затемненням ─────────────────────────────── */}
      <Image
        src="/images/hero/main.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      {/* Темний overlay для читабельності тексту */}
      <div className="absolute inset-0 -z-10 bg-sich-ink/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sich-ink/20 via-transparent to-sich-ink/70" />

      {/* ─── Контент ──────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-sich-cream/70">
          о. Хортиця · Запоріжжя
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl italic text-sich-cream/85 sm:text-2xl md:text-3xl">
          {siteConfig.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sich-cream/70 sm:text-lg">
          Козацька кухня, домашні медовухи, степова душа. Місце, куди приїздять
          за смаком і залишаються за атмосферою.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={contacts.phoneHref}
            aria-label="Забронювати столик за телефоном"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 px-8 text-base bg-sich-wine text-sich-cream hover:bg-sich-wine-deep",
            )}
          >
            <Phone aria-hidden="true" className="size-4" />
            Забронювати столик
          </a>
          <Link
            href="#menu"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 px-8 text-base border-sich-cream/40 bg-transparent text-sich-cream hover:bg-sich-cream/10 hover:text-sich-cream",
            )}
          >
            Подивитись меню
          </Link>
        </div>
      </div>

      {/* ─── Scroll-down indicator ──────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          aria-hidden="true"
          className="flex h-10 w-6 items-start justify-center rounded-full border border-sich-cream/40 p-1.5"
        >
          <span className="scroll-indicator h-1.5 w-0.5 rounded-full bg-sich-cream/70" />
        </div>
      </div>
    </section>
  );
}
