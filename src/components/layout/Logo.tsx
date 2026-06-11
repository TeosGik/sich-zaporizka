import Image from "next/image";
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
        "flex items-center gap-2.5 font-serif leading-none tracking-tight text-current sm:gap-3",
        "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* Круглий аватар з козаком — видно при скролі */}
      <span
        aria-hidden="true"
        className="relative size-9 shrink-0 overflow-hidden rounded-full border border-sich-gold/30 bg-sich-cream shadow-sm sm:size-10"
      >
        <Image
          src="/images/gallery/cossack.jpg"
          alt=""
          fill
          sizes="40px"
          className="object-cover object-[center_top]"
        />
      </span>

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
