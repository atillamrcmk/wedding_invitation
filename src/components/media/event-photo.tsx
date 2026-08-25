import { cn } from "@/lib/cn";
import Image from "next/image";

type EventPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: "none" | "soft" | "strong" | "bottom" | "cinematic" | "vignette";
  objectPosition?: string;
  /** cover kırpar; contain/natural orijinal oranı korur */
  fit?: "cover" | "contain" | "natural";
  children?: React.ReactNode;
};

const overlays = {
  none: "",
  soft: "after:absolute after:inset-0 after:bg-black/30 after:content-['']",
  strong: "after:absolute after:inset-0 after:bg-black/45 after:content-['']",
  bottom:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/70 after:via-black/20 after:to-black/10 after:content-['']",
  cinematic:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:via-black/35 after:to-black/15 after:content-['']",
  vignette:
    "after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] after:content-['']",
} as const;

export function EventPhoto({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 720px",
  overlay = "none",
  objectPosition = "center",
  fit = "natural",
  children,
}: EventPhotoProps) {
  if (fit === "natural") {
    return (
      <div
        className={cn(
          "relative w-full bg-black",
          overlays[overlay],
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
        />
        {children && (
          <div className="pointer-events-none absolute inset-0 z-10 [&>*]:pointer-events-auto">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black",
        overlays[overlay],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition }}
      />
      {children && (
        <div className="pointer-events-none absolute inset-0 z-10 [&>*]:pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
}
