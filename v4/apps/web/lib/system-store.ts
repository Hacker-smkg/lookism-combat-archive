"use client";

import { analyzeProfile, buildJourney, completeQuest, createInitialProgress, promotionReview, questById, undoQuest, type DiagnosisResult, type JourneyPlan, type ProfileInput, type ProgressState, type QuestCompletion, type TrainingProgramProgress } from "@lookism/core";
import { migrateV3LocalState, V3_STORAGE_KEYS, V4_STORAGE_KEYS } from "@lookism/data";
import { useMemo } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SystemStore {
  profile: ProfileInput;
  analysis: DiagnosisResult | null;
  journey: JourneyPlan | null;
  progress: ProgressState;
  questHistory: QuestCompletion[];
  trainingProgress: Record<string, TrainingProgramProgress>;
  guestMode: boolean;
  awakeningAccepted: boolean;
  v3Imported: boolean;
  continueAsGuest: () => void;
  acceptAwakening: () => void;
  runDiagnosis: (profile: ProfileInput) => void;
  completeQuestById: (questId: string) => void;
  undoLastQuest: () => void;
  importV3: () => void;
}

export const useSystemStore = create<SystemStore>()(persist((set, get) => ({
  profile: {},
  analysis: null,
  journey: null,
  progress: createInitialProgress(),
  questHistory: [],
  trainingProgress: {},
  guestMode: false,
  awakeningAccepted: false,
  v3Imported: false,
  continueAsGuest: () => set({ guestMode: true }),
  acceptAwakening: () => set({ awakeningAccepted: true }),
  runDiagnosis: (profile) => {
    const analysis = analyzeProfile(profile);
    const journey = buildJourney(analysis);
    set((state) => ({
      profile,
      analysis,
      journey,
      progress: { ...state.progress, stats: { ...state.progress.stats, ...analysis.stats } }
    }));
  },
  completeQuestById: (questId) => {
    const quest = questById(questId);
    if (!quest) return;
    const completedOn = new Date().toISOString().slice(0, 10);
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
  },
  undoLastQuest: () => {
    const [latest, ...rest] = get().questHistory;
    if (!latest) return;
    set((state) => ({
      progress: undoQuest(state.progress, latest),
      questHistory: rest
    }));
  },
  importV3: () => {
    if (typeof window === "undefined") return;
    const migrated = migrateV3LocalState({
      progress: window.localStorage.getItem(V3_STORAGE_KEYS.progress),
      profile: window.localStorage.getItem(V3_STORAGE_KEYS.profile),
      trainingProgress: window.localStorage.getItem(V3_STORAGE_KEYS.trainingProgress),
      chat: window.localStorage.getItem(V3_STORAGE_KEYS.chat),
      onboarding: window.localStorage.getItem(V3_STORAGE_KEYS.onboarding),
      userSettings: window.localStorage.getItem(V3_STORAGE_KEYS.userSettings),
      trainingLogs: window.localStorage.getItem(V3_STORAGE_KEYS.trainingLogs)
    });
    set({
      progress: migrated.progress,
      profile: migrated.profile as ProfileInput,
      analysis: migrated.analysis,
      journey: migrated.journey,
      trainingProgress: migrated.trainingProgress,
      v3Imported: true
    });
  }
}), {
  name: V4_STORAGE_KEYS.progress,
  partialize: (state) => ({
    profile: state.profile,
    analysis: state.analysis,
    journey: state.journey,
    progress: state.progress,
    questHistory: state.questHistory,
    trainingProgress: state.trainingProgress,
    guestMode: state.guestMode,
    awakeningAccepted: state.awakeningAccepted,
    v3Imported: state.v3Imported
  })
}));

export function usePromotion() {
  const progress = useSystemStore((state) => state.progress);
  return useMemo(() => promotionReview(progress), [progress]);
}
