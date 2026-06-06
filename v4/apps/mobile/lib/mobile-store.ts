import "expo-sqlite/localStorage/install";
import { analyzeProfile, buildJourney, completeQuest, createInitialProgress, promotionReview, questById, undoQuest, type DiagnosisResult, type JourneyPlan, type ProfileInput, type ProgressState, type QuestCompletion } from "@lookism/core";
import { V4_STORAGE_KEYS } from "@lookism/data";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface MobileSystemStore {
  profile: ProfileInput;
  analysis: DiagnosisResult | null;
  journey: JourneyPlan | null;
  progress: ProgressState;
  questHistory: QuestCompletion[];
  awakeningAccepted: boolean;
  acceptAwakening: () => void;
  runDiagnosis: (profile: ProfileInput) => void;
  completeQuestById: (questId: string) => void;
  undoLastQuest: () => void;
}

export const useMobileSystemStore = create<MobileSystemStore>()(persist((set, get) => ({
  profile: {},
  analysis: null,
  journey: null,
  progress: createInitialProgress(),
  questHistory: [],
  awakeningAccepted: false,
  acceptAwakening: () => set({ awakeningAccepted: true }),
  runDiagnosis: (profile) => {
    const analysis = analyzeProfile(profile);
    set((state) => ({ profile, analysis, journey: buildJourney(analysis), progress: { ...state.progress, stats: { ...state.progress.stats, ...analysis.stats } } }));
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
    set((state) => ({ progress: undoQuest(state.progress, latest), questHistory: rest }));
  }
}), {
  name: V4_STORAGE_KEYS.progress,
  storage: createJSONStorage(() => localStorage)
}));

export function useMobilePromotion() {
  return useMobileSystemStore((state) => promotionReview(state.progress));
}
