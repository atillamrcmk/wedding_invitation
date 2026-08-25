"use client";

import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { registerSchema } from "@/lib/validations/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);

    const result = registerSchema.safeParse({
      email,
      password,
      confirmPassword,
    });

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
    await new Promise((r) => setTimeout(r, 800));
    setIsLoading(false);
    router.push("/onboarding");
  }

  return (
    <div>
      <h1 className="text-display text-3xl text-foreground">Hesap oluştur</h1>
      <p className="mt-2 text-sm text-foreground-secondary">
        Davetiyenizi birkaç adımda hazırlayın.
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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          hint="En az 8 karakter"
          disabled={isLoading}
        />
        <PasswordInput
          label="Şifre tekrar"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          disabled={isLoading}
        />

        {formError && (
          <p className="text-sm text-error" role="alert">
            {formError}
          </p>
        )}

        <Button type="submit" size="lg" fullWidth isLoading={isLoading}>
          Devam et
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-foreground-secondary">
        Zaten hesabınız var mı?{" "}
        <Link
          href="/login"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Giriş yap
        </Link>
      </p>
    </div>
  );
}
