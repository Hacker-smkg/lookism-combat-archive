import { coachResponseSchema, type CoachMessage, type CoachResponse } from "@lookism/data";
import { useState } from "react";
import { BodyText, Field, Panel, SystemButton, SystemScroll } from "../components/system-view";
import { getMobileCoachApiUrl, getMobileSupabaseClient } from "../lib/mobile-supabase";
import { useMobilePromotion, useMobileSystemStore } from "../lib/mobile-store";

const fallbackCards: CoachResponse["cards"] = [
  { title: "Condition", body: "Run diagnosis or keep your latest stats updated so the System can read your category accurately." },
  { title: "Today's Quest", body: "Clear mobility, one base conditioning block, and one technical practice block." },
  { title: "Recovery", body: "Sleep and joint status decide whether intensity goes up. No punishment training." },
  { title: "Next Rank", body: "Promotion follows XP, stat averages, quests, and boss-test readiness only." }
];

function newCoachMessage(role: CoachMessage["role"], content: string, suggestions: string[] = []): CoachMessage {
  return {
    id: `${Date.now()}-${role}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
    createdAt: new Date().toISOString(),
    suggestions
  };
}

async function saveCloudChat(userId: string | null, message: CoachMessage, context: Record<string, unknown>) {
  if (!userId) return;
  const client = getMobileSupabaseClient();
  if (!client) return;
  await client.from("chat_messages").insert({
    user_id: userId,
    role: message.role,
    content: message.content,
    context_snapshot: context,
    suggestions: message.suggestions
  });
}

export default function ChatScreen() {
  const [prompt, setPrompt] = useState("Briefly coach me for today.");
  const [reply, setReply] = useState("Ask for your Condition, Today's Quest, Recovery, and Next Rank.");
  const [cards, setCards] = useState<CoachResponse["cards"]>(fallbackCards);
  const [loading, setLoading] = useState(false);
  const store = useMobileSystemStore((state) => state);
  const review = useMobilePromotion();

  async function askCoach() {
    const content = prompt.trim() || "Briefly coach me for today.";
    const userMessage = newCoachMessage("user", content);
    store.appendCoachMessage(userMessage);
    setLoading(true);
    try {
      const endpoint = getMobileCoachApiUrl();
      const context = {
        level: store.progress.level,
        totalXp: store.progress.totalXp,
        analysis: store.analysis?.currentCategory,
        nextRank: review.nextRank
      };
      await saveCloudChat(store.userId, userMessage, context);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...store.coachMessages.slice(-6).map((message) => ({ role: message.role, content: message.content })), { role: "user", content }],
          profile: store.profile,
          analysis: store.analysis,
          progress: store.progress,
          journey: store.journey,
          recentQuestState: store.questHistory.slice(0, 8),
          promotionReview: review
        })
      });
      const raw = await response.json();
      const parsed = coachResponseSchema.parse(raw);
      setReply(parsed.text);
      setCards(parsed.cards.length ? parsed.cards : fallbackCards);
      const assistantMessage = newCoachMessage("assistant", parsed.text, parsed.suggestions);
      store.appendCoachMessage(assistantMessage);
      await saveCloudChat(store.userId, assistantMessage, { ...context, source: parsed.source, model: parsed.model });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Coach unavailable.";
      setReply(`Offline coach fallback: ${message}`);
      setCards(fallbackCards);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SystemScroll>
      <Panel title="System Assistant" tone="purple">
        <BodyText>{reply}</BodyText>
        <Field label="Ask the System" value={prompt} onChangeText={setPrompt} multiline />
        <SystemButton tone="blue" onPress={askCoach} disabled={loading}>{loading ? "Thinking..." : "Ask Coach"}</SystemButton>
      </Panel>

      {cards.map((card) => (
        <Panel key={card.title} title={card.title} tone={card.title === "Recovery" ? "green" : card.title === "Next Rank" ? "gold" : "blue"}>
          <BodyText>{card.body}</BodyText>
          {card.action ? <BodyText muted>{card.action}</BodyText> : null}
        </Panel>
      ))}

      <Panel title="Recent Chat" tone="red">
        {store.coachMessages.slice(-6).map((message) => (
          <BodyText key={message.id} muted={message.role === "assistant"}>{message.role.toUpperCase()}: {message.content}</BodyText>
        ))}
      </Panel>
    </SystemScroll>
  );
}
