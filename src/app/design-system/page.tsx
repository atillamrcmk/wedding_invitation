"use client";

import { Logo } from "@/components/brand/logo";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Input,
  Modal,
  PasswordInput,
  Radio,
  Select,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeToggle,
} from "@/components/ui";
import Link from "next/link";
import { useState } from "react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border py-12 last:border-b-0">
      <h2 className="text-display mb-8 text-2xl text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-full bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
          <Logo size="sm" href="/" />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/"
              className="text-sm text-foreground-secondary hover:text-foreground"
            >
              Ana sayfa
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Internal
          </p>
          <h1 className="text-display mt-3 text-4xl text-foreground md:text-5xl">
            Design System
          </h1>
          <p className="mt-4 max-w-xl text-foreground-secondary">
            VOWA editorial luxury design language — typography, color, spacing,
            and core UI primitives.
          </p>
        </div>

        <Section title="Typography">
          <div className="space-y-6">
            <p className="text-display text-5xl md:text-6xl">Atilla & Bengü</p>
            <p className="text-editorial text-2xl text-foreground-secondary">
              17 Ağustos 2027 · The Green Park Wedding Garden
            </p>
            <p className="max-w-lg text-base leading-relaxed text-foreground-secondary">
              Davetiyenizi oluşturun, misafirlerinizi yönetin ve düğününüzün
              tüm anılarını tek bir yerde saklayın.
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-foreground-muted">
              Label · Overline · Caption
            </p>
          </div>
        </Section>

        <Section title="Colors">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { name: "Background", class: "bg-background" },
              { name: "Elevated", class: "bg-background-elevated" },
              { name: "Muted", class: "bg-background-muted" },
              { name: "Accent", class: "bg-accent" },
              { name: "Champagne", class: "bg-accent-champagne" },
              { name: "Subtle", class: "bg-accent-subtle" },
              { name: "Success", class: "bg-success" },
              { name: "Error", class: "bg-error" },
            ].map((swatch) => (
              <div key={swatch.name} className="space-y-2">
                <div
                  className={`h-16 rounded-md border border-border ${swatch.class}`}
                />
                <p className="text-xs text-foreground-secondary">{swatch.name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Form Controls">
          <div className="grid max-w-lg gap-6">
            <Input label="E-posta" placeholder="ornek@email.com" />
            <PasswordInput label="Şifre" placeholder="••••••••" />
            <Input
              label="Hatalı alan"
              error="Geçerli bir e-posta adresi girin."
              defaultValue="invalid"
            />
            <Textarea
              label="Not"
              placeholder="Misafirlerinize özel bir mesaj..."
            />
            <Select
              label="Şehir"
              placeholder="Seçin"
              options={[
                { value: "erzurum", label: "Erzurum" },
                { value: "istanbul", label: "İstanbul" },
                { value: "ankara", label: "Ankara" },
              ]}
            />
            <Checkbox label="Kullanım koşullarını kabul ediyorum" />
            <Switch label="LCV hatırlatıcıları" defaultChecked />
            <div className="flex gap-6">
              <Radio name="rsvp" label="Katılacağım" defaultChecked />
              <Radio name="rsvp" label="Katılamayacağım" />
            </div>
          </div>
        </Section>

        <Section title="Badges & Avatar">
          <div className="flex flex-wrap items-center gap-4">
            <Badge>Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success">Katılıyor</Badge>
            <Badge variant="warning">Bekliyor</Badge>
            <Badge variant="error">Reddetti</Badge>
            <Avatar name="Atilla Mercimek" size="lg" />
            <Avatar name="Bengü Yılmaz" size="md" />
            <Spinner />
          </div>
        </Section>

        <Section title="Tabs">
          <Tabs defaultValue="edit">
            <TabsList>
              <TabsTrigger value="edit">Düzenle</TabsTrigger>
              <TabsTrigger value="preview">Önizleme</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <p className="text-sm text-foreground-secondary">
                Davetiye düzenleme paneli burada görünür.
              </p>
            </TabsContent>
            <TabsContent value="preview">
              <p className="text-sm text-foreground-secondary">
                Canlı mobil önizleme burada görünür.
              </p>
            </TabsContent>
          </Tabs>
        </Section>

        <Section title="Modal">
          <Button onClick={() => setModalOpen(true)}>Modal aç</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Davetli ekle"
            description="Yeni bir misafir ekleyin veya mevcut listeyi düzenleyin."
          >
            <div className="space-y-4">
              <Input label="Ad" placeholder="Ahmet" />
              <Input label="Soyad" placeholder="Yılmaz" />
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  İptal
                </Button>
                <Button onClick={() => setModalOpen(false)}>Kaydet</Button>
              </div>
            </div>
          </Modal>
        </Section>
      </main>
    </div>
  );
}
