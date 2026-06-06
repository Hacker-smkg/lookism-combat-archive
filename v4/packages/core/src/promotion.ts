import type { ProgressState, PromotionReview } from "./types";
import { LEVEL_RANKS, rankFromLevel } from "./ranks";

export function promotionReview(progress: ProgressState): PromotionReview {
  const current = rankFromLevel(progress.level);
  const next = LEVEL_RANKS.find((rank) => rank.minLevel > current.maxLevel);
  const statValues = Object.values(progress.stats);
  const statAverage = Math.round(statValues.reduce((sum, value) => sum + value, 0) / statValues.length);
  const requirements: string[] = [];

  if (!next) {
    return { currentRank: current.label, nextRank: "Max Rank", ready: true, statAverage, requirements: [] };
  }

  if (progress.level < next.minLevel) requirements.push(`Reach Lv ${next.minLevel}`);
  if (statAverage < Math.min(85, next.minLevel)) requirements.push(`Raise average System stat to ${Math.min(85, next.minLevel)}`);
  if (progress.completedQuestIds.length < next.minLevel) requirements.push("Log more verified quests");
  if (progress.penaltyDebt) requirements.push("Clear recovery debt");

  return {
    currentRank: current.label,
    nextRank: next.label,
    ready: requirements.length === 0,
    statAverage,
    requirements
  };
}
