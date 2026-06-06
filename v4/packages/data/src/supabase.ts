import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { ProgressState, TrainingProgramProgress } from "@lookism/core";
import type { DiagnosisResultModel, JourneyPlanModel, ProfileInputModel, UserSettingsModel } from "./schemas";

export interface SupabaseRuntimeConfig {
  url: string;
  anonKey: string;
}

export function getSupabaseConfigFromEnv(env: Record<string, string | undefined>): SupabaseRuntimeConfig | null {
  const url = env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL || env.EXPO_PUBLIC_SUPABASE_URL || "";
  const anonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "";
  return url && anonKey ? { url, anonKey } : null;
}

export function createSupabaseBrowserClient(config: SupabaseRuntimeConfig): SupabaseClient {
  return createClient(config.url, config.anonKey, {
    auth: { persistSession: true, autoRefreshToken: true }
  });
}

export function cloudProgressPayload(userId: string, progress: ProgressState) {
  return {
    user_id: userId,
    total_xp: progress.totalXp,
    level: progress.level,
    stats: progress.stats,
    completed_quest_ids: progress.completedQuestIds,
    streak: progress.streak,
    selected_path: progress.selectedPath ?? null,
    penalty_debt: progress.penaltyDebt,
    last_active_date: progress.lastActiveDate ?? null,
    streak_awarded_date: progress.streakAwardedDate ?? null
  };
}

export function cloudProfilePayload(userId: string, email: string | null, profile: ProfileInputModel, analysis: DiagnosisResultModel | null, journey: JourneyPlanModel | null) {
  return {
    user_id: userId,
    email,
    profile_data: profile,
    latest_analysis: analysis,
    applied_journey: journey
  };
}

export function cloudTrainingProgressPayload(userId: string, item: TrainingProgramProgress) {
  return {
    user_id: userId,
    program_key: item.programKey,
    program_type: item.programType,
    program_id: item.programId,
    xp: item.xp,
    completed_level_ids: item.completedLevelIds,
    last_trained_at: item.lastTrainedAt ?? null,
    notes: item.notes
  };
}

export async function syncCoreState(client: SupabaseClient, userId: string, email: string | null, input: {
  profile: ProfileInputModel;
  analysis: DiagnosisResultModel | null;
  journey: JourneyPlanModel | null;
  progress: ProgressState;
  settings: UserSettingsModel;
}) {
  const [profileResult, progressResult, settingsResult] = await Promise.all([
    client.from("profiles").upsert(cloudProfilePayload(userId, email, input.profile, input.analysis, input.journey), { onConflict: "user_id" }),
    client.from("progress").upsert(cloudProgressPayload(userId, input.progress), { onConflict: "user_id" }),
    client.from("user_settings").upsert({ user_id: userId, settings: input.settings }, { onConflict: "user_id" })
  ]);
  const error = profileResult.error || progressResult.error || settingsResult.error;
  if (error) throw error;
}
