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
        "flex items-center gap-3 font-serif leading-none tracking-tight text-current",
        "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* Реальне фото козацької скульптури з подвір'я ресторану,
          у круглому золотому обрамленні */}
      <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sich-cream p-0.5 shadow-md ring-2 ring-sich-gold/60 sm:size-14">
        <span className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/images/gallery/cossack.jpg"
            alt=""
            fill
            sizes="56px"
            className="object-cover object-[center_30%]"
          />
        </span>
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
