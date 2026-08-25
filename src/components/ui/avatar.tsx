import { cn } from "@/lib/cn";
import Image from "next/image";
import type { HTMLAttributes } from "react";

const sizes = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-base",
} as const;

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: keyof typeof sizes;
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Avatar({
  className,
  src,
  alt,
  name = "",
  size = "md",
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "bg-accent-subtle text-accent font-medium",
        sizes[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? name}
          fill
          className="object-cover"
          sizes="56px"
        />
      ) : (
        <span aria-hidden="true">{getInitials(name) || "?"}</span>
      )}
    </div>
  );
}
