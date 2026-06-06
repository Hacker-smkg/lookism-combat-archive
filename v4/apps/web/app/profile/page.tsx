"use client";

import { useMutation } from "@tanstack/react-query";
import { SystemPanel } from "../../components/system-panel";
import { usePromotion, useSystemStore } from "../../lib/system-store";

export default function ProfilePage() {
  const { profile, analysis, progress, journey } = useSystemStore((state) => state);
  const review = usePromotion();
  const coach = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Give me my current condition and next quest." }],
          profile,
          analysis,
          progress,
          journey,
          promotionReview: review
        })
      });
      if (!response.ok) throw new Error("Coach request failed");
      return response.json() as Promise<{ text: string; cards: { title: string; body: string }[]; source: string }>;
    }
  });

  return (
    <main className="page">
      <div className="grid two">
        <SystemPanel title="Account / 저장" tone="blue">
          <h1>Profile Summary</h1>
          <p className="muted">V4 MVP supports guest/local now and Supabase sync through the shared adapter layer.</p>
          <pre className="panel">{JSON.stringify({ profile, analysis: analysis?.currentCategory, level: progress.level }, null, 2)}</pre>
        </SystemPanel>
        <SystemPanel title="System Assistant / AI" tone="purple">
          <p>{coach.data?.text ?? "Ask the coach for Condition, Today’s Quest, Recovery, and Next Rank cards."}</p>
          <div className="actions">
            <button className="action" onClick={() => coach.mutate()} disabled={coach.isPending}>{coach.isPending ? "Thinking..." : "Ask Coach"}</button>
          </div>
          {coach.data?.cards?.map((card) => (
            <div className="panel" key={card.title} style={{ marginTop: "0.8rem" }}>
              <strong>{card.title}</strong>
              <p className="muted">{card.body}</p>
            </div>
          ))}
        </SystemPanel>
      </div>
    </main>
  );
}
