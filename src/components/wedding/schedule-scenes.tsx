import { SectionReveal } from "@/components/wedding/section-reveal";
import type { DemoScheduleItem } from "@/lib/demo/event";

type ScheduleScenesProps = {
  items: readonly DemoScheduleItem[];
  venueName: string;
  venueCity: string;
};

export function ScheduleScenes({
  items,
  venueName,
  venueCity,
}: ScheduleScenesProps) {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      {items.map((item, i) => (
        <SectionReveal key={item.title} delay={i * 70}>
          <article className="group relative overflow-hidden border border-border/80 bg-background-muted/50 p-6 backdrop-blur-sm transition-colors hover:border-accent-champagne/30 md:p-8">
            <div className="invitation-gold-line absolute inset-x-6 top-0 md:inset-x-8" />
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent-champagne">
              Kayıt {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="text-display mt-3 text-2xl text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm tabular-nums text-foreground-secondary">
              {item.time}
            </p>
            {item.description && (
              <p className="mt-3 text-sm text-foreground-muted">
                {item.description}
              </p>
            )}
            <div className="mt-5 border-t border-border/60 pt-4">
              <p className="text-sm font-medium text-foreground">{venueName}</p>
              <p className="mt-0.5 text-xs text-foreground-muted">{venueCity}</p>
            </div>
          </article>
        </SectionReveal>
      ))}
    </div>
  );
}
