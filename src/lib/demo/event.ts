export type DemoGuest = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  group: string;
  inviteStatus: "not_sent" | "sent" | "viewed" | "responded";
  rsvpStatus: "awaiting" | "attending" | "declined";
  guestCount: number;
  childrenCount: number;
  token: string;
};

export type DemoStoryItem = {
  year: string;
  title: string;
  body: string;
};

export type DemoScheduleItem = {
  time: string;
  title: string;
  description?: string;
};

export const DEMO_EVENT = {
  id: "evt_demo_atilla_bengu",
  slug: "atilla-bengu",
  type: "wedding" as const,
  partner1: "Atilla",
  partner2: "Bengü",
  date: "2027-08-17",
  time: "18:00",
  dateLabel: "17 Ağustos 2027",
  venue: {
    name: "The Green Park Wedding Garden",
    city: "Erzurum",
    address: "Yenişehir Mah. Park Cad. No:12, Erzurum",
    mapsUrl: "https://maps.google.com/?q=Erzurum",
  },
  style: "editorial" as const,
  music: {
    src: "/audio/romantic-piano.mp3",
    title: "Romantic Piano",
  },
  coverTitle: "Atilla & Bengü",
  coverSubtitle: "Düğünümüze davetlisiniz.",
  introNarrative:
    "Küçük anılar, uzun yollar ve aynı masada biriken kahkahalar… Şimdi bu hikâyeyi sizinle paylaşıyoruz.",
  storyIntro:
    "Hikayemiz küçük tarihler, uzun yollar ve aynı masada biriken anlarla şekillendi.",
  greeting:
    "Bu özel günümüzde sizi de yanımızda görmekten mutluluk duyarız.",
  finalMessage: "Sizi orada görmek için sabırsızlanıyoruz.",
  gift: {
    enabled: true,
    headline: "En güzel hediyemiz yanımızda olmanız.",
    secondary:
      "Dilerseniz dijital olarak da mutluluğumuzu paylaşabilirsiniz.",
    bride: {
      name: "Bengü",
      iban: "TR00 0000 0000 0000 0000 0000 00",
      bank: "Örnek Bankası",
    },
    groom: {
      name: "Atilla",
      iban: "TR11 1111 1111 1111 1111 1111 11",
      bank: "Örnek Bankası",
    },
  },
  story: [
    {
      year: "2019",
      title: "Tanıştık",
      body: "Bir kahve molasında başlayan sohbet, hayatımızın en güzel hikâyesine dönüştü.",
    },
    {
      year: "2022",
      title: "İlk seyahatimiz",
      body: "Birlikte yeni yerler keşfetmek, ortak anılarımızın temelini attı.",
    },
    {
      year: "2026",
      title: "Evet dedik",
      body: "Aynı soruyu sorduk, aynı cevabı verdik — evet.",
    },
    {
      year: "2027",
      title: "Evleniyoruz",
      body: "Sizi de bu güne tanık olmaya davet ediyoruz.",
    },
  ] satisfies DemoStoryItem[],
  schedule: [
    { time: "17:30", title: "Karşılama", description: "Misafirlerin karşılanması" },
    { time: "18:00", title: "Nikâh", description: "Resmi nikâh töreni" },
    { time: "19:30", title: "Yemek", description: "Akşam yemeği" },
    { time: "21:00", title: "İlk Dans" },
    { time: "22:30", title: "After Party" },
  ] satisfies DemoScheduleItem[],
  ceremony: {
    title: "Nikâh",
    time: "18:00",
  },
  reception: {
    title: "Düğün",
    time: "19:30",
  },
} as const;

export const DEMO_GUESTS: DemoGuest[] = [
  {
    id: "g1",
    firstName: "Ahmet",
    lastName: "Yılmaz",
    displayName: "Ahmet & Zeynep Yılmaz",
    group: "friends",
    inviteStatus: "responded",
    rsvpStatus: "attending",
    guestCount: 2,
    childrenCount: 0,
    token: "7fHTKQ",
  },
  {
    id: "g2",
    firstName: "Mehmet",
    lastName: "Kaya",
    displayName: "Mehmet Kaya",
    group: "work",
    inviteStatus: "viewed",
    rsvpStatus: "awaiting",
    guestCount: 1,
    childrenCount: 0,
    token: "a9Km2P",
  },
  {
    id: "g3",
    firstName: "Elif",
    lastName: "Demir",
    displayName: "Elif Demir",
    group: "bride_family",
    inviteStatus: "responded",
    rsvpStatus: "attending",
    guestCount: 1,
    childrenCount: 1,
    token: "bX4nR8",
  },
  {
    id: "g4",
    firstName: "Burak",
    lastName: "Öztürk",
    displayName: "Burak & Ceren",
    group: "friends",
    inviteStatus: "responded",
    rsvpStatus: "declined",
    guestCount: 0,
    childrenCount: 0,
    token: "cY7mQ1",
  },
  {
    id: "g5",
    firstName: "Selin",
    lastName: "Arslan",
    displayName: "Selin Arslan",
    group: "family",
    inviteStatus: "sent",
    rsvpStatus: "awaiting",
    guestCount: 1,
    childrenCount: 0,
    token: "dZ3pL5",
  },
  {
    id: "g6",
    firstName: "Can",
    lastName: "Aydın",
    displayName: "Can & Deniz Aydın",
    group: "friends",
    inviteStatus: "responded",
    rsvpStatus: "attending",
    guestCount: 2,
    childrenCount: 2,
    token: "eW8kN2",
  },
  {
    id: "g7",
    firstName: "Fatma",
    lastName: "Mercimek",
    displayName: "Fatma Mercimek",
    group: "groom_family",
    inviteStatus: "responded",
    rsvpStatus: "attending",
    guestCount: 1,
    childrenCount: 0,
    token: "fV5jM9",
  },
  {
    id: "g8",
    firstName: "Hasan",
    lastName: "Çelik",
    displayName: "Hasan Çelik",
    group: "work",
    inviteStatus: "not_sent",
    rsvpStatus: "awaiting",
    guestCount: 1,
    childrenCount: 0,
    token: "gU2hT4",
  },
  {
    id: "g9",
    firstName: "Zeynep",
    lastName: "Koç",
    displayName: "Zeynep & Emre Koç",
    group: "friends",
    inviteStatus: "viewed",
    rsvpStatus: "awaiting",
    guestCount: 2,
    childrenCount: 0,
    token: "hT6gS7",
  },
  {
    id: "g10",
    firstName: "Ali",
    lastName: "Şahin",
    displayName: "Ali Şahin",
    group: "groom_family",
    inviteStatus: "responded",
    rsvpStatus: "attending",
    guestCount: 3,
    childrenCount: 1,
    token: "iS1fR3",
  },
  {
    id: "g11",
    firstName: "Merve",
    lastName: "Yıldız",
    displayName: "Merve Yıldız",
    group: "bride_family",
    inviteStatus: "responded",
    rsvpStatus: "declined",
    guestCount: 0,
    childrenCount: 0,
    token: "jR9eQ6",
  },
  {
    id: "g12",
    firstName: "Onur",
    lastName: "Polat",
    displayName: "Onur & Naz Polat",
    group: "friends",
    inviteStatus: "sent",
    rsvpStatus: "awaiting",
    guestCount: 2,
    childrenCount: 0,
    token: "kQ4dP8",
  },
  {
    id: "g13",
    firstName: "İrem",
    lastName: "Aksoy",
    displayName: "İrem Aksoy",
    group: "work",
    inviteStatus: "responded",
    rsvpStatus: "attending",
    guestCount: 1,
    childrenCount: 0,
    token: "lP7cO2",
  },
  {
    id: "g14",
    firstName: "Emre",
    lastName: "Doğan",
    displayName: "Emre Doğan",
    group: "family",
    inviteStatus: "viewed",
    rsvpStatus: "awaiting",
    guestCount: 1,
    childrenCount: 0,
    token: "mO5bN1",
  },
];

export const DEMO_STATS = {
  invited: DEMO_GUESTS.length,
  attending: DEMO_GUESTS.filter((g) => g.rsvpStatus === "attending").length,
  declined: DEMO_GUESTS.filter((g) => g.rsvpStatus === "declined").length,
  awaiting: DEMO_GUESTS.filter((g) => g.rsvpStatus === "awaiting").length,
  expectedPeople: DEMO_GUESTS.filter((g) => g.rsvpStatus === "attending").reduce(
    (sum, g) => sum + g.guestCount + g.childrenCount,
    0,
  ),
} as const;

export function getDemoGuestByToken(token: string): DemoGuest | undefined {
  return DEMO_GUESTS.find((g) => g.token === token);
}
