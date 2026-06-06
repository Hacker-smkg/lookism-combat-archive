import type { Quest } from "./types";

export const QUEST_CATALOG: Quest[] = [
  {
    id: "daily-mobility-reset",
    type: "daily",
    title: "Mobility Reset",
    description: "10 minutes of hips, ankles, shoulders, and spine movement before any hard work.",
    xpReward: 45,
    statKey: "endurance",
    statGain: 1,
    safety: "Pain changes the movement; no forcing end range."
  },
  {
    id: "daily-push-pull-core",
    type: "daily",
    title: "Push Pull Core",
    description: "Push-up progression, rows or pull progression, and a brace drill.",
    xpReward: 75,
    statKey: "power",
    statGain: 2,
    safety: "Stop two clean reps before form breaks."
  },
  {
    id: "daily-roadwork",
    type: "daily",
    title: "Roadwork Engine",
    description: "Zone-2 walk/run or bike work for 20-35 minutes.",
    xpReward: 80,
    statKey: "endurance",
    statGain: 2,
    safety: "Keep breathing controlled; this is base-building, not punishment."
  },
  {
    id: "daily-skill-reps",
    type: "daily",
    title: "Martial Skill Reps",
    description: "20 minutes of shadowboxing, stance, footwork, or selected style drills.",
    xpReward: 90,
    statKey: "technique",
    statGain: 2,
    safety: "Precision beats speed. No hard sparring requirement."
  },
  {
    id: "weekly-full-body-strength",
    type: "weekly",
    title: "Full-Body Strength",
    description: "Squat/hinge, push, pull, carry, and trunk block scaled to equipment.",
    xpReward: 180,
    statKey: "power",
    statGain: 4,
    safety: "Use progressive overload and leave one clean rep in reserve."
  },
  {
    id: "weekly-precision-day",
    type: "weekly",
    title: "Precision Day",
    description: "One selected martial-art technique tree practiced slowly with video review.",
    xpReward: 160,
    statKey: "sense",
    statGain: 4,
    safety: "Review alignment before increasing intensity."
  },
  {
    id: "boss-clean-rounds",
    type: "boss",
    title: "Boss Test: Clean Rounds",
    description: "Three controlled rounds with stance, guard recovery, and footwork kept clean.",
    xpReward: 300,
    statKey: "conviction",
    statGain: 6,
    safety: "Technique assessment only; no full-contact fight test."
  }
];

export function questById(id: string): Quest | undefined {
  return QUEST_CATALOG.find((quest) => quest.id === id);
}

export function personalizedQuestIds(category: string): string[] {
  const lower = category.toLowerCase();
  if (lower.includes("overweight") || lower.includes("weak")) {
    return ["daily-mobility-reset", "daily-roadwork", "daily-skill-reps", "weekly-full-body-strength"];
  }
  if (lower.includes("technical") || lower.includes("copy")) {
    return ["daily-skill-reps", "weekly-precision-day", "daily-mobility-reset", "boss-clean-rounds"];
  }
  return ["daily-push-pull-core", "daily-roadwork", "daily-skill-reps", "weekly-full-body-strength"];
}
