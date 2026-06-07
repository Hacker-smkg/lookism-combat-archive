import { QUEST_CATALOG, currentRankLabel, rankFromLevel } from "@lookism/core";
import { Link } from "expo-router";
import { BodyText, Chip, DisplayText, Panel, StatMeter, SystemButton, SystemScroll, mobileColors } from "../../components/system-view";
import { useMobilePromotion, useMobileSystemStore } from "../../lib/mobile-store";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default function SystemTab() {
  const { progress, analysis, journey, completeQuestById, undoLastQuest, questHistory, cloudStatus, cloudMessage } = useMobileSystemStore((state) => state);
  const rank = rankFromLevel(progress.level);
  const review = useMobilePromotion();
  const quests = journey?.questFocus?.length ? QUEST_CATALOG.filter((quest) => journey.questFocus.includes(quest.id)) : QUEST_CATALOG.slice(0, 4);
  const today = todayKey();

  return (
    <SystemScroll>
      <Panel title="Current Form" tone="blue">
        <DisplayText color={rank.color} size={40}>{currentRankLabel(progress)}</DisplayText>
        <BodyText muted>Lv {progress.level} · {progress.totalXp} XP · {analysis?.currentCategory ?? "No diagnosis yet"}</BodyText>
        <Chip tone={cloudStatus === "error" ? "red" : cloudStatus === "signed-in" ? "green" : "blue"}>{cloudStatus}</Chip>
      </Panel>

      <Panel title="Status Window" tone="purple">
        {Object.entries(progress.stats).map(([key, value]) => (
          <StatMeter key={key} label={key} value={value} color={rank.color} />
        ))}
      </Panel>

      <Panel title="Today’s Quest" tone="red">
        {quests.map((quest) => {
          const cleared = progress.completedQuestIds.includes(`${quest.id}:${today}`);
          return (
            <SystemButton key={quest.id} tone={cleared ? "green" : quest.type === "weekly" ? "purple" : "blue"} onPress={() => completeQuestById(quest.id)} disabled={cleared}>
              {cleared ? "Cleared" : `+${quest.xpReward} XP`} · {quest.title}
            </SystemButton>
          );
        })}
        <BodyText muted>{quests[0]?.safety ?? "Progressive training only."}</BodyText>
        <SystemButton tone="red" onPress={undoLastQuest} disabled={!questHistory.length}>Undo Last Quest</SystemButton>
      </Panel>

      <Panel title="Journey" tone="green">
        <BodyText>{journey ? `${journey.currentCategory} → ${journey.nextCategory}` : "Run diagnosis to generate your climb."}</BodyText>
        <BodyText muted>{journey ? `Mastery: ${journey.recommendedMastery} · Art: ${journey.recommendedArt}` : "The System needs your body data first."}</BodyText>
        {journey?.weeklySchedule.slice(0, 4).map((day) => <BodyText key={day}>{day}</BodyText>)}
        <Link href="/diagnosis" asChild>
          <SystemButton tone="purple">{analysis ? "Update Diagnosis" : "Start Diagnosis"}</SystemButton>
        </Link>
      </Panel>

      <Panel title="Next Rank" tone="gold">
        <BodyText>{review.currentRank} → {review.nextRank}</BodyText>
        <BodyText muted>{review.ready ? "Ready for promotion review." : review.requirements.join(" · ")}</BodyText>
        <BodyText muted>{cloudMessage}</BodyText>
        <Link href="/chat" asChild>
          <SystemButton tone="blue">Ask System Assistant</SystemButton>
        </Link>
      </Panel>
    </SystemScroll>
  );
}
