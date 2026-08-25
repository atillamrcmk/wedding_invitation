export type ThemeMode = "light" | "dark" | "system";

export type SaveState = "idle" | "saving" | "saved" | "error";

export type EventType = "wedding" | "engagement" | "henna";

export type InviteStatus = "not_sent" | "sent" | "viewed" | "responded";

export type RsvpStatus = "awaiting" | "attending" | "declined";

export type GuestGroup =
  | "family"
  | "friends"
  | "work"
  | "bride_family"
  | "groom_family"
  | "custom";

export type MediaStatus = "uploaded" | "approved" | "hidden";

export type EventPhase = "invitation" | "wedding_day" | "replay";
