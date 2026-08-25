import { cn } from "@/lib/cn";
import { forwardRef, type TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, disabled, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

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
        <textarea
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          className={cn(
            "min-h-[120px] w-full resize-y rounded-md border bg-background-elevated px-4 py-3 text-sm text-foreground",
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
        {error && (
          <p className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
        {!error && hint && (
          <p className="text-sm text-foreground-muted">{hint}</p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
