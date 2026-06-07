import { TRAINING_PROGRAMS } from "@lookism/core";
import { Link } from "expo-router";
import { BodyText, Chip, DisplayText, Panel, SystemButton, SystemScroll, mobileColors } from "../../components/system-view";
import { useMobileSystemStore } from "../../lib/mobile-store";

const typeTone = {
  art: "blue",
  mastery: "purple",
  fighter: "red"
} as const;

export default function TrainTab() {
  const trainingProgress = useMobileSystemStore((state) => state.trainingProgress);
  const groups = [
    ["art", "Martial Arts"],
    ["mastery", "Mastery Fields"],
    ["fighter", "Fighter Types"]
  ] as const;

  return (
    <SystemScroll>
      <Panel title="Training Hub" tone="blue">
        <DisplayText>Train</DisplayText>
        <BodyText muted>Every program has six levels from Very Beginner to mastery. Completing levels gives XP and stat growth.</BodyText>
      </Panel>

      {groups.map(([type, title]) => (
        <Panel key={type} title={title} tone={typeTone[type]}>
          {TRAINING_PROGRAMS.filter((program) => program.type === type).map((program) => {
            const progress = trainingProgress[program.id];
            const completed = progress?.completedLevelIds.length ?? 0;
            const total = program.levels.length;
            return (
              <Link key={program.id} href={`/training/${program.id}`} asChild>
                <SystemButton tone={typeTone[type]}>
                  {program.title} · {completed}/{total}
                </SystemButton>
              </Link>
            );
          })}
        </Panel>
      ))}

      <Panel title="Progress Snapshot" tone="green">
        {Object.values(trainingProgress).length ? (
          Object.values(trainingProgress).slice(0, 8).map((item) => (
            <Chip key={item.programKey} tone="green">{item.programId} · {item.xp} XP</Chip>
          ))
        ) : (
          <BodyText muted>No style levels cleared yet. Open one program and complete the first clean block.</BodyText>
        )}
        <BodyText muted>Training level XP is separate from daily quests but still feeds your total System level.</BodyText>
      </Panel>
    </SystemScroll>
  );
}
