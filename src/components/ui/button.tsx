import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export const buttonVariants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/95",
  secondary:
    "bg-background-elevated text-foreground border border-border hover:bg-background-muted active:bg-background-muted",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-background-muted active:bg-background-muted",
  ghost:
    "bg-transparent text-foreground hover:bg-background-muted active:bg-background-muted",
  accent:
    "bg-accent text-background-elevated hover:bg-accent/90 active:bg-accent/95",
} as const;

export const buttonSizes = {
  sm: "h-9 px-3.5 text-sm gap-1.5 min-w-[44px]",
  md: "h-11 px-5 text-sm gap-2 min-w-[44px]",
  lg: "h-12 px-6 text-base gap-2 min-w-[44px]",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export function buttonClassName({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-medium",
    "transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)]",
    "disabled:pointer-events-none disabled:opacity-50",
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && "w-full",
    className,
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const classes = buttonClassName({ variant, size, fullWidth, className });

    if (href && !disabled && !isLoading) {
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:");

      if (isExternal) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={classes}
        {...props}
      >
        {isLoading && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
