import { QUEST_CATALOG, currentRankLabel, rankFromLevel } from "@lookism/core";
import { Pressable, Text, View } from "react-native";
import { BodyText, DisplayText, Panel, SystemScroll, mobileColors } from "../../components/system-view";
import { useMobilePromotion, useMobileSystemStore } from "../../lib/mobile-store";

export default function SystemTab() {
  const { progress, analysis, journey, completeQuestById, undoLastQuest, questHistory } = useMobileSystemStore((state) => state);
  const rank = rankFromLevel(progress.level);
  const review = useMobilePromotion();
  const quests = journey?.questFocus?.length ? QUEST_CATALOG.filter((quest) => journey.questFocus.includes(quest.id)) : QUEST_CATALOG.slice(0, 4);
  return (
    <SystemScroll>
      <Panel title="Current Form">
        <DisplayText color={rank.color}>{currentRankLabel(progress)}</DisplayText>
        <BodyText muted>Lv {progress.level} · {progress.totalXp} XP · {analysis?.currentCategory ?? "No diagnosis yet"}</BodyText>
      </Panel>
      <Panel title="Status Window">
        {Object.entries(progress.stats).map(([key, value]) => (
          <View key={key} style={{ gap: 6 }}>
            <BodyText>{key.toUpperCase()} · {value}</BodyText>
            <View style={{ height: 6, backgroundColor: "rgba(148,163,184,0.18)" }}>
              <View style={{ height: 6, width: `${value}%`, backgroundColor: rank.color }} />
            </View>
          </View>
        ))}
      </Panel>
      <Panel title="Today’s Quest">
        {quests.map((quest) => (
          <Pressable key={quest.id} onPress={() => completeQuestById(quest.id)} style={{ borderColor: mobileColors.border, borderWidth: 1, padding: 12, gap: 4 }}>
            <BodyText>{quest.title}</BodyText>
            <BodyText muted>+{quest.xpReward} XP · {quest.description}</BodyText>
          </Pressable>
        ))}
        <Pressable onPress={undoLastQuest} disabled={!questHistory.length} style={{ borderColor: mobileColors.red, borderWidth: 1, padding: 12, opacity: questHistory.length ? 1 : 0.45 }}>
          <Text selectable style={{ color: mobileColors.text, textAlign: "center" }}>UNDO LAST QUEST</Text>
        </Pressable>
      </Panel>
      <Panel title="Next Rank">
        <BodyText>{review.nextRank}</BodyText>
        <BodyText muted>{review.ready ? "Ready" : review.requirements.join(" · ")}</BodyText>
      </Panel>
    </SystemScroll>
  );
}
