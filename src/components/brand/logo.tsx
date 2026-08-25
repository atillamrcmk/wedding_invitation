import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "text-sm tracking-[0.35em]",
  md: "text-base tracking-[0.4em]",
  lg: "text-xl tracking-[0.45em]",
};

export function Logo({ className, href = "/", size = "md" }: LogoProps) {
  const content = (
    <span
      className={cn(
        "font-serif font-normal uppercase text-foreground select-none",
        sizeClasses[size],
        className,
      )}
      aria-label="VOWA"
    >
      VOWA
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
