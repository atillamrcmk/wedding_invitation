import { cn } from "@/lib/cn";

type CoupleNamesProps = {
  partner1: string;
  partner2: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  variant?: "stacked" | "inline" | "on-photo";
};

const sizes = {
  sm: "text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl lg:text-6xl",
  hero: "text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem]",
};

export function CoupleNames({
  partner1,
  partner2,
  className,
  size = "hero",
  variant = "stacked",
}: CoupleNamesProps) {
  if (variant === "inline") {
    return (
      <h1
        className={cn(
          "text-display text-center font-normal tracking-tight",
          sizes[size],
          className,
        )}
      >
        <span className="uppercase">{partner1}</span>
        <span className="mx-3 font-sans text-[0.42em] font-light tracking-[0.4em] text-current/60">
          &
        </span>
        <span className="uppercase">{partner2}</span>
      </h1>
    );
  }

  if (variant === "on-photo") {
    return (
      <h1
        className={cn(
          "text-display text-center font-normal tracking-[0.04em]",
          sizes[size],
          "text-[#FAF9F6] [text-shadow:0_2px_28px_rgb(0_0_0_/_0.45)]",
          className,
        )}
      >
        <span className="block uppercase">{partner1}</span>
        <span className="my-2 block font-sans text-[0.38em] font-light tracking-[0.55em] text-[#FAF9F6]/75">
          &
        </span>
        <span className="block uppercase">{partner2}</span>
      </h1>
    );
  }

  return (
    <h1
      className={cn(
        "text-display text-center font-normal leading-[1.05] tracking-tight",
        sizes[size],
        className,
      )}
    >
      <span className="block uppercase">{partner1}</span>
      <span className="my-1 block font-sans text-[0.45em] font-light tracking-[0.35em] text-current/70">
        &
      </span>
      <span className="block uppercase">{partner2}</span>
    </h1>
  );
}
