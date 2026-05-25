"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { TelegramIcon } from "@/components/icons/SocialIcons";
import { contacts } from "@/content/contacts";
import { cn } from "@/lib/utils";

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Показуємо тільки після того, як користувач прокрутив повз hero (≈100vh)
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border/40 bg-background/95 backdrop-blur-md shadow-[0_-2px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full pointer-events-none",
      )}
    >
      <div className="grid grid-cols-2 gap-px bg-border/40">
        <a
          href={contacts.phoneHref}
          className="flex items-center justify-center gap-2 bg-sich-wine py-4 font-medium text-sich-cream"
        >
          <Phone aria-hidden="true" className="size-4" />
          Подзвонити
        </a>
        <a
          href={contacts.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-background py-4 font-medium text-foreground"
        >
          <TelegramIcon className="size-4" />
          Telegram
        </a>
      </div>
    </div>
  );
}
