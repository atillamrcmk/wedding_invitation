import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DEMO_EVENT, DEMO_STATS } from "@/lib/demo/event";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false },
};

function daysUntil(date: string) {
  const target = new Date(`${date}T18:00:00`).getTime();
  return Math.max(0, Math.ceil((target - Date.now()) / (1000 * 60 * 60 * 24)));
}

export default function DashboardPlaceholderPage() {
  return (
    <div className="min-h-dvh bg-background">
      <header className="flex items-center justify-between border-b border-border px-5 py-4 md:px-8">
        <Logo size="sm" href="/" />
        <ThemeToggle />
      </header>
      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs uppercase tracking-[0.15em] text-foreground-muted">
          Overview · önizleme
        </p>
        <h1 className="text-display mt-3 text-4xl">
          {DEMO_EVENT.partner1} & {DEMO_EVENT.partner2}
        </h1>
        <p className="mt-2 text-foreground-secondary">{DEMO_EVENT.dateLabel}</p>

        <div className="mt-10 border-y border-border py-10">
          <p className="text-display text-5xl tabular-nums">
            {daysUntil(DEMO_EVENT.date)}
          </p>
          <p className="mt-1 text-sm text-foreground-muted">gün kaldı</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "Davetli", value: DEMO_STATS.invited },
            { label: "Katılıyor", value: DEMO_STATS.attending },
            { label: "Katılamıyor", value: DEMO_STATS.declined },
            { label: "Bekliyor", value: DEMO_STATS.awaiting },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-display text-3xl tabular-nums">{m.value}</p>
              <p className="mt-1 text-xs text-foreground-muted">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/w/atilla-bengu">Davetiyeyi önizle</Button>
          <Button href="/" variant="outline">
            Ana sayfa
          </Button>
        </div>
        <p className="mt-8 text-sm text-foreground-muted">
          Tam dashboard shell Phase 4’te geliyor.
        </p>
      </main>
    </div>
  );
}
