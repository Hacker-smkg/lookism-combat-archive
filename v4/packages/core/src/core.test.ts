import { describe, expect, it } from "vitest";
import { analyzeProfile, buildJourney, completeQuest, createInitialProgress, levelFromXp, promotionReview, questById, rankFromLevel, undoQuest, xpForLevel } from "./index";

describe("Lookism System core", () => {
  it("maps XP to levels and ranks", () => {
    expect(xpForLevel(1)).toBe(0);
    expect(levelFromXp(xpForLevel(21))).toBe(21);
    expect(rankFromLevel(21).label).toBe("Crew Member");
  });

  it("completes and undoes a quest deterministically", () => {
    const quest = questById("daily-skill-reps")!;
    const completed = completeQuest(createInitialProgress(), quest, "2026-06-06");
    expect(completed.totalXp).toBe(90);
    expect(completed.stats.technique).toBe(12);
    const undone = undoQuest(completed, {
      questId: quest.id,
      questType: quest.type,
      title: quest.title,
      xpReward: quest.xpReward,
      statKey: quest.statKey,
      statGain: quest.statGain,
      completedOn: "2026-06-06"
    });
    expect(undone.totalXp).toBe(0);
    expect(undone.stats.technique).toBe(10);
  });

  it("builds a journey from diagnosis", () => {
    const result = analyzeProfile({ age: 25, heightCm: 175, weightKg: 90, maxPushups: 12, mileMinutes: 13 });
    const journey = buildJourney(result);
    expect(result.currentCategory).toContain("Weak Daniel");
    expect(journey.weeklySchedule).toHaveLength(7);
  });

  it("keeps promotion deterministic", () => {
    const review = promotionReview(createInitialProgress());
    expect(review.ready).toBe(false);
    expect(review.requirements[0]).toContain("Reach");
  });
});
