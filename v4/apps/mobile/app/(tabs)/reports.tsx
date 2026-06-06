import { BodyText, DisplayText, Panel, SystemScroll } from "../../components/system-view";
import { useMobileSystemStore } from "../../lib/mobile-store";

export default function ReportsTab() {
  const { progress, questHistory, analysis } = useMobileSystemStore((state) => state);
  return (
    <SystemScroll>
      <Panel title="Reports">
        <DisplayText>{progress.totalXp}</DisplayText>
        <BodyText muted>XP total · Lv {progress.level}</BodyText>
        <BodyText>Diagnosis score: {analysis?.overall ?? "--"}/100</BodyText>
        <BodyText>Logged quests: {questHistory.length}</BodyText>
      </Panel>
      <Panel title="Recent Logs">
        {questHistory.slice(0, 8).map((item) => <BodyText key={`${item.questId}-${item.completedOn}`}>{item.title} · +{item.xpReward} XP</BodyText>)}
        {!questHistory.length ? <BodyText muted>No logs yet.</BodyText> : null}
      </Panel>
    </SystemScroll>
  );
}
