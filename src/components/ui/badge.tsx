import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const variants = {
  default: "bg-background-muted text-foreground-secondary",
  accent: "bg-accent-subtle text-accent",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
  outline: "border border-border bg-transparent text-foreground-secondary",
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
