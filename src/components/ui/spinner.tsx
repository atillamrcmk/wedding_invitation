import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";

type SpinnerProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizes = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
};

export function Spinner({
  className,
  size = "md",
  label = "Yükleniyor",
}: SpinnerProps) {
  return (
    <Loader2
      className={cn("animate-spin text-foreground-secondary", sizes[size], className)}
      aria-label={label}
      role="status"
    />
  );
}
