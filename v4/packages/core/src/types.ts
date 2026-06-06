export type SystemStatKey = "power" | "speed" | "endurance" | "technique" | "sense" | "conviction";

export type SystemStats = Record<SystemStatKey, number>;

export type RankKey =
  | "weak-daniel"
  | "civilian-reset"
  | "fighter"
  | "crew-member"
  | "crew-head"
  | "king-candidate"
  | "first-gen-king"
  | "ten-geniuses"
  | "path-walker"
  | "pinnacle-legend";

export type QuestType = "daily" | "weekly" | "boss" | "technique" | "mastery" | "fighter_type";

export interface Rank {
  key: RankKey;
  label: string;
  ko: string;
  minLevel: number;
  maxLevel: number;
  color: string;
  description: string;
}

export interface ProfileInput {
  age?: number;
  heightCm?: number;
  weightKg?: number;
  bodyFatPct?: number;
  trainingAgeMonths?: number;
  daysPerWeek?: number;
  sessionMinutes?: number;
  goal?: string;
  equipment?: string;
  injuryLimits?: string;
  martialExperience?: string;
  benchKg?: number;
  squatKg?: number;
  deadliftKg?: number;
  overheadPressKg?: number;
  maxPullups?: number;
  maxPushups?: number;
  plankSeconds?: number;
  mileMinutes?: number;
  fiveKMinutes?: number;
}

export interface DiagnosisResult {
  currentCategory: string;
  nextCategory: string;
  overall: number;
  stats: SystemStats;
  blockers: string[];
  recommendedMastery: string;
  recommendedFighterType: string;
  recommendedArt: string;
  safetyNotes: string[];
}

export interface JourneyPlan {
  currentCategory: string;
  nextCategory: string;
  xpTarget: number;
  statPriorities: SystemStatKey[];
  weeklySchedule: string[];
  questFocus: string[];
  recommendedMastery: string;
  recommendedFighterType: string;
  recommendedArt: string;
}

export interface Quest {
  id: string;
  type: QuestType;
  title: string;
  description: string;
  xpReward: number;
  statKey: SystemStatKey;
  statGain: number;
  safety: string;
}

export interface QuestCompletion {
  questId: string;
  questType: QuestType;
  title: string;
  xpReward: number;
  statKey: SystemStatKey;
  statGain: number;
  completedOn: string;
}

export interface ProgressState {
  totalXp: number;
  level: number;
  stats: SystemStats;
  completedQuestIds: string[];
  streak: number;
  selectedPath?: string;
  penaltyDebt: boolean;
  lastActiveDate?: string;
  streakAwardedDate?: string;
}

export interface TrainingLevel {
  id: string;
  label: string;
  weeks: string;
  schedule: string[];
  precision: string[];
  mistakes: string[];
  unlockTest: string;
  xpReward: number;
}

export interface TrainingProgram {
  id: string;
  type: "art" | "mastery" | "fighter";
  title: string;
  subtitle: string;
  linkedFighters: string[];
  statFocus: SystemStatKey[];
  levels: TrainingLevel[];
}

export interface TrainingProgramProgress {
  programKey: string;
  programType: "art" | "mastery" | "fighter";
  programId: string;
  xp: number;
  completedLevelIds: string[];
  lastTrainedAt?: string;
  notes: string;
}

export interface FighterProfile {
  id: string;
  rank: number;
  name: string;
  aliases: string[];
  tier: string;
  primaryTechniques: string;
  uniqueSkill: string;
  masteriesAchieved: string;
  combatPath: string;
  linkedPrograms: string[];
}

export interface PromotionReview {
  currentRank: string;
  nextRank: string;
  ready: boolean;
  statAverage: number;
  requirements: string[];
}
