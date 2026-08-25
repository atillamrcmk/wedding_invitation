import { InvitationExperience } from "@/components/wedding/invitation-experience";
import { DEMO_EVENT, getDemoGuestByToken } from "@/lib/demo/event";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string; token: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, token } = await params;
  const guest = getDemoGuestByToken(token);

  if (slug !== DEMO_EVENT.slug || !guest) {
    return { title: "Davetiye bulunamadı", robots: { index: false } };
  }

  return {
    title: `${DEMO_EVENT.partner1} & ${DEMO_EVENT.partner2}`,
    description: `Sevgili ${guest.displayName}, düğünümüze davetlisiniz.`,
    robots: { index: false, follow: false },
  };
}

export default async function GuestInvitationPage({ params }: PageProps) {
  const { slug, token } = await params;
  const guest = getDemoGuestByToken(token);

  if (slug !== DEMO_EVENT.slug || !guest) {
    notFound();
  }

  return <InvitationExperience guest={guest} />;
}
