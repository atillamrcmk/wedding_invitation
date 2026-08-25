"use client";

import { EventPhoto } from "@/components/media/event-photo";
import { DEMO_PHOTOS } from "@/lib/demo/photos";
import { cn } from "@/lib/cn";
import { useRef, useState } from "react";

const SLIDES = Object.values(DEMO_PHOTOS);

export function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(index);
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="invitation-carousel -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8"
        onScroll={(e) => {
          const track = e.currentTarget;
          const slide = track.querySelector<HTMLElement>(".invitation-carousel-slide");
          const slideWidth = slide?.offsetWidth ?? track.offsetWidth * 0.88;
          const index = Math.round(track.scrollLeft / (slideWidth + 24));
          setActive(Math.min(SLIDES.length - 1, Math.max(0, index)));
        }}
      >
        {SLIDES.map((photo, i) => (
          <div
            key={photo.src}
            className="invitation-carousel-slide w-[88vw] max-w-md shrink-0 snap-center"
          >
            <EventPhoto
              src={photo.src}
              alt={photo.alt}
              fit="natural"
              className="rounded-sm"
              sizes="88vw"
            />
            <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.22em] text-foreground-muted">
              {String(i + 1).padStart(2, "0")} · Anı
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {SLIDES.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Slayt ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === i
                ? "w-8 bg-accent-champagne"
                : "w-1.5 bg-foreground-muted/40 hover:bg-foreground-muted",
            )}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-xs tabular-nums text-foreground-muted">
        {active + 1} / {SLIDES.length}
      </p>
    </div>
  );
}
