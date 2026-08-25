"use client";

import { Logo } from "@/components/brand/logo";
import { EventPhoto } from "@/components/media/event-photo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CoupleNames } from "@/components/wedding/couple-names";
import { BRAND } from "@/lib/constants";
import { DEMO_EVENT, DEMO_STATS } from "@/lib/demo/event";
import { DEMO_PHOTOS } from "@/lib/demo/photos";
import { cn } from "@/lib/cn";
import { useState } from "react";
import Link from "next/link";

const FEATURES = [
  {
    title: "Kişisel davet linkleri",
    body: "Her misafire özel bir bağlantı. İsimleriyle karşılanırlar, yanıtları otomatik bağlanır.",
  },
  {
    title: "Gelişmiş LCV",
    body: "Katılım, kişi sayısı, çocuk ve notlar — hepsi tek formda, sizin kontrolünüzde.",
  },
  {
    title: "Düğün QR galerisi",
    body: "Misafirler uygulama indirmeden fotoğraf ve video yükler. Siz onaylarsınız.",
  },
  {
    title: "Dijital anı defteri",
    body: "Mesajlar ve anılar, düğünden sonra da aynı yerde kalır.",
  },
  {
    title: "Wedding Replay",
    body: "Tarih geçince davetiye otomatik olarak o günü yeniden yaşatan bir anı sayfasına dönüşür.",
  },
  {
    title: "IBAN & konum",
    body: "Dijital takı, harita ve takvim — sade, güvenli ve her zaman elinizin altında.",
  },
] as const;

const FAQ = [
  {
    q: "Tek seferlik ödeme mi?",
    a: "Evet. VOWA Wedding tek seferlik ödeme ile açılır; abonelik zorunluluğu yoktur. Bir yıl barındırma dahildir.",
  },
  {
    q: "Misafirler uygulama indirmek zorunda mı?",
    a: "Hayır. Davetiye, LCV ve galeri tamamen tarayıcı üzerinden çalışır.",
  },
  {
    q: "Kişisel bilgiler güvende mi?",
    a: "Misafir listesi, telefon ve IBAN gibi bilgiler herkese açık API’lerden dönmez. Yalnızca davet linkindeki gerekli içerik paylaşılır.",
  },
  {
    q: "Düğünden sonra ne olur?",
    a: "Aynı link Wedding Replay moduna geçer. Anılar, galeri ve zaman çizelgesi tek sayfada kalır.",
  },
  {
    q: "Özel alan adı ekleyebilir miyim?",
    a: "Evet — isteğe bağlı custom domain eklentisi ile. Otomasyon sonraki aşamada tamamlanacak.",
  },
] as const;

export function LandingPage() {
  return (
    <div className="min-h-full bg-background">
      <LandingNav />
      <Hero />
      <ProductPreview />
      <ThreeStages />
      <Features />
      <ExampleInvitation />
      <DashboardPreview />
      <Pricing />
      <Faq />
      <FinalCta />
      <LandingFooter />
    </div>
  );
}

function LandingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <Logo size="sm" />
        <nav className="hidden items-center gap-8 text-sm text-foreground-secondary md:flex">
          <a href="#ozellikler" className="hover:text-foreground">
            Özellikler
          </a>
          <a href="#fiyat" className="hover:text-foreground">
            Fiyat
          </a>
          <a href="#sss" className="hover:text-foreground">
            SSS
          </a>
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden min-h-[44px] items-center px-3 text-sm font-medium text-foreground-secondary hover:text-foreground sm:inline-flex"
          >
            Giriş
          </Link>
          <Button href="/register" size="sm" className="hidden sm:inline-flex">
            Başla
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-subtle), transparent), linear-gradient(180deg, var(--background) 0%, var(--background-muted) 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:gap-16 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Düğünün dijital merkezi
          </p>
          <h1 className="text-display mt-5 text-[2.35rem] leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
            {BRAND.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-secondary md:text-lg">
            {BRAND.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/register" size="lg">
              Davetiyeni oluştur
            </Button>
            <Button href="/w/atilla-bengu" variant="outline" size="lg">
              Örnek davetiyeyi gör
            </Button>
          </div>
        </div>

        <DeviceComposition />
      </div>
    </section>
  );
}

function DeviceComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[480px]">
      <div className="flex items-end justify-center sm:justify-end sm:pr-4">
        {/* Phone */}
        <div className="relative z-10 w-[min(100%,240px)] shrink-0 sm:w-[260px]">
          <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-black p-[3px] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.35)] ring-1 ring-foreground/5">
            <div className="overflow-hidden rounded-[1.85rem] bg-black">
              <div className="flex h-7 items-center justify-center bg-black">
                <div className="h-1 w-14 rounded-full bg-white/20" />
              </div>
              <EventPhoto
                src={DEMO_PHOTOS.beach.src}
                alt={DEMO_PHOTOS.beach.alt}
                objectPosition={DEMO_PHOTOS.beach.objectPosition}
                priority
                overlay="cinematic"
                className="aspect-[9/16] w-full"
                sizes="260px"
              >
                <div className="absolute inset-x-0 bottom-0 px-5 pb-8 pt-20 text-center">
                  <p className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-[#FAF9F6]/60">
                    {DEMO_EVENT.dateLabel}
                  </p>
                  <div className="mt-4 scale-[0.85]">
                    <CoupleNames
                      partner1={DEMO_EVENT.partner1}
                      partner2={DEMO_EVENT.partner2}
                      variant="on-photo"
                      size="md"
                    />
                  </div>
                </div>
              </EventPhoto>
            </div>
          </div>
        </div>

        {/* Dashboard card — önde, tam görünür */}
        <div className="relative z-20 -ml-8 mb-10 hidden w-[190px] shrink-0 sm:block lg:-ml-6">
          <div className="rounded-xl border border-border/80 bg-background-elevated p-5 shadow-[0_16px_48px_-8px_rgba(0,0,0,0.25)]">
            <p className="text-[0.6rem] uppercase tracking-[0.18em] text-foreground-muted">
              Overview
            </p>
            <p className="mt-2 font-serif text-sm leading-snug text-foreground">
              {DEMO_EVENT.partner1} & {DEMO_EVENT.partner2}
            </p>
            <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
              <div>
                <p className="text-display text-3xl tabular-nums leading-none">
                  {daysUntil(DEMO_EVENT.date)}
                </p>
                <p className="mt-1 text-[0.65rem] text-foreground-muted">
                  gün kaldı
                </p>
              </div>
              <div className="text-right">
                <p className="text-[0.65rem] text-foreground-muted">Katılıyor</p>
                <p className="mt-0.5 text-xl font-medium tabular-nums">
                  {DEMO_STATS.attending}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function daysUntil(date: string) {
  const target = new Date(`${date}T18:00:00`).getTime();
  const diff = target - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function ProductPreview() {
  return (
    <section className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-display text-3xl md:text-5xl">
          Tek link. Üç zaman.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-foreground-secondary">
          Davetiye, düğün günü deneyimi ve anı sayfası — aynı adres, farklı bir
          hikâye.
        </p>
      </div>
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
        {(
          [
            { photo: DEMO_PHOTOS.beach, label: "Davetiye" },
            { photo: DEMO_PHOTOS.graduation, label: "Hikâye" },
            { photo: DEMO_PHOTOS.dinner, label: "Anılar" },
            { photo: DEMO_PHOTOS.castle, label: "Galeri" },
          ] as const
        ).map((item) => (
          <EventPhoto
            key={item.label}
            src={item.photo.src}
            alt={item.photo.alt}
            objectPosition={item.photo.objectPosition}
            overlay="cinematic"
            className="aspect-[4/5] rounded-sm"
            sizes="(max-width: 768px) 50vw, 25vw"
          >
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm font-medium text-background-elevated">
                {item.label}
              </p>
            </div>
          </EventPhoto>
        ))}
      </div>
    </section>
  );
}

function ThreeStages() {
  const stages = [
    {
      phase: "Düğünden önce",
      title: "Digital Invitation",
      body: "Editorial bir davetiye oluşturun, misafirlerinizi yönetin, kişiye özel linklerle LCV toplayın.",
    },
    {
      phase: "Düğün günü",
      title: "Guest Experience",
      body: "QR ile fotoğraf ve video toplayın. Misafirler uygulama indirmeden anıları paylaşır.",
    },
    {
      phase: "Düğünden sonra",
      title: "Wedding Replay",
      body: "Aynı link bir anı sayfasına dönüşür. Zaman çizelgesi, galeri ve mesajlar bir arada.",
    },
  ];

  return (
    <section className="bg-background-muted px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-display max-w-xl text-3xl md:text-5xl">
          Düğününüzün her anı tek yerde.
        </h2>
        <ol className="mt-14 space-y-0 md:mt-20">
          {stages.map((stage, i) => (
            <li
              key={stage.phase}
              className="grid gap-4 border-t border-border py-10 md:grid-cols-[12rem_1fr] md:gap-12 md:py-14"
            >
              <div>
                <span className="text-xs tabular-nums text-foreground-muted">
                  0{i + 1}
                </span>
                <p className="mt-2 text-sm tracking-wide text-accent">
                  {stage.phase}
                </p>
              </div>
              <div>
                <h3 className="text-display text-2xl md:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-xl text-foreground-secondary">
                  {stage.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="ozellikler" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-display max-w-lg text-3xl md:text-5xl">
          İhtiyacınız olanlar. Fazlası değil.
        </h2>
        <ul className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li key={f.title}>
              <h3 className="text-base font-medium text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExampleInvitation() {
  return (
    <section className="border-t border-border bg-background-muted px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Örnek
          </p>
          <h2 className="text-display mt-4 text-3xl md:text-5xl">
            Atilla & Bengü
          </h2>
          <p className="mt-4 max-w-md text-foreground-secondary lg:mx-0 mx-auto">
            17 Ağustos 2027 · Erzurum. Gerçek ürün deneyimini mobil öncelikli
            olarak inceleyin.
          </p>
          <Button href="/w/atilla-bengu" size="lg" className="mt-8">
            Davetiyeyi aç
          </Button>
        </div>
        <div className="w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-border/80 bg-black p-[3px] shadow-xl">
          <div className="overflow-hidden rounded-[1.85rem]">
            <EventPhoto
              src={DEMO_PHOTOS.graduation.src}
              alt={DEMO_PHOTOS.graduation.alt}
              objectPosition={DEMO_PHOTOS.graduation.objectPosition}
              overlay="cinematic"
              className="aspect-[9/16]"
              sizes="240px"
            >
              <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pt-16 text-center">
                <CoupleNames
                  partner1="Atilla"
                  partner2="Bengü"
                  variant="on-photo"
                  size="sm"
                />
                <p className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-[#FAF9F6]/70">
                  17 Ağustos 2027
                </p>
              </div>
            </EventPhoto>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <h2 className="text-display text-3xl md:text-5xl">
            Yönetim, admin paneli gibi hissettirmez.
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Editorial metrikler, sakin bir overview ve hızlı aksiyonlar — çiftler
            için tasarlandı.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-background-elevated p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-foreground-muted">
                Overview
              </p>
              <p className="mt-2 font-serif text-2xl md:text-3xl">
                {DEMO_EVENT.partner1} & {DEMO_EVENT.partner2}
              </p>
              <p className="mt-1 text-sm text-foreground-secondary">
                {DEMO_EVENT.dateLabel}
              </p>
            </div>
            <div className="text-right">
              <p className="text-display text-4xl tabular-nums md:text-5xl">
                {daysUntil(DEMO_EVENT.date)}
              </p>
              <p className="text-sm text-foreground-muted">gün kaldı</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Davetli", value: DEMO_STATS.invited },
              { label: "Katılıyor", value: DEMO_STATS.attending },
              { label: "Katılamıyor", value: DEMO_STATS.declined },
              { label: "Bekliyor", value: DEMO_STATS.awaiting },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-display text-3xl tabular-nums">{m.value}</p>
                <p className="mt-1 text-xs text-foreground-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="fiyat" className="scroll-mt-20 border-t border-border bg-background-muted px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-display text-3xl md:text-5xl">Basit fiyat.</h2>
        <p className="mt-4 text-foreground-secondary">
          Tek paket. Tek ödeme. Düğününüzün dijital merkezi.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-lg border border-border bg-background-elevated p-8 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          VOWA Wedding
        </p>
        <p className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-display text-5xl">990</span>
          <span className="text-foreground-secondary">TL</span>
        </p>
        <p className="mt-2 text-sm text-foreground-muted">Tek seferlik ödeme</p>
        <ul className="mt-8 space-y-3 text-left text-sm text-foreground-secondary">
          {[
            "Dijital davetiye",
            "Kişisel misafir linkleri",
            "LCV & misafir yönetimi",
            "Düğün QR galerisi",
            "Anı defteri",
            "Wedding Replay",
            "IBAN / konum / takvim / müzik",
            "1 yıl barındırma",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-border pt-6 text-left">
          <p className="text-sm text-foreground">
            Custom domain{" "}
            <span className="text-foreground-secondary">+ 299 TL</span>
          </p>
          <p className="mt-1 text-xs text-foreground-muted">İsteğe bağlı</p>
        </div>
        <Button href="/register" size="lg" fullWidth className="mt-8">
          Davetiyeni oluştur
        </Button>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-display text-center text-3xl md:text-5xl">
          Sorular
        </h2>
        <ul className="mt-12">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-t border-border">
                <button
                  type="button"
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <span
                    className={cn(
                      "text-foreground-muted transition-transform duration-[var(--duration-ui)]",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-foreground-secondary">
                    {item.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border px-5 py-24 text-center md:px-8 md:py-32">
      <h2 className="text-display mx-auto max-w-2xl text-3xl md:text-5xl">
        Düğününüz için dijital bir merkez oluşturun.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-foreground-secondary">
        Dakikalar içinde başlayın. Misafirleriniz aynı gün yanıt verebilir.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/register" size="lg">
          Davetiyeni oluştur
        </Button>
        <Button href="/w/atilla-bengu" variant="outline" size="lg">
          Örnek davetiyeyi gör
        </Button>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <Logo size="sm" href="/" />
          <p className="mt-2 text-xs text-foreground-muted">
            Düğünün dijital merkezi.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground-secondary">
          <Link href="/login" className="hover:text-foreground">
            Giriş
          </Link>
          <Link href="/register" className="hover:text-foreground">
            Kayıt
          </Link>
          <a href="#fiyat" className="hover:text-foreground">
            Fiyat
          </a>
          <Link href="/design-system" className="hover:text-foreground">
            Design system
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-foreground-muted">
        © {new Date().getFullYear()} {BRAND.name}
      </p>
    </footer>
  );
}
