import { rankFromLevel } from "@lookism/core";
import { BodyText, Chip, DisplayText, Panel, StatMeter, SystemScroll } from "../../components/system-view";
import { useMobileSystemStore } from "../../lib/mobile-store";

export default function ReportsTab() {
  const { progress, questHistory, analysis, trainingProgress } = useMobileSystemStore((state) => state);
  const rank = rankFromLevel(progress.level);
  const trainingItems = Object.values(trainingProgress);

  return (
    <SystemScroll>
      <Panel title="Progress Report" tone="blue">
        <DisplayText color={rank.color}>{progress.totalXp}</DisplayText>
        <BodyText muted>XP total · Lv {progress.level} · {rank.label}</BodyText>
        <Chip tone={analysis ? "green" : "red"}>{analysis ? `${analysis.currentCategory} · ${analysis.overall}/100` : "No diagnosis"}</Chip>
      </Panel>

      <Panel title="Stat Growth" tone="purple">
        {Object.entries(progress.stats).map(([key, value]) => <StatMeter key={key} label={key} value={value} color={rank.color} />)}
      </Panel>

      <Panel title="Training Progress" tone="green">
        {trainingItems.length ? trainingItems.map((item) => (
          <BodyText key={item.programKey}>{item.programId} · {item.completedLevelIds.length} levels · {item.xp} XP</BodyText>
        )) : <BodyText muted>No training levels completed yet.</BodyText>}
      </Panel>

      <Panel title="Recent Quest Logs" tone="red">
        {questHistory.slice(0, 12).map((item) => <BodyText key={`${item.questId}-${item.completedOn}`}>{item.completedOn} · {item.title} · +{item.xpReward} XP</BodyText>)}
        {!questHistory.length ? <BodyText muted>No quest logs yet.</BodyText> : null}
      </Panel>

      <Panel title="Diagnosis Blockers" tone="gold">
        {analysis?.blockers.map((item) => <BodyText key={item}>{item}</BodyText>) ?? <BodyText muted>Run diagnosis to show blockers.</BodyText>}
      </Panel>
    </SystemScroll>
  );
}
