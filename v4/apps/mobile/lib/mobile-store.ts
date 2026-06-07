import "expo-sqlite/localStorage/install";

import {
  analyzeProfile,
  buildJourney,
  completeQuest,
  createInitialProgress,
  levelFromXp,
  promotionReview,
  questById,
  trainingProgramById,
  undoQuest,
  type DiagnosisResult,
  type JourneyPlan,
  type ProfileInput,
  type ProgressState,
  type QuestCompletion,
  type SystemStatKey,
  type TrainingProgramProgress
} from "@lookism/core";
import {
  cloudTrainingProgressPayload,
  diagnosisResultSchema,
  journeyPlanSchema,
  profileInputSchema,
  progressStateSchema,
  questCompletionSchema,
  syncCoreState,
  userSettingsSchema,
  V4_STORAGE_KEYS,
  type CoachMessage,
  type UserSettingsModel
} from "@lookism/data";
import { useMemo } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cloudConfigMessage, getMobileSupabaseClient } from "./mobile-supabase";

type CloudStatus = "guest" | "signed-out" | "signed-in" | "syncing" | "error";

interface MobileSystemStore {
  profile: ProfileInput;
  analysis: DiagnosisResult | null;
  journey: JourneyPlan | null;
  progress: ProgressState;
  questHistory: QuestCompletion[];
  trainingProgress: Record<string, TrainingProgramProgress>;
  coachMessages: CoachMessage[];
  awakeningAccepted: boolean;
  guestMode: boolean;
  userId: string | null;
  userEmail: string | null;
  cloudStatus: CloudStatus;
  cloudMessage: string;
  continueAsGuest: () => void;
  initializeCloudSession: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  syncToCloud: () => Promise<boolean>;
  restoreCloudState: () => Promise<boolean>;
  acceptAwakening: () => void;
  runDiagnosis: (profile: ProfileInput) => void;
  completeQuestById: (questId: string) => void;
  undoLastQuest: () => void;
  completeTrainingLevel: (programId: string, levelId: string) => void;
  undoTrainingLevel: (programId: string, levelId: string) => void;
  appendCoachMessage: (message: CoachMessage) => void;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function emptyTrainingProgress(programId: string): TrainingProgramProgress | null {
  const program = trainingProgramById(programId);
  if (!program) return null;
  return {
    programKey: program.id,
    programType: program.type,
    programId: program.id,
    xp: 0,
    completedLevelIds: [],
    notes: ""
  };
}

function settingsFromState(state: MobileSystemStore): UserSettingsModel {
  return userSettingsSchema.parse({
    awakeningAccepted: state.awakeningAccepted,
    guestMode: state.guestMode,
    lastVisitedView: "system",
    diagnosisCompleted: Boolean(state.analysis),
    migration: { v3Imported: false }
  });
}

function parseCloudProgress(row: Record<string, unknown> | null): ProgressState | null {
  if (!row) return null;
  const parsed = progressStateSchema.safeParse({
    totalXp: row.total_xp,
    level: row.level,
    stats: row.stats,
    completedQuestIds: row.completed_quest_ids,
    streak: row.streak,
    selectedPath: row.selected_path ?? undefined,
    penaltyDebt: row.penalty_debt,
    lastActiveDate: row.last_active_date ?? undefined,
    streakAwardedDate: row.streak_awarded_date ?? undefined
  });
  return parsed.success ? parsed.data : null;
}

function parseCloudQuest(row: Record<string, unknown>): QuestCompletion | null {
  const parsed = questCompletionSchema.safeParse({
    questId: row.quest_id,
    questType: row.quest_type,
    title: row.title,
    xpReward: row.xp_reward,
    statKey: row.stat_key,
    statGain: row.stat_gain,
    completedOn: row.completed_on
  });
  return parsed.success ? parsed.data : null;
}

function parseCloudTraining(rows: Record<string, unknown>[]): Record<string, TrainingProgramProgress> {
  return rows.reduce<Record<string, TrainingProgramProgress>>((acc, row) => {
    const programKey = String(row.program_key || row.program_id || "");
    const program = trainingProgramById(String(row.program_id || programKey));
    if (!programKey || !program) return acc;
    acc[programKey] = {
      programKey,
      programType: program.type,
      programId: program.id,
      xp: Number(row.xp || 0),
      completedLevelIds: Array.isArray(row.completed_level_ids) ? row.completed_level_ids.map(String) : [],
      lastTrainedAt: typeof row.last_trained_at === "string" ? row.last_trained_at : undefined,
      notes: typeof row.notes === "string" ? row.notes : ""
    };
    return acc;
  }, {});
}

async function insertDiagnosisReport(userId: string | null, profile: ProfileInput, analysis: DiagnosisResult | null) {
  if (!userId || !analysis) return;
  const client = getMobileSupabaseClient();
  if (!client) return;
  await client.from("diagnosis_reports").insert({
    user_id: userId,
    input_profile: profile,
    analysis
  });
}

async function deleteCloudQuest(userId: string | null, completion: QuestCompletion | undefined) {
  if (!userId || !completion) return;
  const client = getMobileSupabaseClient();
  if (!client) return;
  await client
    .from("quest_completions")
    .delete()
    .eq("user_id", userId)
    .eq("quest_id", completion.questId)
    .eq("completed_on", completion.completedOn);
}

export const useMobileSystemStore = create<MobileSystemStore>()(persist((set, get) => ({
  profile: {},
  analysis: null,
  journey: null,
  progress: createInitialProgress(),
  questHistory: [],
  trainingProgress: {},
  coachMessages: [],
  awakeningAccepted: false,
  guestMode: false,
  userId: null,
  userEmail: null,
  cloudStatus: "signed-out",
  cloudMessage: cloudConfigMessage(),
  continueAsGuest: () => set({ guestMode: true, cloudStatus: "guest", cloudMessage: "Guest mode active. Progress is saved on this device only." }),
  initializeCloudSession: async () => {
    const client = getMobileSupabaseClient();
    if (!client) {
      set({ cloudStatus: "signed-out", cloudMessage: cloudConfigMessage() });
      return;
    }
    try {
      const { data, error } = await client.auth.getSession();
      if (error) {
        set({ cloudStatus: "error", cloudMessage: error.message });
        return;
      }
      const user = data.session?.user;
      if (!user) {
        set({ cloudStatus: "signed-out", cloudMessage: "Cloud ready. Sign in or continue as guest." });
        return;
      }
      set({ userId: user.id, userEmail: user.email ?? null, cloudStatus: "signed-in", guestMode: false });
      await get().restoreCloudState();
    } catch (error) {
      set({ cloudStatus: "error", cloudMessage: error instanceof Error ? error.message : "Cloud session restore failed." });
    }
  },
  signIn: async (email, password) => {
    const client = getMobileSupabaseClient();
    if (!client) {
      set({ cloudStatus: "error", cloudMessage: cloudConfigMessage() });
      return;
    }
    if (!email || !password) {
      set({ cloudStatus: "error", cloudMessage: "Enter email and password for cloud sync." });
      return;
    }
    set({ cloudStatus: "syncing", cloudMessage: "Signing in..." });
    try {
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error || !data.user) {
        set({ cloudStatus: "error", cloudMessage: `Cloud auth failed: ${error?.message ?? "No user returned."}` });
        return;
      }
      set({ userId: data.user.id, userEmail: data.user.email ?? email, guestMode: false, cloudStatus: "signed-in" });
      const restored = await get().restoreCloudState();
      if (!restored) await get().syncToCloud();
    } catch (error) {
      set({ cloudStatus: "error", cloudMessage: `Cloud auth failed: ${error instanceof Error ? error.message : "Unexpected mobile auth error."}` });
    }
  },
  signUp: async (email, password) => {
    const client = getMobileSupabaseClient();
    if (!client) {
      set({ cloudStatus: "error", cloudMessage: cloudConfigMessage() });
      return;
    }
    if (!email || !password) {
      set({ cloudStatus: "error", cloudMessage: "Enter email and password for cloud sync." });
      return;
    }
    set({ cloudStatus: "syncing", cloudMessage: "Creating account..." });
    try {
      const { data, error } = await client.auth.signUp({ email, password });
      if (error) {
        set({ cloudStatus: "error", cloudMessage: `Cloud signup failed: ${error.message}` });
        return;
      }
      if (!data.session || !data.user) {
        set({ cloudStatus: "signed-out", cloudMessage: "Account created. Check email verification if Supabase requires it, then sign in." });
        return;
      }
      set({ userId: data.user.id, userEmail: data.user.email ?? email, guestMode: false, cloudStatus: "signed-in", cloudMessage: "Account created and signed in." });
      await get().syncToCloud();
    } catch (error) {
      set({ cloudStatus: "error", cloudMessage: `Cloud signup failed: ${error instanceof Error ? error.message : "Unexpected mobile signup error."}` });
    }
  },
  signOut: async () => {
    const client = getMobileSupabaseClient();
    try {
      if (client) await client.auth.signOut();
    } catch {
      // Local sign-out should still succeed even if the cloud call is unreachable.
    }
    set({ userId: null, userEmail: null, cloudStatus: "signed-out", cloudMessage: "Signed out. Local state remains available on this device." });
  },
  syncToCloud: async () => {
    const client = getMobileSupabaseClient();
    const state = get();
    if (!client || !state.userId) {
      set({ cloudStatus: state.guestMode ? "guest" : "signed-out", cloudMessage: state.guestMode ? "Guest mode is local-only." : cloudConfigMessage() });
      return false;
    }
    set({ cloudStatus: "syncing", cloudMessage: "Syncing profile, progress, quests, and training..." });
    try {
      await syncCoreState(client, state.userId, state.userEmail, {
        profile: profileInputSchema.parse(state.profile),
        analysis: state.analysis,
        journey: state.journey,
        progress: state.progress,
        settings: settingsFromState(state)
      });
      const questRows = state.questHistory.map((item) => ({
        user_id: state.userId,
        quest_id: item.questId,
        quest_type: item.questType,
        title: item.title,
        xp_reward: item.xpReward,
        stat_key: item.statKey,
        stat_gain: item.statGain,
        completed_on: item.completedOn,
        quest_payload: item
      }));
      if (questRows.length) {
        const { error } = await client.from("quest_completions").upsert(questRows, { onConflict: "user_id,quest_id,completed_on" });
        if (error) throw error;
      }
      const trainingRows = Object.values(state.trainingProgress).map((item) => cloudTrainingProgressPayload(state.userId as string, item));
      if (trainingRows.length) {
        const { error } = await client.from("training_progress").upsert(trainingRows, { onConflict: "user_id,program_key" });
        if (error) throw error;
      }
      set({ cloudStatus: "signed-in", cloudMessage: `Cloud synced at ${new Date().toLocaleTimeString()}.` });
      return true;
    } catch (error) {
      set({ cloudStatus: "error", cloudMessage: error instanceof Error ? error.message : "Cloud sync failed." });
      return false;
    }
  },
  restoreCloudState: async () => {
    const client = getMobileSupabaseClient();
    const state = get();
    if (!client || !state.userId) return false;
    set({ cloudStatus: "syncing", cloudMessage: "Restoring cloud save..." });
    try {
      const [profileResult, progressResult, questResult, trainingResult, settingsResult] = await Promise.all([
        client.from("profiles").select("*").eq("user_id", state.userId).maybeSingle(),
        client.from("progress").select("*").eq("user_id", state.userId).maybeSingle(),
        client.from("quest_completions").select("*").eq("user_id", state.userId).order("completed_at", { ascending: false }).limit(80),
        client.from("training_progress").select("*").eq("user_id", state.userId),
        client.from("user_settings").select("*").eq("user_id", state.userId).maybeSingle()
      ]);
      const error = profileResult.error || progressResult.error || questResult.error || trainingResult.error || settingsResult.error;
      if (error) throw error;

      const profileRow = profileResult.data as Record<string, unknown> | null;
      const progress = parseCloudProgress(progressResult.data as Record<string, unknown> | null);
      const profile = profileRow ? profileInputSchema.parse(profileRow.profile_data ?? {}) : null;
      const analysis = profileRow?.latest_analysis ? diagnosisResultSchema.parse(profileRow.latest_analysis) : null;
      const journey = profileRow?.applied_journey ? journeyPlanSchema.parse(profileRow.applied_journey) : analysis ? buildJourney(analysis) : null;
      const questHistory = Array.isArray(questResult.data) ? questResult.data.map((row) => parseCloudQuest(row as Record<string, unknown>)).filter((item): item is QuestCompletion => Boolean(item)) : [];
      const trainingProgress = Array.isArray(trainingResult.data) ? parseCloudTraining(trainingResult.data as Record<string, unknown>[]) : {};
      const settings = userSettingsSchema.safeParse((settingsResult.data as Record<string, unknown> | null)?.settings ?? {});
      const hasCloudData = Boolean(profile || progress || questHistory.length || Object.keys(trainingProgress).length);

      if (hasCloudData) {
        set({
          profile: profile ?? state.profile,
          analysis: analysis ?? state.analysis,
          journey: journey ?? state.journey,
          progress: progress ?? state.progress,
          questHistory: questHistory.length ? questHistory : state.questHistory,
          trainingProgress: Object.keys(trainingProgress).length ? trainingProgress : state.trainingProgress,
          awakeningAccepted: settings.success ? settings.data.awakeningAccepted : state.awakeningAccepted,
          guestMode: false,
          cloudStatus: "signed-in",
          cloudMessage: "Cloud save restored."
        });
      } else {
        set({ guestMode: false, cloudStatus: "signed-in", cloudMessage: "Signed in. No cloud save found yet, local state is ready to sync." });
      }
      return hasCloudData;
    } catch (error) {
      set({ cloudStatus: "error", cloudMessage: error instanceof Error ? error.message : "Cloud restore failed." });
      return false;
    }
  },
  acceptAwakening: () => {
    set({ awakeningAccepted: true });
    if (get().userId) void get().syncToCloud();
  },
  runDiagnosis: (profile) => {
    const analysis = analyzeProfile(profile);
    const journey = buildJourney(analysis);
    set((state) => ({
      profile,
      analysis,
      journey,
      progress: { ...state.progress, stats: { ...state.progress.stats, ...analysis.stats } }
    }));
    void insertDiagnosisReport(get().userId, profile, analysis);
    if (get().userId) void get().syncToCloud();
  },
  completeQuestById: (questId) => {
    const quest = questById(questId);
    if (!quest) return;
    const completedOn = todayKey();
    const completionKey = `${quest.id}:${completedOn}`;
    if (get().progress.completedQuestIds.includes(completionKey)) return;
    set((state) => ({
      progress: completeQuest(state.progress, quest, completedOn),
      questHistory: [{
        questId: quest.id,
        questType: quest.type,
        title: quest.title,
        xpReward: quest.xpReward,
        statKey: quest.statKey,
        statGain: quest.statGain,
        completedOn
      }, ...state.questHistory].slice(0, 80)
    }));
    if (get().userId) void get().syncToCloud();
  },
  undoLastQuest: () => {
    const [latest, ...rest] = get().questHistory;
    if (!latest) return;
    set((state) => ({ progress: undoQuest(state.progress, latest), questHistory: rest }));
    void deleteCloudQuest(get().userId, latest);
    if (get().userId) void get().syncToCloud();
  },
  completeTrainingLevel: (programId, levelId) => {
    const program = trainingProgramById(programId);
    const level = program?.levels.find((item) => item.id === levelId);
    if (!program || !level) return;
    const current = get().trainingProgress[program.id] ?? emptyTrainingProgress(program.id);
    if (!current || current.completedLevelIds.includes(level.id)) return;
    set((state) => {
      const totalXp = state.progress.totalXp + level.xpReward;
      const stats = { ...state.progress.stats };
      program.statFocus.forEach((key: SystemStatKey) => {
        stats[key] = Math.min(100, (stats[key] ?? 0) + 2);
      });
      return {
        progress: { ...state.progress, totalXp, level: levelFromXp(totalXp), stats, lastActiveDate: todayKey() },
        trainingProgress: {
          ...state.trainingProgress,
          [program.id]: {
            ...current,
            xp: current.xp + level.xpReward,
            completedLevelIds: [...current.completedLevelIds, level.id],
            lastTrainedAt: new Date().toISOString()
          }
        }
      };
    });
    if (get().userId) void get().syncToCloud();
  },
  undoTrainingLevel: (programId, levelId) => {
    const program = trainingProgramById(programId);
    const level = program?.levels.find((item) => item.id === levelId);
    const current = program ? get().trainingProgress[program.id] : null;
    if (!program || !level || !current?.completedLevelIds.includes(level.id)) return;
    set((state) => {
      const totalXp = Math.max(0, state.progress.totalXp - level.xpReward);
      const stats = { ...state.progress.stats };
      program.statFocus.forEach((key: SystemStatKey) => {
        stats[key] = Math.max(0, (stats[key] ?? 0) - 2);
      });
      return {
        progress: { ...state.progress, totalXp, level: levelFromXp(totalXp), stats },
        trainingProgress: {
          ...state.trainingProgress,
          [program.id]: {
            ...current,
            xp: Math.max(0, current.xp - level.xpReward),
            completedLevelIds: current.completedLevelIds.filter((id) => id !== level.id),
            lastTrainedAt: new Date().toISOString()
          }
        }
      };
    });
    if (get().userId) void get().syncToCloud();
  },
  appendCoachMessage: (message) => set((state) => ({ coachMessages: [...state.coachMessages, message].slice(-40) }))
}), {
  name: V4_STORAGE_KEYS.progress,
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => ({
    profile: state.profile,
    analysis: state.analysis,
    journey: state.journey,
    progress: state.progress,
    questHistory: state.questHistory,
    trainingProgress: state.trainingProgress,
    coachMessages: state.coachMessages,
    awakeningAccepted: state.awakeningAccepted,
    guestMode: state.guestMode,
    userId: state.userId,
    userEmail: state.userEmail,
    cloudStatus: state.cloudStatus,
    cloudMessage: state.cloudMessage
  })
}));

export function useMobilePromotion() {
  const progress = useMobileSystemStore((state) => state.progress);
  return useMemo(() => promotionReview(progress), [progress]);
}
