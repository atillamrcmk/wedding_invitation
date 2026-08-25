"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, disabled, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex min-h-[44px] cursor-pointer items-center gap-3",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span className="relative inline-flex">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={inputId}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              "relative h-6 w-11 rounded-full bg-background-muted border border-border",
              "transition-colors duration-[var(--duration-ui)]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background",
              "peer-checked:bg-accent peer-checked:border-accent peer-checked:[&>span]:translate-x-5",
            )}
            aria-hidden="true"
          >
            <span
              className={cn(
                "absolute left-0.5 top-0.5 size-5 rounded-full bg-background-elevated shadow-sm",
                "transition-transform duration-[var(--duration-ui)]",
              )}
            />
          </span>
        </span>
        {label && (
          <span className="text-sm text-foreground select-none">{label}</span>
        )}
      </label>
    );
  },
);

Switch.displayName = "Switch";
