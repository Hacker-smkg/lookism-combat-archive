import { analyzeProfile, buildJourney, createInitialProgress, levelFromXp, type DiagnosisResult, type JourneyPlan, type ProgressState, type TrainingProgramProgress } from "@lookism/core";

export const V3_STORAGE_KEYS = {
  progress: "lookismSystemProgress:v1",
  profile: "lookismProfileDiagnosis:v1",
  chat: "lookismSystemChat:v1",
  onboarding: "lookismOnboarding:v1",
  trainingProgress: "lookismTrainingProgress:v1",
  userSettings: "lookismUserSettings:v1",
  trainingLogs: "lookismTrainingLogs:v1"
} as const;

export interface V4PersistedState {
  progress: ProgressState;
  profile: Record<string, unknown>;
  analysis: DiagnosisResult | null;
  journey: JourneyPlan | null;
  trainingProgress: Record<string, TrainingProgramProgress>;
  importedQuestIds: string[];
  importedAt: string;
}

function parse(raw: string | null): unknown {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function numberFrom(value: unknown, fallback = 0): number {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

export function migrateV3LocalState(raw: Partial<Record<keyof typeof V3_STORAGE_KEYS, string | null>>): V4PersistedState {
  const oldProgress = parse(raw.progress ?? null) as Record<string, unknown> | null;
  const oldProfileState = parse(raw.profile ?? null) as Record<string, unknown> | null;
  const oldTraining = parse(raw.trainingProgress ?? null) as Record<string, unknown> | null;

  const totalXp = numberFrom(oldProgress?.totalXp, 0);
  const completedQuestIds = Array.isArray(oldProgress?.completedQuestIds)
    ? oldProgress.completedQuestIds.map(String)
    : [];

  const progress: ProgressState = {
    ...createInitialProgress(),
    totalXp,
    level: levelFromXp(totalXp),
    stats: {
      ...createInitialProgress().stats,
      ...(typeof oldProgress?.stats === "object" && oldProgress.stats ? oldProgress.stats : {})
    },
    completedQuestIds: Array.from(new Set(completedQuestIds)),
    streak: numberFrom(oldProgress?.streak, 0),
    selectedPath: typeof oldProgress?.selectedPath === "string" ? oldProgress.selectedPath : undefined,
    penaltyDebt: Boolean(oldProgress?.penaltyDebt),
    lastActiveDate: typeof oldProgress?.lastActiveDate === "string" ? oldProgress.lastActiveDate : undefined,
    streakAwardedDate: typeof oldProgress?.streakAwardedDate === "string" ? oldProgress.streakAwardedDate : undefined
  };

  const profile = (oldProfileState?.profile ?? oldProfileState ?? {}) as Record<string, unknown>;
  const analysis = oldProfileState?.analysis && typeof oldProfileState.analysis === "object"
    ? oldProfileState.analysis as DiagnosisResult
    : Object.keys(profile).length ? analyzeProfile(profile as never) : null;
  const journey = analysis ? buildJourney(analysis) : null;

  const trainingProgress: Record<string, TrainingProgramProgress> = {};
  if (oldTraining && typeof oldTraining === "object") {
    for (const [programKey, value] of Object.entries(oldTraining)) {
      const item = value as Record<string, unknown>;
      trainingProgress[programKey] = {
        programKey,
        programType: item.type === "mastery" || item.type === "fighter" ? item.type : "art",
        programId: typeof item.programId === "string" ? item.programId : programKey,
        xp: numberFrom(item.xp, 0),
        completedLevelIds: Array.isArray(item.completedLevelIds) ? item.completedLevelIds.map(String) : [],
        lastTrainedAt: typeof item.lastTrainedAt === "string" ? item.lastTrainedAt : undefined,
        notes: typeof item.notes === "string" ? item.notes : ""
      };
    }
  }

  return {
    progress,
    profile,
    analysis,
    journey,
    trainingProgress,
    importedQuestIds: progress.completedQuestIds,
    importedAt: new Date().toISOString()
  };
}
