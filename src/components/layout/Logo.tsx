import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CossackIcon } from "@/components/icons/CossackIcon";

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
        "flex items-center gap-3 font-serif leading-none tracking-tight text-current",
        "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* Кастомний козак-логотип у крузі */}
      <CossackIcon className="size-11 shrink-0 drop-shadow-sm sm:size-12" />

      {variant === "compact" ? (
        <span className="text-xl font-semibold">ЗС</span>
      ) : (
        <span className="flex flex-col">
          <span className="text-lg font-semibold sm:text-xl">
            Запорозька Січ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 sm:text-[11px] sm:tracking-[0.25em]">
            ресторан · о. Хортиця
          </span>
        </span>
      )}
    </Link>
  );
}
