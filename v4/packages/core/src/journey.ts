import type { DiagnosisResult, JourneyPlan, SystemStatKey } from "./types";
import { personalizedQuestIds } from "./quests";

const PRIORITY_MAP: Record<string, SystemStatKey[]> = {
  Strength: ["power", "endurance", "conviction"],
  Speed: ["speed", "sense", "technique"],
  Endurance: ["endurance", "power", "conviction"],
  Technique: ["technique", "sense", "speed"],
  Conviction: ["conviction", "endurance", "power"]
};

export function buildJourney(result: DiagnosisResult): JourneyPlan {
  const priorities = PRIORITY_MAP[result.recommendedMastery] ?? ["endurance", "technique", "conviction"];
  return {
    currentCategory: result.currentCategory,
    nextCategory: result.nextCategory,
    xpTarget: Math.max(600, (100 - result.overall) * 35),
    statPriorities: priorities,
    weeklySchedule: [
      "Day 1: mobility + strength foundation",
      "Day 2: roadwork + selected martial-art technique",
      "Day 3: recovery mobility or low-intensity walk",
      "Day 4: full-body strength + core",
      "Day 5: precision style session",
      "Day 6: roadwork or boss-test practice",
      "Day 7: recovery, sleep audit, weekly report"
    ],
    questFocus: personalizedQuestIds(result.currentCategory),
    recommendedMastery: result.recommendedMastery,
    recommendedFighterType: result.recommendedFighterType,
    recommendedArt: result.recommendedArt
  };
}
