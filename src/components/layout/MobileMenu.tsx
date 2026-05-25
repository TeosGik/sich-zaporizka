"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { contacts } from "@/content/contacts";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Відкрити меню"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon-lg" }),
          "lg:hidden text-current hover:bg-current/10",
        )}
      >
        <Menu aria-hidden="true" className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm bg-background text-foreground p-0 flex flex-col"
      >
        <SheetHeader className="border-b border-border/40 px-6 py-4 flex flex-row items-center justify-between">
          <SheetTitle className="font-serif text-2xl">
            Запорозька Січ
          </SheetTitle>
        </SheetHeader>

        <nav
          className="flex-1 px-6 py-8"
          aria-label="Мобільне меню"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-3 font-serif text-2xl font-medium transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border/40 px-6 py-6 space-y-3">
          <a
            href={contacts.phoneHref}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full bg-sich-wine text-sich-cream hover:bg-sich-wine-deep",
            )}
          >
            <Phone aria-hidden="true" className="size-4" />
            Забронювати столик
          </a>
          <p className="text-center text-sm text-muted-foreground">
            {contacts.hours.label}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
