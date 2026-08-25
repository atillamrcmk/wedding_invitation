"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { id: "story", label: "Hikâyemiz" },
  { id: "event", label: "Düğün" },
  { id: "gallery", label: "Galeri" },
  { id: "rsvp", label: "LCV" },
] as const;

type CinematicNavProps = {
  coupleLabel: string;
};

export function CinematicNav({ coupleLabel }: CinematicNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between px-5 py-5 md:px-8">
        <p className="pointer-events-auto font-serif text-[0.65rem] uppercase tracking-[0.28em] text-[#FAF9F6]/70 mix-blend-difference">
          {coupleLabel}
        </p>
        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-[#FAF9F6]/15 bg-black/35 text-[#FAF9F6]/90 backdrop-blur-md transition-colors hover:bg-black/55"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </header>

      {open && (
        <nav
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/92 px-8 backdrop-blur-xl"
          aria-label="Davetiye bölümleri"
        >
          <ul className="space-y-8 text-center">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-display text-3xl text-[#FAF9F6] transition-opacity hover:opacity-70 md:text-4xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
