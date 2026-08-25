"use client";

import { Button } from "@/components/ui/button";
import { CinematicCountdown } from "@/components/wedding/cinematic-countdown";
import { CinematicNav } from "@/components/wedding/cinematic-nav";
import { GiftSection } from "@/components/wedding/gift-section";
import { InvitationHero } from "@/components/wedding/invitation-hero";
import { MusicToggle } from "@/components/wedding/music-toggle";
import { PhotoCarousel } from "@/components/wedding/photo-carousel";
import { RsvpForm } from "@/components/wedding/rsvp-form";
import { ScheduleScenes } from "@/components/wedding/schedule-scenes";
import { SectionReveal } from "@/components/wedding/section-reveal";
import { StoryTimeline } from "@/components/wedding/story-timeline";
import { DEMO_EVENT, type DemoGuest } from "@/lib/demo/event";
import { DEMO_PHOTOS } from "@/lib/demo/photos";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type InvitationExperienceProps = {
  guest?: DemoGuest | null;
  compact?: boolean;
};

export function InvitationExperience({
  guest,
  compact = false,
}: InvitationExperienceProps) {
  const event = DEMO_EVENT;
  const [opened, setOpened] = useState(compact);
  const [entering, setEntering] = useState(false);
  const monogram = `${event.partner1[0]}${event.partner2[0]}`.toUpperCase();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  function handleOpen() {
    setEntering(true);
    window.setTimeout(() => {
      setOpened(true);
      setEntering(false);
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 700);
  }

  if (!opened) {
    return (
      <div className={cn("invitation-cinematic relative min-h-dvh", entering && "opacity-0 transition-opacity duration-700")}>
        <InvitationHero
          photo={DEMO_PHOTOS.beach}
          partner1={event.partner1}
          partner2={event.partner2}
          dateLabel={event.dateLabel}
          venueLine={event.venue.name}
          subtitle={event.introNarrative}
          priority
          onOpen={handleOpen}
          openLabel="Davetiyeyi keşfet"
        />
        <MusicToggle src={event.music.src} />
      </div>
    );
  }

  return (
    <div className="invitation-cinematic invitation-enter min-h-dvh">
      <CinematicNav coupleLabel={`${event.partner1} & ${event.partner2}`} />
      <MusicToggle src={event.music.src} autoStart />

      {/* Hero */}
      <InvitationHero
        photo={DEMO_PHOTOS.graduation}
        partner1={event.partner1}
        partner2={event.partner2}
        dateLabel={event.dateLabel}
        venueLine={`${event.venue.name} · ${event.venue.city}`}
        subtitle={event.coverSubtitle}
        scrollCue="Aşağı kaydırın"
        letterbox
      />

      {/* Countdown */}
      <section className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="invitation-gold-line mx-auto mb-12 max-w-xs" />
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent-champagne">
              Geri sayım
            </p>
            <h2 className="text-display mt-4 text-3xl text-foreground md:text-4xl">
              O güne kalan süre
            </h2>
            <div className="mt-12">
              <CinematicCountdown
                targetDate={event.date}
                targetTime={event.time}
              />
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Greeting */}
      <section className="border-y border-border/60 bg-background-muted/30 px-5 py-20 md:px-8 md:py-28">
        <SectionReveal>
          <div className="mx-auto max-w-xl text-center">
            {guest && (
              <p className="text-editorial text-xl text-accent-champagne md:text-2xl">
                Sevgili {guest.displayName},
              </p>
            )}
            <p
              className={cn(
                "text-editorial text-xl leading-relaxed text-foreground-secondary md:text-2xl",
                guest && "mt-5",
              )}
            >
              {event.greeting}
            </p>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-foreground-muted">
              {event.storyIntro}
            </p>
            <div className="mx-auto mt-10 flex size-14 items-center justify-center rounded-full border border-accent-champagne/30 font-serif text-sm text-accent-champagne">
              {monogram}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Story */}
      <section id="story" className="scroll-mt-8 px-5 py-20 md:px-8 md:py-32">
        <SectionReveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent-champagne">
              Bölüm I
            </p>
            <h2 className="text-display mt-4 text-4xl text-foreground md:text-5xl">
              Hikâyemiz
            </h2>
          </div>
        </SectionReveal>
        <StoryTimeline items={event.story} monogram={monogram} />
      </section>

      {/* Event + Schedule */}
      <section
        id="event"
        className="scroll-mt-8 border-t border-border/60 bg-background-muted/20 px-5 py-20 md:px-8 md:py-32"
      >
        <SectionReveal>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent-champagne">
              Bölüm II
            </p>
            <h2 className="text-display mt-4 text-4xl text-foreground md:text-5xl">
              Düğün
            </h2>
            <p className="mt-5 text-sm text-foreground-secondary">
              {event.dateLabel} · {event.time}
            </p>
          </div>
        </SectionReveal>

        <ScheduleScenes
          items={event.schedule}
          venueName={event.venue.name}
          venueCity={event.venue.city}
        />

        <SectionReveal className="mt-14">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="outline"
              href={event.venue.mapsUrl}
              className="min-w-[180px] border-border/80 bg-transparent text-foreground hover:bg-background-muted"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Yol tarifi
            </Button>
            <Button
              variant="outline"
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${event.partner1} & ${event.partner2} Düğünü`)}&dates=20270817T150000Z/20270817T210000Z&location=${encodeURIComponent(event.venue.name)}`}
              className="min-w-[180px] border-border/80 bg-transparent text-foreground hover:bg-background-muted"
            >
              <Calendar className="size-4" aria-hidden="true" />
              Takvime ekle
            </Button>
          </div>
        </SectionReveal>
      </section>

      {/* Gallery carousel */}
      <section id="gallery" className="scroll-mt-8 px-5 py-20 md:px-8 md:py-32">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-accent-champagne">
              Bölüm III
            </p>
            <h2 className="text-display mt-4 text-4xl text-foreground md:text-5xl">
              Anılar
            </h2>
          </div>
        </SectionReveal>
        <PhotoCarousel />
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="scroll-mt-8 border-t border-border/60 px-5 py-20 md:px-8 md:py-32"
      >
        <SectionReveal>
          <div className="mx-auto max-w-md">
            <p className="mb-8 text-center text-[0.65rem] uppercase tracking-[0.32em] text-accent-champagne">
              Bölüm IV
            </p>
            <RsvpForm guestName={guest?.displayName} />
          </div>
        </SectionReveal>
      </section>

      <GiftSection />

      <section className="px-5 pb-32 pt-12 text-center md:px-8">
        <div className="invitation-gold-line mx-auto mb-12 max-w-xs" />
        <p className="text-editorial mx-auto max-w-lg text-2xl text-foreground-secondary md:text-3xl">
          {event.finalMessage}
        </p>
        <p className="mt-10 font-serif text-lg tracking-[0.15em] text-accent-champagne">
          {event.partner1} & {event.partner2}
        </p>
      </section>
    </div>
  );
}
