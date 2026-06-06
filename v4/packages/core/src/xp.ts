import type { ProgressState, Quest, QuestCompletion, SystemStats } from "./types";
import { rankFromLevel } from "./ranks";

export function defaultSystemStats(): SystemStats {
  return { power: 10, speed: 10, endurance: 10, technique: 10, sense: 10, conviction: 10 };
}

export function xpForLevel(level: number): number {
  const safeLevel = Math.max(1, Math.min(100, Math.floor(level || 1)));
  if (safeLevel <= 1) return 0;
  return Math.floor(125 * (safeLevel - 1) ** 1.42 + (safeLevel - 1) * 55);
}

export function levelFromXp(totalXp: number): number {
  const safeXp = Math.max(0, Math.floor(totalXp || 0));
  for (let level = 100; level >= 1; level -= 1) {
    if (safeXp >= xpForLevel(level)) return level;
  }
  return 1;
}

export function createInitialProgress(): ProgressState {
  return {
    totalXp: 0,
    level: 1,
    stats: defaultSystemStats(),
    completedQuestIds: [],
    streak: 0,
    penaltyDebt: false
  };
}

export function completeQuest(progress: ProgressState, quest: Quest, completedOn = new Date().toISOString().slice(0, 10)): ProgressState {
  const completionKey = `${quest.id}:${completedOn}`;
  if (progress.completedQuestIds.includes(completionKey)) return progress;
  const totalXp = Math.max(0, progress.totalXp + quest.xpReward);
  return {
    ...progress,
    totalXp,
    level: levelFromXp(totalXp),
    stats: {
      ...progress.stats,
      [quest.statKey]: Math.min(100, Math.max(0, (progress.stats[quest.statKey] ?? 0) + quest.statGain))
    },
    completedQuestIds: [...progress.completedQuestIds, completionKey],
    lastActiveDate: completedOn
  };
}

export function undoQuest(progress: ProgressState, completion: QuestCompletion): ProgressState {
  const completionKey = `${completion.questId}:${completion.completedOn}`;
  const totalXp = Math.max(0, progress.totalXp - completion.xpReward);
  return {
    ...progress,
    totalXp,
    level: levelFromXp(totalXp),
    stats: {
      ...progress.stats,
      [completion.statKey]: Math.max(0, (progress.stats[completion.statKey] ?? 0) - completion.statGain)
    },
    completedQuestIds: progress.completedQuestIds.filter((id) => id !== completionKey)
  };
}

export function currentRankLabel(progress: ProgressState): string {
  return rankFromLevel(progress.level).label;
}
