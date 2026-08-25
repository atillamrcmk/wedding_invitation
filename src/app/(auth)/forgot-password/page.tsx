"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0]?.message);
      return;
    }

    setError(undefined);
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setIsLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="text-center">
        <h1 className="text-display text-3xl text-foreground">Kontrol edin</h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          Şifre sıfırlama bağlantısını{" "}
          <span className="font-medium text-foreground">{email}</span> adresine
          gönderdik. Gelen kutunuzu kontrol edin.
        </p>
        <Button href="/login" variant="outline" className="mt-8" fullWidth>
          Girişe dön
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-display text-3xl text-foreground">Şifremi unuttum</h1>
      <p className="mt-2 text-sm text-foreground-secondary">
        E-posta adresinize sıfırlama bağlantısı gönderelim.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
        <Input
          label="E-posta"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          disabled={isLoading}
        />
        <Button type="submit" size="lg" fullWidth isLoading={isLoading}>
          Bağlantı gönder
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-foreground-secondary">
        <Link
          href="/login"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Girişe dön
        </Link>
      </p>
    </div>
  );
}
