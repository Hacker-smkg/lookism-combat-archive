"use client";

import { QUEST_CATALOG, currentRankLabel, rankFromLevel } from "@lookism/core";
import { SystemPanel } from "../../components/system-panel";
import { usePromotion, useSystemStore } from "../../lib/system-store";

export default function SystemPage() {
  const { progress, analysis, journey, completeQuestById, undoLastQuest, questHistory } = useSystemStore((state) => state);
  const rank = rankFromLevel(progress.level);
  const review = usePromotion();
  const quests = journey?.questFocus?.length ? QUEST_CATALOG.filter((quest) => journey.questFocus.includes(quest.id)) : QUEST_CATALOG.slice(0, 4);

  return (
    <main className="page">
      <div className="grid three">
        <SystemPanel title="Level" tone="blue"><div className="metric">{progress.level}</div><p>{currentRankLabel(progress)}</p></SystemPanel>
        <SystemPanel title="XP"><div className="metric">{progress.totalXp}</div><p className="muted">Guest/local first, cloud after login.</p></SystemPanel>
        <SystemPanel title="Next Rank" tone="purple"><h2>{review.nextRank}</h2><p className="muted">{review.ready ? "Promotion ready" : review.requirements.join(" · ")}</p></SystemPanel>
      </div>
      <div className="grid two" style={{ marginTop: "1rem" }}>
        <SystemPanel title="Current Form / 현재 폼" tone="blue">
          <h1 className="headline" style={{ color: rank.color }}>{rank.label}</h1>
          <p className="muted">{analysis ? `${analysis.currentCategory} · Score ${analysis.overall}/100` : "Run Diagnosis to personalize your climb."}</p>
        </SystemPanel>
        <SystemPanel title="Status Window / 스탯">
          {Object.entries(progress.stats).map(([key, value]) => (
            <div className="stat-row" key={key}>
              <strong>{key.toUpperCase()} · {value}</strong>
              <div className="bar" style={{ "--value": `${value}%`, "--accent": rank.color } as React.CSSProperties}><span /></div>
            </div>
          ))}
        </SystemPanel>
      </div>
      <SystemPanel title="Today’s Quests / 일일 퀘스트" tone="red">
        <div className="grid">
          {quests.map((quest) => (
            <div className="quest" key={quest.id}>
              <div>
                <strong>{quest.title}</strong>
                <p className="muted">{quest.description} · +{quest.xpReward} XP</p>
              </div>
              <button className="action" onClick={() => completeQuestById(quest.id)}>Complete</button>
            </div>
          ))}
        </div>
        <div className="actions">
          <button className="ghost-action" onClick={undoLastQuest} disabled={!questHistory.length}>Undo Last Quest</button>
        </div>
      </SystemPanel>
    </main>
  );
}
