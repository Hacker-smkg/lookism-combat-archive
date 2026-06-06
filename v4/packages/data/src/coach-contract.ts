import { z } from "zod";
import { diagnosisResultSchema, journeyPlanSchema, profileInputSchema, progressStateSchema } from "./schemas";

export const coachCardSchema = z.object({
  title: z.enum(["Condition", "Today's Quest", "Recovery", "Next Rank"]),
  body: z.string().min(1).max(520),
  action: z.string().max(48).optional()
});

export const coachRequestSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().max(1200)
  })).default([]),
  profile: profileInputSchema.partial().optional(),
  analysis: diagnosisResultSchema.optional().nullable(),
  progress: progressStateSchema.optional(),
  journey: journeyPlanSchema.optional().nullable(),
  recentQuestState: z.array(z.unknown()).default([]),
  promotionReview: z.unknown().optional()
});

export const coachResponseSchema = z.object({
  text: z.string(),
  cards: z.array(coachCardSchema),
  suggestions: z.array(z.enum(["promotion_review", "recovery_plan", "quest_focus", "boss_test_ready", "diet_basics", "motivation"])),
  model: z.string(),
  source: z.string()
});

export type CoachRequest = z.infer<typeof coachRequestSchema>;
export type CoachResponse = z.infer<typeof coachResponseSchema>;
