"use client";

import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { loginSchema } from "@/lib/validations/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setIsLoading(false);
    router.push("/dashboard");
  }

  return (
    <div>
      <h1 className="text-display text-3xl text-foreground">Giriş yap</h1>
      <p className="mt-2 text-sm text-foreground-secondary">
        Düğün paneline devam edin.
      </p>

      <SocialAuthButtons
        className="mt-8"
        disabled={isLoading}
        onProvider={() => {
          setFormError("Sosyal giriş yakında aktif olacak.");
        }}
      />

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-foreground-muted">veya</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input
          label="E-posta"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={isLoading}
        />
        <PasswordInput
          label="Şifre"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          disabled={isLoading}
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-foreground-secondary hover:text-foreground"
          >
            Şifremi unuttum
          </Link>
        </div>

        {formError && (
          <p className="text-sm text-error" role="alert">
            {formError}
          </p>
        )}

        <Button type="submit" size="lg" fullWidth isLoading={isLoading}>
          Giriş yap
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-foreground-secondary">
        Hesabınız yok mu?{" "}
        <Link href="/register" className="font-medium text-foreground underline-offset-4 hover:underline">
          Kayıt ol
        </Link>
      </p>
    </div>
  );
}
