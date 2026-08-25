import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="flex items-center justify-between px-5 py-4 md:px-8">
        <Logo size="sm" />
        <ThemeToggle />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-4">
        <div className="w-full max-w-[400px]">{children}</div>
      </main>
      <footer className="px-5 py-6 text-center text-xs text-foreground-muted">
        <Link href="/" className="hover:text-foreground">
          Ana sayfaya dön
        </Link>
      </footer>
    </div>
  );
}
