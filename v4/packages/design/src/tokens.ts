export const colors = {
  bg: "#030507",
  panel: "rgba(7, 10, 16, 0.84)",
  panelStrong: "rgba(11, 16, 26, 0.96)",
  border: "rgba(148, 163, 184, 0.22)",
  text: "#f8fafc",
  muted: "#94a3b8",
  blue: "#3478ff",
  red: "#ff4545",
  green: "#6ee787",
  purple: "#a855f7",
  gold: "#f6bd4b"
} as const;

export const typography = {
  sans: "Inter, Geist, Noto Sans KR, system-ui, sans-serif",
  mono: "Share Tech Mono, Geist Mono, ui-monospace, monospace",
  displayTracking: "0.16em"
} as const;

export const spacing = {
  pageX: "clamp(1rem, 4vw, 4rem)",
  sectionY: "clamp(2rem, 5vw, 5rem)",
  radius: "12px"
} as const;
