"use client";

import { cn } from "@/lib/cn";
import { useSyncExternalStore } from "react";

type CountdownProps = {
  targetDate: string;
  className?: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  past: boolean;
};

function getRemaining(targetDate: string): Remaining {
  const target = new Date(`${targetDate}T18:00:00`).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, past: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { days, hours, minutes, past: false };
}

function toSnapshot(targetDate: string): string {
  const r = getRemaining(targetDate);
  return `${r.days}|${r.hours}|${r.minutes}|${r.past ? 1 : 0}`;
}

function fromSnapshot(snapshot: string): Remaining {
  const [days, hours, minutes, past] = snapshot.split("|");
  return {
    days: Number(days),
    hours: Number(hours),
    minutes: Number(minutes),
    past: past === "1",
  };
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 30_000);
  return () => window.clearInterval(id);
}

export function Countdown({ targetDate, className }: CountdownProps) {
  const snapshot = useSyncExternalStore(
    subscribe,
    () => toSnapshot(targetDate),
    () => toSnapshot(targetDate),
  );
  const remaining = fromSnapshot(snapshot);

  if (remaining.past) {
    return (
      <p
        className={cn(
          "text-editorial text-xl text-foreground-secondary",
          className,
        )}
      >
        O gün geldi.
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2",
        className,
      )}
      aria-live="polite"
    >
      <Unit value={remaining.days} label="gün" />
      <Unit value={remaining.hours} label="saat" />
      <Unit value={remaining.minutes} label="dakika" />
    </div>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-display text-4xl tabular-nums text-foreground md:text-5xl">
        {value}
      </span>
      <span className="text-sm tracking-wide text-foreground-muted">{label}</span>
    </div>
  );
}
