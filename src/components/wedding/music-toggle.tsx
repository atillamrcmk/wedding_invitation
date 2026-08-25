"use client";

import { cn } from "@/lib/cn";
import { Music2, Pause } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type MusicToggleProps = {
  src?: string;
  autoStart?: boolean;
  className?: string;
};

export function MusicToggle({
  src = "/audio/romantic-piano.mp3",
  autoStart = false,
  className,
}: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const autoStartedRef = useRef(false);

  const clearFade = useCallback(() => {
    if (fadeIntervalRef.current !== null) {
      window.clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  const fadeIn = useCallback(
    (audio: HTMLAudioElement) => {
      clearFade();
      const target = 0.32;
      audio.volume = 0;
      let step = 0;
      fadeIntervalRef.current = window.setInterval(() => {
        step += 1;
        audio.volume = Math.min(target, (step / 24) * target);
        if (step >= 24) clearFade();
      }, 90);
    },
    [clearFade],
  );

  const fadeOut = useCallback(
    (audio: HTMLAudioElement, onDone?: () => void) => {
      clearFade();
      const start = audio.volume;
      let step = 0;
      fadeIntervalRef.current = window.setInterval(() => {
        step += 1;
        audio.volume = Math.max(0, start * (1 - step / 18));
        if (step >= 18) {
          clearFade();
          audio.pause();
          audio.currentTime = 0;
          onDone?.();
        }
      }, 70);
    },
    [clearFade],
  );

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !ready) return false;

    try {
      await audio.play();
      fadeIn(audio);
      setPlaying(true);
      return true;
    } catch {
      setPlaying(false);
      return false;
    }
  }, [fadeIn, ready]);

  const stopPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    fadeOut(audio, () => setPlaying(false));
  }, [fadeOut]);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    audioRef.current = audio;

    const onCanPlay = () => setReady(true);
    audio.addEventListener("canplaythrough", onCanPlay);

    return () => {
      clearFade();
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.pause();
      audioRef.current = null;
    };
  }, [src, clearFade]);

  useEffect(() => {
    if (autoStart && ready && !autoStartedRef.current) {
      autoStartedRef.current = true;
      void startPlayback();
    }
  }, [autoStart, ready, startPlayback]);

  async function toggle() {
    if (playing) {
      stopPlayback();
    } else {
      await startPlayback();
    }
  }

  return (
    <button
      type="button"
      aria-label={playing ? "Müziği durdur" : "Müziği çal"}
      aria-pressed={playing}
      disabled={!ready}
      onClick={toggle}
      className={cn(
        "fixed bottom-6 right-5 z-50 flex size-12 items-center justify-center rounded-full",
        "border border-[#FAF9F6]/15 bg-black/50 text-[#FAF9F6]/90 backdrop-blur-md",
        "transition-all hover:bg-black/70 hover:text-[#FAF9F6]",
        "disabled:opacity-40",
        playing &&
          "border-accent-champagne/40 shadow-[0_0_24px_-4px_rgba(201,173,130,0.5)]",
        className,
      )}
    >
      {playing ? (
        <Pause className="size-4" aria-hidden="true" />
      ) : (
        <Music2 className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
