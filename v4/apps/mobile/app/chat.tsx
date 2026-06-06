import { useState } from "react";
import { Pressable, Text } from "react-native";
import { BodyText, Panel, SystemScroll, mobileColors } from "../components/system-view";
import { useMobilePromotion, useMobileSystemStore } from "../lib/mobile-store";

export default function ChatScreen() {
  const [reply, setReply] = useState("Ask for your Condition, Today's Quest, Recovery, and Next Rank.");
  const [loading, setLoading] = useState(false);
  const { profile, analysis, progress, journey } = useMobileSystemStore((state) => state);
  const review = useMobilePromotion();

  async function askCoach() {
    setLoading(true);
    try {
      const endpoint = process.env.EXPO_PUBLIC_COACH_API_URL || "http://localhost:3000/api/coach";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: "Briefly coach me for today." }], profile, analysis, progress, journey, promotionReview: review })
      });
      const data = await response.json();
      setReply(data.text || "No coach response text.");
    } catch (error) {
      setReply(error instanceof Error ? error.message : "Coach unavailable.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SystemScroll>
      <Panel title="System Assistant">
        <BodyText>{reply}</BodyText>
        <Pressable onPress={askCoach} style={{ borderColor: mobileColors.blue, borderWidth: 1, padding: 14, opacity: loading ? 0.55 : 1 }}>
          <Text selectable style={{ color: mobileColors.text, textAlign: "center" }}>{loading ? "THINKING..." : "ASK COACH"}</Text>
        </Pressable>
      </Panel>
    </SystemScroll>
  );
}
