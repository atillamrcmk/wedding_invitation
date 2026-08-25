export const DEMO_PHOTOS = {
  beach: {
    src: "/images/beach.jpeg",
    alt: "Atilla ve Bengü — gün batımında",
    objectPosition: "center 30%",
  },
  graduation: {
    src: "/images/graduation.jpeg",
    alt: "Atilla ve Bengü — mezuniyet günü",
    objectPosition: "center 25%",
  },
  dinner: {
    src: "/images/dinner.jpeg",
    alt: "Atilla ve Bengü — birlikte akşam yemeği",
    objectPosition: "center 20%",
  },
  castle: {
    src: "/images/castle.jpeg",
    alt: "Atilla ve Bengü — birlikte",
    objectPosition: "center 15%",
  },
} as const;

/** Story timeline sırasına göre fotoğraflar */
export const STORY_PHOTOS = [
  DEMO_PHOTOS.castle,
  DEMO_PHOTOS.beach,
  DEMO_PHOTOS.graduation,
  DEMO_PHOTOS.dinner,
] as const;

export type DemoPhotoKey = keyof typeof DEMO_PHOTOS;
