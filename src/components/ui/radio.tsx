"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            id={inputId}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              "flex size-5 items-center justify-center rounded-full border border-border",
              "transition-colors duration-[var(--duration-ui)]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background",
              "peer-checked:border-accent peer-checked:[&>span]:opacity-100",
              "peer-disabled:cursor-not-allowed",
            )}
            aria-hidden="true"
          >
            <span className="size-2.5 rounded-full bg-accent opacity-0 transition-opacity" />
          </span>
        </span>
        {label && (
          <span className="text-sm text-foreground select-none">{label}</span>
        )}
      </label>
    );
  },
);

Radio.displayName = "Radio";
