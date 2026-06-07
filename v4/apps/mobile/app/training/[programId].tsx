import { trainingProgramById } from "@lookism/core";
import { useLocalSearchParams } from "expo-router";
import { BodyText, Chip, DisplayText, Panel, SystemButton, SystemScroll } from "../../components/system-view";
import { useMobileSystemStore } from "../../lib/mobile-store";

export default function TrainingDetailScreen() {
  const { programId } = useLocalSearchParams<{ programId: string }>();
  const program = trainingProgramById(programId);
  const { trainingProgress, completeTrainingLevel, undoTrainingLevel } = useMobileSystemStore((state) => state);
  const progress = program ? trainingProgress[program.id] : null;

  return (
    <SystemScroll>
      <Panel title="Training Detail" tone="blue">
        <DisplayText size={32}>{program?.title ?? "Missing"}</DisplayText>
        <BodyText muted>{program?.subtitle ?? "Program not found."}</BodyText>
        {program ? <Chip tone={program.type === "fighter" ? "red" : program.type === "mastery" ? "purple" : "blue"}>{program.type} · {progress?.xp ?? 0} XP</Chip> : null}
      </Panel>

      {program?.levels.map((level) => {
        const completed = Boolean(progress?.completedLevelIds.includes(level.id));
        return (
          <Panel key={level.id} title={level.label} tone={completed ? "green" : "purple"}>
            <BodyText>{level.weeks}</BodyText>
            <BodyText muted>Schedule: {level.schedule.join(" · ")}</BodyText>
            <BodyText>Precision: {level.precision.join(" · ")}</BodyText>
            <BodyText muted>Mistakes: {level.mistakes.join(" · ")}</BodyText>
            <BodyText>Unlock test: {level.unlockTest}</BodyText>
            <Chip tone={completed ? "green" : "gold"}>{completed ? "Completed" : `+${level.xpReward} XP`}</Chip>
            <SystemButton tone={completed ? "red" : "green"} onPress={() => completed ? undoTrainingLevel(program.id, level.id) : completeTrainingLevel(program.id, level.id)}>
              {completed ? "Undo Level" : "Complete Level"}
            </SystemButton>
          </Panel>
        );
      })}
    </SystemScroll>
  );
}
