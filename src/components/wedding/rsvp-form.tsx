"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";

type RsvpChoice = "attending" | "declined" | null;

type RsvpFormProps = {
  className?: string;
  guestName?: string;
};

export function RsvpForm({ className, guestName }: RsvpFormProps) {
  const [choice, setChoice] = useState<RsvpChoice>(null);
  const [guestCount, setGuestCount] = useState("1");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!choice) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={cn("py-8 text-center", className)}>
        <p className="text-display text-2xl text-foreground">Teşekkürler</p>
        <p className="mt-3 text-foreground-secondary">
          {choice === "attending"
            ? "Yanıtınız alındı. Sizi görmek için sabırsızlanıyoruz."
            : "Yanıtınız alındı. Düşünceleriniz için teşekkür ederiz."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-8", className)}>
      <div className="text-center">
        <h2 className="text-display text-3xl md:text-4xl">Bizimle olacak mısınız?</h2>
        {guestName && (
          <p className="mt-3 text-foreground-secondary">Sevgili {guestName},</p>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ChoiceButton
          selected={choice === "attending"}
          onClick={() => setChoice("attending")}
          label="Katılacağım"
        />
        <ChoiceButton
          selected={choice === "declined"}
          onClick={() => setChoice("declined")}
          label="Katılamayacağım"
        />
      </div>

      {choice === "attending" && (
        <div className="space-y-4">
          <Input
            label="Kaç kişi geleceksiniz?"
            type="number"
            min={1}
            max={10}
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
          />
          <Textarea
            label="Not (isteğe bağlı)"
            placeholder="Alerji, ulaşım veya özel bir mesaj..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      )}

      {choice === "declined" && (
        <Textarea
          label="Not (isteğe bağlı)"
          placeholder="Bizimle paylaşmak istediğiniz bir şey..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      )}

      <Button
        type="submit"
        size="lg"
        fullWidth
        disabled={!choice}
        isLoading={isLoading}
      >
        Yanıtı gönder
      </Button>
    </form>
  );
}

function ChoiceButton({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "min-h-[52px] rounded-md border px-4 py-3 text-sm font-medium transition-colors duration-[var(--duration-ui)]",
        selected
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-transparent text-foreground hover:bg-background-muted",
      )}
    >
      {label}
    </button>
  );
}
