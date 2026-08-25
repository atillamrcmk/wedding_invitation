import { EventPhoto } from "@/components/media/event-photo";
import { SectionReveal } from "@/components/wedding/section-reveal";
import type { DemoStoryItem } from "@/lib/demo/event";
import { STORY_PHOTOS } from "@/lib/demo/photos";

type StoryTimelineProps = {
  items: readonly DemoStoryItem[];
  monogram: string;
};

export function StoryTimeline({ items, monogram }: StoryTimelineProps) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div
        className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-gradient-to-b from-transparent via-accent-champagne/40 to-transparent md:left-6"
        aria-hidden="true"
      />

      <ol className="space-y-16 md:space-y-24">
        {items.map((item, i) => (
          <SectionReveal key={item.year} delay={i * 80}>
            <li className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-1 flex size-9 items-center justify-center rounded-full border border-accent-champagne/30 bg-background-muted font-serif text-xs text-accent-champagne md:left-2 md:size-10">
                {String(i + 1).padStart(2, "0")}
              </div>

              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent-champagne">
                {item.year}
              </p>
              <h3 className="text-display mt-2 text-2xl text-foreground md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-lg leading-relaxed text-foreground-secondary">
                {item.body}
              </p>

              <EventPhoto
                src={STORY_PHOTOS[i].src}
                alt={STORY_PHOTOS[i].alt}
                fit="natural"
                overlay="bottom"
                className="mt-8 w-full max-w-lg rounded-sm"
                sizes="(max-width: 640px) 100vw, 512px"
              />
            </li>
          </SectionReveal>
        ))}

        <SectionReveal delay={items.length * 80}>
          <li className="relative pl-12 md:pl-16">
            <div className="absolute left-0 top-1 flex size-9 items-center justify-center rounded-full border border-accent-champagne/50 bg-accent-subtle font-serif text-xs text-accent-champagne md:left-2 md:size-10">
              {monogram}
            </div>
            <p className="text-editorial text-xl text-foreground-secondary md:text-2xl">
              Şimdi yeni tarihimizin tanıklarıyla buluşuyoruz.
            </p>
          </li>
        </SectionReveal>
      </ol>
    </div>
  );
}
