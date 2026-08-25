export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
} as const;

export const TOUCH_TARGET_MIN = 44;

export const ANIMATION = {
  ui: "200ms",
  uiSlow: "350ms",
  story: "700ms",
} as const;

export const INVITATION_STYLES = [
  { id: "editorial", label: "Editorial" },
  { id: "romantic-minimal", label: "Romantic Minimal" },
  { id: "modern", label: "Modern" },
  { id: "classic", label: "Classic" },
  { id: "botanical", label: "Botanical" },
] as const;

export type InvitationStyleId = (typeof INVITATION_STYLES)[number]["id"];
