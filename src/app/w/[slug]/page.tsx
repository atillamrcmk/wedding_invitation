import { InvitationExperience } from "@/components/wedding/invitation-experience";
import { DEMO_EVENT } from "@/lib/demo/event";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== DEMO_EVENT.slug) {
    return { title: "Davetiye bulunamadı" };
  }

  return {
    title: `${DEMO_EVENT.partner1} & ${DEMO_EVENT.partner2} — Düğün Davetiyesi`,
    description: `${DEMO_EVENT.dateLabel} · ${DEMO_EVENT.venue.name}, ${DEMO_EVENT.venue.city}`,
    robots: { index: false, follow: false },
    openGraph: {
      title: `${DEMO_EVENT.partner1} & ${DEMO_EVENT.partner2}`,
      description: `${DEMO_EVENT.dateLabel} · ${DEMO_EVENT.venue.city}`,
      type: "website",
    },
  };
}

export default async function PublicInvitationPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== DEMO_EVENT.slug) {
    notFound();
  }

  return <InvitationExperience />;
}
