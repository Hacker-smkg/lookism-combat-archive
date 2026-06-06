import { describe, expect, it } from "vitest";
import { migrateV3LocalState, V3_STORAGE_KEYS } from "./migrate-v3";

describe("V3 migration", () => {
  it("converts progress and deduplicates completions", () => {
    const migrated = migrateV3LocalState({
      progress: JSON.stringify({
        totalXp: 255,
        stats: { power: 15, speed: 23, endurance: 18, technique: 26, sense: 20, conviction: 38 },
        completedQuestIds: ["daily-roadwork:2026-06-06", "daily-roadwork:2026-06-06"],
        streak: 1
      }),
      profile: JSON.stringify({ profile: { age: 25, heightCm: 175, weightKg: 90 } }),
      trainingProgress: JSON.stringify({})
    });
    expect(migrated.progress.totalXp).toBe(255);
    expect(migrated.progress.completedQuestIds).toEqual(["daily-roadwork:2026-06-06"]);
    expect(migrated.profile.age).toBe(25);
    expect(V3_STORAGE_KEYS.progress).toBe("lookismSystemProgress:v1");
  });
});
