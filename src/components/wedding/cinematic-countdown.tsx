"use client";

import { cn } from "@/lib/cn";
import { useSyncExternalStore } from "react";

type CinematicCountdownProps = {
  targetDate: string;
  targetTime?: string;
  className?: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  past: boolean;
};

function getRemaining(targetDate: string, targetTime = "18:00"): Remaining {
  const target = new Date(`${targetDate}T${targetTime}:00`).getTime();
  const diff = target - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past: false,
  };
}

function toSnapshot(targetDate: string, targetTime?: string): string {
  const r = getRemaining(targetDate, targetTime);
  return `${r.days}|${r.hours}|${r.minutes}|${r.seconds}|${r.past ? 1 : 0}`;
}

function fromSnapshot(snapshot: string): Remaining {
  const [days, hours, minutes, seconds, past] = snapshot.split("|");
  return {
    days: Number(days),
    hours: Number(hours),
    minutes: Number(minutes),
    seconds: Number(seconds),
    past: past === "1",
  };
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 1000);
  return () => window.clearInterval(id);
}

export function CinematicCountdown({
  targetDate,
  targetTime,
  className,
}: CinematicCountdownProps) {
  const snapshot = useSyncExternalStore(
    subscribe,
    () => toSnapshot(targetDate, targetTime),
    () => toSnapshot(targetDate, targetTime),
  );
  const remaining = fromSnapshot(snapshot);

  if (remaining.past) {
    return (
      <p className={cn("text-editorial text-2xl text-accent-champagne", className)}>
        O gün geldi.
      </p>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4",
        className,
      )}
      aria-live="polite"
    >
      <Unit value={remaining.days} label="Gün" />
      <Unit value={remaining.hours} label="Saat" />
      <Unit value={remaining.minutes} label="Dakika" />
      <Unit value={remaining.seconds} label="Saniye" />
    </div>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <p className="text-display text-4xl tabular-nums leading-none text-foreground sm:text-5xl">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-foreground-muted">
        {label}
      </p>
    </div>
  );
}
