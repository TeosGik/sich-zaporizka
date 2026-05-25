"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { buttonVariants } from "@/components/ui/button";
import { contacts } from "@/content/contacts";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50 text-foreground"
          : "bg-transparent text-sich-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Основне меню"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contacts.phoneHref}
            aria-label="Забронювати столик"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "hidden sm:inline-flex bg-sich-wine text-sich-cream hover:bg-sich-wine-deep",
            )}
          >
            <Phone aria-hidden="true" className="size-4" />
            Забронювати
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
