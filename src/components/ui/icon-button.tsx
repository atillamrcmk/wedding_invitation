"use client";

import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const sizes = {
  sm: "size-9 min-w-[44px] min-h-[44px]",
  md: "size-11 min-w-[44px] min-h-[44px]",
  lg: "size-12 min-w-[44px] min-h-[44px]",
} as const;

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes;
  isLoading?: boolean;
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, size = "md", isLoading = false, disabled, label, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-md",
          "text-foreground-secondary hover:text-foreground hover:bg-background-muted",
          "transition-colors duration-[var(--duration-ui)]",
          "disabled:pointer-events-none disabled:opacity-50",
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          children
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
