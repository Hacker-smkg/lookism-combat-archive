"use client";

import { SystemPanel } from "../../components/system-panel";
import { useSystemStore } from "../../lib/system-store";

export default function ReportsPage() {
  const { progress, questHistory, analysis } = useSystemStore((state) => state);
  return (
    <main className="page">
      <SystemPanel title="Progress Reports / 리포트" tone="purple">
        <div className="grid three">
          <div className="panel"><strong>XP</strong><div className="metric">{progress.totalXp}</div></div>
          <div className="panel"><strong>Logged Quests</strong><div className="metric">{questHistory.length}</div></div>
          <div className="panel"><strong>Diagnosis</strong><div className="metric">{analysis?.overall ?? "--"}</div></div>
        </div>
      </SystemPanel>
      <SystemPanel title="Recent Quest Log">
        <div className="grid">
          {questHistory.length ? questHistory.slice(0, 10).map((item) => (
            <div className="report-row" key={`${item.questId}-${item.completedOn}`}>
              <span>{item.title}</span>
              <span className="muted">+{item.xpReward} XP · {item.completedOn}</span>
            </div>
          )) : <p className="muted">No V4 quest logs yet.</p>}
        </div>
      </SystemPanel>
    </main>
  );
}
