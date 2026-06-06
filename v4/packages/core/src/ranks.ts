import type { Rank } from "./types";

export const LEVEL_RANKS: Rank[] = [
  { key: "weak-daniel", label: "Weak Daniel", ko: "약한 형석", minLevel: 1, maxLevel: 5, color: "#8b949e", description: "Low base, high potential. First victory is showing up." },
  { key: "civilian-reset", label: "Civilian Reset", ko: "일반인 리셋", minLevel: 6, maxLevel: 10, color: "#64748b", description: "Foundation rebuilding through mobility, consistency, and honest logs." },
  { key: "fighter", label: "Fighter", ko: "파이터", minLevel: 11, maxLevel: 20, color: "#3b82f6", description: "Basic combat body: repeatable strength, cardio, and skill practice." },
  { key: "crew-member", label: "Crew Member", ko: "크루원", minLevel: 21, maxLevel: 35, color: "#2563eb", description: "You can follow a route and survive hard weeks without breaking rhythm." },
  { key: "crew-head", label: "Crew Head", ko: "크루장", minLevel: 36, maxLevel: 50, color: "#7c3aed", description: "Balanced stats and a defined fighting identity." },
  { key: "king-candidate", label: "King Candidate", ko: "왕 후보", minLevel: 51, maxLevel: 65, color: "#ef4444", description: "A specialty begins to dominate your system." },
  { key: "first-gen-king", label: "First Gen King", ko: "1세대 왕", minLevel: 66, maxLevel: 80, color: "#f97316", description: "Mastery-level consistency with real benchmark proof." },
  { key: "ten-geniuses", label: "Ten Geniuses", ko: "10인의 천재", minLevel: 81, maxLevel: 90, color: "#06b6d4", description: "Technical density, recovery discipline, and high-output weeks." },
  { key: "path-walker", label: "Path Walker", ko: "길을 걷는 자", minLevel: 91, maxLevel: 99, color: "#a855f7", description: "Your training route is personal, measurable, and hard to copy." },
  { key: "pinnacle-legend", label: "Pinnacle Legend", ko: "정점", minLevel: 100, maxLevel: 100, color: "#f8fafc", description: "The System has no higher public rank." }
];

export function rankFromLevel(level: number): Rank {
  const safeLevel = Math.max(1, Math.min(100, Math.floor(level || 1)));
  return LEVEL_RANKS.find((rank) => safeLevel >= rank.minLevel && safeLevel <= rank.maxLevel) ?? LEVEL_RANKS[0]!;
}
