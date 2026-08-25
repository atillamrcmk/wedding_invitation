import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding",
  robots: { index: false },
};

export default function OnboardingPlaceholderPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-5 text-center">
      <Logo size="sm" href="/" />
      <h1 className="text-display mt-10 text-3xl">Hoş geldiniz</h1>
      <p className="mt-3 max-w-sm text-foreground-secondary">
        Onboarding sihirbazı bir sonraki adımda geliyor. Şimdilik paneli
        inceleyebilirsiniz.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/dashboard">Panele git</Button>
        <Button href="/" variant="outline">
          Ana sayfa
        </Button>
      </div>
    </div>
  );
}
