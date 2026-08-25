"use client";

import { cn } from "@/lib/cn";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useId, useState, type InputHTMLAttributes } from "react";
import { IconButton } from "./icon-button";

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  hint?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, hint, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const [visible, setVisible] = useState(false);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={visible ? "text" : "password"}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              "h-11 w-full rounded-md border bg-background-elevated px-4 pr-12 text-sm text-foreground",
              "placeholder:text-foreground-muted",
              "transition-colors duration-[var(--duration-ui)]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              error
                ? "border-error focus-visible:ring-error"
                : "border-border hover:border-border-strong",
              disabled && "cursor-not-allowed opacity-50",
              className,
            )}
            {...props}
          />
          <IconButton
            type="button"
            label={visible ? "Şifreyi gizle" : "Şifreyi göster"}
            size="sm"
            disabled={disabled}
            onClick={() => setVisible((v) => !v)}
            className="absolute right-1 top-1/2 -translate-y-1/2"
          >
            {visible ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </IconButton>
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={`${inputId}-hint`} className="text-sm text-foreground-muted">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
