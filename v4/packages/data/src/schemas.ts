import { z } from "zod";

const optionalNumber = (schema: z.ZodNumber) =>
  z.preprocess((value) => (value === "" || value === null ? undefined : value), schema.optional());

export const systemStatSchema = z.object({
  power: z.number().min(0).max(100),
  speed: z.number().min(0).max(100),
  endurance: z.number().min(0).max(100),
  technique: z.number().min(0).max(100),
  sense: z.number().min(0).max(100),
  conviction: z.number().min(0).max(100)
});

export const profileInputSchema = z.object({
  age: optionalNumber(z.coerce.number().int().min(10).max(90)),
  heightCm: optionalNumber(z.coerce.number().min(100).max(230)),
  weightKg: optionalNumber(z.coerce.number().min(25).max(250)),
  bodyFatPct: optionalNumber(z.coerce.number().min(3).max(70)),
  trainingAgeMonths: optionalNumber(z.coerce.number().min(0).max(600)),
  daysPerWeek: optionalNumber(z.coerce.number().int().min(1).max(7)),
  sessionMinutes: optionalNumber(z.coerce.number().int().min(10).max(240)),
  goal: z.string().max(80).optional(),
  equipment: z.string().max(120).optional(),
  injuryLimits: z.string().max(500).optional(),
  martialExperience: z.string().max(300).optional(),
  benchKg: optionalNumber(z.coerce.number().min(0).max(400)),
  squatKg: optionalNumber(z.coerce.number().min(0).max(500)),
  deadliftKg: optionalNumber(z.coerce.number().min(0).max(600)),
  overheadPressKg: optionalNumber(z.coerce.number().min(0).max(250)),
  maxPullups: optionalNumber(z.coerce.number().min(0).max(100)),
  maxPushups: optionalNumber(z.coerce.number().min(0).max(300)),
  plankSeconds: optionalNumber(z.coerce.number().min(0).max(1800)),
  mileMinutes: optionalNumber(z.coerce.number().min(3).max(60)),
  fiveKMinutes: optionalNumber(z.coerce.number().min(10).max(120))
});

export const diagnosisResultSchema = z.object({
  currentCategory: z.string(),
  nextCategory: z.string(),
  overall: z.number().min(0).max(100),
  stats: systemStatSchema,
  blockers: z.array(z.string()),
  recommendedMastery: z.string(),
  recommendedFighterType: z.string(),
  recommendedArt: z.string(),
  safetyNotes: z.array(z.string())
});

export const journeyPlanSchema = z.object({
  currentCategory: z.string(),
  nextCategory: z.string(),
  xpTarget: z.number().min(0),
  statPriorities: z.array(z.enum(["power", "speed", "endurance", "technique", "sense", "conviction"])),
  weeklySchedule: z.array(z.string()),
  questFocus: z.array(z.string()),
  recommendedMastery: z.string(),
  recommendedFighterType: z.string(),
  recommendedArt: z.string()
});

export const progressStateSchema = z.object({
  totalXp: z.number().min(0),
  level: z.number().int().min(1).max(100),
  stats: systemStatSchema,
  completedQuestIds: z.array(z.string()),
  streak: z.number().int().min(0),
  selectedPath: z.string().optional(),
  penaltyDebt: z.boolean(),
  lastActiveDate: z.string().optional(),
  streakAwardedDate: z.string().optional()
});

export const questCompletionSchema = z.object({
  questId: z.string(),
  questType: z.enum(["daily", "weekly", "boss", "technique", "mastery", "fighter_type"]),
  title: z.string(),
  xpReward: z.number().min(0),
  statKey: z.enum(["power", "speed", "endurance", "technique", "sense", "conviction"]),
  statGain: z.number().min(0),
  completedOn: z.string()
});

export const trainingProgramProgressSchema = z.object({
  programKey: z.string(),
  programType: z.enum(["art", "mastery", "fighter"]),
  programId: z.string(),
  xp: z.number().min(0),
  completedLevelIds: z.array(z.string()),
  lastTrainedAt: z.string().optional(),
  notes: z.string()
});

export const userSettingsSchema = z.object({
  onboardingStep: z.string().optional(),
  awakeningAccepted: z.boolean().default(false),
  guestMode: z.boolean().default(false),
  lastVisitedView: z.string().default("system"),
  diagnosisCompleted: z.boolean().default(false),
  migration: z.object({
    v3Imported: z.boolean().default(false),
    importedAt: z.string().optional()
  }).default({ v3Imported: false })
});

export const coachMessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string().max(4000),
  createdAt: z.string(),
  suggestions: z.array(z.string()).default([])
});

export type ProfileInputModel = z.infer<typeof profileInputSchema>;
export type DiagnosisResultModel = z.infer<typeof diagnosisResultSchema>;
export type JourneyPlanModel = z.infer<typeof journeyPlanSchema>;
export type ProgressStateModel = z.infer<typeof progressStateSchema>;
export type UserSettingsModel = z.infer<typeof userSettingsSchema>;
