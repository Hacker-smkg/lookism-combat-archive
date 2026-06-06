import { coachRequestSchema, coachResponseSchema } from "@lookism/data";
import { NextResponse } from "next/server";

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const ALLOWED = ["promotion_review", "recovery_plan", "quest_focus", "boss_test_ready", "diet_basics", "motivation"] as const;

function fallbackCards() {
  return [
    { title: "Condition", body: "Run or update diagnosis so the System can read your category, blockers, and stat priorities." },
    { title: "Today's Quest", body: "Clear mobility, roadwork, and one technical practice block before chasing intensity." },
    { title: "Recovery", body: "Sleep and joint status decide whether volume goes up. No punishment training." },
    { title: "Next Rank", body: "Rank promotion follows XP, stats, quests, and boss-test readiness only." }
  ] as const;
}

async function callGemini(prompt: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not configured.");
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: "Safe, practical fitness coaching. Lookism labels are fictional motivation only. Return JSON only." }]
      },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.55, maxOutputTokens: 720 }
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error?.message || `Gemini returned HTTP ${response.status}`);
  return data.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text || "").join(" ").trim() || "";
}

function parseModelJson(text: string) {
  const json = text.match(/\{[\s\S]*\}/)?.[0] || "";
  const parsed = JSON.parse(json);
  return coachResponseSchema.parse({
    text: String(parsed.text || "").slice(0, 1200),
    cards: Array.isArray(parsed.cards) ? parsed.cards.slice(0, 4) : fallbackCards(),
    suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions.filter((item: string) => ALLOWED.includes(item as never)).slice(0, 3) : ["quest_focus"],
    model: MODEL,
    source: "v4-next-api-coach"
  });
}

export async function POST(request: Request) {
  try {
    const payload = coachRequestSchema.parse(await request.json());
    const prompt = [
      "You are the System Assistant for a Lookism-inspired training app.",
      "Use these cards exactly: Condition, Today's Quest, Recovery, Next Rank.",
      "Never directly promote rank; explain deterministic blockers from promotionReview.",
      "Return JSON: { text, cards:[{title,body}], suggestions }.",
      `Allowed suggestions: ${ALLOWED.join(", ")}`,
      `Context: ${JSON.stringify(payload).slice(0, 10000)}`
    ].join("\n");
    const text = await callGemini(prompt);
    return NextResponse.json(parseModelJson(text));
  } catch (error) {
    return NextResponse.json({
      text: error instanceof Error ? `Offline coach fallback: ${error.message}` : "Offline coach fallback.",
      cards: fallbackCards(),
      suggestions: ["quest_focus", "promotion_review"],
      model: "offline",
      source: "v4-next-api-fallback"
    }, { status: 200 });
  }
}
