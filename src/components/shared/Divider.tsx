import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  variant?: "light" | "dark";
};

// Типографічний вензель-розділювач між секціями. SVG, нуль зображень.
export function Divider({ className, variant = "dark" }: DividerProps) {
  const color = variant === "light" ? "text-sich-cream/40" : "text-sich-ink/25";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "mx-auto flex w-full max-w-2xl items-center gap-4 px-4",
        color,
        className,
      )}
    >
      <span className="h-px flex-1 bg-current" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 shrink-0"
      >
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
      </svg>
      <span className="h-px flex-1 bg-current" />
    </div>
  );
}
