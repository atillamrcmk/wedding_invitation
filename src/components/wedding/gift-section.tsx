"use client";

import { Button } from "@/components/ui/button";
import { DEMO_EVENT } from "@/lib/demo/event";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function GiftSection() {
  const [open, setOpen] = useState(false);
  const { gift } = DEMO_EVENT;

  if (!gift.enabled) return null;

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-display text-3xl md:text-4xl">{gift.headline}</h2>
        <p className="mt-4 text-foreground-secondary">{gift.secondary}</p>

        {!open ? (
          <Button
            variant="outline"
            className="mt-8 border-border/80 bg-transparent text-foreground hover:bg-background-muted"
            onClick={() => setOpen(true)}
          >
            Dijital hediye bilgisi
          </Button>
        ) : (
          <div className="mt-10 space-y-6 text-left">
            <IbanRow
              label={`Gelin · ${gift.bride.name}`}
              iban={gift.bride.iban}
              bank={gift.bride.bank}
            />
            <IbanRow
              label={`Damat · ${gift.groom.name}`}
              iban={gift.groom.iban}
              bank={gift.groom.bank}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function IbanRow({
  label,
  iban,
  bank,
}: {
  label: string;
  iban: string;
  bank: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(iban.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="border-t border-border pt-5">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="mt-1 text-xs text-foreground-muted">{bank}</p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <code className="text-sm tracking-wide text-foreground-secondary">
          {iban}
        </code>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={copy}
          aria-label="IBAN kopyala"
        >
          {copied ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Copy className="size-4" aria-hidden="true" />
          )}
          {copied ? "Kopyalandı" : "Kopyala"}
        </Button>
      </div>
    </div>
  );
}
