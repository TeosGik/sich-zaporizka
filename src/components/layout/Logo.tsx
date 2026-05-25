import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "compact";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={cn(
        "font-serif leading-none tracking-tight text-current",
        "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {variant === "compact" ? (
        <span className="text-2xl font-semibold">ЗС</span>
      ) : (
        <span className="flex flex-col">
          <span className="text-xl font-semibold sm:text-2xl">
            Запорозька Січ
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
            ресторан · о. Хортиця
          </span>
        </span>
      )}
    </Link>
  );
}
