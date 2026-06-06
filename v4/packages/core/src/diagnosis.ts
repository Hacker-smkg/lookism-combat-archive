import type { DiagnosisResult, ProfileInput, SystemStatKey, SystemStats } from "./types";
import { defaultSystemStats } from "./xp";

function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function bmi(profile: ProfileInput): number | null {
  if (!profile.heightCm || !profile.weightKg) return null;
  const meters = profile.heightCm / 100;
  if (meters <= 0) return null;
  return profile.weightKg / (meters * meters);
}

export function analyzeProfile(profile: ProfileInput): DiagnosisResult {
  const profileBmi = bmi(profile);
  const trainingMonths = profile.trainingAgeMonths ?? 0;
  const days = profile.daysPerWeek ?? 3;
  const pullups = profile.maxPullups ?? 0;
  const pushups = profile.maxPushups ?? 0;
  const plank = profile.plankSeconds ?? 0;
  const mile = profile.mileMinutes ?? 14;
  const strengthScore = (profile.benchKg ?? 0) * 0.15 + (profile.squatKg ?? 0) * 0.12 + (profile.deadliftKg ?? 0) * 0.1 + pullups * 3 + pushups * 0.8;

  const stats: SystemStats = {
    ...defaultSystemStats(),
    power: clamp(12 + strengthScore),
    speed: clamp(18 + Math.max(0, 14 - mile) * 5 + trainingMonths * 0.3),
    endurance: clamp(15 + Math.max(0, 180 - (profile.fiveKMinutes ?? 45) * 4) * 0.25 + plank * 0.1 + days * 4),
    technique: clamp(12 + trainingMonths * 1.1 + (profile.martialExperience ? 8 : 0)),
    sense: clamp(18 + trainingMonths * 0.8 + days * 3),
    conviction: clamp(35 + days * 5 + (profile.goal ? 8 : 0))
  };

  const overall = clamp(Object.values(stats).reduce((sum, value) => sum + value, 0) / 6);
  const blockers: string[] = [];
  const safetyNotes: string[] = ["Fictional UI, Path, and mastery labels are motivational only."];
  if (!profile.age || !profile.heightCm || !profile.weightKg) blockers.push("Complete age, height, and weight for accurate diagnosis");
  if (profileBmi && profileBmi >= 28) blockers.push("Bodyweight reset and joint-friendly conditioning need priority");
  if (pullups <= 1) blockers.push("Pulling strength needs a beginner progression");
  if (mile >= 12) blockers.push("Aerobic base needs steady roadwork");
  if (profile.injuryLimits) safetyNotes.push("Injury limits detected: keep recovery and professional guidance in the loop.");

  const category = overall < 35
    ? profileBmi && profileBmi >= 28 ? "Weak Daniel · Overweight Reset" : "Weak Daniel"
    : overall < 50
      ? "Civilian Reset"
      : overall < 68
        ? "Fighter"
        : overall < 82
          ? "Crew Member"
          : "Crew Head";

  const weakest = (Object.entries(stats).sort((a, b) => a[1] - b[1])[0]?.[0] ?? "endurance") as SystemStatKey;
  const recommendedMastery = weakest === "power" ? "Strength" : weakest === "speed" ? "Speed" : weakest === "technique" ? "Technique" : weakest === "conviction" ? "Conviction" : "Endurance";

  return {
    currentCategory: category,
    nextCategory: category.startsWith("Weak") ? "Civilian Reset" : category === "Civilian Reset" ? "Fighter" : category === "Fighter" ? "Crew Member" : "Crew Head",
    overall,
    stats,
    blockers: blockers.length ? blockers : ["No major blocker flagged; consistency becomes the main test"],
    recommendedMastery,
    recommendedFighterType: weakest === "technique" ? "Copy + UI Engine" : weakest === "speed" ? "Speed Legend" : weakest === "power" ? "King Strength" : "Iron Boxing",
    recommendedArt: weakest === "technique" ? "Copy-Adaptive MMA" : weakest === "speed" ? "Taekwondo / Capoeira" : weakest === "power" ? "Boxing / Kyokushin" : "Boxing / Iron Boxing",
    safetyNotes
  };
}
