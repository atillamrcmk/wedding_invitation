import { cn } from "@/lib/cn";

type PhotoTone = "warm" | "cool" | "dusk" | "garden" | "soft";

const tones: Record<PhotoTone, string> = {
  warm: "from-[#c4a882]/40 via-[#8b6b5a]/55 to-[#3d2c28]/80",
  cool: "from-[#a8b5b0]/35 via-[#6b7a75]/50 to-[#2a3330]/75",
  dusk: "from-[#b8898a]/40 via-[#6b3a3a]/55 to-[#1a1212]/80",
  garden: "from-[#9cb89a]/35 via-[#5a7a58]/50 to-[#1e2a1d]/75",
  soft: "from-[#ebe4dc]/50 via-[#c4a882]/40 to-[#6b6560]/70",
};

type PlaceholderPhotoProps = {
  tone?: PhotoTone;
  className?: string;
  label?: string;
  children?: React.ReactNode;
};

/** Local editorial placeholder — no remote image dependency. */
export function PlaceholderPhoto({
  tone = "warm",
  className,
  label,
  children,
}: PlaceholderPhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background-muted",
        className,
      )}
      role="img"
      aria-label={label ?? "Düğün görseli"}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          tones[tone],
        )}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.2), transparent 45%)",
        }}
      />
      {children}
    </div>
  );
}
