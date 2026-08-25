import { Button } from "@/components/ui/button";
import { EventPhoto } from "@/components/media/event-photo";
import { CoupleNames } from "@/components/wedding/couple-names";
import { cn } from "@/lib/cn";

type PhotoAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type InvitationHeroProps = {
  photo: PhotoAsset;
  partner1: string;
  partner2: string;
  dateLabel: string;
  venueLine?: string;
  subtitle?: string;
  scrollCue?: string;
  priority?: boolean;
  letterbox?: boolean;
  className?: string;
  children?: React.ReactNode;
  onOpen?: () => void;
  openLabel?: string;
};

export function InvitationHero({
  photo,
  partner1,
  partner2,
  dateLabel,
  venueLine,
  subtitle,
  scrollCue = "Hikayemizi keşfedin",
  priority = false,
  letterbox = true,
  className,
  children,
  onOpen,
  openLabel = "Davetiyeyi keşfet",
}: InvitationHeroProps) {
  return (
    <section
      className={cn(
        "invitation-letterbox relative flex min-h-dvh flex-col overflow-hidden bg-black",
        !letterbox &&
          "[&::before]:hidden [&::after]:hidden",
        className,
      )}
    >
      {/* Orijinal oran — kırpma yok */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <div className="invitation-ken-burns relative h-full w-full max-h-dvh">
          <EventPhoto
            src={photo.src}
            alt={photo.alt}
            priority={priority}
            overlay="cinematic"
            fit="natural"
            className="flex h-full max-h-dvh w-full items-center justify-center"
            sizes="100vw"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <div className="flex flex-1 flex-col items-center justify-end px-6 pb-16 pt-28 text-center md:px-10 md:pb-20">
          <p className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.38em] text-[#FAF9F6]/60 md:text-xs">
            {dateLabel}
          </p>

          <CoupleNames
            partner1={partner1}
            partner2={partner2}
            variant="on-photo"
            size="hero"
          />

          {venueLine && (
            <p className="mt-5 text-[0.7rem] uppercase tracking-[0.22em] text-[#FAF9F6]/55">
              {venueLine}
            </p>
          )}

          {subtitle && (
            <p className="text-editorial mx-auto mt-8 max-w-sm text-lg leading-relaxed text-[#FAF9F6]/80 md:max-w-md md:text-xl">
              {subtitle}
            </p>
          )}

          {onOpen && (
            <Button
              size="lg"
              onClick={onOpen}
              className="mt-10 min-w-[240px] border border-[#FAF9F6]/20 bg-white/10 text-[#FAF9F6] shadow-[0_0_40px_-10px_rgba(201,173,130,0.35)] backdrop-blur-md hover:bg-white/15"
            >
              {openLabel}
            </Button>
          )}

          {children}
        </div>

        {!onOpen && scrollCue && (
          <div className="flex flex-col items-center gap-3 pb-10">
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-[#FAF9F6]/45">
              {scrollCue}
            </p>
            <div className="relative h-10 w-px overflow-hidden bg-[#FAF9F6]/15">
              <span className="invitation-scroll-dot absolute left-0 top-0 size-1 -translate-x-[1.5px] rounded-full bg-accent-champagne" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
